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

[introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21): If a sketch is in edit mode the Structure toolbar is hidden as none of its tools can then be used.

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

