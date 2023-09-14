# Release 0.14

FreeCAD 0.14 was released on July 1, 2014. This is a summary of the most interesting changes. The complete list of changes can be found in the [Mantis changelog](http://www.freecadweb.org/tracker/changelog_page.php). 
Older versions: [0.13](https://wiki.freecad.org/Release_notes_0.13) - [0.12](https://wiki.freecad.org/Release_notes_0.12) - [0.11](https://wiki.freecad.org/Release_notes_0.11)

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/07ba643c-83a7-4d03-9fc4-5433e3713570)  
_Jeep model by Psicofil_

## General

### Site migration

We finally moved all the web applications of FreeCAD from [SourceForge](http://www.sourceforge.net/) to our [own domain](http://www.freecadweb.org/). The new FreeCAD homepage can be found at http://www.freecadweb.org/, the wiki is now at http://www.freecadweb.org/wiki, the bug and features tracker at http://www.freecadweb.org/tracker, and the forum at http://forum.freecadweb.org/. If you had an account on one of these applications when we were on SourceForge, you can regain your existing user following these [instructions](http://forum.freecadweb.org/viewtopic.php?f=8&t=4942).

The only part of FreeCAD that remains at SourceForge is the main git repository, at the same address: http://sourceforge.net/p/free-cad/code/ci/master/tree/ but there is also an automatic mirror of that code set up on GitHub, at http://github.com/FreeCAD/FreeCAD_sf_master.

If you haven't met the incredible FreeCAD community yet, pay us a visit to the forum and be amazed by its talent, energy, and helpfulness.

## Move to Pyside, FreeCAD is now fully LGPL

With the many complications caused by the double-license model of FreeCAD (LGPL & GPL), some of the components of FreeCAD (namely the OpenCasCade kernel) being incompatible with GPL code, we decided to switch all the remaining bits of GPL code of FreeCAD to LGPL. As a result of this operation, [PyQt](http://en.wikipedia.org/wiki/PyQt) is not used anymore and has been replaced by [PySide](http://en.wikipedia.org/wiki/PySide). There is not much consequence for Python scriptwriters, PyQt can still be used inside FreeCAD.

After we finished the move to LGPL, OpenCasCade has [switched to LGPL](http://www.opencascade.org/getocc/license/) too, which would have solved all our license conflicts too. But we now have a much clearer and unified license model, which should satisfy all the strictest Linux distributions.

### Plugins and side projects: Parts library, BOLTS, Eagle importer

The last year has seen a couple of interesting side projects emerge along FreeCAD. A [Parts library](http://github.com/yorikvanhavre/FreeCAD-library) has been started by the community and is slowly growing, consisting of a collection of reusable parts to add to your FreeCAD models. It can be launched and used from inside FreeCAD with the use of a macro.

Another similar but more ambitious project is [BOLTS](http://bolts-library.org/), which is also a parts library, but built from parametric scripts, able to produce a wide variety of parametric parts. BOLTS, although application-independent, can also be run from FreeCAD by launching a macro. The image below shows BOLTS running inside FreeCAD.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fd49b032-dc94-4000-b168-0b07f3003a48)

Another interesting external project is the [EAGLE importer](http://sourceforge.net/projects/eaglepcb2freecad/), which allows you to import PCB board designs made from several applications into FreeCAD.

### WebGL export

From FreeCAD, you can export your scene as a [WebGL](http://en.wikipedia.org/wiki/WebGL)-enabled html file. This file includes an embedded [three.js](http://threejs.org/)-based viewer that allows you to inspect the scene from the web without any plugin, as long as you view it with a WebGL-capable browser.

### Units system

Finally, a [units](https://wiki.freecad.org/Units) system has been implemented at the FreeCAD level, so it is available to all modules. You are now able to choose a unit schema from the preferences. Currently, the available schemas include millimeters, meters, and imperial measurements, but more should become available soon. Once this schema is set, most properties and tools of FreeCAD will use this unit preferentially. But the system is very flexible, and in most places, you can mix units as much as you like, for example giving measures in inches in a document set in millimeters.

### Style Sheets

FreeCAD 0.14 becomes even more customizable with the addition of [Style Sheets](http://forum.freecadweb.org/viewtopic.php?f=8&t=4700&start=30) being used to control the background image in the main window. No longer is the user stuck with the grey stone background. Almost any image, picture, or custom tile may be used to fill the background space in FreeCAD's main Window.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7533600c-fc4d-4649-ab58-49250ef6607e)  

### Display style override

The default View toolbar has been extended with a couple of new buttons to easily switch the display of the whole 3D view to wireframe, shaded or flat lines mode.

### 3D window anti-aliasing

New options have been added to the 3D view anti-aliasing system of FreeCAD, which you can find in the preferences. If you have a good 3D graphic chip, you can now enjoy FreeCAD with very high-quality anti-aliasing.

## Part

### Loft and Sweep

The [Part Loft](https://wiki.freecad.org/Part_Loft) and [Part Sweep](https://wiki.freecad.org/Part_Sweep) tools have been improved and can now use Draft Workbench objects as profiles

###Offset 

The new [Part Offset](https://wiki.freecad.org/Part_Offset) tool creates copies of a selected shape at a certain distance from the base shape.

### Thickness

A new [Part Thickness](https://wiki.freecad.org/Part_Thickness) tool is now available. This tool works on a solid shape and turns it into a hollow object by giving each of its faces a given thickness.

### Make Compound

The [Part Workbench](https://wiki.freecad.org/Part_Workbench) now features a [Make Compound](https://wiki.freecad.org/Part_Compound) tool, which allows you to quickly create a compound object from a set of selected shapes.  

### Part Primitives

New Part primitives have been added to the [Part CreatePrimitives](https://wiki.freecad.org/Part_CreatePrimitives) tool: Prisms, regular polygons, and spirals are now easy to create by filling out a couple of parameters. Furthermore, some tools from the [Draft Workbench](https://wiki.freecad.org/Draft_Workbench) can now take advantage of this feature and create these primitives too, instead of their regular Draft object, when the appropriate option is set in the Draft preferences settings.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c5d1065e-8772-42b1-8946-3848363ba4d3)  

### Measure tools

A new measurement toolset has been added to the [Part workbench](https://wiki.freecad.org/Part_Workbench). With it, you can select two shape elements (vertices, edges, or faces) and display the distance between them in absolute distance and along the X and Y axes.

## PartDesign & Sketcher

### Validate sketch

The [Sketcher](https://wiki.freecad.org/Sketcher_Workbench) now features a new [Validate sketch](https://wiki.freecad.org/Sketcher_ValidateSketch) tool to help you to validate a sketch by finding missing or redundant constraints. It can also automatically add some missing constraints in order to make your sketch fully constrained.

### Gear generator

An [involute gear generator](https://wiki.freecad.org/PartDesign_InvoluteGear) tool has been added to the [PartDesign workbench](https://wiki.freecad.org/PartDesign_Workbench), to quickly create such gears from parameters.

## Drawing

### Automatic projections

The Drawing Workbench continues to be improved with some exciting new features. Orthographic Projections now allow all views to be displayed as well as much greater control over individual views. Another key feature, Drawing Templates may now contain data defining Border and Title Block locations that will automatically confine Projections within the border while at the same time automatically avoiding the space occupied by the Title Block.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4f5ea815-e0a8-4589-a876-de255f099799)

### Symbols

A new [Drawing Symbol](https://wiki.freecad.org/Drawing_Symbol) tool is available on the [Drawing Workbench](https://wiki.freecad.org/Drawing_Workbench) allowing to quickly place SVG objects on the Drawing sheet. These objects are stored within the FreeCAD file, so you don't need to ship the original SVG file when distributing your files.

## Raytracing

### New rendering tools

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6a1188c6-a382-4736-a3a2-4b47c353e370)

The [Raytracing workbench](https://wiki.freecad.org/Raytracing_Workbench) has also received some love and reworked its toolbar. The "old" buttons that manually produced partial POV-Ray files have been removed (they are still there in the Raytracing menu), and you can now produce a rendering pretty much the same way as you use the [Drawing workbench](https://wiki.freecad.org/Drawing_Workbench): You create a new project, give it a template, then fill it with views of your objects. When you are done, just hit the render button, or export it to a file ready to render outside FreeCAD.

The [Raytracing templates](https://wiki.freecad.org/Raytracing_Workbench#Templates) system has also been extended, and templates are now easier to manipulate and create.

FreeCAD-produced .pov scripts now contain an auto-aspect ratio. Users no longer need to maintain a 4:3 aspect ratio in their Raytracing settings or manually edit the output to change ratios to get a proper render. Any width and height may now be entered without fear that the rendered objects will come out squashed or stretched.

### Luxrender support

Together with the existing support for [POV-Ray](http://en.wikipedia.org/wiki/POV-Ray), the [Raytracing workbench](https://wiki.freecad.org/Raytracing_Workbench) now also supports [LuxRender](http://en.wikipedia.org/wiki/LuxRender). Where POV-Ray is a [classical-style raytracer](http://en.wikipedia.org/wiki/Ray_tracing_%28graphics%29), that shoots rays from the camera in order to find the color of each pixel of the image, Luxrender is an [unbiased renderer](http://en.wikipedia.org/wiki/Unbiased_rendering), which takes much longer to render scenes but can produce much more realistic lighting.

## Spreadsheet

A new [Spreadsheet Workbench](https://wiki.freecad.org/Spreadsheet_Workbench) has been added to FreeCAD. It allows you to create [spreadsheet](https://wiki.freecad.org/Spreadsheet_Create) objects containing 2-dimensional spreadsheet data. It also features an editor so you can edit the spreadsheet contents (texts, numbers, and some basic formulas are supported), and a special [cell controller](https://wiki.freecad.org/Spreadsheet_Controller) object, that can scan the document for certain types of objects, extract a certain property from them, and fill a certain range of cells with these values.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/13b74890-06a8-4ab6-8cdc-a7c835fbc029)  

## Draft

### DWG import/export

FreeCAD is now able to import and export to the [DWG format](https://en.wikipedia.org/wiki/.dwg), thanks to the free, multiplatform [ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter). Once it is installed and its path set in the FreeCAD Draft preferences settings, FreeCAD will be able to import and export dwg files by converting them to dxf, then using the Draft dxf importer and exporter. The import and export of dwg files have the same limitations as the [dxf format](https://wiki.freecad.org/Draft_DXF).

### Draft to Drawing works with groups

The [Draft to Drawing](https://wiki.freecad.org/Draft_Drawing) tool, used to place Draft objects on a [Drawing](https://wiki.freecad.org/Drawing_Workbench) sheet, can now be applied on groups, allowing to create fewer View objects on the Drawing sheet. By intelligently combining your Draft objects into a couple of groups, you can quickly control the appearance of many objects on your page.

### Dimensions recoded

The [Draft Dimension](https://wiki.freecad.org/Draft_Dimension) tool has been fully recoded, and dimension objects now behave much better and have gained a few new properties, allowing to fine-tune them better, such as nicer and scalable arrows, more control over the position of the text and the direction of the dimension, and, above all, better support for the [Drawing Workbench](https://wiki.freecad.org/Drawing_Workbench). You can now place dimensions in any plane of the 3D space and expect correct results when placing them on a Drawing sheet with the [Draft Drawing](https://wiki.freecad.org/Draft_Drawing) tool.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/33abc314-f4c2-4fc7-beca-c246aceab1c4)

### Hatches

The [Draft workbench](https://wiki.freecad.org/Draft_Workbench) also features a new toy: hatching. It is now possible to apply hatching on specific Draft objects (those that form a closed shape such as closed polylines, rectangles, regular polygons, or circles). Currently, only a couple of default hatch patterns are available, but since those patterns are very easy to create (they are simple SVG files), and custom patterns can already be added by the user, the default collection might grow quickly. Draft objects with patterns are also faithfully supported by the [Drawing workbench](https://wiki.freecad.org/Drawing_Workbench).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2a9a9fdd-6258-4216-929e-3fd6c3daf120)  

### Ellipses

Support for [ellipses](https://wiki.freecad.org/Draft_Ellipse) has been added, and the Draft workbench now allows you to draw full or portions of ellipses.

### Chamfer

In the same fashion as fillets that had appeared in [release 0.13](https://wiki.freecad.org/Release_notes_0.13), Draft rectangles, wires, and polygons now gained a chamfer property, which chamfers their angle. The chamfer is applied before the fillet, and both properties can be used together, allowing you to quickly turn a very simple wire into a complex object made of many sections.

### Upgrade and downgrade recoded

The [Draft Upgrade](https://wiki.freecad.org/Draft_Upgrade) and [Draft Downgrade](https://wiki.freecad.org/Draft_Downgrade) tools, previously hermetic pieces of magic, from which you were never too sure what the result would be, have been recoded, and now output much friendlier messages, informing you what has been done and why. They are now also available to Python scripting, not only as a whole, but also their internal operations, so you can precisely order a certain upgrade type to be performed.

### Facebinder

A new [Draft Facebinder](https://wiki.freecad.org/Draft_Facebinder) tool has been added that does a very simple but potentially very useful operation: It gathers any number of selected faces from different objects and creates a new object from these faces. The new object keeps links to the original objects, so any change in them is reflected in the facebinder object. This should prove useful above all for [architectural](https://wiki.freecad.org/Arch_Workbench) objects, where you can now construct new objects from the faces of several others.

### Shape strings

The [Draft ShapeString](https://wiki.freecad.org/Draft_ShapeString) tool creates planar objects from text and a TrueType font. These objects, unlike common annotations such as the [Draft Text](https://wiki.freecad.org/Draft_Text), are real 3D objects, can be extruded, and can therefore be used to create engravings and other kinds of 3D objects with text in relief.

### Bezier Curves

Alongside the existing [arcs of circle](https://wiki.freecad.org/Draft_Arc) and [B-spline](https://wiki.freecad.org/Draft_BSpline) curves, a new type of curve has just been merged in the Draft workbench: [Bezier curves](https://wiki.freecad.org/Draft_BezCurve). They can be created by clicking points, like other Draft objects, but you can then [edit](https://wiki.freecad.org/Draft_Edit) them and modify their handle points, gaining precise control over the curve shape.  

## Arch

### Structure presets + profiles

The [Arch Structure](https://wiki.freecad.org/Arch_Structure) tool has gained several improvements: it now features presets, which allow you to quickly build a beam or column based on a standard profile such as INP or HEB, and an easier placement system, with a special [snapping](https://wiki.freecad.org/Draft_Snap) mode. You can now also give structural elements an extrusion path, making very advanced configurations possible. Some of the pieces offered by [BOLTS](https://wiki.freecad.org/Release_notes_0.14#Plugins_and_side_projects:_Parts_library.2C_BOLTS.2C_Eagle_importer) can also be created directly as Arch structural elements.

### Window presets

The [Arch Window](https://wiki.freecad.org/Arch_Window) tool also gained a new preset system. Although still based on sketches, which ensures maximum flexibility (virtually any window type can be easily created), new windows can now be made from a series of presets. You only need to choose a preset, fill in a couple of parameters, and place your window in an existing wall or structural element if you wish. Underneath, an appropriate sketch will be created, which is still editable at any later time.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ee374e5b-27ef-4cf9-8027-856073ca435e)  

### Spaces

A new [Space](https://wiki.freecad.org/Arch_Space) object is now available, allowing you to build, mark, and compute spaces and floor areas. These space objects always encompass a solid volume, so you can always know their volume and floor area. They can be built from a solid shape or from a set of boundary faces.

### Multilayer walls

[Walls](https://wiki.freecad.org/Arch_Wall) can now be multilayer with a very simple trick: Several walls can be based on the same baseline, specifying an offset distance from the baseline. This, combined with [Arch Frames](https://wiki.freecad.org/Arch_Frame), allows for example to create complex framed walls or walls with an insulation layer. Furthermore, these walls are aware of their "brothers" (other walls based on the same baseline), and any window placed on one of these walls will also create a hole in its brothers. 

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6eb5af08-8f00-472e-b24d-2caf210ca14a)  

### Stairs

A new [Stairs](https://wiki.freecad.org/Arch_Stairs) tool has also been added, allowing you to build complex stairs from several parameters. Currently, only straight stairs are available, but the list will grow over time. These stairs have many configuration parameters, such as the size of the step floor or the type of their structure.

### Reinforcing bars

Reinforcing bars (also called rebars) have been introduced with the [Arch Rebar](https://wiki.freecad.org/Arch_Rebar) tool. They are also based on sketches, which ensures great flexibility. They are created basically by drawing the diagrams of the bars on the appropriate faces of [structural elements](https://wiki.freecad.org/Arch_Structure), then turning those diagrams into actual rebars.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/78365e99-b5d6-4603-883e-74b300f56010)

### Frames

Frame systems are used everywhere in architecture: Railings, structural systems, frame walls, etc. The new [Arch Frame](https://wiki.freecad.org/Arch_Frame) tool allows to easily create all kinds of frames by combining a profile object, which can be any flat, extrudable shape, such as a rectangle or a circle, and a layout object, which defines extrusion lines on which the members of the frame object are placed. Layouts are typically drawn with the [Sketcher Workbench](https://wiki.freecad.org/Sketcher_Workbench). These Frame objects can then be turned into walls or structures if needed.

### Survey

Another simple but useful tool is now available in the Arch workbench: the [Arch Survey](https://wiki.freecad.org/Arch_Survey) mode. In this mode, you click on vertices, edges, faces, or whole objects and get their height, length, area, or volume. This information is shown on the model but also copied to the clipboard and gathered as text, so it is easy to paste into other applications, giving you a pretty fast workflow when building quantities bills.

### Tutorial

A new 35-page [tutorial](https://wiki.freecad.org/Arch_tutorial) describes the Arch workbench in all its details, following a complete exercise.

### IFC import & export

Much work has been done on FreeCAD and [IfcOpenShell](http://www.ifcopenshell.org/), which is the software responsible for handling IFC files in the Arch workbench. When using a [development version](http://github.com/aothms/IfcOpenShell) of IfcOpenShell, apart from a spectacular gain in speed when importing medium-sized IFC files (around 50Mb), FreeCAD is also able to export models to the IFC format. The support to export is still in the first stages of development, but already manages to export files readable without errors by most of the major IFC-supporting applications.

## Full list

The full list of bugfixes and new features can be read at http://freecadweb.org/tracker/changelog_page.php.
