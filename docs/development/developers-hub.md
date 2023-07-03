# Developer hub

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5b9c883b-00ab-45c8-8111-81778f84aa76)  

This is the place to come if you want to contribute to the development of the FreeCAD software.

These pages are in the early stages of development. If you can't find the information you are looking for, or have found useful information somewhere we have not linked to, then please leave a comment on the [forum](http://forum.freecadweb.org/index.php?sid=5f84150e79db8842e277b042077097ff) and someone will look into it (or, if you are feeling bold, why not edit this page directly!).

## Developer documentation

The developer documentation comprises the following sections:

### Compiling FreeCAD

- [GitHub repo](https://github.com/FreeCAD/FreeCAD). If you are new to git, read [Source code management](https://wiki.freecad.org/Source_code_management).
- [Compile with Docker](https://wiki.freecad.org/Compile_on_Docker)
- [Compiling on Windows](https://wiki.freecad.org/Compile_on_Windows)
- [Compiling on Linux](https://wiki.freecad.org/Compile_on_Linux)
- [Compiling on MacOS](https://wiki.freecad.org/Compile_on_MacOS)
- [Licence details](https://wiki.freecad.org/Licence) about the FreeCAD licences
- [Third Party Libraries](https://wiki.freecad.org/Third_Party_Libraries)
- [Third Party Tools](https://wiki.freecad.org/Third_Party_Tools)
- [Start up and Configuration](https://wiki.freecad.org/Start_up_and_Configuration)
- [Source documentation](https://wiki.freecad.org/Source_documentation)
- Use the [bug tracker](https://wiki.freecad.org/Tracker) when you have a problem or think you may have found a bug.

### Packaging

[Packaging](https://wiki.freecad.org/Packaging) consists in taking the compiled binaries and Python source files of FreeCAD, and distributing them for use in a particular system.

- [Linux packaging](https://wiki.freecad.org/Linux_packaging)
  - [Debian development](https://wiki.freecad.org/Debian_development)
  - [Debian Unstable](https://wiki.freecad.org/Debian_Unstable)
  - [Git buildpackage](https://wiki.freecad.org/Git_buildpackage)
- [Windows packaging](https://wiki.freecad.org/Windows_packaging)
- [MacOS packaging](https://wiki.freecad.org/MacOS_packaging)

### Build Support Tools

- The [FreeCAD Build Tool](https://wiki.freecad.org/FreeCAD_Build_Tool)
  - [Adding an application module](https://wiki.freecad.org/Workbench_creation) to FreeCAD
- [Debugging](https://wiki.freecad.org/Debugging) FreeCAD
- [Testing](https://wiki.freecad.org/Testing) FreeCAD
- [Compiling (Speeding up)](https://wiki.freecad.org/Compiling_(Speeding_up)) FreeCAD
- [Continuous Integration](https://wiki.freecad.org/Continuous_Integration)
  
### Modifying FreeCAD

- Understanding [the FreeCAD source code](https://wiki.freecad.org/The_FreeCAD_source_code)
- [Submitting patches](https://wiki.freecad.org/Tracker#Submitting_patches)
- Add [Features](https://wiki.freecad.org/Gui_Command) to FreeCAD or a Workbench
- [Branding](https://wiki.freecad.org/Branding) or _how to give FreeCAD a unique look_
- [Artwork](https://wiki.freecad.org/Artwork) we made for FreeCAD, that you can freely reuse
- [Artwork guidelines](https://wiki.freecad.org/Artwork_Guidelines) standards for icons 
- [Translating FreeCAD](https://wiki.freecad.org/Localisation)
- [Extra python modules](https://wiki.freecad.org/Extra_python_modules), or _how to extend python functionality within FreeCAD_
- [Google Summer of Code](https://wiki.freecad.org/Google_Summer_of_Code) get involved via Google's student support program
- [Fine-tuning](https://wiki.freecad.org/Fine-tuning) shows different options and parameter switches that can overcome problems
- [Wrapping a C++ class in Python](https://wiki.freecad.org/Wrapping_a_Cplusplus_class_in_Python) shows how to create the Python wrapper for a C++ class
- [Checklist for adding a Feature to a C++ workbench](https://wiki.freecad.org/NewFeatureCheckList_C%2B%2B) provides an aid for contributors.
- [Translating an external workbench](https://wiki.freecad.org/Translating_an_external_workbench)

### Module developer's guide

[FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide): This is an ebook under writing on github, please fork and send pull request to contribute.

Chapters:
- Overview and Software Architecture
- Source code structure
- Base and App module
- GUI module
- Python wrapping
- Modular design
- FEM module source analysis (mixed C++ and Python)
- Development of CFD Module (pure Python)
- Module testing and debugging
- Contribute code with Git
  
Latest PDF preview can be downoaded from [PDF folder](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide/tree/master/pdf) of this GitHub repo.

### Internals

#### OpenCascade Documentation

OpenCascade is a software development platform for 3D surface and solid modeling, CAD data exchange, and visualization, mostly in the form of C++ libraries.

- [Roman Lygin's tutorials](http://opencascade.wikidot.com/romansarticles)
- [Full Online Documentation](https://dev.opencascade.org/cdoc/overview/html/index.html)
- [Reference Manual](https://dev.opencascade.org/doc/refman/html/index.html)
- [The openCascade wiki](http://opencascade.wikidot.com/) (currently containing ?? Chinese spam)
  
#### File format

[File Format FCStd](https://wiki.freecad.org/File_Format_FCStd). The files created with FreeCAD are `.zip` files that include the [BREP](https://en.wikipedia.org/wiki/Boundary_representation) geometry, as well as XML data that describes the document.

#### Sketcher solver

- [Sketcher Solver Architecture Booklet](https://forum.freecadweb.org/viewtopic.php?f=10&t=36355) (forum thread), [source](https://github.com/abdullahtahiriyo/FreeCADBooks/tree/master/FreeCAD_Solver_Architecture) in GitHub.
- [PlaneGCS solver](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/) in the FreeCAD source code; important files are [GCS.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/GCS.cpp) and [SubSystem.cpp](https://github.com/FreeCAD/FreeCAD/blob/master/src/Mod/Sketcher/App/planegcs/SubSystem.cpp).
- [Recent Several Sketcher improvements](https://forum.freecadweb.org/viewtopic.php?f=9&t=29192)
- 
The sketcher solver isn't perfect, as there are some issues with numerical precision when using large values, see [Adventure of fixing sketcher solver for large sketches](https://forum.freecadweb.org/viewtopic.php?f=10&t=40502).

The development of a new solver architecture could improve the way the solver is used both in the [Sketcher Workbench](docs\workbenches\sketcher.md), and for assembly of 3D bodies. See [Reimplementing constraint solver](https://forum.freecadweb.org/viewtopic.php?f=20&t=40525).

## Roadmap

FreeCAD, though usable in certain areas, is at the beginning of a long way into the CAD mainstream. There is still a lot to do to reach a state where we can compete with commercial software.

[FreeCAD 1.0 Development Cycle](https://wiki.freecad.org/FreeCAD_1.0_Development_Cycle)

## Community

- [IRC channel](ircs://irc.libera.chat:6697/freecad),synchronized with [Gitter channel](https://gitter.im/FreeCAD/FreeCAD)
- [Development forum](https://forum.freecad.org/viewforum.php?f=6)
- [Development roadmap](https://wiki.freecad.org/Development_roadmap)

## Credits

[Contributors](https://wiki.freecad.org/Contributors)
