# Workbenches

FreeCAD, like many modern design applications such as [Revit](http://en.wikipedia.org/wiki/Revit) or [CATIA](http://en.wikipedia.org/wiki/CATIA), is based on the concept of [Workbench](http://en.wikipedia.org/wiki/Workbench). A workbench can be considered as a set of tools specially grouped for a certain task. In a traditional furniture workshop, you would have a work table for the person who works with wood, another one for the one who works with metal pieces, and maybe a third one for the guy who mounts all the pieces together.

In FreeCAD, the same concept applies. Tools are grouped into workbenches according to the tasks they are related to.

When you switch from one workbench to another, the tools available on the interface change. Toolbars, command bars and possibly other parts of the interface switch to the new workbench, but the contents of your scene doesn't change. You could, for example, start drawing 2D shapes with the Draft Workbench, then work further on them with the Part Workbench.

Note that sometimes a Workbench is referred to as a Module. However, Workbenches and Modules are different entities. A Module is any extension of FreeCAD, while a Workbench is a special type of Module with a GUI configuration (toolbars and menus).

## Built-in workbenches

### Current

The following workbenches are bundled with every FreeCAD installation:

* ![image](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/a1b5489b-e947-4077-bcf2-182be03aba7f) [Std Base](https://wiki.freecad.org/Std_Base): This is not really a workbench, but rather a category of 'standard' commands and tools that can be used in all workbenches.
* ![Arch workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/9bc2e291-8e10-4ce0-b374-12641eab454b) The [Arch Workbench](docs\workbenches\arch.md) for working with architectural elements.
* ![Draft workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/c25772d8-13c4-42b5-8c8c-eba8f64a2b7e) The [Draft Workbench](docs\workbenches\draft.md) contains 2D tools and basic 2D and 3D CAD operations.
* ![FEM workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/0c46ed4f-c7fd-4bf0-b46a-272094dc0950) The [FEM Workbench](docs\workbenches\FEM.md) provides Finite Element Analysis (FEA) workflow.
* ![Inspection workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/7ced53a7-47e0-49e4-b729-3773302cb32a) The [Inspection Workbench](https://wiki.freecad.org/Inspection_Workbench) is made to give you specific tools for examination of shapes. It is still under development.
* ![Mesh workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/318d08a6-98b7-4ee0-95a2-28690889869d) The [Mesh Workbench](docs\workbenches\mesh.md) for working with triangulated meshes.
* ![OpenSCAD workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/ce16fe57-0d12-4cb6-b444-f256bc397a02) The [OpenSCAD Workbench](docs\workbenches\openSCAD.md) for interoperability with OpenSCAD and repairing [constructive solid geometry](https://wiki.freecad.org/Constructive_solid_geometry) (CSG) model history.
* ![Part workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/19f56635-c537-4a75-81e2-1e1f28710a91) The [Part Workbench](docs\workbenches\part.md) for working with geometric primitives and boolean operations.
* ![Part design workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/660dd17a-4d37-4d6c-805a-b18481ecb5ec) The [Part Design Workbench](docs\workbenches\part-design.md) for building Part shapes from sketches.
* ![Path workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/26670d8a-4368-4b10-97e1-0353e58d4dc6) The [Path Workbench](docs\workbenches\path.md) is used to produce G-Code instructions. It is still under development.
* ![Points workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/bd5219d3-3525-4d57-b5f2-722d78527c4b) The [Points Workbench](docs\workbenches\points.md) for working with point clouds.
* ![Reverse engineering workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/595f8bfe-d76a-4483-9c79-15919a78b989) The [Reverse Engineering Workbench](https://wiki.freecad.org/Reverse_Engineering_Workbench) is intended to provide specific tools to convert shapes/solids/meshes into parametric FreeCAD-compatible features. It is still under development.
* ![Robot workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/76a45cc5-ab25-487e-afbf-a27d1e9826da) The [Robot Workbench](docs\workbenches\robot.md) for studying robot movements.
* ![Sketcher workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/99c4b539-a016-411b-90ab-e0411f37b4db) The [Sketcher Workbench](docs\workbenches\sketcher.md) for working with geometry-constrained sketches.
* ![Spreadsheet workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/29cc4d05-5850-4cc2-a5d4-6188cf06bfae) The [Spreadsheet Workbench](docs\workbenches\spreadsheet.md) for creating and manipulating spreadsheet data.
* ![image](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/ef4538cf-4880-442c-8de6-e6115b9195fd) The [Start Center Workbench](https://wiki.freecad.org/Start_Workbench) allows you to quickly jump to one of the most common workbenches.
* ![Surface workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/3cc434a8-1e49-483e-8fc9-65710d005ddf) The [Surface Workbench](docs\workbenches\surface.md) provides tools to create and modify surfaces. It is similar to the [Part Builder](https://wiki.freecad.org/Part_Builder) Face from edges option.
* ![TechDraw workbench logo](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/6fd5f4c1-b941-4047-b8fa-e14eb5ae8c60) The [TechDraw Workbench](docs\workbenches\techdraw.md) for producing technical drawings from 3D models. It is the successor of the [Drawing Workbench](https://wiki.freecad.org/Drawing_Workbench).
* ![image](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/5e3df28c-0bf9-4d17-972c-7ed06656c222) The [Test Framework Workbench](https://wiki.freecad.org/Testing) is for debugging FreeCAD.
* ![image](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/178b7150-cce0-471e-a5be-a990eb83ea63) The [Web Workbench](https://wiki.freecad.org/Web_Workbench) provides you with a browser window instead of the [3D view](https://wiki.freecad.org/3D_view) within FreeCAD.

### Obsolete

The following workbenches are no longer included after version 0.20:

* ![image](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/f7332799-41a3-4e1c-b0cf-8f36162fb52a) The [Drawing Workbench](https://wiki.freecad.org/Drawing_Workbench) was used for producing technical drawings. The [TechDraw Workbench](https://wiki.freecad.org/TechDraw_Workbench) is its more advanced replacement.
* ![image](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/c822d08d-0fa3-4d78-872c-9ea127ab3c5f) The [Image Workbench](https://wiki.freecad.org/Image_Workbench) was used for working with bitmap images. It functionality has been integrated in [Std Base](https://wiki.freecad.org/Std_Base). See [Std Import](https://wiki.freecad.org/Std_Import) and [Std ViewLoadImage](https://wiki.freecad.org/Std_ViewLoadImage).
* ![image](https://github.com/gauriimaheshwarii/FreeCAD-documentation/assets/100439627/e0f3dc95-6648-4037-9f45-86ec7abc49f0) The [Raytracing Workbench](https://wiki.freecad.org/Raytracing_Workbench) was used for ray-tracing (rendering). The external [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) should be used instead.

## External workbenches

FreeCAD workbenches are easy to program in [Python](docs\python-scripting\pyside.md), there are therefore many people developing additional workbenches outside of the FreeCAD main development area.

The [external workbenches](docs\workbenches\external-workbenches.md) page lists all that are known to this community. Most are easily installable from within FreeCAD, using the [Addon Manager](https://wiki.freecad.org/Std_AddonMgr), found under menu **Tools → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ce42afc3-28a7-4f16-8fff-31b4e5f27237) Addon manager**.
