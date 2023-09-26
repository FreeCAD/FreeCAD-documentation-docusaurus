# Release 0.13

This is a summary of the most interesting changes that occurred in FreeCAD since the latest version. See [the Mantis changelog](http://www.freecadweb.org/tracker/changelog_page.php) on SourceForge for the complete list of changes.

Older versions: [0.12](https://wiki.freecad.org/Release_notes_0.12) - [0.11](https://wiki.freecad.org/Release_notes_0.11)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bdb5fea1-665e-4f68-993a-23a4b243b2f4)  
_modeled in FreeCAD by psicofil_

## General

- **Color preferences**: Getting bored of the good old grey-shapes-on-black-lines FreeCAD default aspect? It is now changeable in the user preferences (Display -> Color), together with several other default colors.

- **Alignment**: Two shapes can be aligned to each other with up to three points with this tool available in the Edit menu.


## Drawing module

- **Clip feature**: A new [Drawing Clip](https://wiki.freecad.org/Drawing_Clip) object allows one to place views of objects inside clipped rectangles on Drawing pages.

- **Editable title blocks**: When designing [Drawing templates](https://wiki.freecad.org/Drawing_templates), it is now possible to mark texts as editable. Those texts become then directly editable in FreeCAD.

- **Annotation feature**: A new [Drawing Annotation](https://wiki.freecad.org/Drawing_Annotation) object, a simple feature to quickly place text blocks on a Drawing page.

- **Orthographic Views**: A new [Drawing Orthographic Views](https://wiki.freecad.org/Drawing_Orthoviews) tool facilitates the creation of multiple views all aligned to each other, according to first-angle or third-angle projection.

- **Browser preview**: Since all SVG capabilities are not always supported by the internal Qt SVG viewer, this button allows you to check how a page looks like in the webkit browser, which fully supports the SVG format. This is provisory until we definitely switch our SVG viewer to webkit.

- **DXF export**: You can now export a view of a page directly to a DXF file.

- Some bug fixes now allow the printing of pages to scale.

## Sketcher module

### Point Creation

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c2c3a67e-7ae8-4891-b2e8-18dd61a7c181)  

Points can now be added and used as a feature within a sketch.

### Sketch Origin

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3e1bc422-6c7d-455d-a2d9-c50b766bc6cd)  

Users can now use the sketch's origin to define geometry as well as the sketch axes.

- Tangency and perpendicularity constraints for arcs and circles.
- Constraints with respect to external (projected) geometry.
- Improved counting of the sketch degrees of freedom.
- Symmetry constraint with respect to a symmetry point (midpoint constraint).
- Improved Datum Label and Constraint Visuals:

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3d851b5a-1025-4671-b147-742b09d22b5c)  

  - Each constraint label (including arrows) will correctly scale to the size of the scene automatically to the 3D viewport.
  - Datum label text for Distance, Distance X, Distance Y, and Radius can be freely positioned now with greater control.
  - Small improvements to overlapping constraint icons and fix freezes.
  - Datum Label text will reverse when the view is orientated from the opposite side.
- Fully constrained Sketches are now highlighted.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ce306055-6623-44ea-b024-ac1ed065262a)  

- Rubber band selection

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/da421185-4810-462b-9d90-82ef1a37b29e)  
_Geometry (Points, Lines, and Curves) may be selected by dragging on the background to create a rectangular selection_

- **Extended functionality of the polyline tool**: Using the m key one can switch between arc and line mode and among free, tangent, and perpendicular transitions from the previous segment.

- **Map sketch to face** is a new tool to map (or remap) an existing sketch to the selected face on a solid. This allows the use of this sketch for features such as Pad and Pocket.

- **Small Improvements**:
  - When constructing geometry, a tooltip with related information is shown next to the cursor.
  - **Sketch view** which sets the 3D view perpendicular to the sketch plane has now an icon in the Sketcher toolbar.

## Draft module

- **Taskmode**: The Taskview mode of the Draft module is now the default. Fear not, if you liked the toolbar, it is still available in the Draft Preferences settings.

- **DXF importer**: The DXF importer now supports points (translate to [Draft Point](https://wiki.freecad.org/Draft_Point)) and leaders (translate to [Draft Wire](https://wiki.freecad.org/Draft_Wire)).

- **Brand-new snapping system**: The [snapping system](https://wiki.freecad.org/Draft_Snap) of the Draft module has been rewritten almost from scratch. It is now much easier to extend and use in other scripts and modules, has now new visuals with snap cursor icons, and a toolbar that allows you to switch on/off individual snap locations or the whole snapping system.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/628c8829-50d5-49ad-a830-21c608a0fa90)  

- **Better constraining**: When entering 3D points, besides the existing Shift-constraining, you can now constrain the movement in X, Y, or Z direction by pressing the `X`, `Y`, or `Z` keys. Pressing them again switches constraining off.

- **Draft <-> Sketch conversion**: The Draft workbench now features a new [Draft2Sketch](https://wiki.freecad.org/Draft_Draft2Sketch) conversion tool that converts selected Draft objects (or any flat shape) to Sketches, and vice-versa.

- **Clone tool**: Make copies of selected objects with this handy tool. When the original changes, the clone gets updated automatically. The clone can be moved and rotated and has a scale property that allows you to change the size of the copy.

- **SVG importer**: The SVG importer now has much better support for bezier curves. The global definition of user units is now respected, and the geometry is scaled properly to millimeters. Support for new elements such as ellipses and rounded rectangles has been added. The parser has been reworked and now handles paths from Adobe Illustrator.

- **Curved corners**: Several Draft objects ([Wires](https://wiki.freecad.org/Draft_Wire), [Rectangles](https://wiki.freecad.org/Draft_Rectangle) and [Polygons](https://wiki.freecad.org/Draft_Polygon)) now have a **Fillet Radius** property, which curves their corners by the given radius value.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f5833867-012b-4428-a386-f5f17cd6657f)  

- **2D view object**: The new [Shape2DView](https://wiki.freecad.org/Draft_Shape2DView) tool allows to quickly place a 2D view of a selected object in the document. You can specify the projection vector.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4039f699-f8cb-404e-a46b-ad145bb0c27f)  

## Arch module

- **Draft integration**: The Arch and Draft modules are now tightly integrated. The Arch tools use the [Draft snapping](https://wiki.freecad.org/Draft_Snap) system, and all the Draft tools are present in the Arch workbench. In fact, if you like, you can now completely switch off the Draft module (Preferences -> Draft -> Hide the Draft workbench)

- **New wall tool**: The [wall tool](https://wiki.freecad.org/Arch_Wall) has been greatly enhanced and now features a direct drawing mode, that is activated when you press the Wall button with no object selected, which allows you to draw walls like you draw simple lines. In addition, walls now auto-connect when you snap to an existing wall.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/63be8031-2e8f-46c2-8258-00d935a45272)  

- **New roof tool**: A new [roof tool](https://wiki.freecad.org/Arch_Roof) is now available in the Arch module that allows you to quickly create sloped roofs from a selected face.

- **New window tool**: [Windows](https://wiki.freecad.org/Arch_Window) is now created directly on top of a flat shape that contains one or more wires, such as a rectangle or a sketch. If that shape was drawn directly on a wall face, the window would automatically cut an opening in the wall.

- **New sections system**: It is now very simple to create 2D plans, sections, and elevations from your model: Place a [Section Plane](https://wiki.freecad.org/Arch_SectionPlane) object, orient it the way you want, edit it to include the objects it must see, and you are done!

- **New solid renderer**: In addition to the OpenCasCADe-based wireframe 2D renderer currently used by the [Drawing Workbench](https://wiki.freecad.org/Drawing_Workbench), the Arch module now features a new 2D renderer that is able to render filled faces to a SVG Drawing sheet, giving much nicer 2D views.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/423e6879-2bc6-4830-916c-4261a624dfc1)  

- **IFC import with [IfcOpenShell](http://www.ifcopenshell.org/)**: The Arch module can now use [IfcOpenShell](http://www.ifcopenshell.org/) if it is installed on your system. This allows for much more powerful IFC import, and all the contents of the IFC file are guaranteed to be imported.

- **New floor and building objects**: Building and floors are now groups, so you can add and remove objects from them with a simple drag and drop from the tree view.

- **New axes system**: A new [axes system](https://wiki.freecad.org/Arch_Axis) feature has been added that allows to quickly layout complex axes systems. These axes can then be added to [Structure](https://wiki.freecad.org/Arch_Structure) objects, so they spread automatically on the grid nodes.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a875133d-f315-414b-aef1-5edb8d7d3051)  

- **Arch objects from meshes**: [Walls](https://wiki.freecad.org/Arch_Wall) and [structures](https://wiki.freecad.org/Arch_Structure) can now be made directly from a mesh, provided it is closed, solid and all edges are [manifold](http://doc.spatial.com/index.php/Manifold_and_Non-manifold_Objects). This allows for a very quick transformation of geometry imported from other applications such as [blender](http://www.blender.org/) into valid Arch objects.

## Part module

- **Refine shape** is a new utility that cleans up faces after a few operations on a shape. It can be set to run automatically after boolean operations in the Preferences.
- The **new Loft tool** can extrude a complex set of surfaces or a solid shape through a series of sketches or Draft objects.
- The **new Sweep tool** can extrude a complex set of surfaces or a solid shape through a series of sketches or Draft objects and a trajectory (sketch, edge, or Draft object).
- The **new Offset tool** can offset a single surface or a shape.
- The **new Thickness tool** can hollow out a solid shape by setting a wall thickness and opening one or more faces.
- **Shape Builder** and **Create primitives** are now in the Part toolbar for quick access.

## Part Design module

- **Pad** and **Pocket** are now more powerful thanks to more parameters, such as extrude to first/to last, up to face, 2 dimensions, and symmetric to the plane.
- **Chamfer** and **Fillet** got an upgrade: selecting a face is now allowed, and all the outer and inner edges of this face will be processed.
- **Revolution**: A construction line can now be used as a revolution axis.
- **New Groove tool**: Cut matter from your solid by revolving a sketch.
- **Linear pattern**, **Mirrored**, **Polar pattern**, and **Multipattern** tools that allow you to align and distribute pads and pockets on a feature.
- A **Shaft Wizard** to help you design shaft objects.

## Ship Design module

- New ship module ([tutorial](https://wiki.freecad.org/FreeCAD-Ship_s60_tutorial))

## 3D mice

- Support for 3D mice (Spaceball, Space Navigator) has been added to the Windows version.
- A new **Spaceball Motion** tab in the Customize dialog allows for fine-tuning your 3D mouse to the settings you want directly from FreeCAD.

## OpenSCAD module

- This brand new (experimental) module brings OpenSCAD file import capability into FreeCAD. This file format is wildly popular in the RepRap community and on the digital designs-sharing site Thingiverse.
- OpenSCAD script can be executed from within FreeCAD, by OpenSCAD (if installed on your computer), with the result appearing in your FreeCAD document.
- For more information see the [OpenSCAD Workbench](https://wiki.freecad.org/OpenSCAD_Workbench) page on the FreeCAD wiki.
