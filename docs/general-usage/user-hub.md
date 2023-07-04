# User hub

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/220b384d-f361-4df5-b3de-83cde2f35254)  

This is the main help area for newcomers to FreeCAD.

FreeCAD is in continuous development, so there may be missing or outdated information. If you cannot find the information that you need, don't hesitate to ask in the [FreeCAD forum](https://forum.freecadweb.org/).

If you'd like to contribute to FreeCAD, please [donate](https://wiki.freecad.org/Donate), and see the [Help FreeCAD](https://wiki.freecad.org/Help_FreeCAD) page for other ways to contribute. If you'd like to edit this wiki, request a wiki account with editor permissions [in the forum](https://forum.freecadweb.org/viewtopic.php?f=21&t=6830), and read the [WikiPages](https://wiki.freecad.org/WikiPages) for the general guidelines that you should follow.

If you would like to know how FreeCAD started years ago, visit the [History](https://wiki.freecad.org/History) page.

## Using FreeCAD

### Introduction

- [Application Overview](https://wiki.freecad.org/About_FreeCAD): A general overview of FreeCAD.
- Installing: How to install FreeCAD on [Windows](https://wiki.freecad.org/Installing_on_Windows), [Linux](https://wiki.freecad.org/Installing_on_Linux), and [Mac](https://wiki.freecad.org/Installing_on_Mac)
- [Installing help files](https://wiki.freecad.org/Installing_Helpfile): how to install the offline documentation which is based on this wiki.
- [Installing additional components](https://wiki.freecad.org/Installing_additional_components): how to install additional third-party components that can work together with FreeCAD.
- [Getting started](https://wiki.freecad.org/Getting_started): A quick overview of the available tools
- [FAQ](https://wiki.freecad.org/Frequently_asked_questions): Frequently asked questions
- [Tutorials](https://wiki.freecad.org/Tutorials) covering different parts of FreeCAD

### Migrating from other software?

- [Workarounds](https://wiki.freecad.org/Workarounds)
- [Migrating to FreeCAD from Fusion360](https://wiki.freecad.org/Migrating_to_FreeCAD_from_Fusion360)
- [Migrating to FreeCAD from OnShape](https://wiki.freecad.org/Migrating_to_FreeCAD_from_OnShape)
- [Migrating to FreeCAD from SolidWorks](https://wiki.freecad.org/Migrating_to_FreeCAD_from_SolidWorks)
- [Migrating to FreeCAD from Revit](https://wiki.freecad.org/Migrating_to_FreeCAD_from_Revit)
- [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide)
- [BIM applications compatibility table](https://wiki.freecad.org/BIM_application_compatibility_table)

### Basic application

- [Interface](https://wiki.freecad.org/Interface): the FreeCAD interface is composed of various graphical elements on the screen, including the [3D view](https://wiki.freecad.org/3D_view), the [tree view](https://wiki.freecad.org/Tree_view), the [property editor](https://wiki.freecad.org/Property_editor), the [task panel](https://wiki.freecad.org/Task_panel), and the [Python console](https://wiki.freecad.org/Python_console).
- [Mouse navigation](https://wiki.freecad.org/Mouse_navigation): the different types of using the mouse or trackpad to navigate in the 3D view.
- [Selection methods](https://wiki.freecad.org/Selection_methods): the different methods of selecting objects in the software.
- [Objects naming](https://wiki.freecad.org/Object_name): FreeCAD objects have a read-only `Name` that uniquely identifies them, and a `Label` which is user editable.
- [Preferences Editor](https://wiki.freecad.org/Preferences_Editor): the system that allows you to control many properties of the base system and of the individual workbenches.
- [File formats](https://wiki.freecad.org/Import_Export): the different file formats that FreeCAD can read and write.

### Workbenches

Workbenches are collections of tools used for specific tasks. These are the base workbenches bundled with every FreeCAD installation:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b243881f-a823-487b-8439-53dc526a30c5) [Standard tools](https://wiki.freecad.org/Std_Base): These commands and tools are present in all workbenches.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8a52fbaf-dad2-483b-8b8a-69191cfe3a8c) The [Arch Workbench](docs\workbenches\arch.md) for working with architectural elements.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/31e71210-2165-46cc-a4d6-f2caad6e6650) The [Draft Workbench](docs\workbenches\draft.md) contains 2D tools and basic 2D and 3D CAD operations.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/59936efc-b8e0-48c9-b22e-802a174a0796) The [FEM Workbench](docs\workbenches\FEM.md) provides Finite Element Analysis (FEA) workflow.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2a5248fd-a3e9-4ccd-92ba-09148ae0b459) The [Inspection Workbench](https://wiki.freecad.org/Inspection_Workbench)) is made to give you specific tools for examination of shapes. Still in the early stages of development.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f09d54e5-54c2-4fde-be1a-9b24f120c6c6) The [Mesh Workbench](docs\workbenches\mesh.md) for working with triangulated meshes.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8b443542-18e3-4260-891c-3f978816140e) The [OpenSCAD Workbench](docs\workbenches\openSCAD.md) for interoperability with OpenSCAD and repairing [constructive solid geometry](https://wiki.freecad.org/Constructive_solid_geometry) (CSG) model history.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5ac1b319-ae6e-4d62-a042-4e2515b2c61b) The [Part Workbench](docs\workbenches\part.md) for working with geometric primitives and boolean operations.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5e314840-327b-4c35-be4f-a06980f8d16a) The [Part Design Workbench](docs\workbenches\part-design.md) for building Part shapes from sketches.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f9989ef2-da5d-4a59-a642-b66a1149134d) The [Path Workbench](docs\workbenches\path.md) is used to produce G-Code instructions.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/278079e1-73c2-4ec7-907b-dd493771868f) The [Points Workbench for working with point clouds.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a15a1368-c697-40b9-ad00-aa8cad22f448) The [Reverse Engineering Workbench](https://wiki.freecad.org/Reverse_Engineering_Workbench) is intended to provide specific tools to convert shapes/solids/meshes into parametric FreeCAD-compatible features.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6d764236-e5c4-4953-8cf1-08023b9c1a6e) The [Robot Workbench](docs\workbenches\robot.md) for studying robot movements. Currently unmaintained.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d5dcb34e-406e-4bf2-8663-98d29a04c4d3) The [Sketcher Workbench](docs\workbenches\sketcher.md) for working with geometry-constrained sketches.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d8a2d406-5444-4278-a18a-5ac0c31d541a) The [Spreadsheet Workbench](docs\workbenches\spreadsheet.md) for creating and manipulating spreadsheet data.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9e0b272b-142b-4b2a-a317-9bb3c48c3fc1) The [Start Center Workbench](https://wiki.freecad.org/Start_Workbench) allows you to quickly jump to one of the most common workbenches.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/15efde6b-d701-45db-b9ab-94b839f24dbe) The [Surface Workbench](docs\workbenches\surface.md) provides tools to create and modify surfaces. It is similar to the [Part Builder](https://wiki.freecad.org/Part_Builder) Face from edges option.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/352feb1b-6cd3-4506-a043-8f429332a6c0) The [TechDraw Workbench](docs\workbenches\techdraw.md) for producing technical drawings from 3D models.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2db3eb21-c7b8-4d07-a91f-1926ee24c3ca) The [Test Framework Workbench](https://wiki.freecad.org/Testing) is for debugging FreeCAD.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/844ed741-56b0-44a9-a8ec-f0c885ec5109) The [Web Workbench](https://wiki.freecad.org/Web_Workbench) provides you with a browser window instead of the [3D view](https://wiki.freecad.org/3D_view) within FreeCAD.


### Macros

Macros are relatively small snippets of [Python](https://wiki.freecad.org/Python) code that perform a simple or a complex task that is not available in the base FreeCAD system.

Power users have written various [macros](https://wiki.freecad.org/Macros) to enhance FreeCAD with more capabilities.

Since FreeCAD 0.17, many macros can be installed using the [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md). For a list of the macros refer to the [Macros recipes](https://wiki.freecad.org/Macros_recipes) page. For manual installation see [How to install macros](https://wiki.freecad.org/How_to_install_macros).

### External workbenches

When many macros or functions are developed together, and are organized in toolbars and menus, they can become a new workbench.

[External workbenches](https://wiki.freecad.org/External_workbenches) are collections of functions that are not part of the base FreeCAD system, usually developed by experienced users, and targeting a particular need.

Since FreeCAD 0.17, many workbenches can be installed using the [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md). For manual installation see [How to install additional workbenches](https://wiki.freecad.org/How_to_install_additional_workbenches).

## References

- [Commands Reference](https://wiki.freecad.org/List_of_Commands): A complete list of the available FreeCAD commands.

## Online Help

This is the official FreeCAD online help. Please note that the whole online help system is currently being reworked. It will be used to generate a .CHM file, that will be distributed with the binary packages of FreeCAD. At the moment the online help summarizes some of the most complete sections of this wiki.

- [Online help system - Table of Contents](https://wiki.freecad.org/Online_Help_Toc)

## More

- The [Power users hub](https://wiki.freecad.org/Power_users_hub) is the place to go if you would like to see more advanced use of FreeCAD
- The [FreeCAD Community Portal](https://wiki.freecad.org/FreeCAD_Community_Portal) lists projects made by community members around FreeCAD.
- Don't understand a term or phrase as used in FreeCAD? Try the [Glossary](https://wiki.freecad.org/Glossary) page.
