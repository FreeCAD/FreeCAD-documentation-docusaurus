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
- [Toggle snap](https://wiki.freecad.org/Sketcher_Snap): Toggles snapping in all sketches. Settings can be changed in the related menu.
- [Configure rendering order](https://wiki.freecad.org/Sketcher_RenderingOrder): The rendering order of all sketches can be changed in the related menu. 

#### Other

- [Stop operation](https://wiki.freecad.org/Sketcher_StopOperation): When in edit mode, stop the current operation, whether that is drawing, setting constraints, etc.

### Sketcher geometries

These are tools for creating objects.

- [Point](https://wiki.freecad.org/Sketcher_CreatePoint): Draws a point.
- [Line](https://wiki.freecad.org/Sketcher_CreateLine): Draws a line segment between 2 points. Lines are infinite regarding certain constraints.
- [Create arc](https://wiki.freecad.org/Sketcher_CompCreateArc): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - [Arc](https://wiki.freecad.org/Sketcher_CreateArc): Draws an arc segment from center, radius, start angle and end angle.
  - [Arc by 3 points](https://wiki.freecad.org/Sketcher_Create3PointArc): Draws an arc segment from two endpoints and another point on the circumference.
- [Create circle](https://wiki.freecad.org/Sketcher_CompCreateCircle): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - [Circle](https://wiki.freecad.org/Sketcher_CreateCircle): Draws a circle from center and radius.
  - [Circle by 3 points](https://wiki.freecad.org/Sketcher_Create3PointCircle): Draws a circle from three points on the circumference.
- [Create conic](https://wiki.freecad.org/Sketcher_CompCreateConic): The sketcher provides the following conical sections. Unlike B-splines they can be used with all sorts of constraints such as [Tangent](https://wiki.freecad.org/Sketcher_ConstrainTangent), [Point On Object](https://wiki.freecad.org/Sketcher_ConstrainPointOnObject), or [Perpendicular](https://wiki.freecad.org/Sketcher_ConstrainPerpendicular).
  - [Ellipse by center](https://wiki.freecad.org/Sketcher_CreateEllipseByCenter): Draws an ellipse by center point, major radius point and minor radius point.
  - [Ellipse by 3 points](https://wiki.freecad.org/Sketcher_CreateEllipseBy3Points): Draws an ellipse by major diameter (2 points) and minor radius point.
  - [Arc of ellipse](https://wiki.freecad.org/Sketcher_CreateArcOfEllipse): Draws an arc of ellipse by center point, major radius point, starting point and ending point.
  - [Arc of hyperbola](https://wiki.freecad.org/Sketcher_CreateArcOfHyperbola): Draws an arc of hyperbola.
  - [Arc of parabola](https://wiki.freecad.org/Sketcher_CreateArcOfParabola): Draws an arc of parabola.
- [Create B-spline](https://wiki.freecad.org/Sketcher_CompCreateBSpline): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - [B-spline by control points](https://wiki.freecad.org/Sketcher_CreateBSpline): Draws a B-spline curve by its control points.
  - [Periodic B-spline by control points](https://wiki.freecad.org/Sketcher_CreatePeriodicBSpline): Draws a periodic (closed) B-spline curve by its control points.
  - [B-spline by knots](https://wiki.freecad.org/Sketcher_CreateBSplineByInterpolation): Draws a B-spline curve by its knots. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - [Periodic B-spline by knots](https://wiki.freecad.org/Sketcher_CreatePeriodicBSplineByInterpolation): Draws a periodic (closed) B-spline curve by its knots. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- [Polyline (multiple-point line)](https://wiki.freecad.org/Sketcher_CreatePolyline): Draws a line made of multiple line segments. Pressing the M key while drawing a Polyline toggles between the different polyline modes.
- [Create rectangle](https://wiki.freecad.org/Sketcher_CompCreateRectangles): This is an icon menu in the Sketcher toolbar that holds the following commands: [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
  - [Rectangle](https://wiki.freecad.org/Sketcher_CreateRectangle): Draws a rectangle from 2 opposite points.
  - [Centered rectangle](https://wiki.freecad.org/Sketcher_CreateRectangle_Center): Draws a rectangle from a central point and an edge point. 
  - [Rounded rectangle](https://wiki.freecad.org/Sketcher_CreateOblong): Draws a rounded rectangle from 2 opposite points. 
- [Create regular polygon](https://wiki.freecad.org/Sketcher_CompCreateRegularPolygon): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - [Triangle](https://wiki.freecad.org/Sketcher_CreateTriangle): Draws a regular triangle inscribed in a construction geometry circle.
  - [Square](https://wiki.freecad.org/Sketcher_CreateSquare): Draws a regular square inscribed in a construction geometry circle.
  - [Pentagon](https://wiki.freecad.org/Sketcher_CreatePentagon): Draws a regular pentagon inscribed in a construction geometry circle.
  - [Hexagon](https://wiki.freecad.org/Sketcher_CreateHexagon): Draws a regular hexagon inscribed in a construction geometry circle.
  - [Heptagon](https://wiki.freecad.org/Sketcher_CreateHeptagon): Draws a regular heptagon inscribed in a construction geometry circle.
  - [Octagon](https://wiki.freecad.org/Sketcher_CreateOctagon): Draws a regular octagon inscribed in a construction geometry circle.
  - [Regular polygon](https://wiki.freecad.org/Sketcher_CreateRegularPolygon): Draws a regular polygon by selecting the number of sides and picking two points: the center and one corner.
- [Slot](https://wiki.freecad.org/Sketcher_CreateSlot): Draws an oval by selecting the center of one semicircle and an endpoint of the other semicircle.
- [Create fillet](https://wiki.freecad.org/Sketcher_CompCreateFillets): This is an icon menu in the Sketcher toolbar that holds the following commands:
  - [Fillet](https://wiki.freecad.org/Sketcher_CreateFillet): Creates a fillet between two non-parallel lines.
  - [Corner-preserving fillet](https://wiki.freecad.org/Sketcher_CreatePointFillet): Creates a fillet between two non-parallel lines while preserving their (virtual) intersection.
- [Trim](https://wiki.freecad.org/Sketcher_Trimming): Trims a line, circle or arc with respect to the clicked point.
- [Extend](https://wiki.freecad.org/Sketcher_Extend): Extends a line or an arc to a boundary line, arc, ellipse, arc of ellipse or a point in space.
- [Split](https://wiki.freecad.org/Sketcher_Split): Splits an edge into two while keeping most of the constraints. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- [External geometry](https://wiki.freecad.org/Sketcher_External): Creates an edge linked to external geometry.
- [Carbon copy](https://wiki.freecad.org/Sketcher_CarbonCopy): Copies the geometry of another sketch.
- [Toggle construction geometry](https://wiki.freecad.org/Sketcher_ToggleConstruction): Toggles sketch geometry from/to construction mode. Construction geometry is shown in blue and is discarded outside of Sketch editing mode.

### Sketcher constraints

Constraints are used to define lengths, set rules between sketch elements, and to lock the sketch along the vertical and horizontal axes. Some constraints require use of [Helper constraints](https://wiki.freecad.org/Sketcher_helper_constraint).

#### Geometric constraints

These constraints are not associated with numeric data.

- [Coincident](https://wiki.freecad.org/Sketcher_ConstrainCoincident): Affixes a point onto (coincident with) one or more other points. It acts as a concentric constraint if two or more circles, arcs, ellipses or arcs of ellipses are selected.
- [Point on object](https://wiki.freecad.org/Sketcher_ConstrainPointOnObject): Affixes a point onto another object such as a line, arc, or axis.
- [Vertical](https://wiki.freecad.org/Sketcher_ConstrainVertical): Constrains the selected lines or polyline elements to a true vertical orientation. More than one object can be selected before applying this constraint.
- [Horizontal](https://wiki.freecad.org/Sketcher_ConstrainHorizontal): Constrains the selected lines or polyline elements to a true horizontal orientation. More than one object can be selected before applying this constraint.
- [Parallel](https://wiki.freecad.org/Sketcher_ConstrainParallel): Constrains two or more lines parallel to one another.
- [Perpendicular](https://wiki.freecad.org/Sketcher_ConstrainPerpendicular): Constrains two lines perpendicular to one another, or constrains a line perpendicular to an arc endpoint.
- [Tangent](https://wiki.freecad.org/Sketcher_ConstrainTangent): Creates a tangent constraint between two selected entities, or a co-linear constraint between two line segments. A line segment does not have to lie directly on an arc or circle to be constrained tangent to that arc or circle.
- [Equal](https://wiki.freecad.org/Sketcher_ConstrainEqual): Constrains two selected entities equal to one another. If used on circles or arcs their radii will be set equal.
- [Symmetric](https://wiki.freecad.org/Sketcher_ConstrainSymmetric): Constrains two points symmetrically about a line, or constrains the first two selected points symmetrically about a third selected point.
- [Block](https://wiki.freecad.org/Sketcher_ConstrainBlock): it blocks an edge from moving, that is, it prevents its vertices from changing their current positions. It should be particularly useful to fix the position of B-Splines. See the [Block Constraint forum topic](https://forum.freecadweb.org/viewtopic.php?f=9&t=26572).

#### Dimensional constraints

These are constraints associated with numeric data, for which you can use the [expressions](https://wiki.freecad.org/Expressions). The data may be taken from a [spreadsheet](docs\workbenches\spreadsheet.md).

- [Lock](https://wiki.freecad.org/Sketcher_ConstrainLock): Constrains the selected item by setting vertical and horizontal distances relative to the origin, thereby locking the location of that item. These constraint distances can be edited later.
- [Horizontal distance](https://wiki.freecad.org/Sketcher_ConstrainDistanceX): Fixes the horizontal distance between two points or line endpoints. If only one item is selected, the distance is set to the origin.
- [Vertical distance](https://wiki.freecad.org/Sketcher_ConstrainDistanceY): Fixes the vertical distance between 2 points or line endpoints. If only one item is selected, the distance is set to the origin.
- [Distance](https://wiki.freecad.org/Sketcher_ConstrainDistance): Defines the length of a line, the perpendicular distance between a point and a line, the distance between two points, or, [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21), the distance between the edges of two circles.
- [Constrain radius or diameter](https://wiki.freecad.org/Sketcher_CompConstrainRadDia): This is an icon menu in the Sketcher constraints toolbar that holds the following commands:
  - [Radius or weight](https://wiki.freecad.org/Sketcher_ConstrainRadius): Defines the radius of an arc or circle or the weight of a B-spline pole.
  - [Diameter](https://wiki.freecad.org/Sketcher_ConstrainDiameter): Defines the diameter of an arc or circle.
  - [Auto radius/diameter](https://wiki.freecad.org/Sketcher_ConstrainRadiam): Defines the radius of an arc, the diameter of a circle or the weight of a B-spline pole. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- [Angle](https://wiki.freecad.org/Sketcher_ConstrainAngle): Defines the internal angle between two selected lines.

#### Special constraints

- [Refraction (Snell's law)](https://wiki.freecad.org/Sketcher_ConstrainSnellsLaw): Constrains two lines to obey a refraction law to simulate the light going through an interface.

#### Constraint tools

The following tools can be used the change the effect of constraints:

- [Toggle driving/reference constraint](https://wiki.freecad.org/Sketcher_ToggleDrivingConstraint): Toggles the toolbar or the selected constraints to/from reference mode.
- [Activate/deactivate constraint](https://wiki.freecad.org/Sketcher_ToggleActiveConstraint): Enable or disable an already placed constraint.

### Sketcher tools

- [Select unconstrained DoF](https://wiki.freecad.org/Sketcher_SelectElementsWithDoFs): Highlights in green the geometry with degrees of freedom (DOFs), i.e. not fully constrained.
- [Select associated constraints](https://wiki.freecad.org/Sketcher_SelectConstraints): Selects the constraints of a sketcher element.
- [Select associated geometry](https://wiki.freecad.org/Sketcher_SelectElementsAssociatedWithConstraints): Select sketcher elements associated with constraints.
- [Select redundant constraints](https://wiki.freecad.org/Sketcher_SelectRedundantConstraints): Selects redundant constraints of a sketch.
- [Select conflicting constraints](https://wiki.freecad.org/Sketcher_SelectConflictingConstraints): Selects conflicting constraints of a sketch.
- [Show/hide internal geometry](https://wiki.freecad.org/Sketcher_RestoreInternalAlignmentGeometry): Recreates missing/deletes unneeded internal geometry of a selected ellipse, arc of ellipse/hyperbola/parabola or B-spline.
- [Select origin](https://wiki.freecad.org/Sketcher_SelectOrigin): Selects the origin of a sketch.
- [Select horizontal axis](https://wiki.freecad.org/Sketcher_SelectHorizontalAxis): Selects the horizontal axis of a sketch.
- [Select vertical axis](https://wiki.freecad.org/Sketcher_SelectVerticalAxis): Selects the vertical axis of a sketch.
- [Symmetry](https://wiki.freecad.org/Sketcher_Symmetry): Copies a sketcher element symmetrical to a chosen line.
- [Clone](https://wiki.freecad.org/Sketcher_Clone): Clones a sketcher element.
- [Copy](https://wiki.freecad.org/Sketcher_Copy): Copies a sketcher element.
- [Move](https://wiki.freecad.org/Sketcher_Move): Moves the selected geometry taking as reference the last selected point.
- [Rectangular array](https://wiki.freecad.org/Sketcher_RectangularArray): Creates an array of selected sketcher elements.
- [Remove axes alignment](https://wiki.freecad.org/Sketcher_RemoveAxesAlignment): Remove axes alignment while trying to preserve the constraint relationship of the selection. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- [Delete all geometry](https://wiki.freecad.org/Sketcher_DeleteAllGeometry): Deletes all geometry from the sketch.
- [Delete all constraints](https://wiki.freecad.org/Sketcher_DeleteAllConstraints): Deletes all constraints from the sketch.

### Sketcher B-spline tools

- [Show/hide B-spline degree](https://wiki.freecad.org/Sketcher_BSplineDegree): Shows or hides the display of the degree of a B-spline.
- [Show/hide B-spline control polygon](https://wiki.freecad.org/Sketcher_BSplinePolygon): Shows or hides the display of the defining polygon of a B-spline.
- [Show/hide B-spline curvature comb](https://wiki.freecad.org/Sketcher_BSplineComb): Shows or hides the display of the curvature comb of a B-spline.
- [Show/hide B-spline knot multiplicity](https://wiki.freecad.org/Sketcher_BSplineKnotMultiplicity): Shows or hides the display of the knot multiplicity of a B-spline.
- [Show/hide B-spline control point weight](https://wiki.freecad.org/Sketcher_BSplinePoleWeight): Shows or hides the display of the weights for the control points of a B-spline.
- [Convert geometry to B-spline](https://wiki.freecad.org/Sketcher_BSplineApproximate): Converts compatible geometry, edges and curves, into a B-spline.
- [Increase B-spline degree](https://wiki.freecad.org/Sketcher_BSplineIncreaseDegree): Increases the degree (order) of a B-spline.
- [Decrease B-spline degree](https://wiki.freecad.org/Sketcher_BSplineDecreaseDegree): Decreases the degree (order) of a B-spline.
- [Increase knot multiplicity](https://wiki.freecad.org/Sketcher_BSplineIncreaseKnotMultiplicity): Increases the multiplicity of a B-spline knot.
- [Decrease knot multiplicity](https://wiki.freecad.org/Sketcher_BSplineDecreaseKnotMultiplicity): Decreases the multiplicity of a B-spline knot.
- [Insert knot](https://wiki.freecad.org/Sketcher_BSplineInsertKnot): Inserts a knot into an existing B-spline. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- [Join curves](https://wiki.freecad.org/Sketcher_JoinCurves): Joins two curves at selected end points. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)

### Sketcher virtual space

- [Switch virtual space](https://wiki.freecad.org/Sketcher_SwitchVirtualSpace): Allows you to hide all constraints of a sketch and make them visible again.

### Obsolete tools

- [Close shape](https://wiki.freecad.org/Sketcher_CloseShape): Creates a closed shape by applying coincident constraints to endpoints. Not available in version 0.21 and above.
- [Connect edges](https://wiki.freecad.org/Sketcher_ConnectLines): Connect sketcher elements by applying coincident constraints to endpoints. Not available in version 0.21 and above.

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

