# Path Workbench

## Introduction

The ![Path Workbench](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa356039-5364-447b-8dbd-a1c453ccfd39) **Path Workbench** is used to produce machine instructions for [CNC machines](https://en.wikipedia.org/wiki/CNC_router) from a FreeCAD 3D model.  
These produce real-world 3D objects on CNC machines such as mills, lathes, lasercutters, or similar. Typically, instructions are a [G-code](https://en.wikipedia.org/wiki/G-code) dialect. A [general CNC lathe tool path sequence simulation example](https://www.ange-softs.com/SIMULCNCHTML/index.html) is presented here.  

![Path workbench icon](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a1a7fca2-36b8-499e-b3d7-ca2148208b1f)  
_Path workbench icon_

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b3440b46-fed4-4eea-8614-25712ef49a72)  

The FreeCAD Path Workbench workflow creates these machine instructions as follows:
- A 3D model is the base object, typically created using one or more of the ![Part Design](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dab85565-79a7-4f3f-872f-d8780766e494) [Part Design](docs\workbenches\part-design.md), ![Part](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d11caee2-6e7d-4876-8027-4b15d23240f3) [Part](docs\workbenches\part.md), or ![Draft](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/46b28278-d6af-4e0b-879c-6f898feb5a08) [Draft](docs\workbenches\draft.md) Workbenches.
- A [Path Job](https://wiki.freecad.org/Path_Job) is created in the Path Workbench. This contains all the information required to generate the necessary G-code to process the Job on a CNC mill: there is Stock material, the mill has a certain [set of tools](https://wiki.freecad.org/Path_ToolLibraryEdit), and it follows certain commands controlling speed and movements (usually G-code).
- [Path Tools](https://wiki.freecad.org/Path_Tools) are selected as required by the Job Operations.
- Milling paths are created using e.g. [Contour](https://wiki.freecad.org/Path_Profile) and [Pocket](https://wiki.freecad.org/Path_Pocket_3D) Operations. These Path objects use internal FreeCAD G-code dialect, independent of the CNC machine.
- Export the job with a G-code, matching to your machine. This step is called _post processing_; there are different post processors available.

## General concepts

The Path Workbench generates G-code defining the paths required to mill the Project represented by the 3D model on the target mill in [the Path Job Operations FreeCAD G-code dialect](https://wiki.freecad.org/Path_scripting#The_FreeCAD_Internal_GCode_Format), which is later translated to the appropriate dialect for the target CNC controller by selecting the appropriate postprocessor.

The G-code is generated from directives and Operations contained in a Path Job. The Job Workflow lists these in the order they will be executed. The list is populated by adding Path Operations, Path Dressups, Path Supplemental Commands, and Path Modifications from the Path Menu, or GUI buttons.

The Path Workbench provides a Tool Manager (Library, Tool-Table), and G-code Inspection, and Simulation tools. It links the Postprocessor, and allows importing and exporting Job Templates.

The Path Workbench has external dependencies including:
1. The FreeCAD 3D model units are defined in the **Edit → Preference → General → Units tab's Units settings**. The Postprocessor configuration defines the final G-code units.
2. The Macro file path, and Geometric tolerances, are defined in the **Edit → Preferences → Path → Job Preferences** tab.
3. Colors are defined in the **Edit → Preferences → Path → Path colors** tab.
4. Holding tag parameters are defined in the **Edit → Preferences → Path → Dressups** tab.
5. That the Base 3D model quality supports the Path workbench requirements, passes Check Geometry.

## Limitations

Some current limitations of which you should be aware are:

- Most of the Path Tools are not true 3D tools but only 2.5D capable. This means that they take a fixed 2D shape and can cut it down to a given depth. However, there are two tools which produce true 3D paths: [3D Pocket](https://wiki.freecad.org/Path_Pocket_3D) and [3D Surface](https://wiki.freecad.org/Path_Surface) (which is still an [experimental feature](https://wiki.freecad.org/Path_experimental) as of November 2020).
- Most of Path workbench is designed for a simple, standard 3-axis (xyz) CNC mill/router, but lathe tools are under development in 0.19_pre.
- Most operations in Path workbench will return paths based on a standard endmill tool/bit only, regardless of the tool/bit type assigned in a given tool controller with the exception of the [Engrave](https://wiki.freecad.org/Path_Engrave) and [3D Surface](https://wiki.freecad.org/Path_Surface) operations.
- The operations within the Path workbench are not aware of clamping mechanisms in use to secure the model to your machine. Consequently, please review and simulate the paths you generate prior to sending the code to your machine. If necessary, model your clamping mechanisms in FreeCAD in order to better inspect the paths generated. Look for possible collisions with clamps or other obstacles along the paths.

## Units

Unit handling in Path can be confusing. There are several points to understand:
1. FreeCAD base units for length and time are 'mm' and 's' respectively. Velocity is thus 'mm/s'. This is what FreeCAD stores internally regardless of anything else
2. The default unit schema uses the default units. If you're using the default schema and you enter a feed rate without a unit string, it will get entered as 'mm/s'
3. Most CNC machines expect feed rate in the form of either 'mm/min' or 'in/min'. Most post-processors will automatically convert the unit when generating gcode.

#### Schemas:

1. Changing schema in preferences changes default unit string for the input fields. If you're a Path user and prefer to design in metric, it's highly recommended that you use the "Metric Small Parts & CNC" schema. If you design in US units, either the Imperial Decimal and Building US will work.
2. Changing your preferred unit schema will have no effect on output but will help avoid input errors

#### Output:

1. Generating the correct unit in output is the responsibility of the post-processor and is done only at that time.
2. Machine output unit is completely unrelated to your selected unit schema.
3. Post-processors produce either metric (G21) output, Imperial (G20) output or are configurable.
4. Configurable post-processors default to metric (G21).
5. If you want your configurable post-processor to output imperial gcode (G20), Set the correct argument in your job output configation (ie --inches for linuxcnc). This can be stored in a job template and set as your default template to make it automatic for all future jobs.
   
#### Path Inspection:

1. If you use the Path Inspect tool to look at g-code, you will see it in 'mm/s' because it is not being post-processed.

## Heights and depths

Many of the commands have various heights and depths:  


_Visual reference for Depth properties (settings)_  

## Commands

Some commands are experimental and not available by default. To enable them see [Path experimental](https://wiki.freecad.org/Path_experimental).

## ToolBit architecture

Manage tools, bits, and the Tool Library. Based on the ToolBit architecture.

- [Path Tools](https://wiki.freecad.org/Path_Tools)
- [Path ToolShape](https://wiki.freecad.org/Path_ToolShape)
- [Path ToolBit](https://wiki.freecad.org/Path_ToolBit)
- [Path ToolBit Library](https://wiki.freecad.org/Path_ToolBit_Library)
- [Path ToolController](https://wiki.freecad.org/Path_ToolController)

## Other

- [Path FAQ](https://wiki.freecad.org/Path_FAQ): The Path Workbench shares many concepts with other CAM software packages but has its own peculiarities. If something seems wrong this is a good place to start.
- [Path SetupSheet](https://wiki.freecad.org/Path_SetupSheet): You can use a SetupSheet to customize how various property values for operations are calculated.
- [Path Postprocessor Customization](https://wiki.freecad.org/Path_Postprocessor_Customization): If you have a special machine which cannot use one of the available post-processors you may need to write your own post-processor.
- [Path fourth axis](https://wiki.freecad.org/Path_fourth_axis): Experimental four axis milling.

## Preferences

- [Preferences](https://wiki.freecad.org/Path_Preferences): Preferences available for the Path Workbench.

## Scripting

See [Path scripting](https://wiki.freecad.org/Path_scripting)

## Tutorials

- [Path Walkthrough for the Impatient](https://wiki.freecad.org/Path_Walkthrough_for_the_Impatient): a quick tutorial to get familiar with Path.

## Videos

- [FreeCAD Path: Custom paths with Python - Part 1 - 5](https://www.youtube.com/playlist?list=PLEuOia-QxyFKgzAeTyH62GKqWKVURiWJL): a playlist with a series of 5 videos in English by sliptonic. This series shows how to work with the **Path Workbench**.
- [FreeCAD CAM Path Workbench](https://www.youtube.com/playlist?list=PLUrr_kHPp4vhGdLlj6IemtF-OPUlRvSTC): a playlist with a series of 7 videos in English by CAD CAM Lessons.
- [FreeCAD CAM CNC](https://www.youtube.com/playlist?list=PLUrr_kHPp4vh2n6DcIlegK4dEKIFjmISJ): a playlist with a series of 8 videos in English by CAD CAM Lessons.

## Roadmap

- [Path Development Roadmap](https://wiki.freecad.org/Path_Development_Roadmap): Read this if you are a developer and want to contribute to Path.
