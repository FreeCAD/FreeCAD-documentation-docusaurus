# Points Workbench

## Introduction

The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a24ee2f2-af29-454b-ad11-d8e1db94cca6) **Points Workbench** offers specific tools for working with [point clouds](http://en.wikipedia.org/wiki/Point_cloud). The workbench is still in development.

A point cloud is a collection of points in 3D space. A point cloud is generally produced by scanning the surface of a solid object. The cloud of points can then be used for many purposes, including building a mesh for the object, reconstructing the surfaces and solid volumes, reverse engineering, visualization, and quality inspection.

![Points workbench icon](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/98eb72a0-7fbd-4ea0-a7cf-6b95d95daf5a)  
_Points workbench icon_  

## Tools

All Points Workbench tools can be accessed from the **Points** menu. Some tools are also available in the **Points tools** toolbar.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/216589b2-1004-4ed6-9b9f-e2d9b3c18b24) [Convert to points](https://wiki.freecad.org/Points_Convert): Creates point clouds from shape objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fee76445-da6b-4f18-98fc-6f254ea6145f) [Structured point cloud](https://wiki.freecad.org/Points_Structure): Creates a structured point cloud from the points of an existing point cloud.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6dcd3219-9764-403d-9b38-85dc08aa63c7) [Import points](https://wiki.freecad.org/Points_Import): Imports a point cloud from a file.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4bd4a4a0-0c4c-4775-9dbe-76810024a54a) [Export points](https://wiki.freecad.org/Points_Export): Exports a point cloud to a file.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/74b883e5-1e06-49ff-9384-b5181b2938e2) [Cut point cloud](https://wiki.freecad.org/Points_PolyCut): Cuts points from point clouds.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3f8913fc-70aa-47ed-9111-d341907b7e45) [Merge point clouds](https://wiki.freecad.org/Points_Merge): Creates a point cloud by combining the points of two or more point clouds.

## Notes

- [Draft](docs\workbenches\draft.md) commands such as ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3f460415-e461-4ecf-a29d-3c12d3b6794d) [Draft Line](https://wiki.freecad.org/Draft_Line) and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5e87568f-5e1a-4619-af65-6a9675f7ce0e) [Draft B-spline](https://wiki.freecad.org/Draft_BSpline) can be used to connect the points in a point cloud. Use ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d709b9d6-3c6d-42cf-84ca-e6d2ba6e5650) [Draft Snap Endpoint](https://wiki.freecad.org/Draft_Snap_Endpoint) to snap to the points.
- [Python](https://wiki.freecad.org/Python) can be used to analyze and process point clouds. See the following forum discussions:
  - [Inspecting Point cloud](http://forum.freecadweb.org/viewtopic.php?f=3&t=16098)
  - [Fläche aus Messwerten](http://forum.freecadweb.org/viewtopic.php?f=13&t=15988) (German)
  - [Schnitte durch Flächen aus Messwerten](http://forum.freecadweb.org/viewtopic.php?f=13&t=16103) (German)
