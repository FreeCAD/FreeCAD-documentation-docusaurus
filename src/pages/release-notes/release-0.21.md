# Release 0.21

**FreeCAD 0.21** was released on **2 August 2023**, get it from the [Download](https://wiki.freecad.org/Download) page. This page lists all new features and changes.

Older FreeCAD release notes can be found in the [Feature list](https://wiki.freecad.org/Feature_list#Release_notes).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8564c8a5-b876-4e50-8f3f-9c654e3005e2)  

## General

- The default backup file naming scheme is now **FCBak**. The older format (**FCStd#**) is deprecated and will be removed in a future version. Users with the old scheme enabled will be warned on startup.    
[Pull request #9668](https://github.com/FreeCAD/FreeCAD/pull/9668)

## User interface

- The [Navigation Cube](https://wiki.freecad.org/Navigation_Cube) has been updated. The cube is no longer shown in perspective if the [3D view](https://wiki.freecad.org/3D_view) is in orthographic view mode. Corner faces have been made hexagonal and larger so that they are easier to click. Borders have been added around the buttons. Default font selection and sizing have been improved.  
The Mini-cube menu now includes a checkbox to toggle the movability of the cube. Several new parameters have been added.    
See the [Navigation Cube](https://wiki.freecad.org/Navigation_Cube) page for more information.    
[Pull request #7876](https://github.com/FreeCAD/FreeCAD/pull/7876), [Pull request #8266](https://github.com/FreeCAD/FreeCAD/pull/8266), [Pull request #8646](https://github.com/FreeCAD/FreeCAD/pull/8646) and [Pull request #9356](https://github.com/FreeCAD/FreeCAD/pull/9356)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ec7074c8-6047-483d-bc65-d9acae108d84)  

- The [Section Cut](https://wiki.freecad.org/Part_SectionCut) tool now allows to cut intersecting objects. This is useful for assemblies where intersections of touching objects can sometimes not be avoided due to numerical issues.  
[Pull request #8252](https://github.com/FreeCAD/FreeCAD/pull/8252)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2083652a-a4a9-49eb-b85c-ddde8b0b9a99)    
_Persistent section cut of intersecting objects_    

- The display style of [measurement](https://wiki.freecad.org/Part_Workbench#Measure) results created using the [Part](https://wiki.freecad.org/Part_Workbench) or [PartDesign](https://wiki.freecad.org/PartDesign_Workbench) workbench can now be changed in the [preferences](https://wiki.freecad.org/PartDesign_Preferences#Measure).  
[Pull request #7148](https://github.com/FreeCAD/FreeCAD/pull/7148)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2a07e631-74ec-4cdc-9117-6dd81d8387ff)  

- The workbench selector can now optionally be put in the menubar instead of the toolbar area.  
[Pull request #7679](https://github.com/FreeCAD/FreeCAD/pull/7679)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/af7dea41-78f4-4d27-b5e3-33ed72ac1656)  

### Further user interface improvements

- The buttons for ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c4e12c17-4ed5-49ef-8e1f-49355687d0dc) [Print](https://wiki.freecad.org/Std_Print) and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3d3393ed-9549-4a08-b470-3914ac45904d) [Edit Mode](https://wiki.freecad.org/Std_UserEditMode) have been removed from the File toolbar. They can be re-added by [customizing](https://wiki.freecad.org/Std_DlgCustomize) your toolbar.    
[Pull request #7570](https://github.com/FreeCAD/FreeCAD/pull/7570) and [commit ea9a04e](https://github.com/FreeCAD/FreeCAD/commit/ea9a04e)

- The File toolbar has been split.  
The buttons for ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aa712d6d-d799-4c02-87d0-7b6c2de63090) [Undo](https://wiki.freecad.org/Std_Undo), 
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4adcca4f-1281-430d-b986-e7538109b87b) [Redo](https://wiki.freecad.org/Std_Redo), and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f0c5269a-a588-4da8-8c02-b9d7170a966d) [Refresh](https://wiki.freecad.org/Std_Refresh) have been moved to the new Edit toolbar.  
The buttons for ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/738f7f90-1a68-4433-a0f3-dd11b0e90337) [Cut](https://wiki.freecad.org/Std_Cut), ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/05591034-62d4-4a54-9a1d-6ce0d2097882) [Copy](https://wiki.freecad.org/Std_Copy), and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3a221f8a-e017-406e-af43-99e844385023) [Paste](https://wiki.freecad.org/Std_Paste) has been moved to the new Clipboard toolbar.  
The button for ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1afb8952-5cbd-4249-a2a3-e922260807ef) [What's This?](https://wiki.freecad.org/Std_WhatsThis) has been moved to the new Help toolbar.  
[Pull request #7620](https://github.com/FreeCAD/FreeCAD/pull/7620)

- Commands to [store](https://wiki.freecad.org/Std_StoreWorkingView) and [recall](https://wiki.freecad.org/Std_RecallWorkingView) a temporary working view have been added.  
[Pull request #7525](https://github.com/FreeCAD/FreeCAD/pull/7525)

- Value changes with the mouse wheel in 'input fields' (a widget type used to enter values in task panels, for example, by [Draft Line](https://wiki.freecad.org/Draft_Line)) are disabled if the widget doesn't have the focus and the [ComboBoxWheelEventFilter](https://wiki.freecad.org/Fine-tuning#Mouse_related) parameter is enabled. This prevents unwanted value changes while scrolling, as was already the case for spin and combo boxes.  
[Pull request #7561](https://github.com/FreeCAD/FreeCAD/pull/7561)

- It is now possible to set a default transparency for new [Part](https://wiki.freecad.org/Part_Module) or [PartDesign](https://wiki.freecad.org/PartDesign_Workbench) objects in the [Preferences](https://wiki.freecad.org/PartDesign_Preferences).  
[Pull request #7103](https://github.com/FreeCAD/FreeCAD/pull/7103)

- There is the new orbit-style **Free Turntable**. It can either be enabled in the [Preferences](https://wiki.freecad.org/Preferences_Editor#Navigation) or by pressing the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7d9fac4c-67b7-4a71-ac79-626337b1605b) button in the [Status bar](https://wiki.freecad.org/Status_bar) and then using the menu **Settings → Orbit**).  
[Pull Request #8048](https://github.com/FreeCAD/FreeCAD/pull/8048)

- The [Std SetAppearance](https://wiki.freecad.org/Std_SetAppearance) task panel now also has a button to set the Point Color property.    
[Pull request #7708](https://github.com/FreeCAD/FreeCAD/pull/7708)

- A button has been added to switch the colors of the [3D view](https://wiki.freecad.org/3D_view) background gradient in the [Preferences](https://wiki.freecad.org/Preferences_Editor#Colors).    
[Pull request #7155](https://github.com/FreeCAD/FreeCAD/pull/7155)

- All transparency settings now use the uniform spin button step of 5%: One click on the button in a dialog, or the [property editor](https://wiki.freecad.org/Property_editor) changes the transparency by 5%. Keep the button pressed to change several 5% steps at once.    
[Pull request #7723](https://github.com/FreeCAD/FreeCAD/pull/7723)

- The Output window has been renamed to Report view for uniformity with the UI.     
[Pull Request #7739](https://github.com/FreeCAD/FreeCAD/pull/7739)

- The Image Workbench has been removed. To insert an Image Plane, the [Std Import](https://wiki.freecad.org/Std_Import) command can now be used. Double-click an Image Plane to change its orientation and scale. The new [Std ViewLoadImage](https://wiki.freecad.org/Std_ViewLoadImage) command replaces the Image Open command.    
[Pull Request #8955](https://github.com/FreeCAD/FreeCAD/pull/8955)

- The deprecated Raytracing Workbench has been removed. The external [Render Workbench](https://github.com/FreeCAD/FreeCAD-render) should be used instead.    
[Pull Request #9420](https://github.com/FreeCAD/FreeCAD/pull/9420)

## Core system and API

### Core

- The function **cbrt(x)** for cubic roots was added for use in [Expressions](https://wiki.freecad.org/Expressions#Exponential_and_logarithmic_functions).    
[Pull request #8629](https://github.com/FreeCAD/FreeCAD/pull/8629)
- Many new [Properties](https://wiki.freecad.org/Property#All_property_types) are available for scripting.  
[Pull request #6717](https://github.com/FreeCAD/FreeCAD/pull/6717)
- Added object creation functions `vector`, `matrix`, `rotation`, `placement` as well as matrix functions `mrotate`, `mrotatex`, `mrotatey`, `mrotatez`, `mtranslate` for use in [Expressions](https://wiki.freecad.org/Expressions).  
[Pull request #8603](https://github.com/FreeCAD/FreeCAD/pull/8603)

### API

### New Python API

- _BSplineSurfacePy::scaleKnotsToBounds_: Scales the U and V knots lists to fit the specified bounds.    
[Pull request #7258](https://github.com/FreeCAD/FreeCAD/pull/7258) and [pull request #7385](https://github.com/FreeCAD/FreeCAD/pull/7385)  
- _BSplineCurvePy::scaleKnotsToBounds_: Scales the knot's list to fit the specified bounds.    
[Pull request #7385](https://github.com/FreeCAD/FreeCAD/pull/7385)
- _ShapeFix_EdgeConnectPy_: Root class for fixing operations.    
[Commit 4d4adb93](https://github.com/FreeCAD/FreeCAD/commit/4d4adb93)
- _ShapeFix_EdgePy_: Fixing invalid edge.  
[Commit 4089cbfb](https://github.com/FreeCAD/FreeCAD/commit/4089cbfb)
- _ShapeFix_FaceConnectPy_: Rebuilds connectivity between faces in a shell.  
[Commit a0eb2e9d](https://github.com/FreeCAD/FreeCAD/commit/a0eb2e9d)
- _ShapeFix_FacePy_: Class for fixing operations on faces.  
[Commit b6cd635c](https://github.com/FreeCAD/FreeCAD/commit/b6cd635c)
- _ShapeFix_FixSmallFacePy_: Class for fixing operations on faces.  
[Commit 4c2946c8](https://github.com/FreeCAD/FreeCAD/commit/4c2946c8)
- _ShapeFix_FixSmallSolidPy_: Fixing solids with small size.    
[Commit b70d8d37](https://github.com/FreeCAD/FreeCAD/commit/b70d8d37)
- _ShapeFix_FreeBoundsPy_: Intended to output free bounds of the shape.    
[Commit 1ee1aee1](https://github.com/FreeCAD/FreeCAD/commit/1ee1aee1)
- _ShapeFix_RootPy_: Root class for fixing operations.    
[Commit f3e941a3](https://github.com/FreeCAD/FreeCAD/commit/f3e941a3)
- _ShapeFix_ShapePy_: Class for fixing operations on shapes.    
[Commit 87db9dcc](https://github.com/FreeCAD/FreeCAD/commit/87db9dcc)
- _ShapeFix_ShapeTolerancePy_: Modifies tolerances of sub-shapes (vertices, edges, faces).    
[Commit 125d5b63](https://github.com/FreeCAD/FreeCAD/commit/125d5b63)
- _ShapeFix_ShellPy_: Root class for fixing operations.    
[Commit f3e941a3](https://github.com/FreeCAD/FreeCAD/commit/f3e941a3)
- _ShapeFix_SolidPy_: Root class for fixing operations.  
[Commit 8d568793](https://github.com/FreeCAD/FreeCAD/commit/8d568793)
- _ShapeFix_SplitCommonVertexPy_: Class for fixing operations on shapes.  
[Commit 4b44c54c](https://github.com/FreeCAD/FreeCAD/commit/4b44c54c)
- _ShapeFix_SplitToolPy_: Tool for splitting and cutting edges.  
[Commit bbecc3f2](https://github.com/FreeCAD/FreeCAD/commit/bbecc3f2)
- _ShapeFix_WireframePy_: Provides methods for fixing wireframe of shape.  
[Commit 6843a461](https://github.com/FreeCAD/FreeCAD/commit/6843a461)
- _ShapeFix_WirePy_: Class for fixing operations on wires.  
[Commit 94f6279a](https://github.com/FreeCAD/FreeCAD/commit/94f6279a)
- _ShapeFix_WireVertexPy_: Fixing disconnected edges in the wire.  
[Commit 8c6ffc99](https://github.com/FreeCAD/FreeCAD/commit/8c6ffc99)

### Removed Python API

- _FreeCAD.EndingAdd_: replaced by _FreeCAD.addImportType_.    
[Pull request #7167](https://github.com/FreeCAD/FreeCAD/pull/7167)
- _FreeCAD.EndingGet_: replaced by _FreeCAD.getImportType_.    
[Pull request #7167](https://github.com/FreeCAD/FreeCAD/pull/7167)

## Addon Manager

- Added basic Python package management for updating and removing automatically-installed dependencies.
- Added a "developer mode" to aid in the creation of the metadata file required in each Addon.  

## Arch Workbench

- Several [Arch Profile](https://wiki.freecad.org/Arch_Profile) categories have been added: IS RHS, IS SHS, IS Angle and IS Tee.    
Pull request #7181](https://github.com/FreeCAD/FreeCAD/pull/7181) and [pull request #7217](https://github.com/FreeCAD/FreeCAD/pull/7217)
- [Arch Profile](https://wiki.freecad.org/Arch_Profile) objects now support modification of the profile type after creation.  
[Pull request #7217](https://github.com/FreeCAD/FreeCAD/pull/7217)
- Several edit mode issues have been fixed, and the [Tree view](https://wiki.freecad.org/Tree_view) context menus for Arch objects have been improved. Objects that can be edited now have an **Edit** option in that menu.  
The **Set colors** option was removed for objects without a face, or that can only have a single face.  
[Pull request #8122](https://github.com/FreeCAD/FreeCAD/pull/8122)
- [Arch SectionPlane](https://wiki.freecad.org/Arch_SectionPlane) objects now handle non-solid objects the same as solid objects.  
[Pull request #8688](https://github.com/FreeCAD/FreeCAD/pull/8688)

### Further Arch improvements

- The **Invert hinge position** tool has been improved. For all rectangular wires, the opposite edge is now correctly detected.    
Pull request #8199](https://github.com/FreeCAD/FreeCAD/pull/8199)
- The Terrain of an [Arch Site](https://wiki.freecad.org/Arch_Site) can now also be a solid.    
[Pull request #8409](https://github.com/FreeCAD/FreeCAD/pull/8409)
- An [Arch Site](https://wiki.freecad.org/Arch_Site) no longer shows a phantom representation of the objects in its Group.     
[Pull request #8409](https://github.com/FreeCAD/FreeCAD/pull/8409)

## Draft Workbench

- The inaccuracy of [Draft Snap Near](https://wiki.freecad.org/Draft_Snap_Near) when snapping to curves was fixed. In addition, [Draft Snap Perpendicular](https://wiki.freecad.org/Draft_Snap_Perpendicular) can now also snap to faces and find multiple points.  
To snap to a vertex (e.g. a [Draft Point](https://wiki.freecad.org/Draft_Point)) [Draft Snap Endpoint](https://wiki.freecad.org/Draft_Snap_Endpoint) must now be used instead of [Draft Snap Near](https://wiki.freecad.org/Draft_Snap_Near).  
[Pull request #7132](https://github.com/FreeCAD/FreeCAD/pull/7132)


- To make working with [layers](https://wiki.freecad.org/Draft_Layer) easier, their drag and drop behavior was modified. If you drop an object from a [Std Group](https://wiki.freecad.org/Std_Group) or a group-like object such as an [Arch BuildingPart](https://wiki.freecad.org/Arch_BuildingPart), on a layer, it is no longer removed from the group, and vice versa.  
This works without holding down the `Ctrl` key.  
[Pull request #7462](https://github.com/FreeCAD/FreeCAD/pull/7462)

- The [Draft PointArray](https://wiki.freecad.org/Draft_PointArray) command now supports more point object types. Any object with a shape and vertices, as well as a [mesh](https://wiki.freecad.org/Mesh_Workbench) and a [point cloud](https://wiki.freecad.org/Points_Workbench) can be used.  
[Pull request #7597](https://github.com/FreeCAD/FreeCAD/pull/7597)

- The [Tree view](https://wiki.freecad.org/Tree_view) context menus for Draft objects have been improved. Objects that can be edited with the [Draft Edit](https://wiki.freecad.org/Draft_Edit) command, or that have a dedicated edit solution, now have an **Edit** option in that menu. The **Set colors** option was removed for objects without a face, or that can only have a single face.  
[Pull request #7970](https://github.com/FreeCAD/FreeCAD/pull/7970)

- The properties of Draft annotation objects have been unified. [Draft Text](https://wiki.freecad.org/Draft_Text), [Draft Dimension](https://wiki.freecad.org/Draft_Dimension) and [Draft Label](https://wiki.freecad.org/Draft_Label) objects now all have a Font Name, a Font Size and a Text Color property.  
The Display Mode options have also been made consistent and are now: **Screen** and **World**.  
[Issue #7861](https://github.com/FreeCAD/FreeCAD/issues/7861) and [pull request #8081](https://github.com/FreeCAD/FreeCAD/pull/8081)

- In the task panel of the [Draft SetStyle](https://wiki.freecad.org/Draft_SetStyle) command the **Texts/dims** button has been replaced by the **Annotations** button. Pressing this button will process all annotations, including [Draft Labels](https://wiki.freecad.org/Draft_Label). **Dim overshoot**, **Ext lines** and **Ext overshoot** parameters have been added.  
Several minor additional issues were also fixed.  
[Pull request #8190](https://github.com/FreeCAD/FreeCAD/pull/8190), [pull request #8195](https://github.com/FreeCAD/FreeCAD/pull/8195), [pull request #8196](https://github.com/FreeCAD/FreeCAD/pull/8196), and [pull request #9514](https://github.com/FreeCAD/FreeCAD/pull/9514)

- Undo/Redo did not work properly for the Draft modification commands on Windows.  
[Pull request #8267](https://github.com/FreeCAD/FreeCAD/pull/8267)

- The [LayerManager command](https://wiki.freecad.org/Draft_LayerManager) has been migrated from the BIM Workbench to the Draft Workbench.  
[Pull request #8795](https://github.com/FreeCAD/FreeCAD/pull/8795) 

### Further Draft improvements

- When aligning the working plane with a face, it was only rotated to match the global axes if the face was a quad.  
[Pull request #7249](https://github.com/FreeCAD/FreeCAD/pull/7249)

- Several [Draft PathArray](https://wiki.freecad.org/Draft_PathArray) related issues have been fixed.  
[Pull request #7506](https://github.com/FreeCAD/FreeCAD/pull/7506) and [pull request #7662](https://github.com/FreeCAD/FreeCAD/pull/7662)  

- The [Draft Edit](https://wiki.freecad.org/Draft_Edit) command has received several improvements.  
For [wires](https://wiki.freecad.org/Draft_Wire), [B-splines](https://wiki.freecad.org/Draft_BSpline), and [Bézier curves](https://wiki.freecad.org/Draft_BezCurve) a Close/Open option has been added to the edge context menu.   
For B-splines and Bézier curves, a Reverse option has also been added to the same menu.    
The task panels have been cleaned up.   
[Pull request #7527](https://github.com/FreeCAD/FreeCAD/pull/7527) and [pull request #7541](https://github.com/FreeCAD/FreeCAD/pull/7541)

- Using Esc to exit a command no longer switches off continue mode.  
[Pull request #7611](https://github.com/FreeCAD/FreeCAD/pull/7611)

- The [Draft Snap](https://wiki.freecad.org/Draft_Snap) toolbar was changed to a standard toolbar. Keyboard shortcuts can now be assigned to snaps. But using them during a command only works if none of the input boxes in the task panel has the focus as they 'catch' the so-called in-command shortcuts.  
[Pull request #7656](https://github.com/FreeCAD/FreeCAD/pull/7656)

- Several [Draft AnnotationStyleEditor](https://wiki.freecad.org/Draft_AnnotationStyleEditor) bugs have been fixed. The parameters of the **Text color** and **Text spacing** have been added.  
[Pull request #8207](https://github.com/FreeCAD/FreeCAD/pull/8207) and [pull request #9702](https://github.com/FreeCAD/FreeCAD/pull/9702)

- Start and End Offset properties have been added to [Draft PathArray](https://wiki.freecad.org/Draft_PathArray) objects.  
[Pull request #8295](https://github.com/FreeCAD/FreeCAD/pull/8295)

- A Count property has been added to the arrays that lacked this property: the non-Link versions of [Draft OrthoArray](https://wiki.freecad.org/Draft_OrthoArray), [Draft PolarArray](https://wiki.freecad.org/Draft_PolarArray) and [Draft CircularArray](https://wiki.freecad.org/Draft_CircularArray).  
[Pull request #8433](https://github.com/FreeCAD/FreeCAD/pull/8433)

- The on/off behavior of the [grid](https://wiki.freecad.org/Draft_Snap_Grid) has been fixed.  
[Pull request #8818](https://github.com/FreeCAD/FreeCAD/pull/8818)

- The handling of DWG converters has been improved.  
[Pull request #9444](https://github.com/FreeCAD/FreeCAD/pull/9444) and [pull request #9830](https://github.com/FreeCAD/FreeCAD/pull/9830)

## FEM Workbench

- There is the new ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bbb0a5ec-043d-416b-9be6-a383932293ce) [Contours filter](https://wiki.freecad.org/FEM_PostFilterContours) that allows to draw iso-lines or iso-contours. Iso-contours are connected mesh nodes that have the same result field value.    
A typical example is electric field lines.    
[Pull request #8462](https://github.com/FreeCAD/FreeCAD/pull/8462)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7c90e3cd-659c-4bc0-93f6-ca19bd00db88)    
_Iso-contours, depicting the y-component of the absolute magnetic flux density in and around a copper wire flown through by electric current at a frequency of 100 kHz.  
For more info about this model, see section 14 of the [Elmer Tutorials](https://www.nic.funet.fi/index/elmer/doc/ElmerTutorials.pdf)._

- Using multiple CPU cores, it is now possible to run the solver [Elmer](https://wiki.freecad.org/FEM_SolverElmer).  
For more info about the caveats, see [this forum post](https://forum.freecadweb.org/viewtopic.php?p=610617#p610617).    
[Pull request #7159](https://github.com/FreeCAD/FreeCAD/pull/7159)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/78a65eee-a4e2-4a71-b045-34e3613da88d)  
_Simulation result (of flowing water being heated) where 8 mesh regions are visible (one for every CPU core used)_  

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7930de54-47fe-491f-9813-99c1399d693d) [Magnetodynamic 2D equation](https://wiki.freecad.org/FEM_EquationMagnetodynamic2D) was added. With this, it is possible to perform electromagnetic simulations in 2D.  
[Pull request #8355](https://github.com/FreeCAD/FreeCAD/pull/8355)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/052bb9d6-50de-4f00-92b6-ba9446bbe8cf)    
Simulation result of the imaginary part of the current density in a crucible that was heated electrically by a surrounding coil.  
This model is available via the [FEM Examples](https://wiki.freecad.org/FEM_Examples).  
For more info about this model, see section 16 of the [Elmer Tutorials](https://www.nic.funet.fi/index/elmer/doc/ElmerTutorials.pdf).

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ff8302c6-75b8-4bee-909d-8fe4076a4bb3) [Magnetodynamic equation](https://wiki.freecad.org/FEM_EquationMagnetodynamic) was added. With this, it is possible to perform electromagnetic simulations.  
[Pull request #8380](https://github.com/FreeCAD/FreeCAD/pull/8380)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a17b8342-bfdc-4649-a7d1-afcb0f8244ad)  
_Simulation result of the imaginary part of the magnetic flux density in and around a copper wire that is flown through by electric current at a frequency of 100 kHz.  
This model is available via the [FEM Examples](https://wiki.freecad.org/FEM_Examples).  
For more info about this model, see section 14 of the [Elmer Tutorials](https://www.nic.funet.fi/index/elmer/doc/ElmerTutorials.pdf)._

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5373ff17-0307-4e61-ab3b-5eeb6bac6536) [Deformation equation](https://wiki.freecad.org/FEM_EquationDeformation) was added. With this, it is possible to perform nonlinear elasticity analyses (deformation).  
[Pull request #8981](https://github.com/FreeCAD/FreeCAD/pull/8981)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f6f0bc20-903e-4471-a1c2-e12c7b46b086)  
_Simulation result of an iron U-wire that is deformed by pressing the ends of the U together.  
For more info about this model, see section 8 of the [Elmer Tutorials](https://www.nic.funet.fi/index/elmer/doc/ElmerTutorials.pdf)._  

### Further FEM improvements

- When performing analyses using the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cc4ff708-7028-4525-ab9f-b5d7a97dd0d5) [CalculiX solver](https://wiki.freecad.org/FEM_SolverCalculixCxxtools), there is now also a [results pipeline](https://wiki.freecad.org/FEM_PostPipelineFromResult) created to visualize the results.  
[Pull request #8525](https://github.com/FreeCAD/FreeCAD/pull/8525) and [pull request #8903](https://github.com/FreeCAD/FreeCAD/pull/8903)

- It is now possible to perform [transient analyses](https://wiki.freecad.org/FEM_SolverElmer_SolverSettings#Timestepping_(transient_analyses)) when using the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bebc3372-8825-46b8-8679-996df906f9c3) [Elmer solver](https://wiki.freecad.org/FEM_SolverElmer).  
[Pull request #9056](https://github.com/FreeCAD/FreeCAD/pull/9056)

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/62994ef6-61ee-46ff-8db2-13b0cdee8747) [initial pressure constraint](https://wiki.freecad.org/FEM_ConstraintInitialPressure) was added to set the initial internal pressure of fluids.  
[Pull request #7364](https://github.com/FreeCAD/FreeCAD/pull/7364)

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8579cd3b-fe90-4572-aa3e-8c255fdeab20) [current density constraint](https://wiki.freecad.org/FEM_ConstraintCurrentDensity) was added to set current densities for bodies and faces.  
[Pull request #8348](https://github.com/FreeCAD/FreeCAD/pull/8348)

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/18e29bcb-f763-4249-9551-307994688bbc) [magnetization constraint](https://wiki.freecad.org/FEM_ConstraintMagnetization) was added to set magnetizations for bodies and faces.  
[Pull request #8393](https://github.com/FreeCAD/FreeCAD/pull/8393)

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/75850d44-ab76-4b26-8646-b96809a62ea2) [flow velocity constraint](https://wiki.freecad.org/FEM_ConstraintFlowVelocity) and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fd41ecde-405b-4f1d-9124-aeb2ebef9b33) [initial flow velocity constraint](https://wiki.freecad.org/FEM_ConstraintInitialFlowVelocity) were completely rewritten. It is now also possible to specify a velocity via a math formula (to define a velocity profile).  
[Pull request #8963](https://github.com/FreeCAD/FreeCAD/pull/8963) and [pull request #8964](https://github.com/FreeCAD/FreeCAD/pull/8964)  
> **Note**: This is a breaking change. Analyses with existing flow velocity and initial flow velocity constraints will not work anymore. You have to create new flow velocity constraints in the analysis to make existing analyses work.
> **Also note**: until FreeCAD 0.21, the results of the flow solver were wrong (fluid density and viscosity were a factor of 1000 too high). Therefore, the necessary recreation of the velocity constraint also assures the results will be correct.

- It is now possible to define in the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d1361b01-5b3c-4310-875b-9424a6d2922c) [displacement constraint](https://wiki.freecad.org/FEM_ConstraintDisplacement) displacements as equations (displacement according to the current solver time).

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f3bb7196-19d2-4f9d-afe5-53551692f22f) [body heat source constraint](https://wiki.freecad.org/FEM_ConstraintBodyHeatSource) has now a task panel and it is possible to set the heat for several bodies or to use several constraints for different bodies in one analysis.  
[Pull request #7367](https://github.com/FreeCAD/FreeCAD/pull/7367)

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e1ef423c-b686-412e-97d8-28730c954085) [spring constraint](https://wiki.freecad.org/FEM_ConstraintSpring) was not used by any solver. Now, it can be used by the [Elmer](https://wiki.freecad.org/FEM_SolverElmer) solver via the equations [Deformation](https://wiki.freecad.org/FEM_EquationDeformation) and [Elasticity](https://wiki.freecad.org/FEM_EquationElasticity).  
[Pull request #9005](https://github.com/FreeCAD/FreeCAD/pull/9005)

- The result mesh cut function ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7f7f7e69-0121-4a2c-adde-37427109d4c3) [Filter function cylinder](https://wiki.freecad.org/FEM_PostCreateFunctionCylinder) was added.  
[Pull request #8735](https://github.com/FreeCAD/FreeCAD/pull/8735)

- The result mesh cut function ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/512c9e3a-f886-44a3-9ef5-bc93d394e90b) [Filter function box](https://wiki.freecad.org/FEM_PostCreateFunctionBox) was added.  
[Pull request #8825](https://github.com/FreeCAD/FreeCAD/pull/8825)

- It is now possible to open (and this way visualize) ***.pvtu** files (partitioned VTK unstructured grid data).  
A *.pvtu file is also the result of an [Elmer](https://wiki.freecad.org/FEM_SolverElmer) simulation when more than one CPU core is used for calculations.  
[Pull request #7159](https://github.com/FreeCAD/FreeCAD/pull/7159)

- **Critical Strain Ratio** has been added to the VTK result pipeline. It gives an indication of ductile rupture for materials with a "MaterialMechanicalNonlinear" object.  
[Pull request #7467](https://github.com/FreeCAD/FreeCAD/pull/7467)

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/da2ae82d-5c44-48eb-a4a4-9b92a2c2afab) [FEM mesh to mesh](https://wiki.freecad.org/FEM_FemMesh2Mesh) has the new parameter scale to define the scale of deformed mesh using Python.  
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=18&t=71936) and [pull request #7715](https://github.com/FreeCAD/FreeCAD/pull/7715)

- The [preferences](https://wiki.freecad.org/FEM_Preferences) have a new option to define which solver should automatically be added when creating a new analysis.

- Usability improvements:
  - If you are in the FEM workbench when loading a FreeCAD file containing an analysis, the analysis gets activated automatically (you have immediate access to all FEM toolbar buttons).
  - The toolbar only has buttons for solvers installed on your system. Unavailable solvers are no longer displayed.

- New example files for the following equations are available via the [FEM Examples](https://wiki.freecad.org/FEM_Examples): [Deformation](https://wiki.freecad.org/FEM_EquationDeformation), [Flow](https://wiki.freecad.org/FEM_EquationFlow), [Flux](https://wiki.freecad.org/FEM_EquationFlux), [Heat](https://wiki.freecad.org/FEM_EquationHeat), [Magnetodynamic](https://wiki.freecad.org/FEM_EquationMagnetodynamic) and [Magnetodynamic 2D](https://wiki.freecad.org/FEM_EquationMagnetodynamic2D).  
Pull requests [#8550](https://github.com/FreeCAD/FreeCAD/pull/8550), [#8569](https://github.com/FreeCAD/FreeCAD/pull/8569), [#8579](https://github.com/FreeCAD/FreeCAD/pull/8579), [#8597](https://github.com/FreeCAD/FreeCAD/pull/8597), [#8630](https://github.com/FreeCAD/FreeCAD/pull/8630), and [#9004](https://github.com/FreeCAD/FreeCAD/pull/9004)  

- New material card for carbon dioxide and a titanium alloy.  
[Pull request #8332](https://github.com/FreeCAD/FreeCAD/pull/8332) and [pull request #8636](https://github.com/FreeCAD/FreeCAD/pull/8636)

## Mesh

- Support to add transparencies to a mesh.  
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=22&t=72531) and [commit f88305e](https://github.com/FreeCAD/FreeCAD/commit/f88305e)

## Part Workbench

- The [Part PointsFromMesh](https://wiki.freecad.org/Part_PointsFromMesh) command has been extended to accept any geometric object as input.  
[Pull request #8730](https://github.com/FreeCAD/FreeCAD/pull/8730)

## PartDesign Workbench

- The [Hole](https://wiki.freecad.org/PartDesign_Hole) dialog supports the screw head type _Counterdrill_.    
[Pull request #7562](https://github.com/FreeCAD/FreeCAD/pull/7562)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/398a670e-8f48-4f93-a2c0-52340a2f0094)    
_A counterdrill hole_

- The UX on multiple PartDesign task dialogs for selecting geometries has been improved, now no longer requiring the use of separate buttons for adding or removing geometries to the selection.    
[Pull request #8990](https://github.com/FreeCAD/FreeCAD/pull/8990)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1b0edbb5-7bd6-4bcb-a05d-f326c464dade)

### Further PartDesign improvements

- In the [Hole](https://wiki.freecad.org/PartDesign_Hole) dialog, the deprecated screw head types (cheese head, cap screw, etc.) have been removed. They were deprecated since FreeCAD 0.19.  
Holes using these types are transformed into custom countersinks/counterbore holes with the diameter and depth used by the types.  
[Pull request #7654](https://github.com/FreeCAD/FreeCAD/pull/7654)

- In the [Additive Loft](https://wiki.freecad.org/PartDesign_AdditiveLoft) and [Subtractive Loft](https://wiki.freecad.org/PartDesign_SubtractiveLoft) dialogs, the previously non-functional option **Closed** does now create a closed loft (like a ring).  
[Pull request #8748](https://github.com/FreeCAD/FreeCAD/pull/8748)

- The [Validate sketch](https://wiki.freecad.org/Sketcher_ValidateSketch) command was added to Helper toolbar.  
[Pull request #7700](https://github.com/FreeCAD/FreeCAD/pull/7700)

- The unusable [Leave sketch](https://wiki.freecad.org/Sketcher_LeaveSketch) and [View sketch](https://wiki.freecad.org/Sketcher_ViewSketch) commands were removed from the menu.  
The [Edit sketch](https://wiki.freecad.org/Sketcher_EditSketch), [Merge sketches](https://wiki.freecad.org/Sketcher_MergeSketches) and [Mirror sketch](https://wiki.freecad.org/Sketcher_MirrorSketch) commands were added to the menu.  
[Pull request #7700](https://github.com/FreeCAD/FreeCAD/pull/7700)

- The [involute gear profile](https://wiki.freecad.org/PartDesign_InvoluteGear) has new properties to change the tooth length. This now allows adjustments for certain types of interferences and to use the profile to create [involute splines](https://en.wikipedia.org/wiki/Spline_(mechanical)) too.    
[Pull request #8184](https://github.com/FreeCAD/FreeCAD/pull/8184)

- The [involute gear profile](https://wiki.freecad.org/PartDesign_InvoluteGear) now offers profile shifting.    
[Issue #5618](https://github.com/FreeCAD/FreeCAD/issues/5618) and [pull request #8934](https://github.com/FreeCAD/FreeCAD/pull/8934)

- When creating a [Clone](https://wiki.freecad.org/PartDesign_Clone), it will now inherit the colors of the cloned object.  
[Pull request #9547](https://github.com/FreeCAD/FreeCAD/pull/9547)

## Path Workbench

- **Camotics integration**: If Camotics (version 1.2.2 or later) is installed, a new icon will be added to the Path toolbar.  
Select a Path Job and press the button to open the Camotics dialog. Then, drag the slider to generate a simulated solid at any point in the job. You can also launch the full camotics application to run the animated simulation. This results in a silent post-processing of the job and the creation of a camotics project file.  
[Pull request #6637](https://github.com/FreeCAD/FreeCAD/pull/6637)

- **Additional substitution strings for automatic output naming**: If the output is being split into multiple files, the filenames can automatically substitute the tool controller label, Work Coordinate Systems (WCS), or operation label.  
This is in addition to the other existing substitution strings like date, job name, etc.

- Implemented Chipbreaking option for peck-style drill cycles. Chip breaking emits a G73 cycle, which causes the control to make a very small retraction move to break the chip without fully retracting the bit from the hole. G73 is supported natively by LinuxCNC.  
Some other postprocessors will have to interpret the G73 and emit control-appropriate codes or decompose the retraction into G1/G0 moves.  
Postprocessor support for G73 decomposition has been added to the "refactored" postprocessors.  
[Pull request #7469](https://github.com/FreeCAD/FreeCAD/pull/7469)

## Sketcher Workbench

- B-spline knots can now be dragged around and constrained like any other sketch point.  
[Pull request #7484](https://github.com/FreeCAD/FreeCAD/pull/7484)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/46ca93b9-ed81-4485-b802-b8bd505bfc46)  
_Dragging of B-spline knots_   

- Dragging a B-spline now only moves the part between knots.  
[Pull request #7110](https://github.com/FreeCAD/FreeCAD/pull/7110)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/86277043-5fee-4c59-a309-39fb462517c0)    
_Dragging of a B-spline_

- The [Join curves](https://wiki.freecad.org/Sketcher_JoinCurves) tool has been added. It can combine two curves into a single B-spline.  
[Pull request #6507](https://github.com/FreeCAD/FreeCAD/pull/6507)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/68368621-8966-45ef-a5cc-0c03c25d8dda)  

- Sketches can now be seamlessly edited from the front or back. When working from the back, vertices (and all geometries and constraints) are equally selectable, and the section view is switched automatically.  
[Pull request #7417](https://github.com/FreeCAD/FreeCAD/pull/7417)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/680142a3-1445-407c-b97a-632386a5fdee)  

- The Sketcher grid has been reworked. The [Grid](https://wiki.freecad.org/Sketcher_Grid) tool has been added. Automatic rescaling of the grid option has been added.  
[Pull request #8473](https://github.com/FreeCAD/FreeCAD/pull/8473)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aec48dc2-d870-4368-ae26-387e375bbc25)  

- The Sketcher Constraint widget has been reworked to simplify the UI.  
[Pull request #7566](https://github.com/FreeCAD/FreeCAD/pull/7566)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b0256d69-5f8d-4b01-b792-8b42e07e740c)  

- The Element widget has been reworked to simplify the UI and enable a simpler selection of the different parts of each geometry: Edge, start point, end point, and midpoint.  
[Pull request #7567](https://github.com/FreeCAD/FreeCAD/pull/7567)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e74a9e5a-b817-4e79-acef-782cf9cfdad6)  

- A feature to automatically resize the grid according to the zoom level and other improvements were introduced.  
[Pull request #8473](https://github.com/FreeCAD/FreeCAD/pull/8473)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d76192bc-198d-4e9a-a623-b9d11752d5fa)  

- Basic visual layers functionality was introduced. For now, only 3 hardcoded layers are supported. Expect further improvements down the road.  
This PR also removes the "Edit controls" widget from the task panel as all its contents have been moved to other places or removed. The rendering order options have been moved to the Sketcher edit tools toolbar.    
[Pull request #8716](https://github.com/FreeCAD/FreeCAD/pull/8716) and [pull request #9590](https://github.com/FreeCAD/FreeCAD/pull/9590)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a9aac0d1-7165-469f-82b1-c999b3015a81)  

- Circle to circle [distance constraint](https://wiki.freecad.org/Sketcher_ConstrainDistance) was introduced.  
[Pull request #8896](https://github.com/FreeCAD/FreeCAD/pull/8896)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8dba3e85-4416-4575-bf77-fdc5118680c3)  

- Circle to line [distance constraint](https://wiki.freecad.org/Sketcher_ConstrainDistance) was introduced.  
[Pull request #9044](https://github.com/FreeCAD/FreeCAD/pull/9044)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/28296f1a-bedc-4e4a-80fd-ba0ae657223f)  

- Snap Manager, snapping at angle and midpoint snap were added.  
[Pull request #8387](https://github.com/FreeCAD/FreeCAD/pull/8387)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e98846ba-737b-4c84-a608-7a0bad17751c)  

- [Coincident constraint](https://wiki.freecad.org/Sketcher_ConstrainCoincident) can now act as a concentric constraint when selecting 2 or more circles, arcs, ellipses, or arcs of ellipses.  
[Pull request #7703](https://github.com/FreeCAD/FreeCAD/pull/7703)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2e038c7f-26b8-4ad6-ba76-0f8e597fdc72)  

- [B-spline by knots](https://wiki.freecad.org/Sketcher_CreateBSplineByInterpolation) tool was added.  
[Pull request #8530](https://github.com/FreeCAD/FreeCAD/pull/8530)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/93a84275-7471-4c6f-90a5-d6f0dc3f0ff1)  

- [Periodic B-spline by knots](https://wiki.freecad.org/Sketcher_CreatePeriodicBSplineByInterpolation) tool was added.  
[Pull request #8530](https://github.com/FreeCAD/FreeCAD/pull/8530)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f0b3070b-89ae-4794-93e8-b0da8769ca99)  

### Further Sketcher improvements

- The toolbar button for [Constrain refraction (Snell's law)](https://wiki.freecad.org/Sketcher_ConstrainSnellsLaw) has been removed.  
[Commit ef62fc3](https://github.com/FreeCAD/FreeCAD/commit/ef62fc3)
- [Split](https://wiki.freecad.org/Sketcher_Split) now supports more curves (ellipses, parabolas, hyperbolas, and B-splines).  
[Pull request #6971](https://github.com/FreeCAD/FreeCAD/pull/6971)
- The [Dimensional Constraints](https://wiki.freecad.org/Sketcher_Workbench#Dimensional_constraints) and Quantity Spin Boxes now support the same math as [Expressions](https://wiki.freecad.org/Expressions) (evaluated in place).  
[Pull Request #7124](https://github.com/FreeCAD/FreeCAD/pull/7124)
- The toolbar buttons for [Select redundant constraints](https://wiki.freecad.org/Sketcher_SelectRedundantConstraints) and [Select conflicting constraints](https://wiki.freecad.org/Sketcher_SelectConflictingConstraints) have been removed.  
[Pull request #7568](https://github.com/FreeCAD/FreeCAD/pull/7568)
- The toolbar button for [Stop operation](https://wiki.freecad.org/Sketcher_StopOperation) has been removed.  
[Pull request #7569](https://github.com/FreeCAD/FreeCAD/pull/7569)
- The toolbar button for [Select unconstrained DoF](https://wiki.freecad.org/Sketcher_SelectElementsWithDoFs) has been removed.  
[Pull request #7603](https://github.com/FreeCAD/FreeCAD/pull/7603)
- The Sketcher toolbar has been split in two: 'Sketcher-edit-mode' and 'Sketcher' (i.e. 'not edit mode').  
The Sketcher toolbars that are only for edit mode are hidden in non-edit mode, and those only for non-edit mode are hidden in edit mode.  
The Structure toolbar is also hidden in Sketcher.  
[Pull request #7655](https://github.com/FreeCAD/FreeCAD/pull/7655)
- [Carbon copy](https://wiki.freecad.org/Sketcher_CarbonCopy) if possible, now uses constraint names in the expressions it creates instead of an index-based reference, making it more reliable.  
[Pull request #7688](https://github.com/FreeCAD/FreeCAD/pull/7688)
- The Constrain internal alignment tool has been removed. It has become obsolete since the introduction of the [Show/hide internal geometry tool](https://wiki.freecad.org/Sketcher_RestoreInternalAlignmentGeometry).  
[Pull request #8863](https://github.com/FreeCAD/FreeCAD/pull/8863)
- The Sketcher 'Solver Message' taskbox has been simplified.  
The auto-remove-redundant checkbox has been moved to the Constraint taskbox setting button menu.  
The auto-update checkbox has been moved to the menu of the update button.  
[Pull request #8864](https://github.com/FreeCAD/FreeCAD/pull/8864)

## Surface Workbench

- The [Blend Curve](https://wiki.freecad.org/Surface_BlendCurve) tool was added.  
[Pull request #7339](https://github.com/FreeCAD/FreeCAD/pull/7339)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7bfb94e1-197e-4551-b989-ba8909f12719)  

## TechDraw Workbench

- The [SurfaceFinishSymbol](https://wiki.freecad.org/TechDraw_SurfaceFinishSymbol) tool was added to allow for the creation of surface finish symbols describing roughness, lay, and waviness, but also denoting the type of surface treatment.    
It supports both ISO and ASME styles.  
As shown in the image, the existing [LeaderLine](https://wiki.freecad.org/TechDraw_LeaderLine) tool can be used to properly refer oriented symbols to the edges of an object.  
[Pull request #7227](https://github.com/FreeCAD/FreeCAD/pull/7227)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0eb9a761-4017-4db8-a42b-a890a262f207)  

- The [ComplexSection](https://wiki.freecad.org/TechDraw_ComplexSection) tool was added to create half, offset, and aligned sections.  
[Pull request #7658](https://github.com/FreeCAD/FreeCAD/pull/7658)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c619541e-7778-4d6d-abc2-9d92a5f2e41a)  

- The [HoleShaftFit](https://wiki.freecad.org/TechDraw_HoleShaftFit) tool was added.  
[Pull request #8455](https://github.com/FreeCAD/FreeCAD/pull/8455)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c97522d2-8c12-418b-b7e8-b9516021d034)  

- The [AxoLengthDimension](https://wiki.freecad.org/TechDraw_AxoLengthDimension) tool was added.  
[Pull request #8359](https://github.com/FreeCAD/FreeCAD/pull/8359)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4ecde21e-d727-4cdd-8043-3012f34084d1)

### Further TechDraw improvements

- Navigation modes have been updated to match those used in the 3D view.    
[Pull request #7081](https://github.com/FreeCAD/FreeCAD/pull/7081) and [pull request #7107](https://github.com/FreeCAD/FreeCAD/pull/7107)  

- Bitmap hatching was fixed.    
[Issue #6582](https://github.com/FreeCAD/FreeCAD/issues/6582) and [pull request #7121](https://github.com/FreeCAD/FreeCAD/pull/7121)

- Support for adjustable gaps for extension lines of [dimensions](https://wiki.freecad.org/TechDraw_Preferences#Dimensions) was added.  
[Pull request #7133](https://github.com/FreeCAD/FreeCAD/pull/7133)

- Multithreading was introduced for hidden line removal and face finding.  
[Pull request #7377](https://github.com/FreeCAD/FreeCAD/pull/7377)

- The face detection algorithm was improved.  
[Pull request #7448](https://github.com/FreeCAD/FreeCAD/pull/7448)

- The [PrintAll](https://wiki.freecad.org/TechDraw_PrintAll) tool was added.  
[Pull request #7460](https://github.com/FreeCAD/FreeCAD/pull/7460)

- [Four tools](https://wiki.freecad.org/TechDraw_StackGroup) to control the stacking order of views were added.  
[Issue #6012](https://github.com/FreeCAD/FreeCAD/issues/6012) and [pull request #7460](https://github.com/FreeCAD/FreeCAD/pull/7460)

- [ActiveView](https://wiki.freecad.org/TechDraw_ActiveView) now creates a screen capture instead of an SVG image.  
[Pull request #7471](https://github.com/FreeCAD/FreeCAD/pull/7471)

- All Latin script templates have been converted to "plain svg."   
[Pull request #7472](https://github.com/FreeCAD/FreeCAD/pull/7472)  

- A preview was added to the task panel of the [SectionView](https://wiki.freecad.org/TechDraw_SectionView) tool.  
[Pull request #7658](https://github.com/FreeCAD/FreeCAD/pull/7658)

- Deprecated DrawViewPart functions were removed: replaceCenterLine, replaceCosmeticEdge, replaceCosmeticVertex, and replaceGeomFormat.

- 3D dimensions can now be created the same way as 2D dimensions (apart from the fact that the geometry must be selected in a 3D view). This eliminates the need to link them manually to 3D geometry.  
[Pull request #8141](https://github.com/FreeCAD/FreeCAD/pull/8141)

- The [DimensionRepair](https://wiki.freecad.org/TechDraw_DimensionRepair) tool was added.  
[Pull request #8141](https://github.com/FreeCAD/FreeCAD/pull/8141)

- A function to remove overlapping edges returned by the hidden line removal algorithm was added, including a new setting (in advanced preferences) for the number of passes of this function.  
[Pull request #9280](https://github.com/FreeCAD/FreeCAD/pull/9280)

## Compilation

Since this release, FreeCAD can only be compiled using Qt 5.x and Python 3.x. The lowest-supported Qt version is 5.12, and the lowest-supported Python version is 3.8.

To compile FreeCAD, see the instructions for [Windows](https://wiki.freecad.org/Compile_on_Windows), [Linux](https://wiki.freecad.org/Compile_on_Linux), and [macOS](https://wiki.freecad.org/Compile_on_MacOS).

The supported operating systems are:
- Windows 7, 8, 10 and 11
- Linux Ubuntu Focal Fossa (20.04) and newer
- macOS: 10.12 Sierra or newer

## Known Limitations

### 32bit Windows

Since FreeCAD 0.19, we no longer officially support 32-bit Windows. FreeCAD might work on these systems, but no support is given.

### Remote Desktop under Windows

Depending on the OpenGL graphics capabilities of a computer, it might be that one encounters a crash when running FreeCAD via a remote desktop. To fix this, upgrade your OpenGL driver. Only if this doesn't help:
- Download [this](https://downloads.fdossena.com/geth.php?r=mesa64-latest) OpenGL library for 64bit Windows and extract it.
- Rename the DLL file to _opengl32sw.dll_ and copy it to the _bin_ subfolder of FreeCAD's installation folder (overwrite the existing DLL there).

### macOS: Start Workbench shows a blank page

If the [Start Workbench](https://wiki.freecad.org/Start_Workbench) shows only a blank page, you must enable the option **Use software OpenGL** in the menu **FreeCAD-0.21 → Preferences → Display**.

## Other Resources

- [Mango Jelly Video about 0.21 Features](https://www.youtube.com/watch?v=rPxr0yvNgxo)
