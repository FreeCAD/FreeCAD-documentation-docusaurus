# Mesh Workbench

## Introduction

The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d4556ede-b7c0-41e0-a97e-fd187c75d8d1) **Mesh Workbench** handles [triangle meshes](http://en.wikipedia.org/wiki/Triangle_mesh). Meshes are a special type of 3D object composed of triangular faces connected by their vertices and edges.

Many 3D applications, like [Sketchup](http://en.wikipedia.org/wiki/Sketchup), [Blender](http://en.wikipedia.org/wiki/Blender_(software)), [Maya](http://en.wikipedia.org/wiki/Maya_(software)), and [3D Studio Max](http://en.wikipedia.org/wiki/3d_max), use meshes as their primary type of 3D object. Since meshes are very simple objects, containing only vertices (points), edges, and triangular faces, they are very easy to create, modify, subdivide, and stretch, and can easily be passed from one application to another without any loss of details. In addition, since meshes contain very simple data, 3D applications can usually manage very large quantities of them without using a lot of resources. For these reasons, meshes are often the 3D object type of choice for applications dealing with movies, animation, and image creation.

However, in the field of engineering, meshes present a big limitation: they cannot accurately define curved surfaces. This is why FreeCAD relies on [Brep](http://en.wikipedia.org/wiki/Boundary_representation) instead. The Mesh Workbench offers some commands to directly manipulate meshes, but it is most often used to import 3D mesh data and convert it to a solid for use with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/abb5c30c-fc56-4103-aeac-8919614eebfa) [Part Workbench](docs\workbenches\part.md) or ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a25ef1d3-a92a-4b21-996f-5d79aac0956f) [PartDesign Workbench](docs\workbenches\part-design.md).

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e001dda0-5244-42c2-b649-624e0814f77d)  
_Mesh workbench icon_

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/749e4466-cbc5-4fb7-9fd5-70002c940cf4)  

## Tools

All Mesh Workbench tools can be accessed from the **Meshes** menu. Almost all are also available in one of the Mesh toolbars.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3d98faeb-d428-4bbc-a35a-c58dfaaeaeb4) [Import mesh](https://wiki.freecad.org/Mesh_Import): Imports a mesh object from a file.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/008eccda-6703-49b4-998e-b25a828d93c5) [Export mesh](https://wiki.freecad.org/Mesh_Export): Exports a mesh object to a file.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4203fa31-60c8-46a6-980a-28751ea16b77) [Create mesh from shape](https://wiki.freecad.org/Mesh_FromPartShape): Creates mesh objects from shape objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bf55787b-33a6-4fe5-9495-e36712740fef) [Refinement](https://wiki.freecad.org/Mesh_RemeshGmsh): Remeshes a mesh object.
- Analyze
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a18a016c-e028-408c-89cf-9720f5d2f191) [Evaluate and repair mesh](https://wiki.freecad.org/Mesh_Evaluation): Evaluates and repairs a mesh object.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0bfcb8fe-8829-4d80-a7f9-58bf2a1eae45) [Face info](https://wiki.freecad.org/Mesh_EvaluateFacet): Shows information about faces of mesh objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1c2493f8-0d19-43dc-8681-1048488e87c2) [Curvature info](https://wiki.freecad.org/Mesh_CurvatureInfo): Shows the absolute curvature of [curvature objects](https://wiki.freecad.org/Mesh_VertexCurvature) at selected points.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/51709dd8-d098-480f-8857-1fae6a6db2f5) [Check solid mesh](https://wiki.freecad.org/Mesh_EvaluateSolid): Checks if a mesh object is solid.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/972e60a5-7494-42c3-ae20-200bbc9f4c70) [Boundings info](https://wiki.freecad.org/Mesh_BoundingBox): Shows the bounding box coordinates of a mesh object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b11d095b-7c56-444e-a33a-98e936bc7a17) [Curvature plot](https://wiki.freecad.org/Mesh_VertexCurvature): Creates Mesh Curvature objects for mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8f4faac0-6188-4c94-a1e6-804e3d21c838) [Harmonize normals](https://wiki.freecad.org/Mesh_HarmonizeNormals): Harmonizes the normals of mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8b81aab4-cfae-43d0-9e86-c9783dbc8ac2) [Flip normals](https://wiki.freecad.org/Mesh_FlipNormals): Flips the normals of mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/702ac65c-b543-455d-aea3-5c4ba2d3f247) [Fill holes](https://wiki.freecad.org/Mesh_FillupHoles): Fills holes in mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7e9db468-4b65-48b1-911e-661904fd9a58) [Close hole](https://wiki.freecad.org/Mesh_FillInteractiveHole): Fills selected holes in mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/14a4dad0-6277-43e4-a786-89ff28b142af) [Add triangle](https://wiki.freecad.org/Mesh_AddFacet): Adds faces along a boundary of an open mesh object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/461acdaa-eb0b-42e8-9218-c5ecb0b062a5) [Remove components](https://wiki.freecad.org/Mesh_RemoveComponents): Removes faces from mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0793ee36-95bb-4eb0-80d5-5d9e30e710bb) [Remove components by hand](https://wiki.freecad.org/Mesh_RemoveCompByHand): Removes components from mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3a4db12e-11af-45e2-92be-8670bf65e13a) [Create mesh segments](https://wiki.freecad.org/Mesh_Segmentation): Creates separate mesh segments for specified surface types of a mesh object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1176bfd1-57c2-4ff0-8ead-58ad7ffb3be4) [Create mesh segments from best-fit surfaces](https://wiki.freecad.org/Mesh_SegmentationBestFit): Creates separate mesh segments for specified surface types of a mesh object and can identify their parameters.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1a403531-c6c7-4ae2-86ef-b25925932682) [Smooth](https://wiki.freecad.org/Mesh_Smoothing): Smooths mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8cb9698e-b5d4-44b8-98a5-0fd3b6db8ed0) [Decimation](https://wiki.freecad.org/Mesh_Decimating): Reduces the number of faces in mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f3b9d036-6017-41f5-b88d-2d30397fd3b1) [Scale](https://wiki.freecad.org/Mesh_Scale): Scales mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/463376a9-d1f6-460a-b042-6ae26465a5f3) [Regular solid](https://wiki.freecad.org/Mesh_BuildRegularSolid): Creates a regular parametric solid mesh object.
- Boolean
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4be2e6e3-5861-4144-9d47-9ca691c64a87) [Union](https://wiki.freecad.org/Mesh_Union): Creates a mesh object that is the union of two mesh objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d60be0ed-7db8-4367-9301-e94fd050740b) [Intersection](https://wiki.freecad.org/Mesh_Intersection): Creates a mesh object that is the intersection of two mesh objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9e4b6fae-722d-402d-988d-e3276001c051) [Difference](https://wiki.freecad.org/Mesh_Difference): Creates a mesh object that is the difference of two mesh objects.
- Cutting
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7e2d1f73-d347-4f66-8e43-02e519f0fb89) [Cut mesh](https://wiki.freecad.org/Mesh_PolyCut): Cuts whole faces from mesh objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a79a1ef4-950c-47dd-98d1-1b1e96878125) [Trim mesh](https://wiki.freecad.org/Mesh_PolyTrim): Trims faces and parts of faces from mesh objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5e2f4d31-0484-4591-94a6-97dade82ac44) [Trim mesh with a plane](https://wiki.freecad.org/Mesh_TrimByPlane): Trims faces and parts of faces on one side of a plane from a mesh object.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/722bbd28-dc4f-43af-b5ce-4ee519e424cc) [Create section from mesh and plane](https://wiki.freecad.org/Mesh_SectionByPlane): Creates a cross section across a mesh object.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dbac9561-7e05-46a1-8731-3a87fd75b72d) [Cross-sections](https://wiki.freecad.org/Mesh_CrossSections): Creates multiple cross sections across mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a8780079-a101-4042-90d6-28e4b12f57dc) [Merge](https://wiki.freecad.org/Mesh_Merge): Creates a mesh object by combining the meshes of two or more mesh objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6bdf8ad5-d30e-4f5f-9c53-eb6d1c338166) [Split by components](https://wiki.freecad.org/Mesh_SplitComponents): Splits a mesh object into its components.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/00203fb0-512c-4d44-8da7-693bfe0b5b8d) [Unwrap Mesh](https://wiki.freecad.org/MeshPart_CreateFlatMesh): Creates a flat representation of a mesh object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c87c5bb6-e997-44fd-a9b6-80f4ff09a24d) [Unwrap Face](https://wiki.freecad.org/MeshPart_CreateFlatFace): Creates a flat representation of a face of a shape object.

## Preferences

There are some [export preferences related to Mesh Formats](https://wiki.freecad.org/Import_Export_Preferences#Mesh_Formats) but these are not used by commands belonging to this workbench. They are used by the [Std Export](https://wiki.freecad.org/Std_Export) command.

Mesh Workbench preferences can be found in the following categories of the [Preferences Editor](https://wiki.freecad.org/Preferences_Editor):

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5a90bd60-3ed9-45e2-8aa7-2acf9a6b6f17) [Display](https://wiki.freecad.org/Preferences_Editor#Display): On the [Mesh view](https://wiki.freecad.org/Preferences_Editor#Mesh_view) tab several preferences can be set.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9049a53d-18a1-49a7-afb9-f801e95c6a78) [OpenSCAD](https://wiki.freecad.org/OpenSCAD_Preferences): The [Mesh Union](https://wiki.freecad.org/Mesh_Union), [Mesh Intersection](https://wiki.freecad.org/Mesh_Intersection), and [Mesh Difference](https://wiki.freecad.org/Mesh_Difference) commands require [OpenSCAD](http://www.openscad.org/) and use the **OpenSCAD executable** preference to find its executable.

## Notes

- More mesh tools are available in the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9c1ec381-ebf4-48fd-a05d-ed4567e1cc11) [OpenSCAD Workbench](docs\workbenches\openSCAD.md).
- See [Mesh Scripting](https://wiki.freecad.org/Mesh_Scripting) to manipulate and create meshes using [Python](https://wiki.freecad.org/Python).
- See also [FreeCAD and Mesh Import](https://wiki.freecad.org/FreeCAD_and_Mesh_Import)
- See [Asymptote](https://wiki.freecad.org/Asymptote) to export meshes to the Asymptote format.
  
