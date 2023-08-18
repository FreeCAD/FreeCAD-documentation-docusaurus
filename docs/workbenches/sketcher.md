# Sketcher Workbench

## Introduction

The FreeCAD ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a7fb9163-12db-40f2-84ef-6dc6ca201743) **Sketcher Workbench** is used to create 2D Sketches intended for use in the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/464ed714-8fc7-4bc1-af0e-1b26c66cf8fb) [PartDesign Workbench](docs\workbenches\part-design.md), ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/68c850c3-58b4-49bb-93bc-1c4de4c9bfeb) [Arch Workbench](docs\workbenches\arch.md), and other workbenches. Generally, a 2D drawing is considered the starting point for most CAD models, as a 2D sketch can be "extruded" to create a 3D shape; further 2D sketches can be used to create other features like pockets, ridges, or extrusions on top of the previously built 3D shapes. Together with boolean operations defined in the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8668be3c-e793-4a23-94ba-c56f831667cf) [Part Workbench](docs\workbenches\part.md), the Sketcher forms the basis of the [constructive solid geometry](https://wiki.freecad.org/Constructive_solid_geometry) (CSG) method of building solids. Moreover, together with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9f5752b1-d1e7-4a7a-a0ac-90ea7e52694e) [PartDesign Workbench](docs\workbenches\part-design.md) operations, the Sketcher also forms the basis of the [feature editing](https://wiki.freecad.org/Feature_editing) methodology of creating solids.

The Sketcher workbench features "constraints", allowing 2D shapes to follow precise geometrical definitions in terms of length, angles, and relationships (horizontality, verticality, perpendicularity, etc.). A constraint solver calculates the constrained extent of 2D geometry and allows interactive exploration of the degrees-of-freedom of the sketch.

![Sketcher workbench icon](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0005bf1d-294e-49e3-989e-8c5040bcac96)  
_Sketcher workbench icon_  

![A fully constrained sketch](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cf710c33-990f-4618-aa1d-82c465a039ac)  
_A fully constrained sketch_  

## Basics of constraint sketching

To explain how the Sketcher works, it may be useful to compare it to the "traditional" way of drafting.

### Traditional Drafting

The traditional way of CAD drafting inherits from the old [drawing board](http://en.wikipedia.org/wiki/Drawing_board). [Orthogonal (2D) views](http://en.wikipedia.org/wiki/Multiview_orthographic_projection) are drawn manually and intended for producing technical drawings (also known as blueprints). Objects are drawn precisely to the intended size or dimension. If you want to draw an horizontal line 100mm in length starting at (0,0), you activate the line tool, either click on the screen or input the (0,0) coordinates for the first point, then make a second click or input the second point coordinates at (100,0). Or you will draw your line without regard to its position, and move it afterwards. When you've finished drawing your geometries, you add dimensions to them.

### Constraint Sketching

The **Sketcher** moves away from this logic. Objects do not need to be drawn exactly as you intend to, because they will be defined later on by constraints. Objects can be drawn loosely, and as long as they are unconstrained, can be modified. They are in effect "floating" and can be moved, stretched, rotated, scaled, and so on. This gives great flexibility in the design process.

### What are constraints?

Instead of dimensions, Constraints are used to limit the degrees of freedom of an object. For example, a line without constraints has 4 Degrees Of Freedom (abbreviated as "DOF"): it can be moved horizontally or vertically, it can be stretched, and it can be rotated.

Applying a horizontal or vertical constraint, or an angle constraint (relative to another line or to one of the axes), will limit its capacity to rotate, thus leaving it with 3 degrees of freedom. Locking one of its points in relation to the origin will remove another 2 degrees of freedom. And applying a dimension constraint will remove the last degree of freedom. The line is then considered **fully-constrained**.

Multiple objects can be constrained between one another. Two lines can be joined through one of their points with the coincident point constraint. An angle can be set between them, or they can be set perpendicular. A line can be tangent to an arc or a circle, and so on. A complex Sketch with multiple objects will have a number of different solutions, and making it **fully-constrained** means that just one of these possible solutions has been reached based on the applied constraints.

There are two kinds of constraints: geometric and dimensional. They are detailed in the '[Tools](https://wiki.freecad.org/Sketcher_Workbench#Tools)' section below.

### What the Sketcher is not good for

The Sketcher is not intended for producing 2D blueprints. Once sketches are used to generate a solid feature, they are automatically hidden. Constraints are only visible in Sketch edit mode.

If you only need to produce 2D views for print, and don't want to create 3D models, check out the [Draft workbench](docs\workbenches\part-design.md). Unlike Sketcher elements, Draft objects don't use constraints; they are simple shapes defined at the moment of creation. Both Draft and Sketcher can be used for 2D geometry drawing, and 3D solid creation, although their preferred use is different:
- The Sketcher Workbench is normally used together with the [Part](docs\workbenches\part.md) and [PartDesign](docs\workbenches\part-design.md) workbenches to create solids.
- The Draft Workbench is normally used for simple planar drawings over a grid, as when drawing an architectural floor plan. In these situations Draft is mostly used together with the [Arch Workbench](docs\workbenches\arch.md).
  
The tool [Draft2Sketch](https://wiki.freecad.org/Draft_Draft2Sketch) converts a Draft object to a Sketch object, and vice versa. Many tools that require a 2D element as input work with either type of object as an internal conversion is done automatically.

## Sketching Workflow

A Sketch is always 2-dimensional (2D). To create a solid, a 2D Sketch of a single enclosed area is created and then either Padded or Revolved to add the 3rd dimension, creating a 3D solid from the 2D Sketch.

If a Sketch has segments that cross one another, places where a Point is not directly on a segment, or places where there are gaps between endpoints of adjacent segments, Pad or Revolve won't create a solid. Sometimes a Sketch which contains lines which cross one another will work for a simple operation such as Pad, but later operations such as Linear Pattern will fail. It is best to avoid crossing lines. The exception to this rule is that it doesn't apply to Construction (blue) Geometry.

Inside the enclosed area we can have smaller non-overlapping areas. These will become voids when the 3D solid is created.

Once a Sketch is fully constrained, the Sketch features will turn green; Construction Geometry will remain blue. It is usually "finished" at this point and suitable for use in creating a 3D solid. However, once the Sketch dialog is closed it may be worthwhile going to ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e1ec10af-d0da-4056-85eb-7dba9032c1c2) [Part Workbench](docs\workbenches\part.md) and running ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5ad880f3-2afa-46d2-83c9-743cc60fbe9c) [Check geometry](https://wiki.freecad.org/Part_CheckGeometry) to ensure there are no features in the Sketch which may cause later problems.

## Tools

The Sketcher Workbench tools are located in the Sketch menu and/or several toolbars. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21): Almost all Sketcher toolbars are only displayed while a sketch is in edit mode. The only exception is the [Sketcher toolbar](https://wiki.freecad.org/Sketcher_Workbench#Sketcher_toolbar) which is only displayed if no sketch is in edit mode.

[introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21): If a sketch is in edit mode, the Structure toolbar is hidden as none of its tools can then be used.

### General

#### Sketcher toolbar

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/70ce047b-4e42-4388-a5d6-1c3a8ab7769a) [Create sketch](https://wiki.freecad.org/Sketcher_NewSketch): Creates‎ a new sketch on a selected face or plane. If no face is selected while this tool is executed the user is prompted to select a plane from a pop-up window.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/edf31e49-df61-4f71-9bc1-873d3e7f5fa7) [Edit sketch](https://wiki.freecad.org/Sketcher_EditSketch): Edit the selected Sketch. This will open the [Sketcher Dialog](https://wiki.freecad.org/Sketcher_Dialog).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e8d6b538-620e-406e-89ba-cb3f3c582ee7) [Map sketch to face](https://wiki.freecad.org/Sketcher_MapSketch): Maps a sketch to the previously selected face of a solid.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b0568a7d-ee1d-47f9-8492-1acc2dad24e0) [Reorient sketch](https://wiki.freecad.org/Sketcher_ReorientSketch): Allows you to attach the sketch to one of the main planes.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b2552a04-0230-46e1-8ab2-657bfbae56d4) [Validate sketch](https://wiki.freecad.org/Sketcher_ValidateSketch): Verify the tolerance of different points and adjust them.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a43fe80e-fb7b-490d-bd71-656a69fcbf7d) [Merge sketches](https://wiki.freecad.org/Sketcher_MergeSketches): Merge two or more sketches.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3fc507e0-9312-4300-a80f-897128129db7) [Mirror sketch](https://wiki.freecad.org/Sketcher_MirrorSketch): Mirror a sketch along the x-axis, the y-axis or the origin.

#### Sketcher Edit Mode toolbar

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9ff8bbf1-76f6-40c5-8ce3-4eb8ba06b806) [Leave sketch](https://wiki.freecad.org/Sketcher_LeaveSketch): Leave the Sketch editing mode.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b8ff0cad-bb8a-4dc9-9fd3-f7814dd8d097) [View sketch](https://wiki.freecad.org/Sketcher_ViewSketch): Sets the model view perpendicular to the sketch plane.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e90e23b3-2ae0-4cac-88cf-87638b38c0fd) [View section](https://wiki.freecad.org/Sketcher_ViewSection): Creates a section plane that temporarily hides any matter in front of the sketch plane.

#### Sketcher edit tools toolbar ([introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21))

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bcee35f3-093a-4c7e-a8a4-b06297a12902) [Toggle grid](https://wiki.freecad.org/Sketcher_Grid): Toggles the grid in the sketch currently being edited. Settings can be changed in the related menu. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/02f75db0-2932-40ea-bce1-0bf55a710af9) [Toggle snap](https://wiki.freecad.org/Sketcher_Snap): Toggles snapping in all sketches. Settings can be changed in the related menu.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/029a120b-6b28-4dc4-9ad1-a31e2979092e) [Configure rendering order](https://wiki.freecad.org/Sketcher_RenderingOrder): The rendering order of all sketches can be changed in the related menu. 

#### Other

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f773e637-0a35-41d9-8b07-5f3faaab27a9) [Stop operation](https://wiki.freecad.org/Sketcher_StopOperation): When in edit mode, stop the current operation, whether that is drawing, setting constraints, etc.

### Sketcher geometries

These are tools for creating objects.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a5a15b0d-b248-47fd-b36a-3e6df2c30609) [Point](https://wiki.freecad.org/Sketcher_CreatePoint): Draws a point.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8171b095-5e0a-4011-8348-19b1a477ce63) [Line](https://wiki.freecad.org/Sketcher_CreateLine): Draws a line segment between 2 points. Lines are infinite regarding certain constraints.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/93815446-adff-4849-9969-d1c7c43ac585) [Create arc](https://wiki.freecad.org/Sketcher_CompCreateArc): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e8695466-cddf-45d0-832f-68c70b616a1c) [Arc](https://wiki.freecad.org/Sketcher_CreateArc): Draws an arc segment from center, radius, start angle and end angle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b0fce92d-9c54-4620-bb43-24632adb57c8) [Arc by 3 points](https://wiki.freecad.org/Sketcher_Create3PointArc): Draws an arc segment from two endpoints and another point on the circumference.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c6be0c3d-bb4e-4d56-8f12-30d064564e8d) [Create circle](https://wiki.freecad.org/Sketcher_CompCreateCircle): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/88baacc9-9593-4f70-b0fa-6e0b3c9d58a7) [Circle](https://wiki.freecad.org/Sketcher_CreateCircle): Draws a circle from center and radius.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/248f6794-03d9-4271-acda-196ea7ee42e4) [Circle by 3 points](https://wiki.freecad.org/Sketcher_Create3PointCircle): Draws a circle from three points on the circumference.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9505160e-8477-4af5-b2e5-a5128827a676) [Create conic](https://wiki.freecad.org/Sketcher_CompCreateConic): The sketcher provides the following conical sections. Unlike B-splines they can be used with all sorts of constraints such as [Tangent](https://wiki.freecad.org/Sketcher_ConstrainTangent), [Point On Object](https://wiki.freecad.org/Sketcher_ConstrainPointOnObject), or [Perpendicular](https://wiki.freecad.org/Sketcher_ConstrainPerpendicular).
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/00a836ea-a646-45c2-8abf-7399f994dfab) [Ellipse by center](https://wiki.freecad.org/Sketcher_CreateEllipseByCenter): Draws an ellipse by center point, major radius point and minor radius point.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0c2a73f6-3df1-456d-9b0f-fac5c699c185) [Ellipse by 3 points](https://wiki.freecad.org/Sketcher_CreateEllipseBy3Points): Draws an ellipse by major diameter (2 points) and minor radius point.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0edc8ed3-267a-42e2-831d-0edbb96463eb) [Arc of ellipse](https://wiki.freecad.org/Sketcher_CreateArcOfEllipse): Draws an arc of ellipse by center point, major radius point, starting point and ending point.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/47c4c812-70ed-4e59-b5ec-9d1b00a0ec48) [Arc of hyperbola](https://wiki.freecad.org/Sketcher_CreateArcOfHyperbola): Draws an arc of hyperbola.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8d94d359-a236-4635-b188-ea7e4e81864e) [Arc of parabola](https://wiki.freecad.org/Sketcher_CreateArcOfParabola): Draws an arc of parabola.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2cc7ee8f-3fd2-4a8f-8b8f-a7bfe2cc554c) [Create B-spline](https://wiki.freecad.org/Sketcher_CompCreateBSpline): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/20dbff9a-4a29-41e6-a498-4be5faac2205) [B-spline by control points](https://wiki.freecad.org/Sketcher_CreateBSpline): Draws a B-spline curve by its control points.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4377bf92-2a43-4c05-90f7-9a9b70de1a01) [Periodic B-spline by control points](https://wiki.freecad.org/Sketcher_CreatePeriodicBSpline): Draws a periodic (closed) B-spline curve by its control points.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e70293a1-e741-4d9a-8db8-453918b22cd3) [B-spline by knots](https://wiki.freecad.org/Sketcher_CreateBSplineByInterpolation): Draws a B-spline curve by its knots. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b1bc2ed1-8038-4216-9806-d4b3d2ec3dd8) [Periodic B-spline by knots](https://wiki.freecad.org/Sketcher_CreatePeriodicBSplineByInterpolation): Draws a periodic (closed) B-spline curve by its knots. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a4e536c7-86c1-4779-8d5e-69b4e87fdccd) [Polyline (multiple-point line)](https://wiki.freecad.org/Sketcher_CreatePolyline): Draws a line made of multiple line segments. Pressing the M key while drawing a Polyline toggles between the different polyline modes.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/da4f07ed-98b4-4d02-b71a-91a9ea171c30) [Create rectangle](https://wiki.freecad.org/Sketcher_CompCreateRectangles): This is an icon menu in the Sketcher toolbar that holds the following commands: [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e0b30cd1-7f9d-42e4-abf7-2275d90f2e10) [Rectangle](https://wiki.freecad.org/Sketcher_CreateRectangle): Draws a rectangle from 2 opposite points.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e5d6df42-a369-4f2d-ad17-ecb36a16f340) [Centered rectangle](https://wiki.freecad.org/Sketcher_CreateRectangle_Center): Draws a rectangle from a central point and an edge point. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a671829a-9024-43bb-b09e-14327e32f7d5) [Rounded rectangle](https://wiki.freecad.org/Sketcher_CreateOblong): Draws a rounded rectangle from 2 opposite points. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b2c9feb0-42b9-4a89-a168-6824e48b351e) [Create regular polygon](https://wiki.freecad.org/Sketcher_CompCreateRegularPolygon): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5ecb1c91-d6e9-470f-83c5-389966673d18) [Triangle](https://wiki.freecad.org/Sketcher_CreateTriangle): Draws a regular triangle inscribed in a construction geometry circle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3499b5cc-25ec-4c9b-9362-742c2bbf8748) [Square](https://wiki.freecad.org/Sketcher_CreateSquare): Draws a regular square inscribed in a construction geometry circle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5c31a926-19c5-45cc-9b68-61e46a32418c) [Pentagon](https://wiki.freecad.org/Sketcher_CreatePentagon): Draws a regular pentagon inscribed in a construction geometry circle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5b8fee10-dbb6-4ba9-948c-7805228fb08d) [Hexagon](https://wiki.freecad.org/Sketcher_CreateHexagon): Draws a regular hexagon inscribed in a construction geometry circle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2a334f2d-aa21-4f64-a489-36bfa1a93a66) [Heptagon](https://wiki.freecad.org/Sketcher_CreateHeptagon): Draws a regular heptagon inscribed in a construction geometry circle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d9dd9677-57f0-44d4-a1a5-4b50c2c8ce48) [Octagon](https://wiki.freecad.org/Sketcher_CreateOctagon): Draws a regular octagon inscribed in a construction geometry circle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2d9266d5-c6d7-4e7c-a144-fac40aae6e98) [Regular polygon](https://wiki.freecad.org/Sketcher_CreateRegularPolygon): Draws a regular polygon by selecting the number of sides and picking two points: the center and one corner.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/431ce576-27a0-4847-a85a-75beaa6b798c) [Slot](https://wiki.freecad.org/Sketcher_CreateSlot): Draws an oval by selecting the center of one semicircle and an endpoint of the other semicircle.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/93045118-ac42-4216-830b-58d448f93c49) [Create fillet](https://wiki.freecad.org/Sketcher_CompCreateFillets): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/808a09f8-3428-49f5-8f69-fad2e377e0db) [Fillet](https://wiki.freecad.org/Sketcher_CreateFillet): Creates a fillet between two non-parallel lines.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b284c38d-bba5-4cab-8c84-703e39747eed) [Corner-preserving fillet](https://wiki.freecad.org/Sketcher_CreatePointFillet): Creates a fillet between two non-parallel lines while preserving their (virtual) intersection.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/10b18f60-bf39-4a39-a179-274412e5052e) [Trim](https://wiki.freecad.org/Sketcher_Trimming): Trims a line, circle or arc with respect to the clicked point.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d7f1b07e-2f57-42f5-a0fe-2a690f779426) [Extend](https://wiki.freecad.org/Sketcher_Extend): Extends a line or an arc to a boundary line, arc, ellipse, arc of ellipse or a point in space.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f496de6f-45a6-480a-b7b1-c992edc478f4) [Split](https://wiki.freecad.org/Sketcher_Split): Splits an edge into two while keeping most of the constraints. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/175c5870-1fb3-4d3a-996d-cc9310f7a0d9) [External geometry](https://wiki.freecad.org/Sketcher_External): Creates an edge linked to external geometry.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b3cd6567-4c57-4002-a0ef-6d34d9f660a5) [Carbon copy](https://wiki.freecad.org/Sketcher_CarbonCopy): Copies the geometry of another sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f195d17e-9164-4c98-aa8d-cea5707a6f72) [Toggle construction geometry](https://wiki.freecad.org/Sketcher_ToggleConstruction): Toggles sketch geometry from/to construction mode. Construction geometry is shown in blue and is discarded outside of Sketch editing mode.

### Sketcher constraints

Constraints are used to define lengths, set rules between sketch elements, and to lock the sketch along the vertical and horizontal axes. Some constraints require use of [Helper constraints](https://wiki.freecad.org/Sketcher_helper_constraint).

#### Geometric constraints

These constraints are not associated with numeric data.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b4d29f00-d8bf-4ff9-9bcf-54c5d7a41382) [Coincident](https://wiki.freecad.org/Sketcher_ConstrainCoincident): Affixes a point onto (coincident with) one or more other points. It acts as a concentric constraint if two or more circles, arcs, ellipses or arcs of ellipses are selected.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2d2be452-802f-42f3-9235-4a48c1b3062f) [Point on object](https://wiki.freecad.org/Sketcher_ConstrainPointOnObject): Affixes a point onto another object such as a line, arc, or axis.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4a12e08b-ccbe-4036-8815-4c324acf1906) [Vertical](https://wiki.freecad.org/Sketcher_ConstrainVertical): Constrains the selected lines or polyline elements to a true vertical orientation. More than one object can be selected before applying this constraint.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2eb8bc81-a861-4c64-91c6-1485c11da277) [Horizontal](https://wiki.freecad.org/Sketcher_ConstrainHorizontal): Constrains the selected lines or polyline elements to a true horizontal orientation. More than one object can be selected before applying this constraint.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cbf583d2-2e37-4338-8da1-f0dab4b86e0c) [Parallel](https://wiki.freecad.org/Sketcher_ConstrainParallel): Constrains two or more lines parallel to one another.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2c802fc7-8ec4-4a6b-95a9-e9098df54211) [Perpendicular](https://wiki.freecad.org/Sketcher_ConstrainPerpendicular): Constrains two lines perpendicular to one another, or constrains a line perpendicular to an arc endpoint.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/78fcd317-21cd-43a8-84ca-991d5e8e07da) [Tangent](https://wiki.freecad.org/Sketcher_ConstrainTangent): Creates a tangent constraint between two selected entities, or a co-linear constraint between two line segments. A line segment does not have to lie directly on an arc or circle to be constrained tangent to that arc or circle.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c82cf9cb-6d08-4f54-863d-cd13aaa1684c) [Equal](https://wiki.freecad.org/Sketcher_ConstrainEqual): Constrains two selected entities equal to one another. If used on circles or arcs their radii will be set equal.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7d502e11-bbb6-44d3-a820-501280648c2b) [Symmetric](https://wiki.freecad.org/Sketcher_ConstrainSymmetric): Constrains two points symmetrically about a line, or constrains the first two selected points symmetrically about a third selected point.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ab5e4e5d-f828-41a4-83a0-dda6fed3524d) [Block](https://wiki.freecad.org/Sketcher_ConstrainBlock): it blocks an edge from moving, that is, it prevents its vertices from changing their current positions. It should be particularly useful to fix the position of B-Splines. See the [Block Constraint forum topic](https://forum.freecadweb.org/viewtopic.php?f=9&t=26572).

#### Dimensional constraints

These are constraints associated with numeric data, for which you can use the [expressions](https://wiki.freecad.org/Expressions). The data may be taken from a [spreadsheet](docs\workbenches\spreadsheet.md).

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a42586fc-66ca-4192-9cf4-95dd74ed09d1) [Lock](https://wiki.freecad.org/Sketcher_ConstrainLock): Constrains the selected item by setting vertical and horizontal distances relative to the origin, thereby locking the location of that item. These constraint distances can be edited later.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e54103fd-b19f-4716-a3c3-fe9401ce075b) [Horizontal distance](https://wiki.freecad.org/Sketcher_ConstrainDistanceX): Fixes the horizontal distance between two points or line endpoints. If only one item is selected, the distance is set to the origin.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/89abb5c4-43d2-4fb7-9e87-0ce0c954d571) [Vertical distance](https://wiki.freecad.org/Sketcher_ConstrainDistanceY): Fixes the vertical distance between 2 points or line endpoints. If only one item is selected, the distance is set to the origin.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a9568ef0-452a-4927-9ae4-1330e1e2dcd3) [Distance](https://wiki.freecad.org/Sketcher_ConstrainDistance): Defines the length of a line, the perpendicular distance between a point and a line, the distance between two points, or, [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21), the distance between the edges of two circles.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7cde621c-f5c9-4166-b2fd-41f9b909b584) [Constrain radius or diameter](https://wiki.freecad.org/Sketcher_CompConstrainRadDia): This is an icon menu in the Sketcher constraints toolbar that holds the following commands:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dcb0a134-f9f5-4069-b175-446d9ba212dd) [Radius or weight](https://wiki.freecad.org/Sketcher_ConstrainRadius): Defines the radius of an arc or circle or the weight of a B-spline pole.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bdeadf50-4784-4689-a4a8-65e4da677d76) [Diameter](https://wiki.freecad.org/Sketcher_ConstrainDiameter): Defines the diameter of an arc or circle.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/331260d3-72f6-4b18-99eb-61394443f43c) [Auto radius/diameter](https://wiki.freecad.org/Sketcher_ConstrainRadiam): Defines the radius of an arc, the diameter of a circle or the weight of a B-spline pole. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20) 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/564a80c7-640d-42a4-9565-dcb561ed0353) [Angle](https://wiki.freecad.org/Sketcher_ConstrainAngle): Defines the internal angle between two selected lines.

#### Special constraints

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f4904ba5-52af-47c7-9be1-dd43c785687a) [Refraction (Snell's law)](https://wiki.freecad.org/Sketcher_ConstrainSnellsLaw): Constrains two lines to obey a refraction law to simulate the light going through an interface.

#### Constraint tools

The following tools can be used the change the effect of constraints:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0daaa18d-9901-472b-be22-d9e52edd991f) [Toggle driving/reference constraint](https://wiki.freecad.org/Sketcher_ToggleDrivingConstraint): Toggles the toolbar or the selected constraints to/from reference mode.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/22573888-3f00-48bc-a3db-38fa52906595) [Activate/deactivate constraint](https://wiki.freecad.org/Sketcher_ToggleActiveConstraint): Enable or disable an already placed constraint.

### Sketcher tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d1588fcc-93e8-4650-8997-36ee77233c99) [Select unconstrained DoF](https://wiki.freecad.org/Sketcher_SelectElementsWithDoFs): Highlights in green the geometry with degrees of freedom (DOFs), i.e. not fully constrained.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eed80089-2b1f-4a6a-9aa2-c396c9ce791d) [Select associated constraints](https://wiki.freecad.org/Sketcher_SelectConstraints): Selects the constraints of a sketcher element.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/25ac09eb-7039-41f3-9cc3-f129d4a8a9fc) [Select associated geometry](https://wiki.freecad.org/Sketcher_SelectElementsAssociatedWithConstraints): Select sketcher elements associated with constraints.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/61787645-be42-4055-b9e3-7279c9593b9f) [Select redundant constraints](https://wiki.freecad.org/Sketcher_SelectRedundantConstraints): Selects redundant constraints of a sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1804a2ec-d662-4af2-8f7a-f6f3ea48693e) [Select conflicting constraints](https://wiki.freecad.org/Sketcher_SelectConflictingConstraints): Selects conflicting constraints of a sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6e393edd-b905-47e7-ba46-9b74ab90a46a) [Show/hide internal geometry](https://wiki.freecad.org/Sketcher_RestoreInternalAlignmentGeometry): Recreates missing/deletes unneeded internal geometry of a selected ellipse, arc of ellipse/hyperbola/parabola or B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d5195e95-0df6-45cf-9c84-f45b6b94e948) [Select origin](https://wiki.freecad.org/Sketcher_SelectOrigin): Selects the origin of a sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/32b8603c-f8cb-4a6a-9ad3-2916cd9d3bfb) [Select horizontal axis](https://wiki.freecad.org/Sketcher_SelectHorizontalAxis): Selects the horizontal axis of a sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1ec43a57-6a75-4d01-8f8b-015754b04432) [Select vertical axis](https://wiki.freecad.org/Sketcher_SelectVerticalAxis): Selects the vertical axis of a sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3da6e111-fc13-4de3-adf8-5322f9081ac2) [Symmetry](https://wiki.freecad.org/Sketcher_Symmetry): Copies a sketcher element symmetrical to a chosen line.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b76f3ae8-2713-4454-91b1-582242af7f5c) [Clone](https://wiki.freecad.org/Sketcher_Clone): Clones a sketcher element.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a79dbfc7-6ee2-4a28-b679-1a0e396d647c) [Copy](https://wiki.freecad.org/Sketcher_Copy): Copies a sketcher element.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a417ecf1-89ed-4c8f-b229-563f2d2a2cc4) [Move](https://wiki.freecad.org/Sketcher_Move): Moves the selected geometry taking as reference the last selected point.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/98f5f253-339c-4d07-901b-51b2f9517b71) [Rectangular array](https://wiki.freecad.org/Sketcher_RectangularArray): Creates an array of selected sketcher elements.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9faa10a7-144d-469d-9151-63861318f68c) [Remove axes alignment](https://wiki.freecad.org/Sketcher_RemoveAxesAlignment): Remove axes alignment while trying to preserve the constraint relationship of the selection. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/56eb39c6-8e5f-4e83-83e5-a254d087fa87) [Delete all geometry](https://wiki.freecad.org/Sketcher_DeleteAllGeometry): Deletes all geometry from the sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ad98b459-67c3-45fb-8cf6-71a7c1ce4e5c) [Delete all constraints](https://wiki.freecad.org/Sketcher_DeleteAllConstraints): Deletes all constraints from the sketch.

### Sketcher B-spline tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cdef123b-e2cd-4129-9f6c-e7b15f2205ff) [Show/hide B-spline degree](https://wiki.freecad.org/Sketcher_BSplineDegree): Shows or hides the display of the degree of a B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/009b371e-104e-43a6-9612-f198bad4e6ae) [Show/hide B-spline control polygon](https://wiki.freecad.org/Sketcher_BSplinePolygon): Shows or hides the display of the defining polygon of a B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d366bc76-e3ad-4e23-84d7-ccf42da20dda) [Show/hide B-spline curvature comb](https://wiki.freecad.org/Sketcher_BSplineComb): Shows or hides the display of the curvature comb of a B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1182703e-fb7d-4ac8-850b-53e79854a5ae) [Show/hide B-spline knot multiplicity](https://wiki.freecad.org/Sketcher_BSplineKnotMultiplicity): Shows or hides the display of the knot multiplicity of a B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e4655c54-bc1e-4f11-93ed-840330bae96c) [Show/hide B-spline control point weight](https://wiki.freecad.org/Sketcher_BSplinePoleWeight): Shows or hides the display of the weights for the control points of a B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/52599ed7-9f24-46e7-9a2a-42944e2ed3da) [Convert geometry to B-spline](https://wiki.freecad.org/Sketcher_BSplineApproximate): Converts compatible geometry, edges and curves, into a B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/34024fe3-0564-4fe8-927e-54ca4715a6d5) [Increase B-spline degree](https://wiki.freecad.org/Sketcher_BSplineIncreaseDegree): Increases the degree (order) of a B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1c8fbfaa-9bb5-45fc-9dd0-20f3d8e01be6) [Decrease B-spline degree](https://wiki.freecad.org/Sketcher_BSplineDecreaseDegree): Decreases the degree (order) of a B-spline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/95840893-494b-4074-b2f0-7238eccae5f4) [Increase knot multiplicity](https://wiki.freecad.org/Sketcher_BSplineIncreaseKnotMultiplicity): Increases the multiplicity of a B-spline knot.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5931804c-263a-4171-bea4-5e5eb998c44e) [Decrease knot multiplicity](https://wiki.freecad.org/Sketcher_BSplineDecreaseKnotMultiplicity): Decreases the multiplicity of a B-spline knot.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bd7073c9-233c-4403-86d2-85344601a22f) [Insert knot](https://wiki.freecad.org/Sketcher_BSplineInsertKnot): Inserts a knot into an existing B-spline. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d8ca6f08-9e72-446e-a6d6-fd792f9bbdad) [Join curves](https://wiki.freecad.org/Sketcher_JoinCurves): Joins two curves at selected end points. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)

### Sketcher virtual space

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e316c93d-6a73-4e79-b6f1-401aad67aa7f) [Switch virtual space](https://wiki.freecad.org/Sketcher_SwitchVirtualSpace): Allows you to hide all constraints of a sketch and make them visible again.

### Obsolete tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/82e2d02d-03df-4fb7-bc57-0ac71a794a1f) [Close shape](https://wiki.freecad.org/Sketcher_CloseShape): Creates a closed shape by applying coincident constraints to endpoints. Not available in version 0.21 and above.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ec7a3bf9-116f-4209-8bd9-4752bb199fdc) [Connect edges](https://wiki.freecad.org/Sketcher_ConnectLines): Connect sketcher elements by applying coincident constraints to endpoints. Not available in version 0.21 and above.

## Preferences

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c3045302-addf-4cdc-b92b-7f95db6c58d8) [Preferences](https://wiki.freecad.org/Sketcher_Preferences): Preferences for the **Sketcher** workbench.

## Best Practices

Every CAD user develops his own way of working over time, but there are some useful general principles to follow.

- A series of simple sketches is easier to manage than a single complex one. For example, a first sketch can be created for the base 3D feature (either a pad or a revolve), while a second one can contain holes or cutouts (pockets). Some details can be left out, to be realized later on as 3D features. You can choose to avoid fillets in your sketch if there are too many, and add them as a 3D feature.
- Always create a closed profile, or your sketch won't produce a solid, but rather a set of open faces. If you don't want some of the objects to be included in the solid creation, turn them to construction elements with the Construction Mode tool.
- Use the auto constraints feature to limit the number of constraints you'll have to add manually.
- As a general rule, apply geometric constraints first, then dimensional constraints, and lock your sketch last. But remember: rules are made to be broken. If you're having trouble manipulating your sketch, it may be useful to constrain a few objects first before completing your profile.
- If possible, center your sketch to the origin (0,0) with the lock constraint. If your sketch is not symmetric, locate one of its points to the origin, or choose nice round numbers for the lock distances.
- If you have the possibility to choose between the Length constraint and the Horizontal or Vertical Distance constraints, prefer the latter. Horizontal and Vertical Distance constraints are computationally cheaper.
- In general, the best constraints to use are: Horizontal and Vertical Constraints; Horizontal and Vertical Length Constraints; Point-to-Point Tangency. If possible, limit the use of these: the general Length Constraint; Edge-to-Edge Tangency; Fix Point Onto a Line Constraint; Symmetry Constraint.
- If in doubt about the validity of a sketch once it is complete (features turn green), close the Sketcher dialog, switch to the ![Part Workbench logo](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7b724d1b-2ed4-44f8-94d3-347f86d86350) [Part Workbench](docs\workbenches\part-design.md) and run ![Check geometry image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6127ecb0-4ab3-4ecd-8a5b-afc39555a2c6) [Check geometry](https://wiki.freecad.org/Part_CheckGeometry).

## Tutorials

- [Sketcher tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=30104) by chrisb. This is a 70-page long PDF document that serves as a detailed manual for the sketcher. It explains the basics of Sketcher usage, and goes into a lot of detail about the creation of geometrical shapes, and each of the constraints.
- [Basic Sketcher Tutorial](https://wiki.freecad.org/Basic_Sketcher_Tutorial) for beginners
- [Sketcher Micro Tutorial - Constraint Practices](https://wiki.freecad.org/Sketcher_Micro_Tutorial_-_Constraint_Practices)
- [Sketcher requirement for a sketch](https://wiki.freecad.org/Sketcher_requirement_for_a_sketch) Minimum requirement for a sketch and Complete determination of a sketch

## Scripting

The [Sketcher scripting](https://wiki.freecad.org/Sketcher_scripting) page contains examples on how to create constraints from Python scripts.

## Examples

For some ideas of what can be achieved with Sketcher tools, have a look at: [Sketcher examples](https://wiki.freecad.org/Sketcher_Examples).  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/74dd7906-c311-4ed2-ac6b-62abe98b2386)
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7ddb805d-4134-42c8-b5d7-7dd1228a6bf1)

