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

- Most of the Path Tools are not true 3D tools but only 2.5D capable. This means that they take a fixed 2D shape and can cut it down to a given depth. However, there are two tools which produce true 3D paths: ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3123770d-69d5-4173-ae68-dd095af3251f) [3D Pocket](https://wiki.freecad.org/Path_Pocket_3D) and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c077b3dd-1da9-4b4a-b8b1-6bc80e50c4af) [3D Surface](https://wiki.freecad.org/Path_Surface) (which is still an [experimental feature](https://wiki.freecad.org/Path_experimental) as of November 2020).
- Most of Path workbench is designed for a simple, standard 3-axis (xyz) CNC mill/router, but lathe tools are under development in 0.19_pre.
- Most operations in Path workbench will return paths based on a standard endmill tool/bit only, regardless of the tool/bit type assigned in a given tool controller with the exception of the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b180af1b-4197-49a4-91a4-701e2810974b) [Engrave](https://wiki.freecad.org/Path_Engrave) and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dcb2f545-93b0-46e8-adf8-29a7aa9a221a) [3D Surface](https://wiki.freecad.org/Path_Surface) operations.
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

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9ec0d031-1b99-453c-98a0-03cd72922300)  
_Visual reference for Depth properties (settings)_  

## Commands

Some commands are experimental and not available by default. To enable them see [Path experimental](https://wiki.freecad.org/Path_experimental).

### Project Commands

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/48a1a4e7-3d81-4161-8c04-943cf477e762) [Job](https://wiki.freecad.org/Path_Job): Creates a new CNC job.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5f6c20c0-1cdf-43d2-95c5-3807d1d66c23) [Post Process](https://wiki.freecad.org/Path_Post): Exports a project to G-code.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/00008ce3-3767-4c4b-b864-5bd9a770a266) [Check the path job for common errors](https://wiki.freecad.org/Path_Sanity): Checks the selected job for missing values.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1e49702b-422d-4f2c-9fb6-3ebfdbab3e6e) [Export Template](https://wiki.freecad.org/Path_ExportTemplate): Export the current job as a template.

### Tool Commands

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3381aa4a-2168-476c-bf5a-74ff44d56a0c) [Inspect Path Commands](https://wiki.freecad.org/Path_Inspect): Shows the G-code for checking.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0f8afcf1-3282-493c-9b91-78b7a4dd38bb) [CAM Simulator](https://wiki.freecad.org/Path_Simulator): Shows the milling operation like it's done on the machine.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0eab8df7-171e-446d-9909-082902c5bf78) [Finish Selecting Loop](https://wiki.freecad.org/Path_SelectLoop): Completes a loop from two selected edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/743217c3-7730-48ec-a4ad-0e814fbba3a2) [Toggle the Active State of the Operation](https://wiki.freecad.org/Path_OpActiveToggle): Activates or de-activates a path operation.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c302d7f9-930f-4b8a-9ba1-33118ff33f80) [ToolBit Library editor](https://wiki.freecad.org/Path_ToolBitLibraryOpen): Opens an editor to manage ToolBit libraries.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1055bf0e-e929-4e94-a120-0de950f0167f) [ToolBit Dock](https://wiki.freecad.org/Path_ToolBitDock): Toggles the ToolBit Dock.

### Basic Operations

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cc92d3f0-00a7-4595-9a86-6d4fbe8789f8) [Profile](https://wiki.freecad.org/Path_Profile): Creates a profile operation of the entire model, or from one or more selected faces or edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5025a602-e676-4b94-a6a2-5afad5b27542) [Pocket Shape](https://wiki.freecad.org/Path_Pocket_Shape): Creates a pocketing operation from one or more selected pocket(s).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d724aa64-25a2-4c95-b70a-a50a181322c7) [Drilling](https://wiki.freecad.org/Path_Drilling): Performs a drilling cycle.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0521bfab-a23d-4994-aa9e-b301fc8eca69) [Face](https://wiki.freecad.org/Path_MillFace): Creates a surfacing path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b159a738-4bea-4f29-a16f-13a2ee87e395) [Helix](https://wiki.freecad.org/Path_Helix): Creates a helical path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/902def1f-5de9-45a4-b69d-07deb9bd9cf7) [Adaptive](https://wiki.freecad.org/Path_Adaptive): Creates an adaptive clearing and profiling operation.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/041ed2ca-a2f8-4c00-9d4b-8bbb27502990) [Slot](https://wiki.freecad.org/Path_Slot): Creates a slotting operation from selected features or custom points. _[Experimental](https://wiki.freecad.org/Path_experimental)_
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7007d479-3d39-4bfd-ba67-1b736fa8bbd5) [Engrave](https://wiki.freecad.org/Path_Engrave): Creates an engraving path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7a9195b6-37ad-47bb-be94-e618b4c8cbd8) [Deburr](https://wiki.freecad.org/Path_Deburr): Creates a deburr path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ee840d3d-1c50-4f8f-b301-fee26b1787fa) [Vcarve](https://wiki.freecad.org/Path_Vcarve): Creates an engraving path using a V tool shape.

### 3D Operations

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/167097ea-3b3e-4f77-b4f8-2a0099d8bc0f) [3D Pocket](https://wiki.freecad.org/Path_Pocket_3D): Creates a path for a 3D pocket.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0894c468-9565-4cbd-9626-c92e3ca63b01) [3D Surface](https://wiki.freecad.org/Path_Surface): Creates a path for a 3D surface. _[Experimental](https://wiki.freecad.org/Path_experimental)_
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aecf421e-280d-4cae-a5dc-d5cd9d71b173) [Waterline](https://wiki.freecad.org/Path_Waterline): Creates a waterline path for a 3D surface. _[Experimental](https://wiki.freecad.org/Path_experimental)_

### Path Dressup

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c62a64ad-d963-4f6b-af29-d93d64282898) [Axis Map](https://wiki.freecad.org/Path_DressupAxisMap): Remaps one axis to another.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dcffb01a-1e6d-41ad-a2c8-cf6f337c230e) [Boundary](https://wiki.freecad.org/Path_DressupPathBoundary): Adds a boundary dressup modification to a selected path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2ac7ff08-70d2-4a75-b01c-9af53663bbda) [Dogbone](https://wiki.freecad.org/Path_DressupDogbone): Adds a dogbone dressup modification to a selected path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dd9a18ad-560a-43dd-b117-9525561eb648) [DragKnife](https://wiki.freecad.org/Path_DressupDragKnife): Adds a dragknife dressup modification to a selected path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6aa0fc08-3d89-43a2-8ec6-6b26cf545cef) [LeadInOut](https://wiki.freecad.org/Path_DressupLeadInOut): Adds a lead-in and/or lead-out point to a selected path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cd72a7de-47aa-4ed3-86b8-d2c96ef207c1) [RampEntry](https://wiki.freecad.org/Path_DressupRampEntry): Adds ramp entry dressup modification to a selected path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8688f170-a89a-4cb9-8104-52eac61f5eee) [Tag](https://wiki.freecad.org/Path_DressupTag): Adds a holding tag dressup modification to a selected path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cd1686eb-c49a-4fa2-a2a4-a4fbd0d65509) [Z Depth Correction](https://wiki.freecad.org/Path_DressupZCorrect): Corrects the Z depth using Probe Map.

### Supplemental Commands

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8d069f29-32cd-4ffe-85f1-fc209bfb7c49) [Fixture](https://wiki.freecad.org/Path_Fixture): Changes the fixture position.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/46e155fb-1066-43e2-99c3-8d9b6d3ec0e4) [Comment](https://wiki.freecad.org/Path_Comment): Inserts a comment in the G-code of a path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7aa12ebb-e886-4d9d-828c-6faa097bd6da) [Stop](https://wiki.freecad.org/Path_Stop): Inserts a full stop of the machine.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a3100c83-caef-4f28-932b-005d4c2e458f) [Custom](https://wiki.freecad.org/Path_Custom): Inserts custom G-code.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8a25664c-0685-4a30-a32b-9d320fa02c0c) [Probe](https://wiki.freecad.org/Path_Probe): Creates a Probing Grid from a job stock.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c6018b35-4e31-492c-98ee-a1f6ffc54cc3) [From Shape](https://wiki.freecad.org/Path_Shape): Creates a path object from a selected Part object. _[Experimental](https://wiki.freecad.org/Path_experimental)_

### Path Modification

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c5308fd6-eadd-4f26-b09b-863ebf4205de) [Copy the operation in the job](https://wiki.freecad.org/Path_Copy): Creates a parametric Copy of a selected path object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/73451dbc-2693-4ea3-a2a7-20e0575943c0) [Array](https://wiki.freecad.org/Path_Array): Creates an array by duplicating a selected path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e3c5ef85-5c4a-4ccf-aed7-3c5af88afeae) [Simple Copy](https://wiki.freecad.org/Path_SimpleCopy): Creates a non-parametric copy of a selected path object.

### Specialty Operations

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7de8e165-0254-450d-a270-5516930bae2b) [Thread Milling](https://wiki.freecad.org/Path_ThreadMilling): Creates a Path Thread Milling operation from features of a base object. _[Experimental](https://wiki.freecad.org/Path_experimental)_

### Miscellaneous

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/13bf7e9e-3e53-47e3-a392-57f48eb34703) [Area](https://wiki.freecad.org/Path_Area): Creates a feature area from selected objects. _[Experimental](https://wiki.freecad.org/Path_experimental)_
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a278fc5c-b28c-46a3-8572-5a03dc9f520f) [Area workplane](https://wiki.freecad.org/Path_Area_Workplane): Creates a feature area workplane. _[Experimental](https://wiki.freecad.org/Path_experimental)_

### Obsolete

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7b989822-f285-494a-b8de-7c5394771f03) [Tool Manager](https://wiki.freecad.org/Path_ToolLibraryEdit): Edit the Tool Manager. 'Legacy' tool system. version 0.18 and below

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

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3b430d92-42f8-4fb3-ba40-43a9ec8dcd0c) [Preferences](https://wiki.freecad.org/Path_Preferences): Preferences available for the Path Workbench.

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
