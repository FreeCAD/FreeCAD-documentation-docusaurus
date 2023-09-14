# Release 0.15

FreeCAD 0.15 was released on April 8, 2015. This is a summary of the most interesting changes. The complete list of changes can be found in the [Mantis changelog](http://www.freecadweb.org/tracker/changelog_page.php). 
Older versions at: [0.14](https://wiki.freecad.org/Release_notes_0.14) - [0.13](https://wiki.freecad.org/Release_notes_0.13) - [0.12](https://wiki.freecad.org/Release_notes_0.12) - [0.11](https://wiki.freecad.org/Release_notes_0.11)

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2768658e-4581-4c3f-a88a-54b15bbab79f)
_Spark Plug Plane by r-frank_

## General

### Search box in the Selection View

The selection window allows users to search inside the selected objects. Moreover, you have now the possibility to select only one entity, unselect an entity, zoom fit on an entity, and go to the entity in the tree view.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/666b48fe-f714-49a2-8064-7d552be437a1)

### Units support is spreading

The new [units](https://wiki.freecad.org/Quantity) system of FreeCAD, introduced in version 0.14, is now used by almost all modules of FreeCAD, including the [Sketcher](https://wiki.freecad.org/Sketcher_Workbench), [Draft](https://wiki.freecad.org/Draft_Workbench) or [Arch](https://wiki.freecad.org/Arch_Workbench). A few areas still don't use it, but generally speaking, you can now count on proper unit support throughout your whole workflow.

### Minor enhancements

- Import/Export now has its own section in the Edit > Preferences section. Now all file formats are grouped into their own tab, which makes it easier for new users to find the right options.
- Customized keyboard shortcuts now accept up to 4 keys.
- FreeCAD now [supports the VR Oculus Rift device](http://forum.freecadweb.org/viewtopic.php?f=9&t=7715).
- Support of custom global toolbars: Aside from adding custom toolbars with your own tools to any workbench, it is now also possible to add custom toolbars which will stay present on all workbenches.
- New Lib Pack for Windows, with the latest OCE 0.17

## Part Workbench

- A couple of new geometric elements have been added: Parabola, ArcOfParabola, Hyperbola & ArcOfHyperbola

## Part Design & Sketcher Workbench

### Ellipses

The [Sketcher](https://wiki.freecad.org/Sketcher_Workbench) gained proper support for ellipses. Those can be constructed in different ways and can be used for any kind of subsequent operation.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7b714bba-2f38-4428-8a0a-b4e8cb414af2)

### Enhanced selection tools

The Sketcher also gained a series of new tools to help you diagnose, optimize, or fix problems in your sketches. You can now, for example, easily select the elements associated with a constraint, select the constraint associated with an element, or find conflicting or redundant constraints.

The Sketcher UI also gained some new panels and now shows you a selectable list of elements of your sketch.

### Merging sketches

It is now possible to merge several sketches into one with the click of a button.

### Enhanced sketch properties

The properties view of sketch objects has also been enhanced, and named Datum constraints (distance, horizontal distance, vertical distance) inside the sketch will now appear and be editable directly in the properties view of the sketch without the need to enter edit mode.

### Minor improvements

- Added more regular polygons to the sketcher.
- Added new constraint: Symmetry constraint perpendicular to the axis of symmetry.

## Spreadsheet Workbench

The [Spreadsheet Workbench](https://wiki.freecad.org/Spreadsheet_Workbench) has been completely recoded. FreeCAD now possesses a state-of-the-art, robust, feature-rich spreadsheet editor. A couple of functionalities found in the previous version of this workbench have been removed, such as the property controllers, but this is a complex issue requiring more time to design properly. At the present time, however, the new spreadsheet already offers far better possibilities for gathering data from your model.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7b8ca3ce-068e-435c-bc5d-7e486f69f8c1)

## Draft Workbench

### Allow sticky fonts in ShapeString

For those nostalgic for old CAD software, sticky fonts (in which letters are made of simple lines, not filled shapes) can now be used with the [ShapeString](https://wiki.freecad.org/Draft_ShapeString) tool.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a53578cb-c17d-45fb-9936-5660a37e7139)

### Minor improvements

- [Lines](https://wiki.freecad.org/Draft_Line) can now be defined by their length and angle in the current working plane.
- Relative extension lines for [dimensions](https://wiki.freecad.org/Draft_Snap_Dimensions).
- Support for [sketcher ellipses](https://wiki.freecad.org/Sketcher_CompCreateConic).
- [Array](https://wiki.freecad.org/Draft_Array) objects can now be fused.

## Drawing Workbench

### Export drawing pages to DXF

The system used to export Drawing pages to DXF until now used a very complicated hack to convert the SVG code to FreeCAD object and then back to DXF with the Draft exporters. The export is done internally inside the Drawing module, giving much faster and more reliable results. DXF export uses a [template system](https://wiki.freecad.org/Drawing_templates) similar to SVG sheets. If your Drawing page uses a certain SVG template, and a DXF template with the same name is found at the same location, it is used to generate the DXF file.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8452c749-7440-42e0-906b-ce4b7c81e05b)  
In the DXF file, the different views are placed as scaled blocks. This allows for quickly restoring the 1:1 scale.

### Minor improvements

- Reusing projection settings from an existing view is now possible when creating new draft views.

## Arch Workbench

### Updated IFC importer/exporter

FreeCAD's [IFC importer](https://wiki.freecad.org/Arch_IFC) has received much work, testing, and a massive upgrade. The old, python-based importer has been disabled (it is still usable from the python console, though), and FreeCAD now uses exclusively and intensively the newest, bleeding-edge [version 5](http://ifcopenshell.org/python.html) ([read more](http://ifcopenshell.org/pythonOCC/example1/) about it) of [IfcOpenShell](http://ifcopenshell.org/) that is now available on all main platforms (be sure to download the version that matches the python version used by your FreeCAD installation). We now benefit from a much faster and more reliable import and export, a much simpler and cleaner code (read: easier to extend), and a few additional goodies, such as better support for curve-based objects and IFC properties.

### New feature: Cut object with a plane

This new functionality, [Arch CutPlane](https://wiki.freecad.org/Arch_CutPlane), makes it possible to cut an object according to a plane defined by the face of another object. Cutting the object behind or in front of the selected plane is possible.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1096428c-ca5d-44a8-b804-9603bf7bf8b1)  

### New roof tool

The [Roof](https://wiki.freecad.org/Arch_Roof) tool was completely redone and now makes it possible to define different slopes for each roof side. Moreover it is possible to define a thickness of roof, the length of the overflow.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bf6492fb-b4e9-472b-9521-4e5fdfb1a472)

### Panels

A new [Panel](https://wiki.freecad.org/Arch_Panel) object has been added to the [Arch Workbench](https://wiki.freecad.org/Arch_Workbench). It allows creation all kinds of panel-like objects, and will be especially useful for panel constructions such as the [wikihouse](http://www.wikihouse.cc/) or [popup house](http://www.popup-house.com/) projects.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e9aef2cb-3ab3-406e-a6b0-d46dbf18886b)  

### Furniture

The new [Arch Equipment](https://wiki.freecad.org/Arch_Equipment) object is designed to add all kinds of non-structural standalone objects to your architectural projects, such as lighting appliances, sanitary equipment, or furniture.

### Minor enhancements

- The Basepoint of [Arch Frame](https://wiki.freecad.org/Arch_Frame) object can now be set to a specific vertex of the profile.

## External modules

There has also been some very interesting work on new workbenches and macros that are not integrated into the FreeCAD source code (yet!), but are easy to install on an existing FreeCAD 0.15 installation. Instructions are provided on the pages linked below.

### Assembly2

The [Assembly 2 workbench](https://github.com/hamish2014/FreeCAD_assembly2) provides tools to create multi-part assemblies and is a very good alternative for the official Assembly workbench which is still under development (see [forum thread](http://forum.freecadweb.org/viewtopic.php?f=10&t=8577)).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/60e2eb51-60e8-4f04-b3f4-c029db263852)  

### Drawing Dimensioning

The [Drawing dimensioning workbench](https://github.com/hamish2014/FreeCAD_drawing_dimensioning) adds powerful dimensioning and annotation tools to the Drawing workbench (see [forum thread](http://forum.freecadweb.org/viewtopic.php?f=10&t=8395)).

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/326bd660-1fb6-45b9-b3e1-2792f7bd0796)  

### Work Features

The [WorkFeature macro](https://github.com/Rentlau/WorkFeature) adds a wide range of helper objects such as alignment planes or axes, and tools to help you position and align objects along those helper objects (see [forum thread](http://forum.freecadweb.org/viewtopic.php?f=22&t=9056)).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ba2f6494-45b5-4184-af4d-a1ab5eda5e2e)
