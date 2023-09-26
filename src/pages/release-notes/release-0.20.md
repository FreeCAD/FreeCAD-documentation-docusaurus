# Release 0.20

**FreeCAD 0.20** was released on **14 June 2022**, get it from the [Download](https://wiki.freecad.org/Download) page. This page lists all new features and changes.  

Older FreeCAD release notes can be found in the [Feature list](https://wiki.freecad.org/Feature_list#Release_notes).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/01f4209e-2545-4597-aac6-03d4cbab205a)  
_Model of a 775 DC motor by user "jimmihenry", see [Users Showcase](https://forum.freecadweb.org/viewtopic.php?p=551765#p551765).  
The model was made completely with the weekly [development snapshots](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds) of FreeCAD 0.20. The pictures for the animated graphic were made with the FreeCAD macro [Screen Wiki](https://wiki.freecad.org/Macro_Screen_Wiki).    
The animated GIF itself was made using [GIMP](https://en.wikipedia.org/wiki/GIMP). For the release notes, it was cropped and resized using [ezgif](https://ezgif.com/crop)._  

## General

### freecad.org

We are happy that the [KiCAD project](https://www.kicad.org/), through the [KiCAD services corp.](https://www.kipro-pcb.com/), sponsored us with the domain `freecad.org`. Now, all FreeCAD websites are available under [freecadweb.org](https://freecadweb.org/) and [freecad.org](https://freecad.org/).

### Bug/Issue tracker

The FreeCAD bug tracker was moved to GitHub: https://github.com/FreeCAD/FreeCAD/issues

> **Note**: Only bug reports with a prior forum discussion will be considered. Reports without this will be closed.

### New help system

The help system was rewritten and upgraded to display information directly from our [Wiki](https://wiki.freecad.org/User_hub). The system now relies on the [Help Addon](https://github.com/FreeCAD/FreeCAD-Help).   
When you first use the [Help](https://wiki.freecad.org/Std_Help) tool or the [What's this?](https://wiki.freecad.org/Std_WhatsThis) tool, you will be asked to install it.  

## User interface

- The navigation cube was reworked:  
  - There are now edge faces to rotate the 3D view 45°.
  - A new preference [Rotate to nearest](https://wiki.freecad.org/Preferences_Editor#Navigation) has been introduced. If selected, the 3D view is rotated to the nearest most logical position, based on the current orientation of the cube, when a cube face is clicked. Otherwise, clicking a face will always result in the same rotation. To experience the difference, try the same click sequence as in the animation with and without the option _Rotate to nearest_.
  - By clicking the new round button in the top right corner, you can quickly switch to the back view of the current scene.
  - The size of the cube can now be adjusted with the [Cube size](https://wiki.freecad.org/Preferences_Editor#Navigation) preference.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=52118); [pull request #4502 ](https://github.com/FreeCAD/FreeCAD/pull/4502)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2b9ac829-acc9-4b15-a4a6-163814f69b30)  

- Tooltips now display the command name in the title, making it easier for new users to look for help. At the end of the tooltip, the "internal" command name is added in parentheses: (_Std_WhatsThis_).  
This is also the name of the page that documents the command in the Wiki.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=34&t=58747), [pull request #4978](https://github.com/FreeCAD/FreeCAD/pull/4978)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/76d2a7d2-3f55-469d-9cd5-39d7d5aeb8dc)  

- The new [Std UserEditMode](https://wiki.freecad.org/Std_UserEditMode) command allows the user to choose an edit mode that will be used when an object is double-clicked in the [Tree view](https://wiki.freecad.org/Tree_view). Click the image on the left to see an animation of the selection.  
If a selected edit mode is not applicable, the object's default edit mode is used instead.  
[Pull request #5110](https://github.com/FreeCAD/FreeCAD/pull/5110)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3cc2410b-bb51-47c7-b060-ffc693290c2f)  

- The [Tree view](https://wiki.freecad.org/Tree_view) context menu has the new entry **Add dependent objects to selection**.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=13566); [Pull request #4133](https://github.com/FreeCAD/FreeCAD/pull/4133)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b69926a7-2239-45d6-8d7f-20f382c3c83e)  
_In the image, the Hole001 object was selected, and then its dependencies were added to the selection via the context menu_  

- The new tool [Section Cut](https://wiki.freecad.org/Part_SectionCut) allows getting non-hollow and persistent cuts of parts and assemblies.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=52441), [Pull request #4118](https://github.com/FreeCAD/FreeCAD/pull/4118)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/296a1f66-d702-4e0b-9f1e-f20b4c699cdc)  

### Further user interface improvements

- Using the decimal separator belonging to the language specified for the FreeCAD interface is now possible. For example, when you set the interface language to **English** and select the new option **Use selected language number format**, the dot will be used as the decimal separator on a German Windows.    
See [Preferences](https://wiki.freecad.org/Preferences_Editor#General).    
[Pull request #6364](https://github.com/FreeCAD/FreeCAD/pull/6364)      
> **Note**: For [FEM](https://wiki.freecad.org/FEM_Workbench) simulations, using the dot as a decimal separator is highly recommended to get correct results.    

- Two new mouse navigation styles have been added. One based on [OpenSCAD](https://wiki.freecad.org/Mouse_navigation#OpenSCAD_navigation), the other on [TinkerCAD](https://wiki.freecad.org/Mouse_navigation#TinkerCAD_navigation).  
[Forum discussion OpenSCAD](https://forum.freecadweb.org/viewtopic.php?f=8&t=60975); [Forum discussion TinkerCAD](https://forum.freecadweb.org/viewtopic.php?p=544639#p544376); [commit 1](https://github.com/FreeCAD/FreeCAD/commit/a1c9ab658c); [commit 2](https://github.com/FreeCAD/FreeCAD/commit/ef100d55e9d50); [commit 3](https://github.com/FreeCAD/FreeCAD/commit/549e5b5650)  

- It is now possible to pan the view of the [dependency graph](https://wiki.freecad.org/Std_DependencyGraph) with the mouse.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=34791); [pull request #4638](https://github.com/FreeCAD/FreeCAD/pull/4638)  

- Fixed an issue where tablet pen devices (e.g. Wacom tablet) were slow to the point of being completely unusable.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=45046); [pull request #4687](https://github.com/FreeCAD/FreeCAD/pull/4687)  

- The coordinate system in the 3D view can be resized in the preferences in the section [Display → 3D View](https://wiki.freecad.org/Preferences_Editor#3D_View).  
[Pull request #5182](https://github.com/FreeCAD/FreeCAD/pull/5182)

- A new setting in [Preferences → General](https://wiki.freecad.org/Preferences_Editor#General) allows to substitute the numerical keypad decimal separator with the appropriate locale separator if they are different.  
[Pull request #3256](https://github.com/FreeCAD/FreeCAD/pull/3256); [Pull request #5150](https://github.com/FreeCAD/FreeCAD/pull/5150); [Pull request 5203](https://github.com/FreeCAD/FreeCAD/pull/5203)  

- It is now possible to set the `Backspace` key as a standalone shortcut key without the need to specify an additional modifier key.  
[Pull request #5428](https://github.com/FreeCAD/FreeCAD/pull/5428)  

## Core system and API

### Core

- When using **Edit → Copy** or **Edit → Duplicate selection** for an object with dependencies, there is a new `Use Original Selections` button in the object selection dialog. Click this button to copy/duplicate only the objects you originally selected prior to opening the dialog, ignoring dependencies and ignoring any actions you might have taken while the dialog was open, such as checking or unchecking some of the checkboxes.  
The effect is the same as if you had unchecked all the checkboxes next to the objects you did not originally select and press OK.  
**Note**: special care should be taken when copying/duplicating TechDraw Pages. It is recommended also to copy/duplicate all children of the Page (Templates, Views, Dimensions, etc.). Otherwise, changes to one Page will also impact the other page.  
For example, deleting a View on one Page also removes it from the other Page, or deleting a page will also remove all its content from the other Page.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aebd1549-c741-4269-950f-3438e9bff22f)  

- A new type of add-on called a [Preference Pack](https://wiki.freecad.org/Preference_Packs) was added, allowing a subset of a user preferences file (user.cfg) to be saved, distributed, and easily applied by other users. Preference Packs can be used to distribute "Themes," for example, by allowing a developer to include both a Qt stylesheet for widgets as well as a set of other colors and styles for items in the user interface that cannot be set using a stylesheet (e.g. text colors in the Python editor or report view, etc.).  
Anything that can be configured via a user.cfg file can be set using a Preference Pack.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=62477)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/170363b5-1c6c-49e9-9152-784111a754d1)  

- The "Workbenches" preference panel was modified to support the ability to "autoload" workbenches on FreeCAD startup.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d7a48ad1-ea9e-4bff-a148-4b6760483e7d)  

On Linux, the default location of FreeCAD's configuration, data, and cache files was changed to follow the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html).    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=63648)  

Here is a comparison of the old and new locations:  

Description | Old location | New location | Defaults to 
-- | -- | -- | --
Configuration files | $HOME/.FreeCAD | $XDG_CONFIG_HOME/FreeCAD | $HOME/.config/FreeCAD
Data files | $HOME/.FreeCAD | $XDG_DATA_HOME/FreeCAD | $HOME/.local/share/FreeCAD
Cache files | /tmp | $XDG_CACHE_HOME/FreeCAD | $HOME/.cache/FreeCAD

If you wish to keep using the old locations, you may start FreeCAD with the `--keep-deprecated-paths` option.

### API

FreeCAD received many new Python API functions:

#### New Python API

- _ChFi2d_AnaFilletAlgoPy_: An analytical algorithm for the calculation of fillets.  
[Commit f94ab3ec](https://github.com/FreeCAD/FreeCAD/commit/f94ab3ec)  
- _ChFi2d_ChamferAPIPy_: Algorithm that creates a chamfer between two linear edges.  
[Commit 30f8015e7](https://github.com/FreeCAD/FreeCAD/commit/30f8015e7)  
- _Circle2dPy::getCircleCenter_: Gets the circle center defined by three points.  
[Commit 3dc91fa2](https://github.com/FreeCAD/FreeCAD/commit/3dc91fa2)
- _ComplexGeoDataPy::applyRotation_: This applies an additional rotation to the placement.  
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ComplexGeoDataPy::applyTranslation_: This applies an additional translation to the placement.    
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ComplexGeoDataPy::countSubElements_: Returns the number of elements of a type.  
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ComplexGeoDataPy::getElementTypes_: Returns a list of element types.    
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ComplexGeoDataPy::getFaces_: Returns a tuple of points and triangles with a given accuracy.   
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ComplexGeoDataPy::getLines_: Returns a tuple of points and lines with a given accuracy.   
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ComplexGeoDataPy::getLinesFromSubelement_: Returns vertexes and lines from a sub-element.    
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ComplexGeoDataPy::getPoints_: Returns a tuple of points and normals with a given accuracy.    
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ComplexGeoDataPy::transformGeometry_: Applies a transformation to the underlying geometry.    
[Commit 32592de8](https://github.com/FreeCAD/FreeCAD/commit/32592de8)
- _ControlPy::showModelView_: Shows the model view.    
[Commit 033bf619](https://github.com/FreeCAD/FreeCAD/commit/033bf619)
- _DocumentPy::clearDocument_: Clears the whole document.    
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0)
- _DocumentPy::getFileName_: For a regular document, it returns its file name property. For a temporary document, it returns its transient directory.     
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0)  
- _DocumentPy::getProgramVersion_: Gets the program version with which a project file was created.     
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0)
- _DocumentPy::isClosable_: Checks if the document can be closed.   
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0) 
- _DocumentPy::isSaved_: Checks if the document is saved.     
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0)
- _DocumentPy::isTouched_: Checks if any object is in a touched state.    
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0)
- _DocumentPy::mustExecute_: Checks if any object must be recomputed.    
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0)
- _DocumentPy::purgeTouched_: Purges the touched state of all objects.    
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0)
- _DocumentPy::setClosable_: Sets a flag that allows or forbids to closing of a document.    
[Commit 526dc1a0](https://github.com/FreeCAD/FreeCAD/commit/526dc1a0)
- _DrawPagePy::requestPaint_: Paints a TechDraw page.     
[Commit 79f9fb68](https://github.com/FreeCAD/FreeCAD/commit/79f9fb68)  
- _HLRBRep_AlgoPy_: To access Part's hidden line removal (HLR).    
[Commit 73a98671](https://github.com/FreeCAD/FreeCAD/commit/73a98671)   
- _HLRBRep_PolyAlgoPy_: To access Part's poly hidden line removal (HLR).     
[Commit ea85cf5e](https://github.com/FreeCAD/FreeCAD/commit/ea85cf5e)
- _HLRToShapePy_: To access Part's hidden line removal (HLR).    
[Commit 73a98671](https://github.com/FreeCAD/FreeCAD/commit/73a98671)
- _PolyHLRToShapePy_: To access Part's poly hidden line removal (HLR).    
[Commit ea85cf5e](https://github.com/FreeCAD/FreeCAD/commit/ea85cf5e)
- _MDIViewPy::printPdf_: Prints a PDF.    
[Commit c93031da](https://github.com/FreeCAD/FreeCAD/commit/c93031da)
- _MDIViewPy::printPreview_: Prints a preview.    
[Commit c93031da](https://github.com/FreeCAD/FreeCAD/commit/c93031da)
- _MDIViewPy::printView_: Prints a view.    
[Commit c93031da](https://github.com/FreeCAD/FreeCAD/commit/c93031da)
- _MDIViewPy::redoActions_: Redoes actions.    
[Commit c93031da](https://github.com/FreeCAD/FreeCAD/commit/c93031da)
- _MDIViewPy::undoActions_: Undoes actions.    
[Commit c93031da](https://github.com/FreeCAD/FreeCAD/commit/c93031da)
- _PrecisionPy_: To access the precision defined by the OpenCascade kernel.     
[Commit 20b86e55](https://github.com/FreeCAD/FreeCAD/commit/20b86e55)
- _PropertyContainerPy::setDocumentationOfProperty_: Sets the documentation string of a dynamic property of this class.   
[Commit 8cf3cf33](https://github.com/FreeCAD/FreeCAD/commit/8cf3cf33)
- _PropertyContainerPy::setGroupOfProperty_: Set the name of the group of a dynamic property.    
[Commit 8cf3cf33](https://github.com/FreeCAD/FreeCAD/commit/8cf3cf33)
- _PythonWorkbenchPy::reloadActive_: Reload the active workbench after changing menus or toolbars.    
[Commit 0bbc253d](https://github.com/FreeCAD/FreeCAD/commit/0bbc253d)
- _RotationPy::fromEuler_: Sets the Euler angles of a rotation or gets the Euler angles in a given sequence for a rotation.    
[Commit 951a0be9](https://github.com/FreeCAD/FreeCAD/commit/951a0be9)
- _RotationPy::toEulerAngles_: Gets the Euler angles in a given sequence for this rotation.    
[Commit c1454dfb](https://github.com/FreeCAD/FreeCAD/commit/c1454dfb)
- _SpreadsheetViewPy_: To access spreadsheets.    
[Commit 6e713628](https://github.com/FreeCAD/FreeCAD/commit/6e713628)
- _UnitsApi::sToNumber_: Converts a quantity or float to a string.    
[Commit befbd95d](https://github.com/FreeCAD/FreeCAD/commit/befbd95d)
- _View3DInventorPy::getCornerCrossSize_: Returns current corner axis cross size.     
[Commit 9d15df29](https://github.com/FreeCAD/FreeCAD/commit/9d15df29)
- _View3DInventorPy::setPopupMenuEnabled_: Enables popup menu.     
[Commit 9def811a](https://github.com/FreeCAD/FreeCAD/commit/9def811a)
- _View3DInventorPy::isCornerCrossVisible_: Returns current corner axis cross visibility.     
[Commit 9d15df29](https://github.com/FreeCAD/FreeCAD/commit/9d15df29)  
- _View3DInventorPy::isPopupMenuEnabled_: Returns if popup menu is enabled.    
[Commit 9def811a](https://github.com/FreeCAD/FreeCAD/commit/9def811a)
- _View3DInventorPy::projectPointToLine_: Projects the given 2d point to a line.    
[Commit b6527a70](https://github.com/FreeCAD/FreeCAD/commit/b6527a70)
- _View3DInventorPy::setCornerCrossSize_: Defines corner axis cross size.    
[Commit 9d15df29](https://github.com/FreeCAD/FreeCAD/commit/9d15df29)
- _View3DInventorPy::setCornerCrossVisible_: Defines corner axis cross visibility.    
[Commit 9d15df29](https://github.com/FreeCAD/FreeCAD/commit/9d15df29)
- _ViewProviderSpreadsheetPy_: To handle spreadsheet cells.    
[Commit 16bbe123](https://github.com/FreeCAD/FreeCAD/commit/16bbe123) and [commit 093f15dc](https://github.com/FreeCAD/FreeCAD/commit/093f15dc)

#### Changed Python API

- _MeshObject::trim(base, normal)_ was changed to _MeshPy::trimByPlane(base, normal)_: Trims the mesh with a given plane.    
[commit 837de28e](https://github.com/FreeCAD/FreeCAD/commit/837de28e)

## Addon Manager

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1031a247-5962-4335-aff4-b0c08a071b84)  

The [Addon Manager](https://wiki.freecad.org/Std_AddonMgr) was modified to support Preference Packs distribution and display information found in an addon's metadata. The Addon Manager also includes improved support for Addons, whose source code is located at several different git hosting locations. Networking support was improved to provide more robust handling of SSL connections and support for proxies requiring authentication.    
Support was added for automatically adding macro buttons to the toolbar after installing, for disabling Addons without removing them, and for switching which git branch of an Addon is checked out. Finally, the user interface was modified to improve searching and display of different list filters.

## Arch Workbench

### SketchArch workbench

With the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ae963aaf-d40a-4dff-a9cf-ecfd0554095c) [Attach Feature](https://github.com/paullee0/FreeCAD_SketchArch) it is now possible to place ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b44bdc16-097e-4e60-a750-7f8ee7fc315b) [Windows](https://wiki.freecad.org/Arch_Window) and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6bf09586-493c-4de5-84b2-fa7bac7d17d9) [Equipment](https://wiki.freecad.org/Arch_Equipment) parametrically and intuitively in relation to ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/851a7cb8-95a3-4b78-b7e6-885b33aacbb6) [Walls](https://wiki.freecad.org/Arch_Wall).    
To use this feature, the experimental external ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e02d4120-4b3e-476f-94f6-3affde633bb2) [SketchArch Workbench](https://github.com/paullee0/FreeCAD_SketchArch) must be installed.  
[Add-on and ReadMe on Github](https://github.com/paullee0/FreeCAD_SketchArch) (Not yet available in the [Add-on Manager](https://wiki.freecad.org/Std_AddonMgr))  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=50802)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/27be5063-2fea-4e2e-b192-bf3e147ef90c)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8f70a5a5-232a-4ff5-a4c1-b7278f0dde1c)

### New properties for Arch Structure objects

- **BasePerpendicularToTool**: it creates a copy of the Base (extrusion profile) at the beginning of the Tool (extrusion path) and places it perpendicular to the first edge of the tool. It is the same as attaching the Base with MapMode=NormalToEdge, but it is automatic and allows to reuse of the same Base object for multiple Structures.  
When BasePerpendicularToTool = True, more properties control the placement of the Base relative to the Tool axis. They are shown in the attached image.  
- **ToolOffsetFirst** and **ToolOffsetLast**: extend/trim the Structure at the start and end, respectively (the real length of the Structure is available in the ComputedLength read-only property).
- **BaseRotation**: rotate the Base (the rotation is around the Base's "(0,0)" point, which is the center for [Arch Profiles](https://wiki.freecad.org/Arch_Profile), the origin for Sketches and usually the first point for [Draft Wires](https://wiki.freecad.org/Draft_Wire)).
- **BaseOffsetX** and **BaseOffsetY**: move the Base (extrusion profile)
- **BaseMirror**: mirror the Base (extrusion profile)    

A new command **Create multiple Arch Structure** was also added. It uses the first selected object as a Base, and creates Arch Structures objects for every Edge of the other selected objects. Then, the properties of individual Structure objects can be adjusted in the Property editor. This command was added for workflow with a master Sketch (there is a risk of a topological naming problem unless you create a non-parametric copy of the master Sketch or use Realthunder's version).    

Support for **2D data** such as linework, hatches, texts, and dimensions is now enabled in IFC import and export, which contributes to making the IFC format more and more suitable for traditional 2D CAD work. A similar effort is being made in [BlenderBIM](https://blenderbim.org/). More 2D workflow improvements are documented [in this forum thread](https://forum.freecadweb.org/viewtopic.php?p=563067#p563067).     

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=43228&start=60); [pull request #3229](https://github.com/FreeCAD/FreeCAD/pull/3229)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/88fddf78-e6b2-489c-b9f9-e8b65bd1fb85)

## Draft Workbench

- A **Global** checkbox was added to the task panel of many drafting commands. Checking it allows input of coordinates in the global coordinate system even if the [working plane](https://wiki.freecad.org/Draft_SelectPlane) is not aligned with the global XY plane.
- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0b7697a9-c90d-4ace-b034-649fe8d1ca6c) [Draft Hatch](https://wiki.freecad.org/Draft_Hatch) command was introduced. It creates hatches on the faces of a selected object using patterns from AutoCAD PAT files.
- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/93d68e2f-ce7f-4ff7-adf1-0c275f1b0beb) [Draft AddNamedGroup](https://wiki.freecad.org/Draft_AddNamedGroup) command was introduced. The 
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e2512cd9-72fe-4605-99eb-1bafade0b5ce) [Draft AddToGroup](https://wiki.freecad.org/Draft_AddToGroup) command was extended with the same functionality.
- Work on the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/23b4727a-61a0-4506-879c-92c8ddf0528f) [Draft SetStyle](https://wiki.freecad.org/Draft_SetStyle) command, still in progress in FreeCAD version 0.19, was completed.
- A double-click edit option was added for ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/88f0f577-90e9-41a9-878f-459517731a49) [Draft Texts](https://wiki.freecad.org/Draft_Text). It opens the same edit task panel used when creating a text.
- For ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ac1a8bbd-1104-4c05-b112-e32a7f66165a) [Draft Dimensions](https://wiki.freecad.org/Draft_Dimension) the `arch` **ViewUnit Override** for imperial architectural dimensions was introduced.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/60bf1e99-aae6-4dbd-9344-a0cf4ad51f1d) [Draft Shape2DView](https://wiki.freecad.org/Draft_Shape2DView) objects now have a **DataAuto Update** property. Setting it to `false` can be useful if there are many Draft Shape2DViews in a document or if they are complex.
- It is now possible to reverse a [Draft Wire](https://wiki.freecad.org/Draft_Wire) via the 
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2a8fe3a0-cfdd-4518-941d-f667fb747e66) [Draft Edit](https://wiki.freecad.org/Draft_Edit) context menu.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=58643&start=20); [pull request #4811](https://github.com/FreeCAD/FreeCAD/pull/4811)  

### Further Draft improvements

- Fixed [Draft Snap Grid](https://wiki.freecad.org/Draft_Snap_Grid) when the cursor is over a face.  
[Forum discussion](https://forum.freecad.org/viewtopic.php?f=23&t=62274); [git commit](https://github.com/FreeCAD/FreeCAD/commit/1761eb8ce)  
- New [Draft Texts](https://wiki.freecad.org/Draft_Text) are now aligned with the [working plane](https://wiki.freecad.org/Draft_SelectPlane).  
[Pull request #5092](https://github.com/FreeCAD/FreeCAD/pull/5092)  
- Support for two DWG converters was added: [LibreDWG](https://www.gnu.org/software/libredwg) and [QCAD pro](https://qcad.org/en/qcad-command-line-tools#dwg2dwg).  
See [Import Export Preferences](https://wiki.freecad.org/Import_Export_Preferences#DWG) and [FreeCAD and DWG Import](https://wiki.freecad.org/FreeCAD_and_DWG_Import) for more information.  

## FEM Workbench

- The [Z88 solver](https://wiki.freecad.org/FEM_SolverZ88) is now fully usable. You can specify the solver method and change the memory settings. The new default values allow you to perform complex simulations directly.    
[Commit d035bbc1ca and following](https://github.com/FreeCAD/FreeCAD/commit/d035bbc1ca)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0932f4ab-4869-47e1-8617-9683f47fd95f)    
_The new Z88 settings and their default values_     

- It is now possible to perform buckling analyses using the [Calculix](https://wiki.freecad.org/FEM_SolverCalculixCxxtools) solver.    
[Pull request #4379](https://github.com/FreeCAD/FreeCAD/pull/4379)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/12587d29-3f3a-4cf5-a49e-239926fe8c14)    
_Result of a linear buckling analysis_

- There is a new property for the [Gmsh](https://wiki.freecad.org/FEM_MeshGmshFromShape) mesher. The number of mesh elements per 2π times the radius of the curvature can be specified. The default is 12, and to get a finer mesh at small corners or holes, this value can be increased for better results. This feature requires Gmsh 4.8 or newer.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=56401); [pull request #4596](https://github.com/FreeCAD/FreeCAD/pull/4596)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8ecc9a3e-997b-49d3-a1aa-df9a332ab62d)  
_Effect of Mesh Size From Curvature; left: set to 12, right: deactivated_  

- FreeCAD now allows selecting an algorithm and 3D mesh recombination for the [Gmsh](https://wiki.freecad.org/FEM_MeshGmshFromShape) mesher. For more details about mesh element recombination, see [FEM MeshGmshFromShape](https://wiki.freecad.org/FEM_MeshGmshFromShape#Element_Recombination).    
[Pull request #4706](https://github.com/FreeCAD/FreeCAD/pull/4706)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c30aaa4a-bebb-4b12-aee4-7382bb578dd9)    
_Effect of the recombination algorithm; left: using Simple, right: using Simple full-quad_  

### Further FEM improvements

- **Important**: Starting from this release, FreeCAD will use [SI units](https://en.wikipedia.org/wiki/International_System_of_Units) (m, kg, s, K, A, mol, cd) to write the [Elmer solver](https://wiki.freecad.org/FEM_SolverElmer) input files (_case.sif_ and _mesh.nodes_). This is independent of the used FreeCAD [unit system](https://wiki.freecad.org/Preferences_Editor#Units).
- **Important**: Starting from this release, the scale of [result pipelines](https://wiki.freecad.org/FEM_PostPipelineFromResult) and their [filters](https://wiki.freecad.org/FEM_Workbench#Menu:_Results) will use SI units (m, kg, s, K, A, mol, cd). So, the displacement is given in meters, the stress in Pascal. This applies to all SI-derived FreeCAD [unit systems](https://wiki.freecad.org/Preferences_Editor#Units).
- Solver now uses all CPU cores to solve with the [Calculix](https://wiki.freecad.org/FEM_SolverCalculixCxxtools).  
[Pull request #6374](https://github.com/FreeCAD/FreeCAD/pull/6374)
- Meshing with [Gmsh](https://wiki.freecad.org/FEM_MeshGmshFromShape) now uses all CPU cores.  
[Pull request #6370](https://github.com/FreeCAD/FreeCAD/pull/6370)
- The mesh dialog can change the element order of [Gmsh](https://wiki.freecad.org/FEM_MeshGmshFromShape) meshes.  
[Pull request #4660](https://github.com/FreeCAD/FreeCAD/pull/4660)
- The [Data at point clip](https://wiki.freecad.org/FEM_PostFilterDataAtPoint) result filter is now actually working: One gets info from result meshes by clicking into them or by specifying a mesh coordinate.
- A new constraint was added: **Model → Mechanical Constraints → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/15a18ffe-a2fc-42eb-8d94-0bddab6855ce) [Constraint Centrif](https://wiki.freecad.org/FEM_ConstraintCentrif)**.  
[Pull request #4738](https://github.com/FreeCAD/FreeCAD/pull/4738)
- A new solver was added: **Solve → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ea19324b-e970-48ff-9fa0-c87c5f7ed82a) [Solver Mystran](https://wiki.freecad.org/FEM_SolverMystran)**. Multiple commits.
- A new constraint was added: **Model → Mechanical Constraints → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/61a20a95-3028-4e4f-b581-7826dd37e1d8) [Constraint Spring](https://wiki.freecad.org/FEM_ConstraintSpring)**.  
[Pull request #4982](https://github.com/FreeCAD/FreeCAD/pull/4982)
- It is now possible to have [result pipelines](https://wiki.freecad.org/FEM_PostPipelineFromResult) with several filters; some take other filters as input, and some take the results directly from the pipeline.  
[Commit 708a300b](https://github.com/FreeCAD/FreeCAD/commit/708a300b)
- Material cards can now contain values for electrical conductivity.    
[Pull request #4647](https://github.com/FreeCAD/FreeCAD/pull/4647)
- Material cards added for Nitrogen and Argon.    
[Pull request #4649](https://github.com/FreeCAD/FreeCAD/pull/4649)
- Support for the [Gmsh](https://wiki.freecad.org/FEM_MeshGmshFromShape) mesh algorithms "HXT" (3D) and "_Packing Parallelograms_" (2D) added.    
[Pull request #4654](https://github.com/FreeCAD/FreeCAD/pull/4654)
- Allow specifying an algorithm for the [Gmsh](https://wiki.freecad.org/FEM_MeshGmshFromShape#Properties) property "_High Order Optimize_".    
[Pull request #4705](https://github.com/FreeCAD/FreeCAD/pull/4705)
- Nonlinear solid materials with simple hardening can now have an arbitrary number of yield points.    
[Pull request #5024](https://github.com/FreeCAD/FreeCAD/pull/5024)
- Allow modal adding/removal of geometric entities to constraints acting on boundaries.  
[Pull request #5117](https://github.com/FreeCAD/FreeCAD/pull/5117)
- Most FEM constraint dialogs now behave uniformly and provide the same 3D object selection features.  
[Pull request #5391](https://github.com/FreeCAD/FreeCAD/pull/5391)

## Export

- **DXF**: The missing unit block was added to the header14.rub file.  
[Pull request #5793](https://github.com/FreeCAD/FreeCAD/issues/5793)

## Mesh

### Improved support for NASTRAN GRID elements  

The Mesh import tool now supports the high-precision "GRID*" element. The standard-precision "GRID" element was also improved, now supporting both space-delimited numeric input as well as fixed-field-width input, per the NASTRAN95 format documentation.  

### Further Mesh improvements  

Fixed false negatives during self-intersection tests when facets are coplanar.    
[Pull request #5002](https://github.com/FreeCAD/FreeCAD/pull/5002)  

## OpenSCAD Workbench

Interoperability with OpenSCAD has been improved, adding support for several operations missing from earlier versions (linear extrude with rotations, rotational extrusions). Several operations are modified to provide improved FreeCAD object equivalents, particularly for twisted extrusions. Surface generation from discrete data was modified to give more OpenSCAD-like results rather than splined surfaces.

New options were added to support running either FreeCAD, OpenSCAD, or both in sandboxed environments such as AppImages and Snap packages: data can now be transferred to and from OpenSCAD via the standard temporary directory mechanism, via a user-specified temp directory that both executables have access to, or new to OpenSCAD 2021.1, via a "stdout pipe" mechanism, bypassing temporary files entirely.  

The following options were added to the task panel of the [Add OpenSCAD element](https://wiki.freecad.org/OpenSCAD_AddOpenSCADElement) feature:
```
Load    - load a scad file
Save    - save a scad file
Refresh - Update FreeCAD view
Clear   - Clear text input
```
A new text box gives feedback about OpenSCAD errors.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b78e54af-57df-4bae-9282-d31122104b21)

## Part Workbench

- A tapered [extrusion](https://wiki.freecad.org/Part_Extrude) of inner structures now creates usable results. Previously, inner structures were extruded as if they were stand-alone and not part of a structure.
[Pull request #5367](https://github.com/FreeCAD/FreeCAD/pull/5367)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4d7e8cf5-2404-4763-ae69-036fc540b96b)  
_Tapered extrusion of a sketch with an inner structure

### Further Part improvements

- The dialog to edit [Cylinders](https://wiki.freecad.org/Part_Cylinder) now allows to specify an angle relative to the normal of the chosen attachment plane. This way one can create skew cylinders.  
[Pull request #4708](https://github.com/FreeCAD/FreeCAD/pull/4708)
- The [Face Colors](https://wiki.freecad.org/Part_FaceColors) tool now also allows to set the transparency (_Alpha channel_) of faces. This transparency can be [exported](https://wiki.freecad.org/Import_Export), making e.g. STEP files with transparent parts possible.  
- The following commands now support App::Links: [Loft](https://wiki.freecad.org/Part_Loft), [Sweep](https://wiki.freecad.org/Part_Sweep), [Extrude](https://wiki.freecad.org/Part_Extrude), [Revolve](https://wiki.freecad.org/Part_Revolve), [Reverse shapes](https://wiki.freecad.org/Part_ReverseShapes), [Mirror](https://wiki.freecad.org/Part_Mirror), [Offset2D](https://wiki.freecad.org/Part_Offset2D), [Offset3D](https://wiki.freecad.org/Part_Offset), [Check Geometry](https://wiki.freecad.org/Part_CheckGeometry), [Ruled Surface](https://wiki.freecad.org/Part_RuledSurface), [Cross-sections](https://wiki.freecad.org/Part_CrossSections), and [Thickness](https://wiki.freecad.org/Part_Thickness).  
[Pull request #6478](https://github.com/FreeCAD/FreeCAD/pull/6478)

## PartDesign Workbench

- There is a new option to [Pad](https://wiki.freecad.org/PartDesign_Pad) along the direction of an edge in the 3D model.  
[Pull request #4685](https://github.com/FreeCAD/FreeCAD/pull/4685)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7cb671f6-42e9-4e3d-aae8-b57715e1df6b)  
_Padding along an edge from the model_  

- When Distance and Angle are specified in the [Chamfer](https://wiki.freecad.org/PartDesign_Chamfer) tool, and faces are selected, the distance will be applied along the selected faces. Likewise, if two distances are specified, then Size 1 will be applied along the selected face.  
The flip direction button can swap this behavior to the other face.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=19&t=62084); [pull request #5039](https://github.com/FreeCAD/FreeCAD/pull/5039)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7c14727f-6b45-47c3-9d30-4ce4c8a70827)  

- It is now possible to create an [Additive](https://wiki.freecad.org/PartDesign_AdditiveLoft) or [Subtractive Loft](https://wiki.freecad.org/PartDesign_SubtractiveLoft), or an [Additive](https://wiki.freecad.org/PartDesign_AdditivePipe) or [Subtractive Pipe](https://wiki.freecad.org/PartDesign_SubtractivePipe) towards, or from, a [Vertex](https://wiki.freecad.org/Glossary#V) of either a sketch or a body. This allows the creation of pyramids, for example.      
> **Note**: Vertices in sketches are created as construction geometry. To use them as endpoints of lofts, you must first [change them to normal geometry](https://wiki.freecad.org/Sketcher_ToggleConstruction).  
[Pull request #5170](https://github.com/FreeCAD/FreeCAD/pull/5170) (for lofts); [pull request #5193](https://github.com/FreeCAD/FreeCAD/pull/5193) (for pipes)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/62e1fbb9-f1b7-44c2-8263-ebffcd370d97)  
_A loft with multiple sections, the final one is a vertex_

- The dialog for [Pad](https://wiki.freecad.org/PartDesign_Pad) and [Pocket](https://wiki.freecad.org/PartDesign_Pocket) offers to set a taper angle for the extrusion.    
[Pull request #5357](https://github.com/FreeCAD/FreeCAD/pull/5357)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8a291199-6c82-4de8-80cb-9c286534d329)
_A tapered pocket within a non-tapered pad_  

- It is now possible to specify the direction for the [Pocket](https://wiki.freecad.org/PartDesign_Pocket) extrusion.  
[Pull request #5164](https://github.com/FreeCAD/FreeCAD/pull/5164)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5d595be3-b25a-4eae-aab8-11a8e2de5667)  
_Pocketing along different directions

- The dialog to edit [Cylinders](https://wiki.freecad.org/PartDesign_AdditiveCylinder) (additive and subtractive) now allows one to specify an angle relative to the normal of the chosen attachment plane. This way, one can create skew cylinders. [Pull request #4708](https://github.com/FreeCAD/FreeCAD/pull/4708)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d83bdbae-1915-4143-b577-55731726dd0a)  

- The [Helix](https://wiki.freecad.org/PartDesign_AdditiveHelix) feature has the new mode **Height-Turns-Growth** to create flat spirals.    
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=19&t=56378); [pull request #4590](https://github.com/FreeCAD/FreeCAD/pull/4590)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ed25dad9-e03e-4663-ab7b-7d7a6d18fd99)

- All PartDesign features that can extrude sketches can now handle sketches with nested profiles that form islands.  
For example, it is possible to [Revolve](https://wiki.freecad.org/PartDesign_Revolution) a sketch consisting of 3 nested circles with the same center point.  
**Note**: Extruding nested profiles only works if the result is still a single body.  
[Pull request #6381](https://github.com/FreeCAD/FreeCAD/pull/6381)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/84a0beb0-732b-4020-bee6-49a250d65dfe)  
_A single Pad and a single [Revolution](https://wiki.freecad.org/PartDesign_Revolution) with nested profiles. The base block is only there to ensure that the part is a single solid._

- There is a new option to [Pad](https://wiki.freecad.org/PartDesign_Pad) a certain length along the direction. The length is either measured along the sketch normal or along the custom direction.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=50466); [pull request #3893](https://github.com/FreeCAD/FreeCAD/pull/3893)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/798c4652-7230-4775-8411-25abf4046f34)  
_Effect of the new option Length along sketch normal_  

- The [Hole](https://wiki.freecad.org/PartDesign_Hole) feature can now model true threads.  
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=34&t=54240); [pull request #4274](https://github.com/FreeCAD/FreeCAD/pull/4274)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/30e4b760-fe1f-489d-a01f-1b5e777deeb4)

### Further PartDesign improvements

- In the [Helix](https://wiki.freecad.org/PartDesign_AdditiveHelix) feature, one can now also use the sketch normal as the axis.  
[Pull request #5199](https://github.com/FreeCAD/FreeCAD/pull/5199)  
- The [Sprocket](https://wiki.freecad.org/PartDesign_Sprocket) feature can now also create ISO-normed sprockets.  
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=22&t=44525#p478369); [pull request #4478](https://github.com/FreeCAD/FreeCAD/pull/4478)
- The [Loft](https://wiki.freecad.org/PartDesign_AdditiveLoft) and [Pipe](https://wiki.freecad.org/PartDesign_AdditivePipe) features now allow the use of the body's faces for sections.  
[Pull request #5155](https://github.com/FreeCAD/FreeCAD/pull/5155)
- It is now possible to select several faces before calling the [Pad](https://wiki.freecad.org/PartDesign_Pad) or [Pocket](https://wiki.freecad.org/PartDesign_Pocket) dialog. In this case, the first selected face will be used to determine the default padding/pocketing direction.  
[Commit d34a5616](https://github.com/FreeCAD/FreeCAD/commit/d34a5616a2b38c96ad05f9a0763ba7504dfb814d)
- It is possible to offset [SubShapeBinders](https://wiki.freecad.org/PartDesign_SubShapeBinder) if they are based on edges, wires, or faces.  
[Pull request #6338](https://github.com/FreeCAD/FreeCAD/pull/6338)
- [SubShapeBinders](https://wiki.freecad.org/PartDesign_SubShapeBinder) now have the _Refine_ property like all other PartDesign objects.  
[Pull request #6550](https://github.com/FreeCAD/FreeCAD/pull/6550)
- In the [Chamfer](https://wiki.freecad.org/PartDesign_Chamfer) and [Fillet](https://wiki.freecad.org/PartDesign_Fillet) dialogs, all edges of a body can be selected via the context menu while in Add mode.  
[Pull request #5269](https://github.com/FreeCAD/FreeCAD/pull/5269)  
When you select a 3D object before clicking the icon to create a fillet or chamfer, all object edges will automatically be selected.    
[Pull request #5328](https://github.com/FreeCAD/FreeCAD/pull/5328)
- [Chamfer](https://wiki.freecad.org/PartDesign_Chamfer) and [Fillet](https://wiki.freecad.org/PartDesign_Fillet) dialogs now each have a new Use all edges checkbox, which is connected to the Use All Edges property for these objects. When the box is checked, the property is set to True. When unchecked, the property is set to False. When Use All Edges is True, there is protection against the [topological naming problem](https://wiki.freecad.org/Topological_naming_problem) because then all of the edges of the base object are used regardless of how many edges there are.    
[Pull request #5340](https://github.com/FreeCAD/FreeCAD/pull/5340)  
- When [adding a new sketch](https://wiki.freecad.org/PartDesign_NewSketch), plane selection can now be achieved with a single click in the 3D View.  
[Pull request](https://github.com/FreeCAD/FreeCAD/pull/5408); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=19&t=65020)
- When a PartDesign tool is run without an active body, FreeCAD now offers to activate a body or create a new one.  
[Pull request #4949](https://github.com/FreeCAD/FreeCAD/pull/4949)
- The [Face Colors](https://wiki.freecad.org/Part_FaceColors) tool is now also available from the PartDesign workbench. 

## Path Workbench

- The Extensions feature was added to the [Adaptive](https://wiki.freecad.org/Path_Adaptive) operation.  
[Pull request #4388](https://github.com/FreeCAD/FreeCAD/pull/4388)  
- The [Helix](https://wiki.freecad.org/Path_Helix) operation was refactored, and an Extra offset property was added to it.  
[Pull request #5405](https://github.com/FreeCAD/FreeCAD/pull/5405)
- The check for the current schema using minutes for velocity expression and appropriate warning were added.  
[Pull request #6357](https://github.com/FreeCAD/FreeCAD/pull/6357)
- External threads were added to the thread milling operation.  
[Pull request #6485](https://github.com/FreeCAD/FreeCAD/pull/6485)
- The stability of engraving on sketches was improved.  
[Pull request #6394](https://github.com/FreeCAD/FreeCAD/pull/6394)
- The visibility of path objects was made more natural.  
[Pull request #4911](https://github.com/FreeCAD/FreeCAD/pull/4911)

## Plot module

- FreeCAD now provides the Plot module by default, so any other module/workbench may create plots without requiring external tools.  
[Pull request #4971](https://github.com/FreeCAD/FreeCAD/pull/4971)    

## Sketcher Workbench

- New ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4cbe85ac-d0a9-44b8-8852-01a514650c87) [Split](https://wiki.freecad.org/Sketcher_Split) function to split existing lines or arcs.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=55412); [pull request #4420](https://github.com/FreeCAD/FreeCAD/pull/4420)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/42252228-be2b-4910-ad4f-e7c962fb5dbc)

- New ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bc44745f-3a17-4076-a088-0a199f6b40d5) [Rounded rectangle](https://wiki.freecad.org/Sketcher_CreateOblong) tool to create rectangles with rounded corners.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=59210); [main Pull request #4835](https://github.com/FreeCAD/FreeCAD/pull/4835)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fde6596f-cc26-4f3c-95b5-6b3e1af28450)

- New ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cf6313e0-9e6c-42f9-b2de-53ef70e81b65) [Centered rectangle](https://wiki.freecad.org/Sketcher_CreateRectangle_Center) tool to define rectangles via a center point.    
[Main commit](https://github.com/FreeCAD/FreeCAD/commit/8b4acf11c2caf53cc1cb8dccd8bb6de8516f4492)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/25a9aee9-ab3e-4ed6-bb3d-ecfef6e4807c)

- New ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/74cf783a-d52e-48d7-98a6-e1b4d1429d97) [Radiam](https://wiki.freecad.org/Sketcher_ConstrainRadiam) function to automatically assign weight on B-spline pole, diameter on complete circle, or radius on arc. Support multi-selection as diameter/radius tools.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=57584&start=20#p509485); [main pull request #4855](https://github.com/FreeCAD/FreeCAD/pull/4855)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2365f655-ce3d-4289-a4c0-f429a077567e)  

- New ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/336efdc7-7dae-4f97-b1c1-f5244580bf08) [Remove Axes Alignment](https://wiki.freecad.org/Sketcher_RemoveAxesAlignment) constraint tool to remove axes alignment while trying to preserve the constraint relationship of the selection.  
[Main commit](https://github.com/FreeCAD/FreeCAD/commit/3c593a33cedc3e6a42928d9087f8a160852cc685)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7cc5f525-97b5-44d6-818b-6b16da3aabc5)  

- [Slots](https://wiki.freecad.org/Sketcher_CreateSlot) can be constrained horizontally or vertically either by snapping it manually with the `Ctrl` key or by using the **Auto constraints** option of Sketcher.    
[Pull request #5200](https://github.com/FreeCAD/FreeCAD/pull/5200)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b9a180b8-9f22-4318-b7ab-5726491128da)

- New ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4fe1efae-bdb1-4532-9ca2-0095e755f462) [Insert Knot](https://wiki.freecad.org/Sketcher_BSplineInsertKnot) tool to insert a knot in an existing B-spline.    
[Pull request #5311](https://github.com/FreeCAD/FreeCAD/pull/5311) and [pull request #6356](https://github.com/FreeCAD/FreeCAD/pull/6356)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/40df7c2d-3bf3-4e9c-b970-9a40a5fbd211)

### Further Sketcher improvements

- Refactored Trim support.  
[Pull request #4330](https://github.com/FreeCAD/FreeCAD/pull/4330); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=54441)
- The behavior of the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d42253e8-810a-4115-b0ea-23ed25367121) [Slot](https://wiki.freecad.org/Sketcher_CreateSlot) tool has changed. Slots can now be created by defining the center of both semicircles.    
[Pull request](https://github.com/FreeCAD/FreeCAD/pull/4843); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=59243&p=508658#p508658)  
- Visibility automation allows to open Sketcher in [Section mode](https://wiki.freecad.org/Sketcher_ViewSection) when entering edit mode.  
[Pull request #4742](https://github.com/FreeCAD/FreeCAD/pull/4742); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=57056)
- Visibility automation allows to force the camera in [Orthographic mode](https://wiki.freecad.org/Std_OrthographicCamera) when entering edit mode.  
[Pull request #4778](https://github.com/FreeCAD/FreeCAD/pull/4778); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=22&t=44747)
- Option to display the dimensional constraint name and use a custom format for it.  
[Pull request #4966](https://github.com/FreeCAD/FreeCAD/pull/4966); [forum discussion](https://forum.freecadweb.org/viewtopic.php?t=61153)
- When sketching a [3-point arc](https://wiki.freecad.org/Sketcher_Create3PointArc) with Autoconstraint enabled, [tangent constraint](https://wiki.freecad.org/Sketcher_ConstrainTangent) is proposed for all 3 points when hovering a line/curve.  
[Pull request #4945](https://github.com/FreeCAD/FreeCAD/pull/4945); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=60596&p=520217#p520209)  
- Radius/diameter constraints are displayed using an angular rotation to ease visualization. Angle and optional randomness are user-settable through parameters documented in [Fine-tuning](https://wiki.freecad.org/Fine-tuning).  
[Pull request #4934](https://github.com/FreeCAD/FreeCAD/pull/4934); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=22&t=60370)
- It is now possible to fix the angle of the direction when using the [Rectangular array](https://wiki.freecad.org/Sketcher_RectangularArray) tool.  
[Commitc9eaa239](https://github.com/FreeCAD/FreeCAD/commit/c9eaa239); [forum discussion](https://forum.freecadweb.org/viewtopic.php?p=535691#p535691)  
- It is now possible to fix the angle of the direction when using the tools [Clone](https://wiki.freecad.org/Sketcher_Clone), [Copy](https://wiki.freecad.org/Sketcher_Copy) and [Move](https://wiki.freecad.org/Sketcher_Move).    
[Commit](https://github.com/FreeCAD/FreeCAD/commit/6e4a09f569cf); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=62799)  
- By right-clicking a sketch in the Tree view, you will now get a context menu entry "Attachment editor" that opens the [Attachment dialog](https://wiki.freecad.org/Part_EditAttachment) to modify the attachment.  
[Commit c3511ba2f0](https://github.com/FreeCAD/FreeCAD/commit/c3511ba2f0)
- Constraint selection is disabled when using a geometry or constraint tool. It can also be disabled manually at any time by pressing the `Shift` key.  
[Pull request #5398](https://github.com/FreeCAD/FreeCAD/pull/5398); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=65465)
- A versatile view filter has been added in the Sketcher task panel to ease constraints visibility management.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=60569)
- It is now possible to set the degree of a B-Spline ([pull request #6463](https://github.com/FreeCAD/FreeCAD/pull/6463)) and undo the last defined control point ([pull request #6476](https://github.com/FreeCAD/FreeCAD/pull/6476)) at creation time.  
- Revised the default shortcuts to remove conflicting shortcuts and make shortcuts easier to remember.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=41272)    
Screenshots of the shortcuts for [constraints](https://wiki.freecadweb.org/images/0/0c/Sketcher_Shortcuts_v0.20_Screenshot_Constraints.png), [geometry](https://wiki.freecadweb.org/images/4/48/Sketcher_Shortcuts_v0.20_Screenshot_Geometry.png) and [various tools](https://wiki.freecadweb.org/images/9/90/Sketcher_Shortcuts_v0.20_Screenshot_variousTools.png)

## Spreadsheet Workbench

- The workbench now has ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/67742c9e-61e8-44fa-996e-8f86d2cc5268) [Preferences](https://wiki.freecad.org/Spreadsheet_Preferences). They are used by the 
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/456b968b-bb9e-470f-b429-1728bfed3c10) [Spreadsheet Import](https://wiki.freecad.org/Spreadsheet_Import) and 
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/357f68d2-04c1-4375-afbc-260e0ffba75f) [Spreadsheet Export](https://wiki.freecad.org/Spreadsheet_Export) commands.  
[Pull request #5073](https://github.com/FreeCAD/FreeCAD/pull/5073)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2092c35b-25f0-4bf3-ae39-c68535fb9d8d)

- It is now possible to set up [configuration tables](https://wiki.freecad.org/Spreadsheet_Workbench#Configuration_tables). This way, one can define different parameter sets for the same part.  
Part of [Pull request #2862](https://github.com/FreeCAD/FreeCAD/pull/2862)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b18ec88c-85e3-4efe-a264-ad369f5ef9db)

- Cells can now be [bound to other cells](https://wiki.freecad.org/Spreadsheet_Workbench#Cell_binding) of the same or a different spreadsheet.  
Part of [Pull request #2862](https://github.com/FreeCAD/FreeCAD/pull/2862)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d8b08296-ab25-474f-b55c-684ec89dd3cb)  

### Further Spreadsheet improvements

- In the row/column context menu it is now possible to specify the position when inserting rows/columns.  
[Pull request #4704](https://github.com/FreeCAD/FreeCAD/pull/4704)  
- Import XLSX (used by [Std Import](https://wiki.freecad.org/Std_Import)): Added support for floor and ceil functions.  
[Pull request #5015](https://github.com/FreeCAD/FreeCAD/pull/5015)  
- Improved navigation using the `Tab` and `Enter` keys.
- Improved interface for cutting and pasting blocks of cells.

## TechDraw Workbench

- More than 30 new tools, so-called [Extensions](https://wiki.freecad.org/TechDraw_Workbench#Extensions), are now available. They offer new cosmetic features to enhance drawings.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b0db7316-9af7-4331-a0fa-d768a962d5c0)

### Further TechDraw improvements

- It is now possible to [Share](https://wiki.freecad.org/TechDraw_ShareView) and [Move](https://wiki.freecad.org/TechDraw_MoveView) [Views](https://wiki.freecad.org/TechDraw_Workbench#Views) between pages.
- When there are several [Pages](https://wiki.freecad.org/TechDraw_PageDefault) and a [View](https://wiki.freecad.org/TechDraw_View), [ProjectionGroup](https://wiki.freecad.org/TechDraw_ProjectionGroup) etc. is added, there is now a dialog to ask to what page the view should be added.  
[Pull request #5309](https://github.com/FreeCAD/FreeCAD/pull/5309)  
- A new format specifier _%w_ was added to print the given number of digits after the dot and remove trailing zeros.  
[Pull request #5401](https://github.com/FreeCAD/FreeCAD/pull/5401)  
- The new _%w_ format specifier is now the default. And the format specifier preference was moved from the Advanced tab to the Dimension tab.    
[Pull request #6504](https://github.com/FreeCAD/FreeCAD/pull/6504)
- A flipped diagonal hatch was added for the [Geometric Hatch](https://wiki.freecad.org/TechDraw_GeometricHatch) tool.    
[Pull request #6429](https://github.com/FreeCAD/FreeCAD/pull/6429).                                                                                                                                                  
- A new option exists to show a grid in a [page](https://wiki.freecad.org/TechDraw_PageDefault). Several related [preferences](https://wiki.freecad.org/TechDraw_Preferences#Grid) have been introduced.                  
[Pull request #6465](https://github.com/FreeCAD/FreeCAD/pull/6465).
- The unit display in dimensions was fixed according to standards. The degree symbol is always present for the dimension value and tolerances, other units only appear if ShowUnits is set. The unit appears immediately after the dimension value unless there is a tolerance, then it appears after the tolerance.     
[Pull request #6581](https://github.com/FreeCAD/FreeCAD/pull/6581)

## Web

Qt WebEngine is now considered the default option instead of Qt WebKit.

## External workbenches

> **Note**: these are the new workbenches created in this development cycle or older workbenches that received updates. See [external workbenches](https://wiki.freecad.org/External_workbenches) for more workbenches that can be installed and cover a wide variety of topics. If you want to see your workbench added, join the [forum](https://forum.freecadweb.org/index.php) and present your code.

### A2plus

Several features to view, inspect, and edit existing constraints were added. One can now e.g. highlight constraints with a label, suppress a constraint temporarily, or run the solver only for a particular constraint.

For more information, see [the constraint handling description](https://wiki.freecad.org/A2plus_Workbench#Constraint_Handling).

### Assembly3

The Assembly3 Workbench is available (as of March 2022) through the [AddonManager](https://wiki.freecad.org/Std_AddonMgr). This makes for easy installation and management of the external dependencies of the workbench.  

Assembly3 is used to create assemblies of different bodies contained in a single file or in multiple documents, leveraging the full power of FreeCAD’s Link system. Learn more about [Links](https://wiki.freecad.org/App_Link) in this [video presentation](https://www.youtube.com/watch?v=yTDkJ7JZAWs) from _realthunder_.  

Assembly3 Workbench uses [SolveSpace](https://solvespace.com/) as it’s solver.  

Extensive documentation can be found at the main FreeCAD [Assembly3 wiki](https://wiki.freecad.org/Assembly3) page or Realthunder's GitHub [Assembly3 wiki](https://github.com/realthunder/FreeCAD_assembly3/wiki).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4f38787e-618f-495a-986a-254f10f69404)  

#### Main features:

- **Dynamic/interactive solver**: move parts with the mouse while the solver constrains the motion.
- **Links**: use one single part multiple times in an assembly.
- **External links**: allows usage of parts from external documents.
- **Hierarchical assemblies**: permits the creation of sub-assemblies.
- **Assembly freeze**: assemblies not required to remain dynamic can be excluded from calculations and considered fixed geometry by the asm3 solver.
- and much more.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8634f301-b8bb-4719-8acc-9e351d553a71)

### Assembly4

- New feature to add variants. These are [links](https://wiki.freecad.org/App_Link) to a part with varying parameters, meaning that you can insert the same part several times and adjust the parameters of each instance.    
For more info, see [this forum thread](https://forum.freecadweb.org/viewtopic.php?p=538666#p538666).    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1e1c1786-cd14-43ff-a7cd-094bd52f8e51)  
_Different lengths of a beam as variant_  

- Animations can be exported to the MP4 and GIF format.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0cbc31a3-3880-44a9-9fd9-84663455c0fc)  

### FCGear

The [FCGear Workbench](https://wiki.freecad.org/FCGear_Workbench) received a couple of improvements:
- For involute gears, the outside (aka tip) and root diameter are exposed as properties ([details](https://github.com/looooo/freecad.gears/pull/69)).
- Gear objects are now [attachable](https://wiki.freecad.org/Part_EditAttachment) ([details](https://github.com/looooo/freecad.gears/pull/72)).
- Gear objects can now be used as additive features in PartDesign Bodies ([details](https://github.com/looooo/freecad.gears/pull/74)).
- The creation of gear objects now appears in the undo stack ([details](https://github.com/looooo/freecad.gears/pull/83)).

### Plot

- The Plot module has been stripped from the [Plot Workbench](https://wiki.freecad.org/Plot_Workbench) since it is now provided by FreeCAD.

### Ship

The [Ship Workbench](https://wiki.freecad.org/Ship_Workbench) is back to life!

- A new tool to compute the [static sink and trim](https://github.com/FreeCAD/freecad.ship#static-sink-and-trim) has been added.
- A new tool to compute the [response amplitude operators](https://github.com/FreeCAD/freecad.ship#raos) has been added on top of [capytaine](https://github.com/mancellin/capytaine).

## Compilation

Since this release, FreeCAD can only be compiled using Qt 5.x and Python 3.x. The lowest supported Python version is 3.6.9, according to [this forum thread](https://forum.freecadweb.org/viewtopic.php?f=10&t=62701).  

To compile FreeCAD, see the instructions for [Windows](https://wiki.freecad.org/Compile_on_Windows), [Linux](https://wiki.freecad.org/Compile_on_Linux), and [MacOS](https://wiki.freecad.org/Compile_on_MacOS).

The supported operating systems are:
- Windows 7, 8, 10 and 11
- Linux Ubuntu Bionic Beaver (18.04) and Focal Fossa (20.04)
- MacOS: 10.12 Sierra or newer

## Known Limitations

### 32-bit Windows

Since FreeCAD 0.19, we no longer officially support 32-bit Windows. FreeCAD might work on these systems, but no support is given.  

### Remote Desktop under Windows

Depending on the OpenGL graphics capabilities of a computer, it might be that one encounters a crash when running FreeCAD via a remote desktop.  
To fix this, upgrade your OpenGL driver. Only if this doesn't help:  
- Download [this](https://downloads.fdossena.com/geth.php?r=mesa64-latest) OpenGL library for 64bit Windows and extract it.  
- Rename the DLL file to _opengl32sw.dll_ and copy it to the bin subfolder of FreeCAD's installation folder (overwrite the existing DLL).  

### MacOS: Start Workbench shows a blank page  

If the [Start Workbench](https://wiki.freecad.org/Start_Workbench) shows only a blank page, you must enable the option **Use software OpenGL** in the menu **Edit → Preferences → Display**.
