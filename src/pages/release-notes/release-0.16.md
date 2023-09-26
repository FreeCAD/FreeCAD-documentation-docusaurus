# Release 0.16

FreeCAD 0.16 was released on 18 April 2016. Get it from [GitHub](https://github.com/FreeCAD/FreeCAD/releases/tag/0.16). This is a summary of the most interesting changes. The complete list of changes can be found in the [Mantis changelog](http://www.freecadweb.org/tracker/changelog_page.php). 
Older versions at: [0.15](https://wiki.freecad.org/Release_notes_0.15) - [0.14](https://wiki.freecad.org/Release_notes_0.14) - [0.13](https://wiki.freecad.org/Release_notes_0.13) - [0.12](https://wiki.freecad.org/Release_notes_0.12) - [0.11](https://wiki.freecad.org/Release_notes_0.11)

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d627f0da-5da5-40f8-aab4-3937e8b1cdd0)  
_[Satnogs Rotator](https://satnogs.org/)_

## Highlights

- **Expression support** has been introduced, which allows defining formula relationships between properties of objects. Expression support is a major leap forward for making better parametric models in FreeCAD. Expressions offer an easy interface for making models controlled by spreadsheets.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/61a38d14-24ce-40de-9f6e-37fd21061e24)  

- **Sketcher solver** behavior has been majorly improved. Not only did it become faster and more stable, but it also didn't hang anymore on unsolvable sketches. Automatic document recomputes triggered after each tiny tweak to the sketch can now be switched off, allowing smooth editing of sketches buried under deep dependencies.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a230bb7a-bd86-436a-b3f7-3e21467b5e65)  

- FreeCAD now supports touchscreen 3D navigation. This makes it possible to use FreeCAD without a mouse on a convertible laptop with a touchscreen and pen, away from a desk.  

- The **FEM workbench** has tons of improvements. It has proven to be usable for various kinds of mechanical analysis.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7fa0f8a0-2d62-4bc4-aecb-1da1cc1ca1c4)  

## General

- Support for expressions/formulas
- Three new navigation styles: Gesture Navigation (with touchscreen support on Windows), Maya Navigation, and OpenCascade Navigation
- Customization of workbenches list (list can be reordered, and any workbenches can be made hidden from the list)
- Recovery tool
- New save options (Revert, save as a copy)
- New homepage

## Part Workbench

- New tools for joining walled objects (e.g., pipes): [Connect](https://wiki.freecad.org/Part_JoinConnect), [Embed](https://wiki.freecad.org/Part_JoinEmbed), and [Cutout](https://wiki.freecad.org/Part_JoinCutout)
- New feature: make a face from a sketch (parametric)

## Part Design & Sketcher Workbench

- New Feature: Toggle Mode for [Toggle reference/driving constraints](https://wiki.freecad.org/Sketcher_ToggleDrivingConstraint)
- New Feature: Continuous creation mode
- New Feature: Non-driving constraints (aka Driven constraints)
- Major speedup
- Advanced solver control
- New features: tools for duplication, mirroring, and rectangular array
- Support for [expressions/formulas](https://wiki.freecad.org/Expressions) in constraints and properties

## Spreadsheet Workbench

- Added functions: round, trunc, ceil, and floor.

## Draft Workbench

- **New DXF importer**: The Draft Workbench now features a brand-new DXF importer, fully coded in C++, inherited from [HeeksCad](https://github.com/Heeks/heekscad), which no longer needs to download external components, and is now much faster and able to load much larger DXF files. An option in the DXF preferences allows switching back to the old importer if needed.
- A new **[Mirror tool](https://wiki.freecad.org/Draft_Mirror)** allows the mirroring of objects "the Draft way".
- Many **DXF templates** have been added to the corresponding built-in SVG templates, making the export of Drawing pages to DXF much better.
- [Rectangles](https://wiki.freecad.org/Draft_Rectangle), [wires and lines](https://wiki.freecad.org/Draft_Wire) can now be **subdivided**, allowing all kinds of new shape combinations.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cda65e06-d1a9-483f-8ea3-a41c9db39373)  

## Drawing Workbench

- A new **[spreadsheet view](https://wiki.freecad.org/Drawing_SpreadsheetView)** tool allows placing a range of cells from a [spreadsheet](https://wiki.freecad.org/Spreadsheet_Workbench) on a Drawing page.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/62d0189f-3bca-471f-9ea9-a17a95765902)  

## Arch Workbench

- **[Materials support](https://wiki.freecad.org/Arch_SetMaterial)**: Arch objects can now have a [material](https://wiki.freecad.org/Material) attached, which uses FreeCAD's builtin materials framework. These materials are shared among other workbenches. These materials are fully supported by IFC import and export.
- The **[Section plane](https://wiki.freecad.org/Arch_SectionPlane)** can now do clipping of the 3D view, showing the section in realtime.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9739b393-71ec-4434-987a-82c6f1df7c61)  

- Several improvements to the **IFC importer** such as new options for treating large IFC files, better support for extrusions (now detected on import) and curved segments, and support of 2D annotation objects. The import of Analytical IFC has been added. At the moment import of geometrical representations of all analytical objects is supported.
- Better **meshing options** for DAE and IFC formats.
- A new [Arch Schedule](https://wiki.freecad.org/Arch_Schedule) tool allows the creation of different kinds of schedules from a BIM model.
- **IFC attributes** can now be imported, edited, and exported. This is basically a spreadsheet object attached to an Arch object.

## FEM Workbench

- **GUI**: FEM commands have keyboard shortcuts now. A preference dialog for FEM was introduced. The binary path of CalculiX is one of the preference settings.
- **GUI analysis container**: Analysis member uses drag & drop. They can be moved in and out of an analysis container. Since there is now support for multiple analyses, members can also be moved into another analysis. Multiple constraints can be created in an analysis.
- **GUI one-click analysis**: A one-click analysis button has been added to the GUI. It purges results, writes the CalculiX input file, and does the analysis with the selected solver. It detects if multithreading is available for CalculiX and uses the maximum possible threads.
- **Input file**: FreeCAD's built-in editor supports editing CalculiX input files (*.inp). Syntax highlighting was implemented too.
- **Netgen mesh object**: The GUI and property editor of the Netgen mesh object have been reworked. Tetrahedron meshing off one-order and second-order elements and adjusting meshing parameters are supported.
- **Constraint force and constraint fix objects**: It is now possible to add Forces and Fixes on edges and Vertexes.
- **Constraint pressure object**: A new object for pressure load on faces has been added. The pressure (load per area) is passed directly to CalculiX, meaning the node loads are not calculated by FreeCAD but by CalculiX instead.
- **Constraint-prescribed displacement object**: A new object for prescribed displacements has been added. The prescribed displacement can be added to vertexes, edges, and faces. For shell and beam analysis it is possible to fix the rotational degrees of freedom.
- **Beam section object**: The new beam section object allows defining rectangle cross sections for beam FEM. There is support for different beam sections in one analysis by defining reference shapes for each cross-section.
- **Shell thickness object**: The new shell thickness object allows defining the thicknesses of shell plates. Like the beam section, there is support for multiple shell thicknesses in one analysis by defining reference shapes.
- **Material object**: Multiple materials are supported for edge, shell, and solid meshes. Like for the beam section and shell thickness objects an appropriate FEM Mesh is needed to use multiple materials.
- **Solver object**: A solver object has been implemented as a base for multiple solvers. All analysis properties moved from analysis to solver.
- **Frequency analysis**: A frequency analysis can be made. The number of eigenvalues or eigenshapes to calculate can be adjusted in the preference GUI.
- **View provider**: Shell and beam FEM-Meshes can be viewed in FreeCAD and thus the results of such analysis too.
- **Python API**: Methods for working with FEM-Meshes and making an analysis from Python have been added.
- **GMSH Macro**: An interesting external development is the [Macro_GMSH](https://wiki.freecad.org/Macro_GMSH) which makes it possible to use GMSH for meshing. Very useful for all unable to compile FreeCAD with Netgen or for meshing shell- or edge meshes.
- **General Improvements**: Due to the heavy development taking place, there have been tons of improvements to the code base of the FEM module.

## Path Workbench

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/67fa8d0a-e2dd-47d1-a7b2-d0b05c13fc7b)  

A new [Path Workbench](https://wiki.freecad.org/Path_Workbench) has been added to FreeCAD. Although still under development, this workbench already implements some CAM operations and allows exporting full [G-code](https://en.wikipedia.org/wiki/G-code) programs for various CNC machines.

In its current state, the workbench allows the creation of profiles and pockets around [Part](https://wiki.freecad.org/Part_Workbench)-based objects, creating complex paths by joining several partial paths, inspection and editing the g-code contents of paths, managing tool table, and choosing between different pre-processing and post-processing scripts when importing and exporting G-code. It also already provides a complete [python API](https://wiki.freecad.org/Path_scripting).

## Additional Modules

A couple of new [addon workbenches](https://github.com/FreeCAD/FreeCAD-addons) have been created by community members. These workbenches are easily pluggable into an existing FreeCAD installation. Among them are:

- An [Animation Workbench](https://github.com/microelly2/Animation) allows you to create animations from your FreeCAD models by defining the movement of a camera and exporting a sequence of images.
- A [Kerkythea exporter macro](https://github.com/marmni/FreeCAD-Kerkythea) permits exporting your FreeCAD documents to the free [Kerkythea renderer](http://www.kerkythea.net/cms/).
- A work-in-progress [Menu](http://forum.freecadweb.org/viewtopic.php?f=22&t=10892%7CPie) is also already available.
- Finally, an [addons repository](https://github.com/FreeCAD/FreeCAD-addons) has been created to gather all the interesting workbenches, modules, and other macros that are flourishing around FreeCAD. This repository features an installer that takes care of the installation and updating of these addons for you.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0672386d-b29f-4df0-8215-cca508daa945)
