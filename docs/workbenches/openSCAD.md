# OpenSCAD Workbench

## Introduction

The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/afc572e6-dea8-4760-b93c-533a86010ac5) **OpenSCAD Workbench** is intended to offer interoperability with the open source software [OpenSCAD](http://www.openscad.org/). This program is not distributed as part of FreeCAD, but should be installed to make full use of this workbench. OpenSCAD should not be confused with [OpenCASCADE](https://wiki.freecad.org/OpenCASCADE), which is the geometrical kernel that FreeCAD uses to build geometry on screen. The OpenCASCADE libraries are always needed to use FreeCAD, while the OpenSCAD executable is entirely optional.

It contains a CSG importer to open the [CSG](https://wiki.freecad.org/OpenSCAD_CSG) files from OpenSCAD, and an exporter to output a CSG based tree. Geometry that is not based on CSG operations will be exported as a mesh.

This workbench contains functions to modify the CSG feature tree and repair models. It also contains general-purpose tools that do not require the installation of OpenSCAD; they can be used in conjunction with other workbenches. For example, the [Mesh Workbench](docs\workbenches\mesh.md) internally uses the OpenSCAD functions to perform operations with [meshes](https://wiki.freecad.org/Mesh), as they are quite robust.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f8fbb476-4bd7-4261-9a32-d08086e15c17)  
_OpenSCAD workbench icon_  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0865a63b-2504-45f8-9ffe-fff8127066be)  

## Dependencies

In FreeCAD 0.19, the Ply (Python-Lex-Yacc) module, which is used to import CSG files, was removed from the FreeCAD source code, as it is a third party library not developed by FreeCAD. As a result, you now need to install Ply before using the OpenSCAD Workbench. When using a pre-packaged, stable version of FreeCAD this dependency should be installed automatically in all platforms; in other cases, for example, when compiling from source, you may have to install it from an online repository.

In openSUSE this is done by:
```
sudo zypper install python3-ply
```
In Debian/Ubuntu based systems this is done like the following:
```
sudo apt install python3-ply
```
The general installation in all platforms can be done from the Python package index.
```
pip3 install --user ply
```

## OpenSCAD language and file format

The OpenSCAD language allows the use of variables and loops. It allows you to specify sub-modules to reuse geometry and code. This high degree of flexibility makes parsing very complex. Currently the OpenSCAD Workbench cannot handle the OpenSCAD language natively. Instead, if OpenSCAD is installed, it can be used to convert the input to the CSG format, which is a subset of the OpenSCAD language, and can be used as the input to OpenSCAD for further processing. During conversion all parametric behavior is lost, meaning that all variable names are discarded, loops expanded, and mathematical expressions evaluated.

## Tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9de46d13-4de9-45a5-b853-eb8886a8cdf5) [Color Code Shape](https://wiki.freecad.org/OpenSCAD_ColorCodeShape): Change the color of selected or all shapes based on their validity.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eb1513c4-9e34-47a8-beef-350f170c4e27) [Replace Object](https://wiki.freecad.org/OpenSCAD_ReplaceObject): Replace an object in the feature tree.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/df7a322d-3f48-4ae7-9b5b-338915c8f589) [Remove Subtree](https://wiki.freecad.org/OpenSCAD_RemoveSubtree): Removes the selected objects and all children that are not referenced from other objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/748fcc29-c47b-4785-b31c-cf88b4b4f595) [Refine Shape Feature](https://wiki.freecad.org/OpenSCAD_RefineShapeFeature): Create Refine Shape Feature.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0a18f045-84eb-45de-83e9-e4a714f974c6) [Mirror Mesh Feature](https://wiki.freecad.org/OpenSCAD_MirrorMeshFeature): Create Mirror Mesh Feature.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5bbc70f2-5bb2-4d5b-9bbd-be4234200d5c) [Scale Mesh Feature](https://wiki.freecad.org/OpenSCAD_ScaleMeshFeature): Scale a Mesh Feature.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f0948af5-686b-4a6e-a612-5958acbfcc50) [Resize Mesh Feature](https://wiki.freecad.org/OpenSCAD_ResizeMeshFeature): Resize a Mesh Feature.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/df643233-eba8-4e96-8a6b-2c3366831d93) [Increase Tolerance Feature](https://wiki.freecad.org/OpenSCAD_IncreaseToleranceFeature): Increases tolerance of edges/faces/vertex of selected object(s).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/49411bf6-a057-4cf0-aad5-6fb1da2d6478) [Convert Edges To Faces](https://wiki.freecad.org/OpenSCAD_Edgestofaces): Convert edges to faces. Useful to prepare imported DXF geometry for extrusion.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7c768432-75b1-48fc-9073-728d5d049727) [Expand Placements](https://wiki.freecad.org/OpenSCAD_ExpandPlacements): Expand all placements downwards the FeatureTree.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/59070d69-4951-4b26-beb8-f83c62fd594b) [Explode Group](https://wiki.freecad.org/OpenSCAD_ExplodeGroup): Explodes fused part primitives.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a0a4edff-7ad6-4d76-9e8b-2294714fa4cb) [Add OpenSCAD Element](https://wiki.freecad.org/OpenSCAD_AddOpenSCADElement): Add an OpenSCAD element by entering OpenSCAD code into the task panel.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8026c4fa-6354-42b2-bd6d-9061ea2de7c6) [Mesh Boolean](https://wiki.freecad.org/OpenSCAD_MeshBoolean): Creates new mesh object by boolean operation from shapes.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ccfbf9ee-b3e0-4e15-aa1e-74135775588e) [Hull](https://wiki.freecad.org/OpenSCAD_Hull): Applies a hull to selected shapes.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/825d32f7-a0f9-48d0-b35a-1b8dd5cc192f) [Minkowski](https://wiki.freecad.org/OpenSCAD_Minkowski): Applies a minkowski sum to selected shapes.

## Preferences

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e803cf31-31f7-405f-a555-75aa47b6b817) [Preferences](https://wiki.freecad.org/OpenSCAD_Preferences): preferences available for the OpenSCAD tools.

## Limitations

OpenSCAD creates constructive solid geometry, as well as imports mesh files and extrudes 2D geometry from DXF files. FreeCAD allows you to create CSG with primitives as well. The FreeCAD geometry kernel (OCCT) works using a boundary representation. Therefore conversion from CSG to BREP should, in theory, be possible whereas conversion from BREP to CSG is, in general, not.

OpenSCAD works internally on meshes. Some operations which are useful on meshes are not meaningful on a BREP model and can not be fully supported. Among these are convex hull, minkowski sum, glide and subdiv. Currently we run the OpenSCAD binary in order to perform hull and minkwoski operations and import the result. This means that the involved geometry will be triangulated. In OpenSCAD non-uniform scaling is often used, which does not impose any problems when using meshes. In our geometry kernel geometric primitives (lines, circular sections, etc) are converted to BSpline prior to performing such deformations. Those BSplines are known to cause trouble in later boolean operations. An automatic solution is not available at the moment. Please feel free to post to the forum if you encounter such problems. Often such problems can be solved be remodeling small parts. A deformation of a cylinder can substituted by an extrusion of an ellipses.

## Importing text

Importing OpenSCAD code with texts requires that the fonts that are used are properly installed on your system. You can verify this by opening OpenSCAD as a standalone tool and checking the list in **Help → Font List**. The list will also give you the correct font names. If a font does not appear in the list after installing, you may have to manually copy the font file to the appropriate system directory.

Importing texts is relatively slow. Behind the scenes FreeCAD uses a DXF file created by OpenSCAD. The more contours there are the slower the import.

It can be a good idea to first import a simple test case (replace `NameOfFont` with the correct font name):
```
TESTFONT="NameOfFont";
linear_extrude(0.001) {
  text("A", size=5, font=TESTFONT, script="Latn");
};
```
The `script="Latn"` parameter can be left out here, but is required if the text string does not contain any letters, but only punctuation and/or numbers.

Please note that `use <FONT>`; statements in your source files are ignored when importing in FreeCAD. Under OpenSCAD the effect of a `use` statement is that the provided font file is temporarily added to the list of known fonts (although even there the statement does not work when a script is modified interactively).

## Hints

When importing DXF set the Draft precision to a sensible amount as this will affect the detection of connected edges.

If FreeCAD crashes when importing CSG, it is strongly recommended that you enable "automatically check model after boolean operation" in **Menu → Edit → Preferences → Part Design → Model setting**.

## Tutorials

- [Import OpenSCAD code](https://wiki.freecad.org/Import_OpenSCAD_code)

## Links

- The official OpenSCAD project source code repository hosted on [GitHub](https://github.com/openscad/openscad).
- Open tickets tagged "OpenSCAD" on the [FreeCAD GitHub issue tracker](https://github.com/FreeCAD/FreeCAD/labels/WB%20OpenSCAD). There are also tickets on the now archived [mantis bugtracker](https://freecadweb.org/tracker/search.php?tag_string=OpenSCAD).
- Models tagged with "OpenSCAD" on [Thingiverse](http://www.thingiverse.com/tag:openscad).
