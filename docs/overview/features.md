# Feature list

This is an extensive, but not complete, list of features which FreeCAD implements.

## Release notes

- [Release 0.20](https://wiki.freecad.org/Release_notes_0.20) - June 2022
- [Release 0.19](https://wiki.freecad.org/Release_notes_0.19) - March 2021
- [Release 0.18](https://wiki.freecad.org/Release_notes_0.18) - March 2019
- [Release 0.17](https://wiki.freecad.org/Release_notes_0.17) - April 2018
- [Release 0.16](https://wiki.freecad.org/Release_notes_0.16) - April 2016
- [Release 0.15](https://wiki.freecad.org/Release_notes_0.15) - March 2015
- [Release 0.14](https://wiki.freecad.org/Release_notes_0.14) - March 2014
- [Release 0.13](https://wiki.freecad.org/Release_notes_0.13) - January 2013
- [Release 0.12](https://wiki.freecad.org/Release_notes_0.12) - December 2011
- [Release 0.11](https://wiki.freecad.org/Release_notes_0.11) - March 2011

## Key features

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/18b4e939-5746-48b8-8993-c197df5f4611)  
A complete [Open CASCADE Technology](http://en.wikipedia.org/wiki/Open_CASCADE)-based **geometry kernel** allowing complex 3D operations on complex shape types, with native support for concepts like [Boundary Representation](https://en.wikipedia.org/wiki/Boundary_representation) (BREP), [Non-uniform rational basis spline](https://en.wikipedia.org/wiki/Non-uniform_rational_B-spline) (NURBS) curves and surfaces, a wide range of geometric entities, boolean operations and [fillets](https://en.wikipedia.org/wiki/Fillet_(mechanics)), and built-in support of [STEP](https://en.wikipedia.org/wiki/ISO_10303) and [IGES](https://en.wikipedia.org/wiki/IGES) formats.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2e318415-ed0c-418f-9860-34865b392023)  
A full **parametric model**. All FreeCAD objects are natively parametric, meaning their shape can be based on [properties](https://wiki.freecad.org/Property) or even depend on other objects. All changes are recalculated on demand, and recorded by an undo/redo stack. New object types can be added easily, and can even be [fully programmed in Python](https://wiki.freecad.org/Scripted_objects).

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/83835ee2-fc88-4048-b8c4-790d9bfe6005)  
A **modular architecture** that allows plugin extensions (modules) to add functionality to the core application. An extension can be as complex as a whole new application programmed in C++ or as simple as a Python script or self-recorded macro. You have complete access to almost any part of FreeCAD from the built-in **Python** interpreter, macros or external scripts, be it [geometry creation and transformation](https://wiki.freecad.org/Topological_data_scripting), the 2D or 3D representation of that geometry ([scenegraph](https://wiki.freecad.org/Scenegraph)) or even the [FreeCAD interface](docs\python-scripting\pyside.md).

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eb3b2ef4-6e5d-4137-bb54-f9ef60f0d72c)  
Import/export to **standard formats** such as [STEP](http://en.wikipedia.org/wiki/ISO_10303), [IGES](http://en.wikipedia.org/wiki/IGES), [OBJ](http://en.wikipedia.org/wiki/Obj), [STL](http://en.wikipedia.org/wiki/STL_%28file_format%29), [DXF](http://en.wikipedia.org/wiki/Dxf), [SVG](http://en.wikipedia.org/wiki/Svg), [DAE](http://en.wikipedia.org/wiki/COLLADA), [IFC](http://en.wikipedia.org/wiki/Industry_Foundation_Classes), or [OFF](http://people.sc.fsu.edu/~jburkardt/data/off/off.html), [NASTRAN](http://en.wikipedia.org/wiki/NASTRAN), [VRML](http://en.wikipedia.org/wiki/VRML) in addition to FreeCAD's native **[FCStd](https://wiki.freecad.org/File_Format_FCStd)** file format. The level of compatibility between FreeCAD and a given file format can vary, since it depends on the module that implements it.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2edcff1e-a597-4694-b277-0bdaafc30bbe)  
A [Sketcher](docs\workbenches\sketcher.md) with integrated constraint-solver, allowing you to sketch geometry-constrained 2D shapes. The constrained 2D shapes built with Sketcher may then be used as a base to build other objects throughout FreeCAD.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1440bb6a-fd84-4a7c-a614-1ac8d987d232)  
A [Robot simulation](docs\workbenches\robot.md) module that allows you to study robot movements in a graphical environment.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c8ff8f2a-02e4-4ea0-b0d8-d7484527d7f7)  
A [technical drawing module](docs\workbenches\techdraw.md) with options for detail views, cross sectional views, dimensioning and others, allowing you to generate 2D views of existing 3D models. The module then produces ready-to-export SVG or PDF files.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f2239533-28f6-4b8b-b0ac-f832a89319f6)  
A [Rendering](https://wiki.freecad.org/Raytracing_Workbench) module that can export 3D objects for rendering with external renderers. It currently only supports [povray](http://en.wikipedia.org/wiki/POV-Ray) and [LuxRender](http://en.wikipedia.org/wiki/LuxRender), but is expected to be extended to other renderers in the future.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/891cecda-f7c7-4677-9e80-912ba32860a8)  
An [Architecture module](docs\workbenches\arch.md) that allows [Building Information Modeling](http://en.wikipedia.org/wiki/Building_Information_Modeling) (BIM)-like workflows with [Industry Foundation Classes](http://en.wikipedia.org/wiki/Industry_Foundation_Classes) (IFC) compatibility.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6347cfa2-4ca3-4e98-9a9b-0360d9bd8a6e)  
A [Path module](docs\workbenches\path.md) dedicated to mechanical machining for [Computer Aided Manufacturing](https://en.wikipedia.org/wiki/Computer-aided_manufacturing) (CAM). Using the Path module, you may output, display, and adjust the [G code](http://en.wikipedia.org/wiki/G-code) used to control the target machine.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e4216e76-cb9d-4416-b3cd-59cb49527d40)  
An [Integrated Spreadsheet](docs\workbenches\spreadsheet.md) and an [expression parser](https://wiki.freecad.org/Expressions) that may be used to drive formula-based models and organize model data in a central location.

## General features

- **multi-platform**: FreeCAD runs and behaves exactly the same way on Windows, Linux, macOS, and other platforms.
- **full GUI application**: FreeCAD has a complete Graphical User Interface based on the [Qt](https://www.qt.io/) framework, with a 3D viewer based on [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor); allowing fast rendering of 3D scenes and a very accessible scene graph representation.
- **runs as a command line application**: In command line mode, FreeCAD runs without its interface but with all its geometry tools. In this mode it has a relatively low memory footprint and can be used, for example, as a server to produce content for other applications.
- **can be imported as a [Python module](https://wiki.freecad.org/Embedding_FreeCAD)**: FreeCAD can be imported into any application that can run Python scripts. As in command line mode, the interface part of FreeCAD is unavailable, but all geometry tools are accessible.
- **workbench concept**: In the FreeCAD interface, tools are grouped by workbenches. This allows you to display only the tools used to accomplish a certain task, keeping the workspace uncluttered and responsive, and allowing the application to load rapidly.
- **plugin/module framework for late loading of features/data-types**: FreeCAD is divided into a core application with modules that are loaded only when needed. Almost all tools and geometry types are stored in modules. Modules behave like plugins; in addition to delayed loading, individual modules can be added to or removed from an existing installation of FreeCAD.
- **parametric associative document objects**: All objects in a FreeCAD document can be defined by parameters. Those parameters can be modified and recomputed at any time. Since object relationships are maintained, the modification of one object will automatically propagate to any dependent objects.
- **parametric primitive creation**: Primitive objects such as box, sphere, cylinder, etc. can be created by specifying their geometry constraints.
- **graphical modification operations**: FreeCAD can perform translation, rotation, scaling, mirroring, offset (either trivial or as described in [Jung/Shin/Choi](https://www.researchgate.net/publication/240754626_Self-intersection_Removal_in_Triangular_Mesh_Offsetting)) or shape conversion, in any plane of the 3D space.
- **[Constructive solid geometry](https://wiki.freecad.org/Constructive_solid_geometry)** (boolean operations): FreeCAD can do constructive solid geometry operations (union, difference, intersect).
- **graphical creation of planar geometry**: Lines, wires, rectangles, B-splines, and circular or elliptic arcs can be created graphically in any plane of the 3D space.
- **modeling with straight or revolved extrusions**, **sections**, and **fillets**.
- **topological components** like **vertices**, **edges**, **wires**, and **planes**.
- **testing and repairing**: FreeCAD has tools for testing meshes (solid test, non-two-manifolds test, self-intersection test) and for repairing meshes (hole filling, uniform orientation).
- **annotations**: FreeCAD can insert annotations for text or dimensions.
- **Undo/Redo framework**: Everything in FreeCAD is undo/redoable, with user access to the undo stack. Multiple steps can be undone at one time.
- **transaction oriented**: The undo/redo stack stores document transactions, not single actions, allowing each tool to define exactly what must be undone or redone.
- **built-in [scripting](https://wiki.freecad.org/Scripting) framework**: FreeCAD features a built-in [Python](https://wiki.freecad.org/Scripting) interpreter, with an API that covers almost any part of the application, the interface, the geometry and the representation of this geometry in the 3D viewer. The interpreter can run complex scripts as well as single commands; entire modules can be programmed completely in Python.
- **built-in Python console**: The Python interpreter includes a console with syntax highlighting, autocomplete and a class browser. Python commands can be issued directly in FreeCAD and immediately return results, permitting script writers to test functionality on the fly, explore the contents of FreeCAD's modules and easily learn about FreeCAD internals.
- **mirrors user interaction**: Everything the user does in the FreeCAD interface executes Python code, which can be printed on the console and recorded in macros.
- **full macro recording and editing capabilities**: The Python commands issued when the user manipulates the interface can be recorded, edited if needed, and saved to be reproduced later.
- **compound (ZIP based) document save format**: FreeCAD documents are saved with a **[.FCStd](https://wiki.freecad.org/File_Format_FCStd)** extension. The document can contain many different types of information such as geometry, scripts or thumbnail icons. The **.FCStd** file is itself a zip container; a saved FreeCAD file has already been compressed.
- **fully customizable/scriptable Graphical User Interface**: The [Qt](https://www.qt.io/)-based interface of FreeCAD is entirely accessible via the Python interpreter. Aside from simple functions FreeCAD itself provides to workbenches, the entire Qt framework is accessible. The user may perform any operation on the GUI such as creating, adding, docking, modifying or removing widgets and toolbars.
- **thumbnailer**: (currently only Linux systems) FreeCAD document icons show the contents of the file in most file manager applications such as Gnome's Nautilus.
- **modular MSI installer**: FreeCAD's installer allows flexible installations on Windows systems. Packages for Ubuntu systems are also maintained.

## Extra Workbenches

Power users have created various custom [external workbenches](docs\workbenches\external-workbenches.md).
