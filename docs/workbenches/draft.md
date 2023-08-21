# Draft Workbench

## Introduction

The ![Draft_Workbench](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5d41c04c-6df5-4d78-8856-0459c168cd98) Draft Workbench is primarily focused on the creation and modification of 2D objects in FreeCAD. But it is not restricted to the XY plane of the global coordinate system. Its objects can have any orientation and position in 3D space, and some Draft objects can either be planar or non-planar.

Draft objects can be used for general drafting, similar to what can be done with Inkscape or AutoCAD. But they can also form the base for the creation of 3D objects in other workbenches. A [Draft Wire](https://wiki.freecad.org/Draft_Wire) may define the path of an [Arch Wall](https://wiki.freecad.org/Arch_Wall), a [Draft Polygon](https://wiki.freecad.org/Draft_Polygon) can be extruded with [Part Extrude](https://wiki.freecad.org/Part_Extrude), etc. Many of the [Draft modifier tools](https://wiki.freecad.org/Draft_Workbench#Modification) can be applied to 2D and 3D objects created with other workbenches as well. You can, for example, [move](https://wiki.freecad.org/Draft_Move) a Sketch or create a [Draft OrthoArray](https://wiki.freecad.org/Draft_OrthoArray) from a [Part](https://wiki.freecad.org/Part_Workbench) object.

The Draft Workbench also provides tools to define a [working plane](https://wiki.freecad.org/Draft_SelectPlane), a [grid](https://wiki.freecad.org/Draft_Snap_Grid), and a [snapping system](https://wiki.freecad.org/Draft_Snap) to precisely control the position of geometry.

If your primary goal is the production of complex 2D drawings and [DXF](https://wiki.freecad.org/DXF) files, and you don't need 3D modelling, FreeCAD may not be the right choice for you. You may wish to consider a dedicated software program for technical drafting instead, such as [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD) or [QCad](https://en.wikipedia.org/wiki/QCad).  

![Draft_Workbench_Example](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8f4c2dae-96b0-4ab0-935e-03a9cb1e5c25)

_The image shows the [grid](https://wiki.freecad.org/Draft_Snap_Grid) aligned with the XY plane.
On the left, in white, are several planar objects.
On the right, a non-planar [Draft Wire](https://wiki.freecad.org/Draft_Wire) used as the Path Object of a [Draft PathArray](https://wiki.freecad.org/Draft_PathArray)._

## Drafting

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eb1eceb7-5ce6-41c2-9509-3c257163c1e1) [Line](https://wiki.freecad.org/Draft_Line): creates a straight line.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/06a50946-696b-45ba-8dc5-90108aaf083a) [Polyline](https://wiki.freecad.org/Draft_Wire): creates a polyline (also called wire), a sequence of several connected line segments.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/17e62e8e-19cb-4b4d-8b9b-9926cfb9fc30) [Fillet](https://wiki.freecad.org/Draft_Fillet): creates a fillet, a rounded corner, or a chamfer, a straight edge, between two Draft Lines.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0319da6a-9e24-4c44-b7c2-a0438f9a71f6) Arc tools:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7beed0fd-5fc1-43dc-8f86-e1d578e3e13b) [Arc](https://wiki.freecad.org/Draft_Arc): creates a circular arc from a center, a radius, a start angle and an aperture angle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c077f5c8-77ee-4195-b4dd-f1ce3f179b38) [Arc by 3 points](https://wiki.freecad.org/Draft_Arc_3Points): creates a circular arc from three points that define its circumference.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/70c8daf4-c11f-4b70-a810-5cde1d6d872b) [Circle](https://wiki.freecad.org/Draft_Circle): creates a circle from a center and a radius.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/13606179-e04f-4922-9fea-00e4f52e3b58) [Ellipse](https://wiki.freecad.org/Draft_Ellipse): creates an ellipse from two points defining a rectangle in which the ellipse will fit.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b564ac79-2263-4780-813b-4324f42d119a) [Rectangle](https://wiki.freecad.org/Draft_Rectangle): creates a rectangle from two points.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b4ad5656-680e-4fff-92e8-8988c4031396) [Polygon](https://wiki.freecad.org/Draft_Polygon): creates a regular polygon from a center and a radius.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/75733668-719e-4e7d-846f-fabb5699f471) [B-spline](https://wiki.freecad.org/Draft_BSpline): creates a B-spline curve from several points.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9c0b9148-cba6-4743-88cf-9584728d063b) Bézier tools:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9667269c-591b-4407-9b58-ed72f1835b2e) [Cubic Bézier curve](https://wiki.freecad.org/Draft_CubicBezCurve): creates a Bézier curve of the third degree.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a007dd56-220d-4e83-90b2-bdbaf66fd326) [Bézier curve](https://wiki.freecad.org/Draft_BezCurve): creates a Bézier curve from several points.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7aba04c5-896b-4429-b2a9-4c8758a58c39) [Point](https://wiki.freecad.org/Draft_Point): creates a simple point.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/62454380-4524-41d8-af8f-dd10a28e871b) [Facebinder](https://wiki.freecad.org/Draft_Facebinder): creates a surface object from selected faces.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/03502c9d-9a4b-4b3f-a826-c46def04ad25) ShapeString](https://wiki.freecad.org/Draft_ShapeString): creates a compound shape that represents a text string.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6b013767-3cd1-4181-aa79-94d8a70c083f) [Hatch](https://wiki.freecad.org/Draft_ShapeString): creates hatches on the planar faces of a selected object. introduced in version 0.20

## Annotation

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9d3b6713-7db9-4ba8-b555-1b7c0ea087fb) [Text](https://wiki.freecad.org/Draft_Text): creates a multi-line text at a given point.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1689a1f4-c800-41e5-8db1-7424396ab235) [Dimension](https://wiki.freecad.org/Draft_Text): creates a linear dimension, a radial dimension or an angular dimension.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d7584abc-3b97-46d6-a2c7-a7a6484d3bad) [Label](https://wiki.freecad.org/Draft_Label): creates a multi-line text with a 2-segment leader line and an arrow.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3da61916-2e2f-42fd-9a5a-3bf0f729363b) [Annotation styles](https://wiki.freecad.org/Draft_AnnotationStyleEditor): allows you to define styles that affect the visual properties of annotation-like objects.

## Modification

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e9e5817a-95e5-435a-b077-d191b4ee0d46) [Move](https://wiki.freecad.org/Draft_Move): moves or copies selected objects from one point to another.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/28bcad9e-69b2-4c2f-ade1-876865de7cc9) [Rotate](https://wiki.freecad.org/Draft_Rotate): rotates or copies selected objects around a center point by a given angle.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0408f5b1-034f-4fc8-8619-0d3f8c794283) [Scale](https://wiki.freecad.org/Draft_Scale): scales or copies selected objects around a base point.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/039570b7-1446-4a2c-93a5-c3a0837e9bce) [Mirror](https://wiki.freecad.org/Draft_Mirror): creates mirrored copies from selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7006ab25-4cef-4355-ba3f-4b6479b43182) [Offset](https://wiki.freecad.org/Draft_Offset): offsets each segment of a selected object over a given distance, or creates an offset copy of the selected object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c1a592f4-6c58-47c5-9e88-8da4a357c3f6) [Trimex](https://wiki.freecad.org/Draft_Trimex): trims or extends a selected object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3271c175-88a5-4dce-baf5-c01dd2118363) [Stretch](https://wiki.freecad.org/Draft_Stretch): stretches objects by moving selected points.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/75849734-0d5b-4b05-9de2-a5c9aef2e9d4) [Clone](https://wiki.freecad.org/Draft_Clone): creates linked copies, clones, of selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a0f3f593-5ad1-4715-b421-6876e938dfb8) Array tools:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9d36d621-66f5-4318-96a7-14f8c3d1e8b6) [Array](https://wiki.freecad.org/Draft_OrthoArray): creates an orthogonal array from a selected object. It can optionally create a [Link](https://wiki.freecad.org/App_Link) array.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/281f3468-a53d-4621-a47c-ce32556284b5) [Polar array](https://wiki.freecad.org/Draft_PolarArray): creates an array from a selected object by placing copies along a circumference. It can optionally create a [Link](https://wiki.freecad.org/App_Link) array.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/81289fc5-17ed-4244-9077-a619565c6485) [Circular array](https://wiki.freecad.org/Draft_CircularArray): creates an array from a selected object by placing copies along concentric circumferences. It can optionally create a [Link](https://wiki.freecad.org/App_Link) array.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d04e596f-0568-446c-aa19-d78e4d041beb) [Path array](https://wiki.freecad.org/Draft_PathArray): creates an array from a selected object by placing copies along a path.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/27ea0347-2450-4d0b-abb6-942f59c2a85a) [Path Link array](https://wiki.freecad.org/Draft_PathLinkArray): idem, but create a [Link](https://wiki.freecad.org/App_Link) array instead of a regular array.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c87f02d9-acc6-434a-ae03-2d67680e4773) [Point Array](https://wiki.freecad.org/Draft_PointArray): creates an array from a selected object by placing copies at the points from a point compound.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/119b0135-efd6-4769-bd4a-71c484110655) [Point Link array](https://wiki.freecad.org/Draft_PointLinkArray): idem, but create a [Link](https://wiki.freecad.org/App_Link) array instead of a regular array.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cc11d219-ab9b-4d20-a7e0-54d99aace336) [Edit](https://wiki.freecad.org/Draft_Edit): puts selected objects in Draft Edit mode. In this mode the properties of objects can be edited graphically.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ae175b89-1b03-45e5-8fc5-699e905307c1) [Subelement highlight](https://wiki.freecad.org/Draft_SubelementHighlight): temporarily highlights selected objects, or the base objects of selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e29861ca-fc57-4dac-85f2-73c29c3accfc) [Join](https://wiki.freecad.org/Draft_Join): joins [Draft Lines](https://wiki.freecad.org/Draft_Line) and [Draft Wires](https://wiki.freecad.org/Draft_Wire) into a single wire.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ade14d05-d99a-406b-af7a-8a8a1e22df98) [Split](https://wiki.freecad.org/Draft_Split): splits a [Draft Line](https://wiki.freecad.org/Draft_Line) or [Draft Wires](https://wiki.freecad.org/Draft_Wire) at a specified point or edge.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/340903ad-fbd9-403a-88a6-b98ec7c75e96) [Upgrade](https://wiki.freecad.org/Draft_Upgrade): upgrades selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ba021b53-e66c-4d53-b911-2b69a8528cf2) [Downgrade](https://wiki.freecad.org/Draft_Downgrade): downgrades selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c7e516b2-3512-4caf-ab36-a3bff6599885) [Wire to B-spline](https://wiki.freecad.org/Draft_WireToBSpline): converts [Draft Wires](https://wiki.freecad.org/Draft_Wire) to [Draft BSplines](https://wiki.freecad.org/Draft_BSpline) and vice versa.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/61d10f2f-ad5b-43f2-a9c7-68f689bc610e) [Draft to Sketch](https://wiki.freecad.org/Draft_Draft2Sketch): converts **Draft** objects to [Sketcher Sketches](https://wiki.freecad.org/Sketcher_NewSketch) and vice versa.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f8b88bac-9f38-499a-91f2-ce3a0d79bf5a) [Set slope](https://wiki.freecad.org/Draft_Slope): slopes selected [Draft Lines](https://wiki.freecad.org/Draft_Line) or [Draft Wires](https://wiki.freecad.org/Draft_Wire) by increasing, or decreasing, the Z coordinate of all points after the first one.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b141d355-dc98-41bd-ad16-4be6b3143b9b) [Flip dimension](https://wiki.freecad.org/Draft_FlipDimension): rotates the dimension text of selected [Draft Dimensions](https://wiki.freecad.org/Draft_Dimension) 180° around the dimension line.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/931f57dd-f37a-4dfb-aa9b-6be6d77ba5aa) [Shape 2D view](https://wiki.freecad.org/Draft_Shape2DView): creates 2D projections from selected objects.

## Draft Tray

The [Draft Tray](https://wiki.freecad.org/Draft_Tray) allows selecting the working plane, defining style settings, toggling construction mode, and specifying the active layer or group.
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eab15b3e-cf9a-43e0-84d4-01cbc268c131)  

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/221291c9-f8ad-43ad-a842-a2c544c483a5) [Select Plane](https://wiki.freecad.org/Draft_SelectPlane): selects the current Draft working plane. Also available in the menu: **Draft → Utilities → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/abf4dce8-85dc-4139-87e8-b4b9e1246d40)
Select Plane**.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3e3f97a8-e809-42f8-aed1-33fbbf040dda) [Set style](https://wiki.freecad.org/Draft_SetStyle): sets the default style for new objects. Also available in the menu: **Draft → Utilities → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3b97d917-0a6c-4a30-a4b6-744280bac10d)
Set style**.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cba302d7-86f9-4ffc-965f-e9f0b56a6c6b) [Toggle construction mode](https://wiki.freecad.org/Draft_ToggleConstructionMode): switches Draft construction mode on or off. Also available in the menu: **Draft → Utilities → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4ed97922-186b-4cfc-b29f-c2d373d4d7ee)
Toggle construction mode**.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/34d284f4-7065-47cb-a4f3-7c4f331e5030) [AutoGroup](https://wiki.freecad.org/Draft_AutoGroup): changes the active [Draft Layer](https://wiki.freecad.org/Draft_Layer) or, optionally, the active [Std Group](https://wiki.freecad.org/Std_Group) or group-like [Arch](docs\workbenches\arch.md) object.

## Draft annotation scale widget

With the [Draft annotation scale widget](https://wiki.freecad.org/Draft_annotation_scale_widget) the Draft annotation scale can be specified.
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4ed81739-5d8b-4476-988c-c04e50ac9d2f)  

## Draft snap widget

The [Draft snap widget](https://wiki.freecad.org/Draft_snap_widget) can be used as an alternative for the [Draft snap toolbar](https://wiki.freecad.org/Draft_Workbench#Draft_snap_toolbar).
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a1cbfc41-c98d-43ce-9749-b8df8f6337a8)  

## Draft snap toolbar

The Draft snap toolbar allows selecting the active snap options. The buttons belonging to active options stay depressed. For general information about snapping see: [Draft Snap](https://wiki.freecad.org/Draft_Snap).

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e3a14665-ee8f-4c4b-af5b-05b88b6902ce) [Snap Lock](https://wiki.freecad.org/Draft_Snap_Lock): enables or disables snapping globally.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3357e68e-f8a5-40c3-9394-561d80ff2da6) [Snap Endpoint](https://wiki.freecad.org/Draft_Snap_Endpoint): snaps to the endpoints of edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fc992759-ff67-4389-91f2-8308a986129f) [Snap Midpoint](https://wiki.freecad.org/Draft_Snap_Midpoint): snaps to the midpoint of edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4e86642f-19fb-4da7-8de5-8ac04867707d) [Snap Center](https://wiki.freecad.org/Draft_Snap_Center): snaps to the center point of faces and circular edges, and to the **Placement** point of [Draft WorkingPlaneProxies](https://wiki.freecad.org/Draft_WorkingPlaneProxy) and [Arch BuildingParts](https://wiki.freecad.org/Arch_BuildingPart).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1f850dbf-9397-44bb-a06a-7ae2d3162213) [Snap Angle](https://wiki.freecad.org/Draft_Snap_Angle): snaps to the special cardinal points on circular edges, at multiples of 30° and 45°.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d3b8a519-3f82-42fc-97f5-b1d71055acdc) [Snap Intersection](https://wiki.freecad.org/Draft_Snap_Intersection): snaps to the intersection of two edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2474c4f6-ab9c-4dbb-bc33-930b2de18178) [Snap Perpendicular](https://wiki.freecad.org/Draft_Snap_Perpendicular): snaps to the perpendicular points on faces ([introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)) and edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d1622488-507c-40a7-aca9-4f56dd6632d9) [Snap Extension](https://wiki.freecad.org/Draft_Snap_Extension): snaps to an imaginary line that extends beyond the endpoints of straight edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/68dfb097-0117-4929-b5ef-dfe81bd07e13) [Snap Parallel](https://wiki.freecad.org/Draft_Snap_Parallel): snaps to an imaginary line parallel to straight edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/718bfa35-2d19-46d1-81f1-7d451b979db5) [Snap Special](https://wiki.freecad.org/Draft_Snap_Special): snaps to special points defined by the object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8ba23b92-2a38-471c-a862-25ac0225340e) [Snap Near](https://wiki.freecad.org/Draft_Snap_Near): snaps to the nearest point on faces and edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6f24bc5e-03f8-4c03-8017-cb8a9a10f762) [Snap Ortho](https://wiki.freecad.org/Draft_Snap_Ortho): snaps to imaginary lines that cross the previous point at multiples of 45°.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/971d6974-e033-460b-82ca-e38461256307) [Snap Grid](https://wiki.freecad.org/Draft_Snap_Grid): snaps to the intersections of grid lines.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c4864638-f698-4e42-99e0-96db9ddfcfe8) [Snap WorkingPlane](https://wiki.freecad.org/Draft_Snap_WorkingPlane): projects snap points onto the current [working plane](https://wiki.freecad.org/Draft_SelectPlane).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d30d6f39-dbee-4c99-946d-5b298bd6c268) [Snap Dimensions](https://wiki.freecad.org/Draft_Snap_Dimensions): shows temporary X and Y dimensions.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6bfacee6-a418-4bc6-93f2-23a908fdcabc) [Toggle Grid](https://wiki.freecad.org/Draft_ToggleGrid): switches the grid on or off.

## Draft utility tools toolbar

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0726be05-bad1-4719-b905-143f54310953) [Manage layers](https://wiki.freecad.org/Draft_LayerManager): allows to manage the layers in a document. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/383b646e-9b86-4722-bef5-ddba897cc3ca) [Add a new named group](https://wiki.freecad.org/Draft_AddNamedGroup): creates a named [Std Group](https://wiki.freecad.org/Std_Group) and moves selected objects to that group. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7cd4c10c-453d-40f4-8f40-bc50550c128d) [Move to group](https://wiki.freecad.org/Draft_AddToGroup): moves objects to a [Std Group](https://wiki.freecad.org/Std_Group). It can also ungroup objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/18697959-67be-4764-a5eb-11d67fcaeb45) [Select group](https://wiki.freecad.org/Draft_SelectGroup): selects the contents of [Std Groups](https://wiki.freecad.org/Std_Group) or group-like Arch objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3f97c0fa-b23c-4b40-bd67-38683b216e49) [Add to Construction group](https://wiki.freecad.org/Draft_AddConstruction): moves objects to the [Draft construction group](https://wiki.freecad.org/Draft_ToggleConstructionMode).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5873ee4f-a8a3-47fd-aec9-e5172d8aab9c) [Toggle normal/wireframe display](https://wiki.freecad.org/Draft_ToggleDisplayMode): switches the **Display Mode** property of selected objects between `Flat Lines` and `Wireframe`.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/927cd1bc-9e92-4a58-bc81-91291fd94050) [Create working plane proxy](https://wiki.freecad.org/Draft_WorkingPlaneProxy): creates a working plane proxy to save the current [Draft working plane](https://wiki.freecad.org/Draft_SelectPlane).

## Additional tools

The **Draft → Utilities** menu contains several tools. Most of them can also be accessed from toolbars or the [Draft Tray](https://wiki.freecad.org/Draft_Tray) and have already been mentioned above. For the following tools this is not the case:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0a89cc46-90fe-4d76-818a-c3a66f92d6ee) [Apply current style](https://wiki.freecad.org/Draft_ApplyStyle): applies the current style settings to selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/98902536-25e5-44eb-8d89-e433d1e4386e) [Layer](https://wiki.freecad.org/Draft_Layer): creates a [Draft Layer](https://wiki.freecad.org/Draft_Layer). Available in the [Draft utility tools toolbar](https://wiki.freecad.org/Draft_Workbench#Draft_utility_tools_toolbar) in version 0.20 and below.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/17bc34f6-bfa6-4a6e-ac37-6b7ea5b1b0e7) [Heal](https://wiki.freecad.org/Draft_Heal): heals problematic Draft objects found in very old files.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6a5edd5f-225e-4463-8068-9e572ae8d911) [Toggle continue mode](https://wiki.freecad.org/Draft_ToggleContinueMode): switches continue mode on or off.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0f99ecd8-0b66-49c0-938e-506ddc4637c1) [Show snap toolbar](https://wiki.freecad.org/Draft_ShowSnapBar): shows the [Draft snap toolbar](https://wiki.freecad.org/Draft_Workbench#Draft_snap_toolbar).

## Additional features

- [Working plane](https://wiki.freecad.org/Draft_SelectPlane): the plane in the [3D view](https://wiki.freecad.org/3D_view) where new Draft objects are created.
- [Snapping](https://wiki.freecad.org/Draft_Snap): select exact geometric points on, or defined by, existing objects or the grid.
- [Constraining](https://wiki.freecad.org/Draft_Constrain): for each subsequent point you can constrain the movement of the cursor to the X, Y, or Z direction.
- [Construction mode](https://wiki.freecad.org/Draft_ToggleConstructionMode): places new Draft objects in a dedicated group making it easier to hide or delete them.
- [Pattern](https://wiki.freecad.org/Draft_Pattern): Draft objects with a **Make Face** property can display an SVG pattern instead of a solid face color.

## Tree view context menu

The following additional options are available in the [Tree view](https://wiki.freecad.org/Tree_view) context menu:

### Default options

For most Draft objects the following option is available:
- Edit: edits the object. Depending on the object type either [Draft Edit](https://wiki.freecad.org/Release_note[s_0.21) or a dedicated edit solution is used. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
If there is an active document the context menu contains an additional sub-menu:
- Utilities: a subset of the tools available in the main Draft Utilities menu.
  
### Wire options

For a [Draft Line](https://wiki.freecad.org/Draft_Line) and a [Draft Wire](https://wiki.freecad.org/Draft_Wire) this additional option is available:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b091063-caad-4d35-835a-aa91b07aa5ea) Flatten: flattens the wire on the current [Draft working plane](https://wiki.freecad.org/Draft_SelectPlane). This option does not work properly in version 0.19 and below.

### Layer container options

For a [Draft LayerContainer](https://wiki.freecad.org/Draft_Layer) these additional options are available:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aab3be84-303f-4232-82d1-f5a13b3ced77) [Merge layer duplicates](https://wiki.freecad.org/Draft_Layer#Layer_container_options): merges all layers with the same base label.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/33615f73-0294-4c9b-a172-86d81a508b57) [Add new layer](https://wiki.freecad.org/Draft_Layer#Layer_container_options): adds a new layer to the current document.

### Layer options

For a [Draft Layer](https://wiki.freecad.org/Draft_Layer) these additional options are available:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cca816e2-3676-4e96-900a-78fdf55b9016) [Activate this layer](https://wiki.freecad.org/Draft_AutoGroup): activates the selected layer.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1fb29669-71e7-4919-9acf-d11ab03a93c7) [Select layer contents](https://wiki.freecad.org/Draft_SelectGroup): selects the objects inside the selected layer.

### Working plane proxy options

For a [Draft WorkingPlaneProxy](https://wiki.freecad.org/Draft_WorkingPlaneProxy) these additional options are available:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/02ccbbce-2be1-45b7-b9dc-9562d6a1d2ad) [Write camera position](https://wiki.freecad.org/Draft_WorkingPlaneProxy#Context_menu): updates the **View Data** property of the working plane proxy with the current [3D view](https://wiki.freecad.org/3D_view) camera settings.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e9c98345-8f05-4646-a318-1e09a3710a24) [Write objects state](https://wiki.freecad.org/Draft_WorkingPlaneProxy#Context_menu): updates the **Visibility Map** property of the working plane proxy with the current visibility state of objects in the document.

## 3D view context menu
The following additional options are available in the [3D view](https://wiki.freecad.org/3D_view) context menu:

### Default options

If there is an active document the context menu contains one additional sub-menu:

- Utilities: a subset of the tools available in the main Draft Utilities menu.

## Obsolete tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/36e8275d-c8be-464d-8232-e6b0ed5bb0bf) [Array](https://wiki.freecad.org/Draft_Array): creates an orthogonal array from a selected object. The created array can be turned into a [polar array](https://wiki.freecad.org/Draft_PolarArray) or a [circular array](https://wiki.freecad.org/Draft_CircularArray) by changing its **DataArray Type** property. Not available in version 0.21 and above.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/685ef09d-4759-4e2c-b1ff-f1cc6f94580a) [Drawing](https://wiki.freecad.org/Draft_Drawing): inserts views of selected objects into a [drawing](https://wiki.freecad.org/Drawing_Workbench) page. Not available in version 0.21 and above.

## Preferences

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1d7b8ed2-976a-4b13-ab3a-1d2d4e1c4753) [Preferences](https://wiki.freecad.org/Draft_Preferences): general preferences for the Draft Workbench.  
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1978ff9c-722d-4b5a-a26d-f3b8631cb1e8) [Import Export Preferences](https://wiki.freecad.org/Import_Export_Preferences): preferences available for importing from and exporting to different file formats.

## File formats

The Draft Workbench provides FreeCAD with importers and exporters for several file formats. These are used by the [Std Import](https://wiki.freecad.org/Std_Import) and [Std Export](https://wiki.freecad.org/Std_Import) commands.

- [Autodesk .DXF](https://wiki.freecad.org/Draft_DXF): imports and exports [Drawing Exchange Format](http://en.wikipedia.org/wiki/AutoCAD_DXF) files. See also [FreeCAD and DXF Import](https://wiki.freecad.org/FreeCAD_and_DXF_Import).
- [Autodesk .DWG](https://wiki.freecad.org/Draft_DXF): imports and exports DWG files via an external DWG converter. See also [FreeCAD and DWG Import](https://wiki.freecad.org/Draft_DXF).
- [Scalable Vector Graphics .SVG](https://wiki.freecad.org/Draft_SVG): imports and exports [Scalable Vector Graphics](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics) files.
- [Open Cad format .OCA](http://en.wikipedia.org/wiki/Scalable_Vector_Graphics): imports and exports [OCA/GCAD](http://groups.google.com/group/open_cad_format) files.
- [Airfoil Data Format .DAT](https://wiki.freecad.org/Draft_DAT): imports DAT files describing Airfoil profiles.

## Unit tests

See also: [Test Workbench](https://wiki.freecad.org/Testing).

To run the unit tests of the workbench execute the following from the operating system terminal:

```python
freecad -t TestDraft
```

## Scripting

See also: [Autogenerated API documentation](https://freecad.github.io/SourceDoc/) and [FreeCAD Scripting Basics](https://wiki.freecad.org/FreeCAD_Scripting_Basics).

The workbench includes a module to create samples of all objects in a new document.

Use this to test that all objects are produced correctly:

```python
import drafttests.draft_test_objects as dto
doc = dto.create_test_file()
```

Inspecting the code of this module can help to understand the programming interface.

## Tutorials

- [Draft tutorial](https://wiki.freecad.org/Draft_tutorial)
- [Draft ShapeString tutorial](https://wiki.freecad.org/Draft_tutorial)
