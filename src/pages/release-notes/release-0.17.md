# Release 0.17

> This release of FreeCAD is dedicated to our friend Roland Frank [who left us in 2017](https://forum.freecadweb.org/viewtopic.php?f=8&t=25673). He was an active and well-appreciated member of the FreeCAD forum, and his video tutorials on the [Learn FreeCAD](https://www.youtube.com/watch?v=_HEvhclR4-o&list=PL6fZ68Cq3L8k0JhxnIVjZQN26cn9idJrj) and [BPLFRE](https://www.youtube.com/watch?v=m49z0weonog&list=PLsrwVwvqYb8G4Ri0iz1JIebsOXkgoytAY) Youtube channels helped many people get started with FreeCAD.

FreeCAD 0.17 was released on 06 April 2018. Get it from [GitHub](https://github.com/FreeCAD/FreeCAD/releases/tag/0.17). This is a summary of the most interesting changes. The complete list of changes can be found in the [MantisBT bug tracker FC 0.17 changelog](https://www.freecadweb.org/tracker/changelog_page.php?version_id=73).

Older FreeCAD release notes can be found in [Feature list](https://wiki.freecad.org/Feature_list#Release_notes).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/135b7ec7-d836-4734-af1a-0311589bd84e)  
_Garden Railway Coach O&K (by FreeCAD-User "Garden Railway Coach O&K", see [Users Showcase](http://forum.freecadweb.org/viewtopic.php?f=24&t=17261))_

## Highlights

It's been 2 years since the previous 0.16 release, but the FreeCAD team didn't stay idle during that time. More than 6,800 revisions were added to FreeCAD's source code. For comparison, this is more than three times the work done between v0.16 and 0.15! Most existing workbenches benefited from improvements, and two completely new workbenches were added. New additional modules were also developed by the community. 
Some of the highlights:

- The **PartDesign workbench** has been completely overhauled. A new Body container now holds a chain of features and lifts the requirement of mapping sketches to planar faces. New tools to create datum (reference) geometry such as points, axes, and planes make PartDesign much more versatile.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2e88aa9f-8c6a-48e2-ae2d-775912588e6f)  

- The new [Addon manager](https://wiki.freecad.org/Std_AddonMgr) available from the Tools menu (which was previously available as the [addons installer macro](https://github.com/FreeCAD/FreeCAD-addons)) makes installing and updating add-on modules and macros much easier and standardized across Windows, Mac OS, X, and Linux.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/086d03d6-f532-4dce-a08d-31cbffa10ed0)  

- The **Sketcher workbench** now supports B-spline creation with many ways to control curves and display curve information.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dfca2e4c-c105-4ae4-93f8-bdf63cc495dd)  

- The new **TechDraw workbench** aims to replace the Drawing workbench and already provides more features than the old Drawing workbench.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5b6416c9-677b-4358-9b2a-eb5c0a485655)  

## General

- Yorik van Havre wrote "[The FreeCAD Manual](https://wiki.freecad.org/Manual:Introduction)" as an introductory book on how to use FreeCAD.
- Document recomputes can now be disabled/enabled via the context menu.
- There's a new Revit navigation style.
- A new Navigation Indicator at the bottom right of the FreeCAD window allows quick access to the navigation styles.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fe259538-5d1d-4213-a6bf-db1a5b0fdd9c)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/730447f2-745f-4f00-a230-c99ea57bb20f)  

- The [dependency graph](https://wiki.freecad.org/Std_DependencyGraph) benefited from graphical enhancements.
- STEP import leverages the new [Part container](https://wiki.freecad.org/Std_Part) and uses it to organize an imported STEP assembly into sub-assemblies, now more closely following the original document's structure. stpZ (a compressed STEP format) is now supported.
- Most of FreeCAD's icons were reworked to better comply with [Tango guidelines](http://tango.freedesktop.org/Tango_Icon_Theme_Guidelines).
- The FreeCAD project acknowledges the contributions of its community by adding a Credits tab in the _About FreeCAD_ dialog. The new License and Libraries tabs list FreeCAD's license and provide info on used third-party libraries.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/798a4d2f-490b-4bb6-a6b0-9b8af03f56c8)

## Arch Workbench

- New [Arch Schedule](https://wiki.freecad.org/Arch_Schedule) tool: This tool has been completely rewritten and now offers much more flexible ways to gather data from the document into a spreadsheet, using different kinds of queries, such as counting all objects of a certain type, or summing up the total volume of a certain category of objects.
- A new set of [piping tools](https://wiki.freecad.org/Arch_Pipe) to design piping systems. You can use lines, sketches, or wires as a base to place tubes and automatically create connections between 2 or 3 tubes.
- The [Arch Structure](https://wiki.freecad.org/Arch_Structure) tool was extended with a series of new presets to build precast concrete elements.
- During the [Google Summer of Code](https://wiki.freecad.org/Google_Summer_of_Code) 2017 edition, in which FreeCAD participated, the [Arch Rebar](https://wiki.freecad.org/Arch_Rebar) tool was greatly extended and gained a friendly User Interface to easily add several standard types of Reinforcement bars to your concrete structures.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/338ee4c6-68e7-4479-8804-3657f25de779)  

- [Windows](https://wiki.freecad.org/Arch_Window) gained several enhancements, such as the possibility of defining subcomponents as openable, showing opening symbols, appearing open, and having louver panels.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0ca53d2d-a787-4d43-a34d-e44d21e08268)  

- [Arch Axis](https://wiki.freecad.org/Arch_Axis) tools have also been rewritten and allow more complex systems by combining different series of axes together. They can also be customized to show different kinds of situations such as levels.
- A new [Arch Grid](https://wiki.freecad.org/Arch_Grid) tool allows easy creating spreadsheet-like base objects by stretching, joining, or splitting cells. These grid objects can then be used as axes systems or as bases for complex window or panel arrangements.
- New [Panel tools](https://wiki.freecad.org/Arch_Panel_Cut) were specifically designed for panel constructions. They allow building a model composed of [Arch Panels](https://wiki.freecad.org/Arch_Panel) and then generating cutting sheets that can be used by the [Path Workbench](https://wiki.freecad.org/Path_Workbench) to generate cutting machine code.
- A new [Nesting](https://wiki.freecad.org/Arch_Nest) tool (still experimental) allows composing cut sheets by automatically placing 2D shapes in a containing shape.
- [Multi-materials](https://wiki.freecad.org/Arch_MultiMaterial) have been introduced in the Arch workbench. They allow the automatic creation of multilayer walls or control of the different materials of compound objects such as windows.
- The Arch Workbench OBJ and DAE exporter now support materials when importing and exporting.
- Import support for the [3DS](https://wiki.freecad.org/Arch_3DS) format has been added.

## Draft Workbench

- [Autogroup system](https://wiki.freecad.org/Draft_AutoGroup): The Draft workbench now features an auto-group button on its main toolbar. When activated, all newly created Draft and Arch objects will automatically be placed in that group.
- [Slope tool](https://wiki.freecad.org/Draft_Slope): When used on a [Draft Line](https://wiki.freecad.org/Draft_Line) or [Draft Wire](https://wiki.freecad.org/Draft_Wire), this tool will allow you to give it a specific slope/inclination. The intermediate and end points will get a lower Z value, so the whole object gets a constant inclination. This is useful to use Lines or Wires as bases for objects that need a precise inclination, such as roof panes or sewer pipes.
- [Working Plane proxies](https://wiki.freecad.org/Draft_SetWorkingPlaneProxy): When working with [Draft working planes](https://wiki.freecad.org/Draft_SelectPlane), you often need to store working plane locations that you use often. This is now possible by placing one of these proxies in your document. It will remember the current working plane location and can also restore the current view and/or object visibility.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/911b7a57-0597-4aee-84f0-c0406fc4029a)  

- [Draft Stretch](https://wiki.freecad.org/Draft_Stretch): The Draft workbench now has a stretch tool that allows moving vertices of several Draft objects at once.
- [Draft Label](https://wiki.freecad.org/Draft_Label): With this tool, one can place labels in the document, which are composed of a piece of text and a leader line that can be free or stick to a specific object. The text can be made to display a custom piece of text or automatically display the contents of a property of the target object.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/205f8a0f-6310-40e3-b1f4-50b4dfe2e637)  

## FEM Workbench

### FEM Mesh

- **Gmsh object** is a mesh object, which allows using the [Gmsh](http://gmsh.info/) meshing tool inside FreeCAD. Various options of Gmsh are supported.
- **Boundary layer object for gmsh** makes it possible to create a boundary layer.
- **Mesh group object for gmsh** makes creating nodes and element groups possible. The names can be changed by the user.
- **Mesh region object for gmsh** makes it possible to define mesh regions with different mesh element sizes for nodes, edges, faces, and volumes.
- **GUI clear mesh tool** clears the mesh but keeps all mesh adjustments. This is very handy if files should be shared.
- **GUI print mesh info tool** prints all kinds of mesh information.
- **GUI mesh view provider** is able to display quad face mesh as well as hexahedron, pentahedron, and pyramid mesh elements.
- **Mesh data model** was updated to use [SMESH](http://salome-platform.org/) version 7.7.1 (https://github.com/FreeCAD/FreeCAD/commit/666a3e5a)
- **Mesh API** was extended to allow Python to read mesh group data from the FreeCAD SMESH FEM mesh data. This was the base for the Gmsh group object.
- **Mesh API** was extended to export mesh groups to Abaqus and CalculiX in file format.
- **FEM mesh 2 mesh tool** converts a surface of a volume mesh into a mesh for FreeCAD's mesh module.
- **Mesh problems**: Non-positive Jacobians are an often seen problem in FEM meshes. Elements that have non-positive Jacobians in the CalculiX solver are colored in FreeCAD.
- **Fenics**: Import and export of Fenics mesh format has been added.

### Objects

- **Beam rotation object** enables the analysis of beams rotated around their main axis.
- **Nonlinear material object** adds nonlinear material behavior to FreeCAD FEM. It supports linear change of stress-strain curve.
- **Fluid material** 
- **Constraint initial flow velocity**
- **Constraint fluid boundary**
- **Constraint electrostatic potential** 
- **Constraint body heat source**
- **Constraint transform**
- **Constraint temperature**
- **Constraint contact** 
- **Constraint plane rotation** 
- **Constraint self-weight** 

### Solver

- The **Solver framework** was written from scratch during a Google Summer of Code project.
- Support for FEM solver software **ElmerFEM**, https://www.csc.fi/web/elmer, was added.
- Inside the solver framework the analysis type can be chosen by an **equation object** (Elmer solver only, ATM).
- Basic support for FEM solver software **Z88**, https://en.z88.de/z88os/, was added.
- **CalculiX** was ported to the solver framework. The ccxtools solver object remains in FreeCAD FEM because it is very well-tested and has extended pre-checks.

### Calculix analysis

- **Coupled Thermal Structural Analysis**
- **1D pipe Flow analysis Analysis**
- **Coupled Beam Shell Solid models** 

### Standard Post Processing

- **Shell and beam 3D output**: Make it possible to output shell and beam analysis as 3D solid output to see stresses in sections.
- **Peeq strain**: Support for equivalent plastic strain has been added to the result object, result reader, and vtk post-processing.

### Extended Post Processing

- **VTK**: An extended post processing based on [VTK](https://www.vtk.org/) has been added.
- **Clip filter**
- **Scalar clip filter** 
- **Cut filter** 
- **Wrap vector filter**
- **Linearized stresses** 
- **Data at point**: A tool to get the result data for a specific point.
- **Data along line**: A tool to get the result data for a specific line printed as a diagram.

### Fixes, code, and other stuff

- The **unit tests suite** for the FEM work bench has been extended.
- The **code bases** has been massively improved.
- Most of the FEM code has been ported to **Python3**.
- Furthermore, there have been **tons of bugs** found and fixed.
- All **icons** have been nicely redrawn and in conjunction with guidelines.
- **Code formatting** There should be no more tabs and white spaces in all FEM source codes.
- Python code complies with most rules of **flake8**.
- Dozens of **typos** inside source code have been fixed (AFAIK this applies to all FreeCAD, _luzpaz_ finds all of them like finding a needle in the haystack).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/629ed6d5-5330-46b5-a6d0-8f06003e1a21)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9523edf8-dc71-4c46-a0e2-f1aeb9c2b192)  

## Part Workbench

- The **Open Cascade geometric modeling kernel** was updated from 6.8.0 to 7.2.0 (actual OCC version may depend on platform/distro). This version brings a lot of bug fixes in Boolean operations and hidden line removal algorithm, as well as allowing new features to be added to the Part workbench.
- **New features**: [Boolean Fragments](https://wiki.freecad.org/Part_BooleanFragments), [Slice](https://wiki.freecad.org/Part_Slice), and [XOR](https://wiki.freecad.org/Part_XOR).
- Thanks to the new features above, composite solids (compsolids) can now be created in FreeCAD. They are of great use in FEM.
- [Connect](https://wiki.freecad.org/Part_JoinConnect) performance and reliability improved, making the tool more versatile.
- **New feature**: [2D Offset](https://wiki.freecad.org/Part_Offset2D), to offset planar wires.
- **Enhancement**: [Part Extrude](https://wiki.freecad.org/Part_Extrude) tool now supports parametric Normal direction, direction controlled by linked edge, reversing, 2nd length, 2nd taper angle, and symmetric. Also, the Make Solid checkbox is now checked automatically if you open dialog and the selected object is a closed wire (e.g., a sketch).
- **Enhancement**: [Part Revolve](https://wiki.freecad.org/Part_Revolve) tool now supports parametric link to revolution axis.
- The new **[Part Attachment](https://wiki.freecad.org/Part_EditAttachment)** utility accessible from the _Part → Attachment_ menu can be used to attach most types of objects to other geometry parametrically.
- The new **[Part container](https://wiki.freecad.org/Std_Part)** can be used to group most types of shapes and to move them as a unit. It also contains standard planes and axes to attach objects to. It will serve as the basis for the future Assembly workbench by providing a way to move parts around. It is available in all workbenches from a toolbar along with [Group](https://wiki.freecad.org/Std_Group).

## PartDesign workbench

The PartDesign workbench received massive changes, the fruit of combined efforts from multiple developers over a period of 5 years.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3fe46663-8241-4499-8f63-65b0f4a09a20)  

- The new [Body](https://wiki.freecad.org/PartDesign_Body) container holds a chain of PartDesign features making up a single contiguous solid. It also contains standard planes and axes to attach objects to. Thanks to the Body container, it is no longer necessary to map sketches to faces when adding features. This requirement was a major limitation of the old PartDesign, which could cause many models to break upon parameter changes. So, avoiding mapping sketches to faces is recommended whenever possible.
- New additive and subtractive features: [Primitives](https://wiki.freecad.org/PartDesign_CompPrimitiveAdditive), [Loft](https://wiki.freecad.org/PartDesign_AdditiveLoft), [Sweep](https://wiki.freecad.org/PartDesign_AdditivePipe), [Thickness](https://wiki.freecad.org/PartDesign_Thickness).
- New datum features, [planes](https://wiki.freecad.org/PartDesign_Plane), [lines](https://wiki.freecad.org/PartDesign_Line), and [points](https://wiki.freecad.org/PartDesign_Point) are useful for placing sketches, alignment, and serving as axes of revolution.
- New automatic workbench switching between PartDesign and Sketcher. When creating a new sketch from within the PartDesign workbench, once the sketch attachment is set, the UI automatically switches to the Sketcher workbench and its tools in editing mode. When the sketch is closed, the UI switches back to the PartDesign workbench and restores the view to its previous state. Thus the Sketcher tools were removed from the PartDesign toolbars to liberate space for the new PartDesign features.  

## Path Workbench

The Path workbench has been massively overhauled in version 0.17. The overhaul saw the removal of all older HeeksCNC code and the replacement of the library Python wrapper with the new Path-Area module. As a result, operations have gotten much more powerful and faster, with a simplified code base.

- Support for 2.5D operations is complete including [contour](https://wiki.freecad.org/Path_Profile), [face-milling](https://wiki.freecad.org/Path_MillFace), [pocketing](https://wiki.freecad.org/Path_Pocket_Shape), [profiling](https://wiki.freecad.org/Path_Profile), and [drilling](https://wiki.freecad.org/Path_Drilling).
- Limited support for [3D pocketing](https://wiki.freecad.org/Path_Pocket_3D) operations.
- Path can use [Arch Panel](https://wiki.freecad.org/Arch_Panel) as base object to group multiple parts together for 2D cutting.
- Introduction of [Path Job](https://wiki.freecad.org/Path_Job). The job is now a central object of the path workflow. It organizes and coordinates multiple operations, tools, stock material, part orientation, and alignment. A customized Job can be saved as a 'Job Template' and re-used to streamline the setup of future jobs. Job SetupSheets provide a mechanism to automate the configuration of depth and speed settings.
- All operations have a consistent task panel organization.
- New or improved [post-processors](https://wiki.freecad.org/Path_Post) for LinuxCNC, Smoothieboard, GRBL, Phillips, OpenSBP (shopbot), Roland Modela, Centroid, Fablin, and Dynapath. Most post-processors support arguments.
- Improved [tool library](https://wiki.freecad.org/Path_ToolLibraryEdit) and editor.
- [Path Inspect](https://wiki.freecad.org/Path_Inspect) tool allows highlighting individual commands to visualize path and explore gcode.
- [Path Simulator](https://wiki.freecad.org/Path_Simulator) tool does 3D simulated cutting to visualize Path execution.
- Dress-up operations can be used to refine core operations and add additional complexity. Dressups exist for ['dogbone'](https://wiki.freecad.org/Path_DressupDogbone) corners, [holding tags](https://wiki.freecad.org/Path_DressupTag), [ramp entry](https://wiki.freecad.org/Path_DressupRampEntry), and [dragknife](https://wiki.freecad.org/Path_DressupDragKnife) 'corner actions'.

## Sketcher Workbench

- Sketches can now be attached in a wide variety of ways, not only to flat faces as they used to be. Attachment perpendicular to edges is particularly important and useful for making profiles for [sweeping](https://wiki.freecad.org/Part_Sweep).
- External geometry links are no longer limited to only the object the sketch is mapped to. Geometry from other sketches is supported. External geometry links can be created within a Part container, a Body container, or even a whole project if Part and Body containers are not used.
- Visibility automation: now, when you start editing a sketch, objects depending on it are automatically hidden to unclutter the view, and objects used for external geometry links are automatically shown; old visibilities are restored as you close the sketch.
- New constraint continuous creation mode: constraint tools are now active even without any element selected. Press a constraint, then select objects to apply the constraint to.
- New arc of hyperbola and arc of parabola creation tools.
- New Extend edge editing tool.
- New B-spline creation tool, with many ways to control curves (degree, knot multiplicity, control point weight) and display information (control polygon, curvature comb, knot multiplicity indicator).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/25893d4f-7ef7-48e3-aaf0-7bda39c61c1d)  

- New **Carbon Copy** tool to copy geometry from another sketch.
- Virtual space switches all constraints to a different "virtual space", in effect hiding them from view.
- Constraints List box includes the ability to hide internal alignment and individual hiding of constraints with a checkbox.
- The Block constraint removes all degrees of freedom for a geometry element in place with the use of a single constraint. Working with B-Splines, which are cumbersome to constrain, should be particularly useful.
- New Regular polygon with a user-defined number of sides.
- Alternative sketch solvers are available through _Show Advanced Solver Control_ in the _Task Bar_ in Sketcher preferences.
- Geometry style-based rendering order allows reordering between normal, construction, and external geometry. Useful when these types of geometry overlap.
- The solver now automatically substitutes a combination of coincident constraint + tangent constraint with a point-on-point tangent constraint, as the former is an improper use that induces tolerance error that can cause further problems in the model. The user is advised of the substitution by a dialog that can be disabled in Sketcher preferences by unchecking "Notify automatic constraint substitutions".
- New tick box in edit mode task view "Avoid redundant auto constraints".
- Horizontal and Vertical constraints can be used to align selected points.

## Spreadsheet Workbench

- An Excel-file importer was added.

## Surface Workbench

- A new addition in v0.17, the Surface workbench has (for now) 4 functioning surface creation commands.

## TechDraw Workbench

[TechDraw](https://wiki.freecad.org/TechDraw_Workbench) is a new workbench for creating technical drawings to replace the aging Drawing workbench. FreeCAD v0.17 is still shipped with the Drawing workbench so you can still open and edit your files containing Drawing pages, but Drawing will be phased out in a future release. Some of the exciting new stuff that TechDraw brings:

- Most tools from the Drawing workbench have a TechDraw counterpart.
- Easier view creation and manipulation. Views can be grabbed by their border with the mouse and dragged on the page. Orthogonal view alignment can be locked.
- Better line type management (hard, smooth, iso, seam). Better hidden line removal thanks to an updated [OCC](https://wiki.freecad.org/Glossary#OCC) library.
- Section view, detail view creation.
- Better template management.
- Dimensioning is now supported through multiple dimensioning tools: horizontal, vertical, length, radial, diameter, and angular.
- Decoration tools: hatching, hatching compatible with Autodesk PAT specification, symbols, images.

## Additional Modules

Some of the new community modules that were created.

- [Manipulator Workbench](https://wiki.freecad.org/Manipulator_Workbench) is aimed to help in Aligning, Moving, Rotating, and Measuring 3D objects (Part Design allowed) through a friendly GUI.
- [Curves](https://github.com/tomate44/CurvesWB), a collection of tools to create and edit [NURBS](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline) curves and surfaces.
- [Nurbs](https://github.com/microelly2/freecad-nurbs), a collection of scripts for managing freeform surfaces and curves.
- [Silk](https://github.com/edwardvmills/Silk), a collection of NURBS surface modeling tools focused on low degree and seam continuity.
- [Flamingo Workbench](https://wiki.freecad.org/Flamingo_Workbench), a set of customized FreeCAD commands and objects that help to speed up the drawing of frames and pipelines.
- [Civil Engineering/Transportation Workbench](https://wiki.freecad.org/Civil_Engineering_Workbench)
- [GDT](https://github.com/juanvanyo/FreeCAD-GDT), geometric dimensioning and tolerancing (GD&T).
- [InventorLoader](https://github.com/jmplonka/InventorLoader) to import Autodesk Inventor files (in progress).
- [Kicad StepUp Workbench](https://www.freecadweb.org/wiki/KicadStepUp_Workbench) is aimed to help KiCad and FreeCAD users in ECAD and MCAD collaboration.
