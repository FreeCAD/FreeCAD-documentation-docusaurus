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
