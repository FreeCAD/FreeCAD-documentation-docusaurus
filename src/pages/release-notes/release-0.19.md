# Release 0.19

**FreeCAD 0.19** was released on **March 20th, 2021**, get it from the [Download](https://wiki.freecad.org/Download) page. This is a summary of the most interesting changes. The complete list of changes can be found in the [MantisBT bug tracker FC 0.19 changelog](https://www.freecadweb.org/tracker/changelog_page.php?version_id=122).

Older FreeCAD release notes can be found in [Feature list](https://wiki.freecad.org/Feature_list#Release_notes).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4d96caeb-8c8a-46cf-9ed8-8601574966b1)  
_Simpson and Shipton short stroke steam engine circa 1845, using a horizontal rotating piston, by "un1corn", [Users Showcase](https://forum.freecadweb.org/viewtopic.php?f=24&t=39024)_  

## Highlights

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/71dded69-d638-458a-bccc-74c4d039cf1d)  
_Horizontal 4-cylinder rotary valve steam engine, by "un1corn", [Users Showcase](https://forum.freecadweb.org/viewtopic.php?f=24&t=38602)_  

- The assembly below was made by "Zolko", author of the new [Assembly4 Workbench](https://wiki.freecad.org/Assembly4_Workbench), which uses the new powerful [App Link](https://wiki.freecad.org/App_Link) object to import thousands of different parts and subassemblies, arranging them in specified positions by means of mathematical expressions. See [Users Showcase](https://forum.freecadweb.org/viewtopic.php?f=24&t=42624).

For this model, the parts were not designed in FreeCAD. They were just imported in STEP format and subsequently arranged with Assembly4.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b037f1c-020a-4902-843a-2feb4b6dcde6)  
_Preliminary design of MAORY, an adaptive optics (AO) module for the European Extremely Large Telescope (E-ELT); here it is mounted on the E-ELT Nasmyth platform_  

- In the assembly below, the STL files were downloaded, saved, and imported into FreeCAD, and they were manually assembled using the [Std TransformManip](https://wiki.freecad.org/Std_TransformManip) tool; this [mesh](https://wiki.freecad.org/Mesh) [assembly](https://wiki.freecad.org/Assembly) was used as a reference to create solid [bodies](https://wiki.freecad.org/Body) with [PartDesign](https://wiki.freecad.org/PartDesign_Workbench) and subsequently assemble them using the new [Assembly4 Workbench](https://wiki.freecad.org/Assembly4_Workbench).

The model was started with Assembly4, and each part was created in context referencing the STL model for [sketch](https://wiki.freecad.org/Sketch) dimensions; sketches were created 1:1 scale with the STL model in the background.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e83a79c0-ffc5-4c21-895c-31ea2e9ab768)  
_Constant velocity joint M. GECIK, by user "ppemawm", see [Users Showcase](https://forum.freecadweb.org/viewtopic.php?f=20&p=379220#p377075). The model is reversed engineered from the individual STL files from Thingiverse by the original author, [NOP21](https://www.thingiverse.com/thing:4191753). Please notice the license of the original files._  

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/19573112-068c-4c3e-a0d0-d4c9acc2bba2) [TechDraw Workbench](https://wiki.freecad.org/TechDraw_Workbench), which replaced the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b411a022-eb27-4d72-8f68-b546170b382a) [Drawing Workbench](https://wiki.freecad.org/Drawing_Workbench) in [v0.17](https://wiki.freecad.org/Release_notes_0.17), has been upgraded in an important way. It has many new features concerning [v0.18](https://wiki.freecad.org/Release_notes_0.18), making it much more useful to produce technical illustrations of 3D solids.

Among many small improvements, new features include: 
- dimensions are now compliant with one of ISO 129-1 or ASME Y14.5M standards
- new [balloon annotations](https://wiki.freecad.org/TechDraw_Balloon) to include text inside a circle or polygon shape
- new [rich text annotations](https://wiki.freecad.org/TechDraw_RichTextAnnotation) to include big paragraphs formatted as bold or italic
- [cosmetic vertices](https://wiki.freecad.org/TechDraw_CosmeticVertex) and [cosmetic edges](https://wiki.freecad.org/TechDraw_FaceCenterLine) that are not part of the original model but which can be used to create custom dimensions
- basic support for [welding symbols](https://wiki.freecad.org/TechDraw_WeldSymbol)
- new [active view](https://wiki.freecad.org/TechDraw_ActiveView) mode to take a "snapshot" of the [3D view](https://wiki.freecad.org/3D_view); new basic templates for ISO sizes (A0 to A4), as well as Russian and Chinese language templates
- new horizontal and vertical dimensions that measure the [full extent of the projections](https://wiki.freecad.org/TechDraw_HorizontalExtentDimension); SVG face hatches are now available when the page is exported to SVG
- the new [App Link](https://wiki.freecad.org/App_Link) object is now also supported as a source for creating views, which is useful when working with [assemblies](https://wiki.freecad.org/Assembly)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/54ec1d54-5c64-42ed-865f-c8103bf8ba91)  

## General

With more than 8128 commits in the master branch since the 0.18 release, this is one of the most extensive releases ever, with several new components like the new "[App::Link](https://wiki.freecad.org/App_Link)" object, as well as many new tools in the [TechDraw Workbench](https://wiki.freecad.org/TechDraw_Workbench) that make FreeCAD even more powerful for 3D solid modeling and assembly. Besides that, the FreeCAD ecosystem has continued to grow with more specialized [external workbenches](https://wiki.freecad.org/External_workbenches).

### Python 3 and Qt5

The effort to migrate from Python 2 and Qt4 to Python 3 and Qt5 is essentially complete, and most developers have moved to the Python3/Qt5 toolchains.

Undoubtedly, unforeseen bugs; these will be addressed as they are reported. Any existing dependence on Python 2 or Qt4 will not be supported beyond 1st January 2020 when Python 2 officially became unsupported by the Python Foundation. Certain addons have not yet been ported to Python3/Qt5. This may be due to several reasons including lack of time by their developers, broken dependencies that may not be easily fixed, or simply because the addon is considered obsolete. Individuals interested in the migration of a particular workbench or tool are encouraged to participate in the [FreeCAD forum](https://forum.freecadweb.org/).
See also, [Python3 and Qt5 Compatible Addon Workbenches (in preparation for 0.18)](https://forum.freecadweb.org/viewtopic.php?f=10&t=30624).

### Some issues

Fixed issue with [Std Part](https://wiki.freecad.org/Std_Part) containers visibility when the viewport is displayed in full screen in Qt5:

- Set `Qt::AA_ShareOpenGLContexts` for Qt 5.9 and above; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=36744#p312444), [commit 2a1dd8415](https://github.com/FreeCAD/FreeCAD/commit/2a1dd8415), and [commit 57b3ca6f77](https://github.com/FreeCAD/FreeCAD/commit/57b3ca6f77c3bc3a7fdb802f2e8a9fcf466f5e3a).
- Disabled `ESC` button support in `View3DInventor::keyEvent()` for Qt5 to avoid MDI view mode-related rendering artifacts; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=36744#p312444), [commit 960d612547](https://github.com/FreeCAD/FreeCAD/commit/960d6125473ee27f37835145348be382436dd274).
- Fixed bug in MainWindow::setActiveWindow to avoid a crash when returning from full screen; [forum discussion](https://forum.freecadweb.org/viewtopic.php?p=326093#p326093), [commit c4e34ed9b](https://github.com/FreeCAD/FreeCAD/commit/c4e34ed9b).
- Fixed [issue #4088](https://freecadweb.org/tracker/view.php?id=4088) about the visibility of the origin of a Part changing when undocking the 3D view; [forum discussion](https://forum.freecadweb.org/viewtopic.php?p=326093#p326093), [commit 1e19ef5be](https://github.com/FreeCAD/FreeCAD/commit/1e19ef5be).
- Fixed [issue #3130](https://freecadweb.org/tracker/view.php?id=0003130) about Qt5 bugs when using a high resolution external monitor; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=34916), [commit 2f2d505359](https://github.com/FreeCAD/FreeCAD/commit/2f2d5053599785fdc8db481682746066911033b4).

### Development

To [compile FreeCAD under Windows](https://wiki.freecad.org/Compile_on_Windows), there are different Libpacks (prepackaged libraries) available:

- Libpack for Windows with Qt 5.12, OCC 7.3, and Python 3.6; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=4&t=35789).
- Libpack for Windows with Qt 5.12.6, OCC 7.4; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=4&t=42945), [pull request #2944](https://github.com/FreeCAD/FreeCAD/pull/2944).
- [Libpack 12.5.1](https://github.com/apeltauer/FreeCAD/releases/tag/LibPack_12.5.1) for Windows with Qt 5.15, OCC 7.5, and Python 3.8; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=55077&start=150#p482128).

**Other development news**:

- There is a new Docker container to build FreeCAD. See [Compile on Docker](https://wiki.freecad.org/Compile_on_Docker); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=4&t=42954).
- The infrastructure of the bug tracker as well as the wiki was moved to a dedicated server so that it is easier to manage by the project administrators; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=42795).  

### Documentation

- The [Compile on Linux](https://wiki.freecad.org/Compile_on_Linux) page was reviewed to better explain the requisites to compile on different Linux distributions. As many developers use Debian-based systems, this section received the most attention. Users of other Linux distributions are encouraged to maintain the documentation for their particular distribution.
- [Compile on Windows](https://wiki.freecad.org/Compile_on_Windows) was also rewritten to explain how to use the "LibPack" for compilation.
- [Compile on Docker](https://wiki.freecad.org/Compile_on_Docker) was created to describe the compilation in this system.
- The [Source documentation](https://wiki.freecad.org/Source_documentation) page also received a clean-up to better explain how to produce the programming (API) documentation from C++ and Python sources.
- The [Doxygen](https://wiki.freecad.org/Doxygen) page was reviewed and extended to give more details about the syntax used in C++ files to produce the programming documentation.
- The [Source code management](https://wiki.freecad.org/Source_code_management) page was also reworked with better descriptions and examples of using `Git` to manage branches and contribute code.
- The [External workbenches](https://wiki.freecad.org/External_workbenches) page was re-organized to list all feature-rich, publicly available workbenches. If you'd like to add a workbench to this page, showcase it in the forum, and provide supporting information like a user manual, wiki pages, and a link to its repository. Then push for it to be included in the [Addon Manager](https://wiki.freecad.org/Std_AddonMgr).
- There have been improvements to the [Tutorials](https://wiki.freecad.org/Tutorials) and [Video tutorials](https://wiki.freecad.org/Video_tutorials) pages. In particular, it has been stressed to readers that they should consider only video tutorials that are made with versions 0.17 and above.

### Known Limitations

- Black screen due to video card drivers while running FreeCAD inside a virtual machine; [issue #3939](https://freecadweb.org/tracker/view.php?id=3939).
- Logitech Wingman USB joystick can cause erratic behavior when spinning and zooming in the view; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=36712&start=10).
- Gesture navigation is fully supported for Windows but is yet to be maintained in Linux and MacOS. Problem: the developer, DeepSOIC, doesn't have a MacOS machine with its special trackpad and hasn't tested it on Linux either; [forum discussion](https://forum.freecadweb.org/viewtopic.php?p=308403#p308402).  

## User interface

- The navigation cube got a few retouches; now it uses transparency to be easier on the eyes, and the arrows are bigger to improve clicking on them.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=34&t=35523); [pull request](https://github.com/FreeCAD/FreeCAD/pull/2076)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5255a0f2-a122-48ac-af13-e487def487d3)  

- The navigation cube can be augmented by the CubeMenu addon, which allows configuring the menu that pops up, as well as the size of the cube itself. This is helpful, particularly for very high-resolution screens with too small default size. This external tool can be installed from the [Addon Manager](https://wiki.freecad.org/Std_AddonMgr).
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=34&t=43338); [CubeMenu](https://github.com/triplus/CubeMenu) repository (LGPL 2.1)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9e968b89-a4f9-4216-8bab-01be333f34a6)  

- There is a new [preferences option](https://wiki.freecad.org/Preferences_Editor#Selection) to display selection checkboxes in front of every [document tree](https://wiki.freecad.org/Tree_view) item. This is for example useful to select several items via a touchscreen.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=34&t=53065); [pull request](https://github.com/FreeCAD/FreeCAD/pull/4250)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e18460fc-20d5-4b14-ad93-344d85fef847)  

- New COIL icon theme developed by user _1D_Inc_. This is a minimalistic icon set inspired by Blender's 2.8 outline-style icons (a coil of threads or strands alludes to the appearance of the icons). The intention is to have professional-looking icons that can be used with different color themes, including light, dark, and monochrome.
[Forum discussion 1](https://forum.freecadweb.org/viewtopic.php?p=287840#p287840) (old thread); [discussion 2](https://forum.freecadweb.org/viewtopic.php?f=34&t=34687) (main thread); [1D_SVG_Tools repository](https://github.com/formjune/1D_SVG_Tools)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a6f7c6e9-c496-4cc6-81e2-16bf12d25721)  

- New icon theme management developed by user _triplus_.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=22&t=17901&start=30#p294975)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7471d302-11ab-4c21-8686-da7877b8dfcd)  

- New dark stylesheet developed by user _userzmp2000_.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=11419&start=120#p305844); [BlenderLike-dark.qss](https://github.com/zmp2000/FreeCAD/blob/master/src/Gui/Stylesheets/BlenderLike-dark.qss)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3a6c3fe8-0fd7-4863-b3d8-ac88040a69d2)  

- Dark themes by user pablogil. Blue, green, and orange variations are darker than previous templates.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=38851); [pull request #2433](https://github.com/FreeCAD/FreeCAD/pull/2433); [#2920](https://github.com/FreeCAD/FreeCAD/pull/2920); [#2933](https://github.com/FreeCAD/FreeCAD/pull/2933)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dfafed13-381b-41a1-96c3-92b70863836c)  

- The [Std ViewScreenShot](https://wiki.freecad.org/Std_ViewScreenShot) tool now supports transparency. Options are available by clicking the `Extended` button and changing the **Image Properties** section.
[Wiki](https://wiki.freecadweb.org/Std_ViewScreenShot#Creation_method); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=41950&start=10); [commit 8e5151002](https://github.com/FreeCAD/FreeCAD/commit/8e5151002)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/775939d6-0a1b-4b50-a25f-6cbc744640db)

## App::Link and Assembly

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/11e47a97-c940-41d4-bf44-2c3144bdff0d)  
_The "App::Link" object allows lightweight linking of objects in a document and from external documents_  

After 2.5 years in development, the "[Link](https://wiki.freecad.org/App_Link)" object, or more formally [App Link](https://wiki.freecad.org/App_Link) (`App::Link` class), was introduced in FreeCAD. This is a special type of [App DocumentObject](https://wiki.freecad.org/App_DocumentObject) with certain properties that will hopefully allow for doing assemblies easier.

An "[App Link](https://wiki.freecad.org/App_Link)" allows objects to use another object's data, such as geometry or even their 3D visual representation, in the same or different files. It can be considered a thin, absolute clone or the same object living in two different "instances". Some functionality offered by an "App Link" is already present in some workbenches like [Arch](https://wiki.freecad.org/Arch_Workbench) and [BIM](https://wiki.freecad.org/BIM_Workbench) ([clones](https://wiki.freecad.org/Draft_Clone), [external references](https://wiki.freecad.org/Arch_Reference)), but the "App Link" implementation is at the core level and thus can be used by all workbenches in different ways.

The "[App Link](https://wiki.freecad.org/App_Link)" component was thought and developed almost single-handedly by user realthunder. The motivations and design implementations behind this project are described on his GitHub page, [Link](https://github.com/realthunder/FreeCAD_assembly3/wiki/Link). In order to accomplish this feature, several core changes to FreeCAD were made; these are also extensively documented in [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes).

The history of "App Link" can be traced to some essential forum threads:
- [Why an object can only be inside one App::Part?](https://forum.freecadweb.org/viewtopic.php?f=19&t=21505) (March 2017)
- [Introducing App::Link/XLink](https://forum.freecadweb.org/viewtopic.php?f=10&t=21586) (March 2017)
- [Links](https://forum.freecadweb.org/viewtopic.php?f=20&t=22216) (May 2017)
- [Realthunder Link implementation: Architecture discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=23015) (June 2017)
- [PR #876: Link, stage one, context-aware selection](https://forum.freecadweb.org/viewtopic.php?f=17&t=23419) (July 2017)
- [Preview: Link, stage two, API groundwork](https://forum.freecadweb.org/viewtopic.php?f=17&t=23626) (July 2017)
- [Assembly3 preview](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) (December 2017)
- [Merging of my Link branch](https://forum.freecadweb.org/viewtopic.php?f=10&t=29542) (June 2018)

Finally, the pull request and merge happened:
- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=27&t=38621), old thread (July 2019), [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350) (the BIG merge), [LinkMerge branch](https://github.com/realthunder/FreeCAD/tree/LinkMerge)
- [App::Link: the big merge](https://forum.freecadweb.org/viewtopic.php?f=8&t=37757), main thread (July 2019)
- [A simple path description of Link, 019, Link stage, Asm3, merge?](https://forum.freecadweb.org/viewtopic.php?p=329054#p329054) (August 2019)
- [PR#2559: expose link and navigation actions](https://forum.freecadweb.org/viewtopic.php?f=17&t=39672), an introduction to the Link feature in 0.19 (September 2019)

The "App Link" object prepares FreeCAD for the phase that was scheduled to happen after the redesign of [PartDesign in FreeCAD 0.17](https://wiki.freecad.org/Release_notes_0.17), which is working with assemblies.

[Assembly3](https://wiki.freecad.org/Assembly3_Workbench) is an assembly workbench written in Python by _realthunder_, that makes use of the "App Link" functionality. The workbench served as a testbed for this component during its development. While Assembly3 is still not officially part of FreeCAD, with the inclusion of "App Link" in the master branch, it is a matter of time for Assembly3 to be provided as an installable add-on, just like [A2plus](https://wiki.freecad.org/A2plus_Workbench) and [Assembly4](https://wiki.freecad.org/Assembly4_Workbench) are provided currently.  

## Core system, App, Base, and GUI Namespaces

Besides the introduction of [App Link](https://wiki.freecad.org/App_Link), the "LinkMerge" branch also introduced some changes visible to the user with regards to object properties, [expressions](https://wiki.freecad.org/Expressions), [visual selection](https://wiki.freecad.org/Selection_methods), and the [tree view](https://wiki.freecad.org/Tree_view). These are described in the [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes) page.

- Dynamic properties can be added to any C++ or Python object. This can make macros such as [Macro PropertyMemo](https://wiki.freecad.org/Macro_PropertyMemo) obsolete.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?p=328913#p328913); [animated GIF](http://www.freecadweb.org/wiki/images/3/3d/Custom-property.gif) example  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/584c1ecf-10fa-41d2-b005-2349ccaeeb2e)  

- These dynamic properties were added in the [App Link](https://wiki.freecad.org/App_Link) merge
[Pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b365cdb-748a-443a-8ad2-8b29c6039c6c)  

- Selected elements hidden by other elements are highlighted to indicate their position within the model.
These selection enhancement were also introduced in the [App Link](https://wiki.freecad.org/App_Link) merge; [pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b3f62c0c-8379-47fe-9c93-d5436ae28497)  

- After two years of being stalled, there have been improvements in how the program handles backup files. Now they can include a timestamp in the format `%Y%m%d-%H%M%S`, instead of a simple number. This can be set in the [preferences editor](https://wiki.freecad.org/Preferences_Editor).
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=26965&start=20#p217186); [pull request #1148](https://github.com/FreeCAD/FreeCAD/pull/1148)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7ab0259b-322a-413d-8853-c6ea0c419cbf)  

- New input field to quickly search for parameters in the [parameter editor](https://wiki.freecad.org/Std_DlgParameter).
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=44169); [pull request #3173](https://github.com/FreeCAD/FreeCAD/pull/3173)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8a50d5e9-c592-47ce-b84a-187eeb847c8a)  

- The [Macro menu](https://wiki.freecad.org/Std_Macro_Menu) now shows a shortcut to recently used [macros](https://wiki.freecad.org/Macros), which can be called with a key combination, for example, `Ctrl`+`Shift`+`1`. This can be configured in the [Macro preferences](https://wiki.freecad.org/Preferences_Editor).
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=48342); [pull request #3616](https://github.com/FreeCAD/FreeCAD/pull/3616)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6656a7d5-bacf-4990-ac00-1f1680adbc05)  

- Added support for existing Python virtual environments; [pull request #2021](https://github.com/FreeCAD/FreeCAD/pull/2021).
- Pre-select name filter in the import/export dialog; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=8093), [commit e239994](http://github.com/FreeCAD/FreeCAD/commit/e239994).
- Fixed missing application ID and icon on GNOME/Wayland; [pull request #2466](https://github.com/FreeCAD/FreeCAD/pull/2466).
- Added support for Hertz as a physical unit, and added the Frequency [property](https://wiki.freecad.org/Property); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=39485), [commit 3500451a0](https://github.com/FreeCAD/FreeCAD/commit/3500451a0), [commit d7ca604c9](https://github.com/FreeCAD/FreeCAD/commit/d7ca604c9).
- Added [Std TextDocument](https://wiki.freecad.org/Std_TextDocument) tool to insert an object to store arbitrary text in the document; [commit 13db5b0560](http://github.com/FreeCAD/FreeCAD/commit/13db5b0560), [commit 53b01f08f9](http://github.com/FreeCAD/FreeCAD/commit/53b01f08f9).
- Added support for further units, Gauss, Weber, Oersted; [forum discussion](https://forum.freecadweb.org/viewtopic.php?p=358223), [pull request #2863](https://github.com/FreeCAD/FreeCAD/pull/2863).
- New commands to get information on the graphical commands and the shortcuts; `Gui.getCommandInfo(...)`, `Gui.getCommandShortcut(...)`, `Gui.setCommandShortcut(...)`; [forum thread](https://forum.freecadweb.org/viewtopic.php?t=44973&start=30#p417043), [pull request #3710](https://github.com/FreeCAD/FreeCAD/pull/3710).
- New [glTF](https://wiki.freecad.org/Import_Export#Overview_of_file_formats) support (requires OCC 7.5.0) [commit](https://github.com/FreeCAD/FreeCAD/commit/74b866ed3)
- New [WebGL](https://wiki.freecad.org/Import_Export#Overview_of_file_formats) exporter; [pull request #4025](https://github.com/FreeCAD/FreeCAD/pull/4025)

## Addon Manager

- The [Addon Manager](https://wiki.freecad.org/Std_AddonMgr) was upgraded; it is now able to display more complete information on all [external workbenches](https://wiki.freecad.org/External_workbenches) and [macros](https://wiki.freecad.org/Macros_recipes), and show an icon for each of them. It also allows checking for updates on start and using custom repositories.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=37394)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f046df14-a588-4328-b3a5-c366020aee34)  

- It will also show information on whether the addon is obsolete, already installed, or available for update.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=37394&p=340109#p340109); [pull request #2605](https://github.com/FreeCAD/FreeCAD/pull/2605)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e94e94e4-06d6-4d9f-aef3-88469b8efb3d)    

## Arch Workbench

Keep with the latest developments to the [Arch Workbench](https://wiki.freecad.org/Arch_Workbench) and the [BIM Workbench](https://wiki.freecad.org/BIM_Workbench) that depends on it by following the main author of this workbench, at [Uncreated](https://yorik.uncreated.net/blog/freecad).  
The updates are also posted to the forum, [BIM/Arch development news articles from Yorik's blog](https://forum.freecadweb.org/viewtopic.php?f=23&t=17498).

The developers of [Draft](https://wiki.freecad.org/Draft_Workbench), [Arch](https://wiki.freecad.org/Arch_Workbench), and [BIM Workbenches](https://wiki.freecad.org/BIM_Workbench) also collaborate with the greater [OSArch community](https://osarch.org/), with the ultimate goal of improving building design by using entirely free software.  

- The [Arch Site](https://wiki.freecad.org/Arch_Site) tool can produce sun path diagrams if the given latitude, longitude, and declination are provided. This requires Pysolar 0.7 or above and only works with Python 3.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=36162); [commit 2177f4437](https://github.com/FreeCAD/FreeCAD/commit/2177f4437); [commit c05bc0990](https://github.com/FreeCAD/FreeCAD/commit/c05bc0990)        

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/410d8539-03b4-4daa-9dbb-a018a3b8e32d)  

- The [Arch Site](https://wiki.freecad.org/Arch_Site) tool now can display a compass to show the direction of the "true North" (declination) in the model. By default, the North is aligned to the Y axis. This is useful when working in real-world coordinates.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=34669); [pull request #2111](https://github.com/FreeCAD/FreeCAD/pull/2111); [commit ff1fb11af](https://github.com/FreeCAD/FreeCAD/commit/ff1fb11af); [pull request #2360](https://github.com/FreeCAD/FreeCAD/pull/2360)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b70827bb-6e77-46b5-b1ba-13b75deaede5)  

- The [Arch SectionPlane](https://wiki.freecad.org/Arch_SectionPlane) tool can now clip the view to act as a camera.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=35861); [commit 9a64f3fad9](https://github.com/FreeCAD/FreeCAD/commit/9a64f3fad9e253b806729137061e83b82adbe9c7)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b0437d18-1562-4a10-8ccf-4ef1d202873b)  

- The [Arch Fence](https://wiki.freecad.org/Arch_Fence) tool was added to produce fence objects starting from a post and a path.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=36149); [pull request #2151](https://github.com/FreeCAD/FreeCAD/pull/2151); [pull request #2173](https://github.com/FreeCAD/FreeCAD/pull/2173); [pull request #2263](https://github.com/FreeCAD/FreeCAD/pull/2263); [pull request #2270](https://github.com/FreeCAD/FreeCAD/pull/2270)  
[Arch Fence in action](https://forum.freecadweb.org/viewtopic.php?f=24&t=37121)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4aea5a66-a403-480e-9f5d-b15331dae2f3)  

- Improvements in the [Reinforcement Addon](https://wiki.freecad.org/Reinforcement_Addon), which extends the [Arch Rebar](https://wiki.freecad.org/Arch_Rebar) tool.  
Automated reinforcement graphical user interface: the intention is to facilitate the automatic creation of simple and complex rebars. This development was carried out as a [Google Summer of Code 2019](https://wiki.freecad.org/Google_Summer_of_Code_2019) project: [Suraj_Dadral/gsoc_proposal](https://wiki.freecad.org/User:Suraj_Dadral/gsoc_proposal).  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=35077); [FreeCAD-Reinforcement](https://github.com/amrit3701/FreeCAD-Reinforcement) (master code); [SurajDadral/FreeCAD-Reinforcement](https://github.com/SurajDadral/FreeCAD-Reinforcement) (development fork)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ce1e622f-330f-4e7f-8da9-be37f42201bf)  

- New rendering modes for [Arch SectionPlane](https://wiki.freecad.org/Arch_SectionPlane) that can be selected when using [TechDraw ArchView](https://wiki.freecad.org/TechDraw_ArchView), `DataRender Mode`, `Coin`, and `Coin mono`. The section plane generates an SVG that is simply displayed on a TechDraw page; with these new modes, the SVG generation is performed by Coin, so it is faster than using `Wireframe` and `Solid`, which use the internal OCCT kernel to calculate the SVG projection. The tradeoff is between speed and precision; the Coin modes are faster but less precise, while the original modes are more precise but relatively slow.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=38526&start=30#p328350); [commits f93a986b5a](https://github.com/FreeCAD/FreeCAD/commit/f93a986b5a); [ed0eff0248](https://github.com/FreeCAD/FreeCAD/commit/ed0eff0248)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/45cc512c-22a8-4ad0-bb55-d7b88b936277)  

- New [Arch CutLine](https://wiki.freecad.org/Arch_CutLine) tool to cut solid objects, like [Arch Walls](https://wiki.freecad.org/Arch_Wall) and [Arch Structure](https://wiki.freecad.org/Arch_Structure), using an edge, like a [Draft Line](https://wiki.freecad.org/Draft_Line). This works similarly to the existing [Arch CutPlane](https://wiki.freecad.org/Arch_CutPlane).  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=40600); [pull request #2701](https://github.com/FreeCAD/FreeCAD/pull/2701); [#2870](https://github.com/FreeCAD/FreeCAD/pull/2870)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e6bd89de-fa89-4afa-827d-b37d0a89feb8)  

- Arch now includes a Shapefile importer commonly used in GIS applications. The importer uses the `shapefile.py` library from the [pyshp](https://github.com/GeospatialPython/pyshp) project; this library should be downloaded on the first run.  
[Forum thread](https://www.forum.freecadweb.org/viewtopic.php?f=9&p=396940#p396536); [commit 916a42397c](https://github.com/FreeCAD/FreeCAD/commit/916a42397c)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ccc25ef5-1f42-4fd1-87bf-70065e3d55b0)  
_Image of a site shared by @HnsaCAD for @gemeentearnhem_  

- New [Arch Truss](https://wiki.freecad.org/Arch_Truss) tool to create a variety of trusses. Like [Arch Walls](https://wiki.freecad.org/Arch_Wall) they are constructed from a baseline, and different properties define the shape of the truss, its height, and the intermediate elements.
It also supports [Arch MultiMaterial](https://wiki.freecad.org/Arch_MultiMaterial) to assign different materials to the bottom, top, and intermediate elements.  
[Commit 0c96f77184](https://github.com/FreeCAD/FreeCAD/commit/0c96f77184)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/06d37631-e0ca-441c-91dd-87f329fa0a22)  

- New [Arch CurtainWall](https://wiki.freecad.org/Arch_CurtainWall) tool to create various types of walls. This tool needs a base surface to work on. If none is selected, you can simply draw a line between two points, like the standard [Arch Wall](https://wiki.freecad.org/Arch_Wall). The surface is then subdivided into rows and columns, and four points are extracted from the surface subdivisions, forming quadrangular facets.  
[Commit e42a26fba1](https://github.com/FreeCAD/FreeCAD/commit/e42a26fba1); [commit 7c12c8688c](https://github.com/FreeCAD/FreeCAD/commit/7c12c8688c)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5965af9d-b869-44d9-8df8-001300087f80)  

## Draft Workbench

- The [Draft Edit](https://wiki.freecad.org/Draft_Edit) tool was upgraded to allow editing many Draft objects at the same time and also display better trackers.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=33941&start=50#p290648); [pull request #1968](https://github.com/FreeCAD/FreeCAD/pull/1968); [commit 272a8dfcc9](https://github.com/FreeCAD/FreeCAD/commit/272a8dfcc9f91097f6abcd228a3cc18fbecc37db); [commit 7de2248bb](https://github.com/FreeCAD/FreeCAD/commit/7de2248bb); [pull request #2108](https://github.com/FreeCAD/FreeCAD/pull/2108); [pull request #2430](https://github.com/FreeCAD/FreeCAD/pull/2430); [animated GIF](https://www.freecadweb.org/wiki/images/f/f7/V0ODfsN9nY.gif) example  
The tool was also moved into its own module: [commit a4e2df115d](https://github.com/FreeCAD/FreeCAD/commit/a4e2df115d); [commit c351b9094](https://github.com/FreeCAD/FreeCAD/commit/c351b9094)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/602da445-53e1-4d6b-9e9c-8a49fead23df)  

- New [Draft SubelementHighlight](https://wiki.freecad.org/Draft_SubelementHighlight) tool to highlight the nodes and edges of certain objects, like [Draft Wires](https://wiki.freecad.org/Draft_Wire), in order to edit them using modifiers like [Draft Move](https://wiki.freecad.org/Draft_Move), [Draft Rotate](https://wiki.freecad.org/Draft_Rotate), and [Draft Scale](https://wiki.freecad.org/Draft_Scale). It allows you to select multiple objects to edit instead of just one. Once the objects are highlighted, you can select specific sub-elements, vertices, and edges and transform (move, rotate, scale) only these.  
This tool was particularly developed to help edit the shape of [Arch Walls](https://wiki.freecad.org/Arch_Wall) that are based on [Draft Wires](https://wiki.freecad.org/Draft_Wire). When various walls are selected and the tool is used, the base wires automatically become visible and display their nodes prominently.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=34114); [pull request #1975](https://github.com/FreeCAD/FreeCAD/pull/1975); [video demonstration 1](https://peertube.social/videos/watch/d39d4f3c-b3c8-4a18-b8c4-6719d0f70f48), [2](https://peertube.social/videos/watch/861af3cb-b053-415c-ba31-fae332e916f4)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f59743f2-ffe9-460c-bf47-92a7d19dfa55)  

- New [Draft CubicBezCurve](https://wiki.freecad.org/Draft_CubicBezCurve) tool, to create 3rd degree Bezier curves in a way similar to Inkscape.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=35397); [pull request #2072](https://github.com/FreeCAD/FreeCAD/pull/2072); [animated GIF](https://www.freecadweb.org/wiki/images/9/97/Draft_3rd_degree_bezier.gif) example  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a94de9e8-e1f4-4163-b857-7ac2b3e94200)  

- New [Draft Arc 3Points](https://wiki.freecad.org/Draft_Arc_3Points) tool to create circular arcs by specifying three points through which the arc passes. Originally developed in the [BIM Workbench](https://wiki.freecad.org/BIM_Workbench) and then migrated to Draft.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=36332); [commit 4f19a65559](https://github.com/FreeCAD/FreeCAD/commit/4f19a65559); [commit 0b905fade0](https://github.com/FreeCAD/FreeCAD/commit/0b905fade0); [pull request #2286](https://github.com/FreeCAD/FreeCAD/pull/2286)  
A proper command line interface as well as unit tests are also provided.  
[Pull request #3004](https://github.com/FreeCAD/FreeCAD/pull/3004); [#3005](https://github.com/FreeCAD/FreeCAD/pull/3005)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5cd6afd0-8244-4b68-83a2-6460396dbd66)  

- The new [Draft Layer](https://wiki.freecad.org/Draft_Layer) tool replaces the seldom used Draft VisGroup, providing a true layer system as in other CAD systems. Draft Layer supports adding objects by drag-and-drop, controls object visibility, and, optionally, object color.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=39&t=36669) (development); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=36852) (announcement); [commit 5ee99ca4ee](https://github.com/FreeCAD/FreeCAD/commit/5ee99ca4ee); [commit 36bc48c9bf](https://github.com/FreeCAD/FreeCAD/commit/36bc48c9bf)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/725c1d19-b4da-42d9-9a51-b3d9b0d7d938)  

- Improvements in the Draft SVG routines to improve the inclusion of 2D projections in [TechDraw](https://wiki.freecad.org/TechDraw_Workbench) pages. This benefits tools like [Draft Shape2DView](https://wiki.freecad.org/Draft_Shape2DView) and [Arch SectionPlane](https://wiki.freecad.org/Arch_SectionPlane), when used with [TechDraw DraftView](https://wiki.freecad.org/TechDraw_DraftView) and [TechDraw ArchView](https://wiki.freecad.org/TechDraw_ArchView).  
A new **DataOverride Style** property is added to [TechDraw DraftView](https://wiki.freecad.org/TechDraw_DraftView) in order to choose whether the appearance of Draft objects is kept (new) or is overridden by the TechDraw page (old behavior).  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38940); [commit 3e323fee14](https://github.com/FreeCAD/FreeCAD/commit/3e323fee14)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/04283d41-7db5-4594-9302-21e162202027)  

- New [Draft Fillet](https://wiki.freecad.org/Draft_Fillet) tool that creates a fillet (rounded corner) or a chamfer (straight line) between two simple [Draft Lines](https://wiki.freecad.org/Draft_Line).  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=38715); [pull request #2441](https://github.com/FreeCAD/FreeCAD/pull/2441); [#2492](https://github.com/FreeCAD/FreeCAD/pull/2492)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/28fb8e40-a252-455e-92c2-0aa40a8ccd49)  

- The introduction of the [App Link](https://wiki.freecad.org/App_Link) object made it possible to create arrays which have many exact references to an existing object instead of shape duplicates (simple copies). This results in more memory efficient arrays. This is possible with the new [Draft LinkArray](https://wiki.freecad.org/Draft_LinkArray) and [Draft PathLinkArray](https://wiki.freecad.org/Draft_PathLinkArray) tools. [Draft LinkArray](https://wiki.freecad.org/Draft_LinkArray) works in three modes, "ortho", "polar", and the new "circular" mode, which was introduced in a separate commit.  
[Pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350)  
After the creation of the Link arrays, a new command called [Draft OrthoArray](https://wiki.freecad.org/Draft_OrthoArray) now replaces both [Draft Array](https://wiki.freecad.org/Draft_Array) and [Draft LinkArray](https://wiki.freecad.org/Draft_LinkArray). This [Draft OrthoArray](https://wiki.freecad.org/Draft_OrthoArray) is used to create exclusively orthogonal arrays. It shows a task panel similar to [Draft PolarArray](https://wiki.freecad.org/Draft_PolarArray) and [Draft CircularArray](https://wiki.freecad.org/Draft_CircularArray). Therefore, from the toolbar it is now possible to create "orthogonal", "polar" and "circular" arrays from separate buttons. Moreover, the array buttons are collected in a group so that they are organized.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=41816&p=365888#p365878); [pull request #2988](https://github.com/FreeCAD/FreeCAD/pull/2988); [#2972](https://github.com/FreeCAD/FreeCAD/pull/2972)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eca6367d-596a-4615-8fd5-c76f21958157)  

- The new [Draft PolarArray](https://wiki.freecad.org/Draft_PolarArray) tool to create polar arrays directly. Previously, the same could be done by using the old [Draft Array](https://wiki.freecad.org/Draft_Array) command and then modifying the created object's properties.  
This [Draft PolarArray](https://wiki.freecad.org/Draft_PolarArray) tool can create the new [App Link](https://wiki.freecad.org/App_Link) objects or the traditional copies.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=41816); [pull request #2824](https://github.com/FreeCAD/FreeCAD/pull/2824)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f5a7d38a-a1d5-4353-ad28-d2266f8a8c3f)  

- The Array object has a new "circular" mode. This is controlled by new properties: **DataRadialDistance**, **DataTangentialDistance**, **DataNumberCircles**, and **DataSymmetry**.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=13&t=39726); [pull request #2585](https://github.com/FreeCAD/FreeCAD/pull/2585)  
Moreover, a new [Draft CircularArray](https://wiki.freecad.org/Draft_CircularArray) tool was developed to create these circular arrays directly. This tool can create the new [App Link](https://wiki.freecad.org/App_Link) objects or the traditional copies.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=41816); [pull request #2824](https://github.com/FreeCAD/FreeCAD/pull/2824)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/adf2dc33-bf1b-4e27-a135-36535b6631b1)  

- The unit tests of the workbench were rewritten and expanded so that now it is easier to test for errors and regressions when new code is merged.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=40405); [pull request #2668](https://github.com/FreeCAD/FreeCAD/pull/2668); [#2727](https://github.com/FreeCAD/FreeCAD/pull/2727); [#2881](https://github.com/FreeCAD/FreeCAD/pull/2881); [#3005](https://github.com/FreeCAD/FreeCAD/pull/3005)  
Also, a script is provided in `Mod/Draft/drafttests/draft_test_objects.py` that produces a test file with most objects of the workbench. This file is useful to learn scripting in Draft and can also be used to test regressions in the underlying code of the objects.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=40405&p=368819#p368819); [pull request #3012](https://github.com/FreeCAD/FreeCAD/pull/3012)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/73776369-c8fd-4ae1-ae2d-d747ca9a6092)  

- New icons were provided for the Draft objects in the [tree view](https://wiki.freecad.org/Tree_view). The objective is to distinguish the objects more quickly at a glance, particularly if the default label changes. This makes it easier to recognize objects which are lines, curves, geometrical elements, linear, radial, or angular dimensions, or other objects.  
In addition, all icons were converted to the new standard pixel resolution of 96 dpi, and were saved as Plain SVG, so that we don't introduce non-standard SVG tags.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=43439); [pull request #3051](https://github.com/FreeCAD/FreeCAD/pull/3051); [#3058](https://github.com/FreeCAD/FreeCAD/pull/3058); [#3060](https://github.com/FreeCAD/FreeCAD/pull/3060); [#3070](https://github.com/FreeCAD/FreeCAD/pull/3070); [#3170](https://github.com/FreeCAD/FreeCAD/pull/3170); [#3402](https://github.com/FreeCAD/FreeCAD/pull/3402)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a5fa6480-3a63-4169-b177-ea1de7dc98c2)  

- Undergoing efforts to split tools into their own module files to ease maintenance of the codebase for the future, and facilitate the addition of new tools.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=38593); [overall structure](https://forum.freecadweb.org/viewtopic.php?f=23&t=38593&start=120#p428304)  
Some of the functions and classes that have already been moved: [commit 5ee99ca4ee](https://github.com/FreeCAD/FreeCAD/commit/5ee99ca4ee) ([Draft Layer](https://wiki.freecad.org/Draft_Layer)), [commit 16c26cb3b1](https://github.com/FreeCAD/FreeCAD/commit/16c26cb3b1) ([Draft Edit](https://wiki.freecad.org/Draft_Edit)), [commit 9fb6aec313](https://github.com/FreeCAD/FreeCAD/commit/9fb6aec313) ([Draft SelectPlane](https://wiki.freecad.org/Draft_SelectPlane)), [pull requests #2823](https://github.com/FreeCAD/FreeCAD/pull/2823) (GuiCommandBase), [#2829](https://github.com/FreeCAD/FreeCAD/pull/2829) (utilities), [#2830](https://github.com/FreeCAD/FreeCAD/pull/2830) (GUI utilities), [#2831](https://github.com/FreeCAD/FreeCAD/pull/2831) (ToDo class), [#2832](https://github.com/FreeCAD/FreeCAD/pull/2832) (translate function), [#3091](https://github.com/FreeCAD/FreeCAD/pull/3091) ([Draft Snap](https://wiki.freecad.org/Draft_Snap)), [#3092](https://github.com/FreeCAD/FreeCAD/pull/3092) (Draft Trackers), [#3094](https://github.com/FreeCAD/FreeCAD/pull/3094) ([Draft SelectPlane](https://wiki.freecad.org/Draft_SelectPlane)), [#3095](https://github.com/FreeCAD/FreeCAD/pull/3095) ([Draft ShapeString](https://wiki.freecad.org/Draft_ShapeString) task panel), [#3096](https://github.com/FreeCAD/FreeCAD/pull/3096) ([Draft Scale](https://wiki.freecad.org/Draft_Scale) task panel), [#3097](https://github.com/FreeCAD/FreeCAD/pull/3097) ([Draft Edit](https://wiki.freecad.org/Draft_Edit)), [#3157](https://github.com/FreeCAD/FreeCAD/pull/3157) ([Draft WorkingPlaneProxy](https://wiki.freecad.org/Draft_WorkingPlaneProxy)), [#3182](https://github.com/FreeCAD/FreeCAD/pull/3182) (various Gui Commands), [#3291](https://github.com/FreeCAD/FreeCAD/pull/3291) (base classes `DraftTool`, `Creator`, `Modifier`), [#3299](https://github.com/FreeCAD/FreeCAD/pull/3299), (`Creator` tools), [#3308](https://github.com/FreeCAD/FreeCAD/pull/3308) (`Modifier` tools).    
For an overall view of the pull requests, see [#2429](https://github.com/FreeCAD/FreeCAD/pull/2429).    
This is a work in progress that requires advancing carefully as we aim to maintain compatibility with previous versions of the Draft. Most refactoring is complete, but there is still room for improving many aspects of the workbench. We invite enthusiastic developers to join the effort.    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5a99cc9a-8c5a-48c9-a0e9-c118b7e109c7)  

- New [Annotation style editor](https://wiki.freecad.org/Draft_AnnotationStyleEditor) tool to create styles for annotations. These styles can define things like text font, size, color, and arrows, which can be applied to any of your texts, dimensions, or labels. We started by implementing an editor and a system to store the styles in the document. The next step will be adapting the different annotation objects to support the styles.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=44051); [commit 1b887fa0f5](https://github.com/FreeCAD/FreeCAD/commit/1b887fa0f5); [commit 4555a77663](https://github.com/FreeCAD/FreeCAD/commit/4555a77663); [commit 5b3fea59e0](https://github.com/FreeCAD/FreeCAD/commit/5b3fea59e0)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7c23e468-adbc-49cc-b9eb-6071f9043dc5)  

### Further Draft Improvements

- The [Draft Wire](https://wiki.freecad.org/Draft_Wire) tool is now called "Polyline" in the menu instead of "DWire"; all options and functionality remain the same, so this doesn't break compatibility; [commit 39e748229e](https://github.com/FreeCAD/FreeCAD/commit/39e748229e67fa93e924e355c0ce0897c870d756).
- A "DraftEditPickRadius" preference was added to control the area of influence of the pointer when picking vertices in edit mode [Draft Edit](https://wiki.freecad.org/Draft_Edit); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=40060), [pull request #2642](https://github.com/FreeCAD/FreeCAD/pull/2642), [issue #4162](https://freecadweb.org/tracker/view.php?id=4162).
- Undergoing efforts to document the Python source code (adding complete docstrings), in order to produce better programming documentation that can be used by both users and developers. See [Source documentation](https://wiki.freecad.org/Source_documentation) for instructions on generating the documentation with [Doxygen](https://wiki.freecad.org/Doxygen).
- The "Toolbar mode" when launching the Draft tools has been removed. This was an interface that was used in the past but became obsolete as the [task panel](https://wiki.freecad.org/Task_panel) became the predominant interface; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=34&t=42782), [pull request #2973](https://github.com/FreeCAD/FreeCAD/pull/2973).
- `Draft.copy` now works with any document object, thanks to the new `Document.copyObject()` method introduced with the LinkMerge; pull request [#3658](https://github.com/FreeCAD/FreeCAD/pull/3658).  

## FEM Workbench

- After half a year in development and testing the "femconcrete" branch was added to the FEM Workbench. This provides tools to estimate the level of reinforcement required in a concrete structure to prevent brittle failure under tension or shear. In essence, it is a post-processing routine for the CalculiX solver, which calculates the principal tensile stresses in the concrete from an elastic analysis and uses those to determine the minimum reinforcement in the three coordinate directions required to prevent failure.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=33106); [pull request #2267](https://github.com/FreeCAD/FreeCAD/pull/2267); [Analysis of reinforced concrete with FEM](https://wiki.freecad.org/Analysis_of_reinforced_concrete_with_FEM) (tutorial)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a5047208-906c-42c8-b771-089b2f3363af)  

- After a few months in development the "fcFEM" macro was published. It implements a finite element solver entirely in Python. Its author designed it to overcome the limitations of other external solvers, like CalculiX and z88. Some of the intended improvements include creating mixed mesh analyses, improved beam and shell elements, arc-length control for overcoming limit points in elastic-plastic analyses, and implementation of zero-thickness interface elements for different applications.    
In due time this solver could be distributed with the FEM Workbench, meaning that the FreeCAD project would have its own finite element solver for mechanical and structural analyses.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=33974); [fcFEM](https://github.com/HarryvL/fcFEM) repository (LGPL 2)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cd30f4fc-906e-4a9e-afef-32e62c763ac1)  

- Topology optimization has long been a feature desired for those working with FEM. In 2016, the BESO (Bi-directional Evolutionary Structural Optimization) project was started, implementing an iterative method with the CalculiX solver that removes ineffective elements from a mesh to optimize the design's mass. In the 0.19 development cycle, a simple graphical interface has been developed to facilitate generating the beso configuration files.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=15460); [beso](https://github.com/fandaL/beso) repository (LGPL 3)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/536a4746-7751-4789-b353-bf9c2ee6c924)  

- Similar to beso, the ToOptix project also provides a macro to perform topology optimization; it currently only works in structural and heat transfer studies.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?p=273794#p273794) (just a mention); [ToOptixFreeCADAddon](https://github.com/DMST1990/ToOptixFreeCADAddon) repository (GPL 2)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/770bec02-fae2-4b2a-9827-d9b97400f877)    

- The FEM workbench now has a browsable set of example simulations. They are available via the menu **Utilities → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/20e172b6-c71f-40cc-9b20-e26610145c2c) [Open FEM examples](https://wiki.freecad.org/FEM_Examples)**.  
[commit ff3ce49139](https://github.com/FreeCAD/FreeCAD/commit/ff3ce49139)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5850e42c-94bd-4780-a6d1-ab904246bf0c)  

- There are two new constraints available:  
  - menu **Model → Geometrical Constraints → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/de3827af-13d7-4ac8-924b-0a5370664330) [Constraint Section Print](https://wiki.freecad.org/FEM_ConstraintSectionPrint)**  
  - menu **Model → Mechanical Constraints → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7a4aca05-3b6f-48bf-8320-e4075e6fcb43) [Constraint Tie](https://wiki.freecad.org/FEM_ConstraintTie)**    
One new solver:  
  - menu **Solve → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1c23a639-5eae-41d6-bc9b-67cd0920bafb) [Electricforce equation](https://wiki.freecad.org/FEM_EquationElectricforce)**    
and a possibility to overwrite a constant:  
  - menu **Model → Overwrite Constraints → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/26036f1e-6ce5-4b2e-bff3-281ef53d7933) [Constant vacuum permittivity](https://wiki.freecad.org/FEM_ConstantVacuumPermittivity)**   

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9aaebc2c-c572-466b-9e51-64ec599c5975)  

### Further FEM Improvements

- The Elmer project has developed a library for handling batch-type pre-processing for the ElmerSolver, using the FEM Workbench. This includes creating mesh objects for FreeCAD, manipulating the mesh sizes of solids, creating finite element meshes using Gmsh, running ElmerGrid and exporting the mesh for ElmerSolver, and selecting and naming bodies and boundaries for ElmerSolver; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=38950), [elmerfem](https://github.com/ElmerCSC/elmerfem) repository (Elmer main repository), [FreeCADBatchFEMTools](https://github.com/ElmerCSC/elmerfem/tree/devel/ElmerWorkflows/FreeCADBatchFEMTools) repository (library to interact with FEM Workbench, LGPL 2.1).  

- The integration of the OOFem solver, which started in 2018, is progressing, so it is now another option that can be used for structural analysis in FreeCAD. This solver is interesting in that it has interface elements, as well as arc-length control, in addition to many non-linear material models. The integration of OOFEM into FEM has been carried in various commits that together serve as documentation on how to integrate similar solvers; [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=31288), [femoofem](https://github.com/berndhahnebach/FreeCAD_bhb/tree/femoofem) branch, [OOFEM](http://www.oofem.org/) main website, [oofem](https://github.com/oofem/oofem) repository (LGPL 2.1).  

- Updated coding standards that strive for PEP8 compliance with Python.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=18&t=12833); [commit ad03ee9bdf](https://github.com/FreeCAD/FreeCAD/commit/ad03ee9bdfeeb23d5c79cf462ba4a5b5566c5bc1); [commit 27cb54009b](https://github.com/FreeCAD/FreeCAD/commit/27cb54009b57c1938f7ff97026c8b35c1688233f)  

## Import

- Improved import/export compatibility with proprietary CAD systems when using compressed STEP or STPZ.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=37469); [pull request #2323](https://github.com/FreeCAD/FreeCAD/pull/2323); [commit 7de89cf62e](https://github.com/FreeCAD/FreeCAD/commit/7de89cf62e0411dcd)  

## Material handling

_None_

## Mesh Workbench

- [Mesh FromPartShape](https://wiki.freecad.org/Mesh_FromPartShape) is now able to create [meshes](https://wiki.freecad.org/Mesh) using [Gmsh](https://en.wikipedia.org/wiki/Gmsh). This mesher is an external program must be installed in the system before it can be used. Gmsh was already one of the options to create [finite element meshes](https://wiki.freecad.org/FEM_Mesh) with the [FEM Workbench](https://wiki.freecad.org/FEM_Workbench).  
Moreover, now the [Mesh FromPartShape](https://wiki.freecad.org/Mesh_FromPartShape) dialog will remember the settings you used the last time.  
[Commit 1cb4625bf](https://github.com/FreeCAD/FreeCAD/commit/1cb4625bf)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c10daabd-5a48-4c4e-89ef-255ccb5d6481)  

- The mesh workbench now has several toolbars to quickly access the different features.  
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=34&t=47494); [pull request #4462](https://github.com/FreeCAD/FreeCAD/pull/4462)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/052e8cb9-bb63-4640-b800-5cc039b35dda)  

### Further improvements

- It is now possible to take an OpenInventor mesh file (**.iv**), and export it to STL.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=43926#p378032); [commit 601ac707b2](https://github.com/FreeCAD/FreeCAD/commit/601ac707b2)  

- It is now possible to export a [Mesh](https://wiki.freecad.org/Mesh) to [Asymptote format](https://wiki.freecad.org/Asymptote) (**.asy**).
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=8&t=48915); [commits 4badaba5](https://github.com/FreeCAD/FreeCAD/commit/4badaba5); [50bbd522](https://github.com/FreeCAD/FreeCAD/commit/50bbd522); [58a92681](https://github.com/FreeCAD/FreeCAD/commit/58a92681); [dd7afa72](https://github.com/FreeCAD/FreeCAD/commit/dd7afa72); [b0f78f5a](https://github.com/FreeCAD/FreeCAD/commit/b0f78f5a)  

- Most tools of the [Mesh Workbench](https://wiki.freecad.org/Mesh_Workbench) now have a proper icon so it is easier to recognize the function in the menu and toolbars.
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=34&t=47494); pull request [#3816](https://github.com/FreeCAD/FreeCAD/pull/3816); [#3864](https://github.com/FreeCAD/FreeCAD/pull/3864)  

## Part Workbench

- New command [Part PointsFromMesh](https://wiki.freecad.org/Part_PointsFromMesh) to create an object made of points from an imported mesh. Then the points can be used as reference objects to do further operations, such as define a plane, and draw a sketch. This can be used to reverse engineer or remodel meshes by creating solid objects.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=38670&p=328959#p328959) (and video), [pull request #2450](https://github.com/FreeCAD/FreeCAD/pull/2450)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/38f29345-8108-40b9-9b5d-1c1212509867)  

- Existing [primitives](https://wiki.freecad.org/Part_Workbench#Primitives) can now be edited in a dialog that also shows the changes as live preview. To do this, click on the primitive in the model tree and the dialog opens.  
[Commit 6d831627](https://github.com/FreeCAD/FreeCAD/commit/6d831627); [commit f23187cd](https://github.com/FreeCAD/FreeCAD/commit/f23187cd); [commit dabf65cc](https://github.com/FreeCAD/FreeCAD/commit/dabf65cc); [commit 7251a90f](https://github.com/FreeCAD/FreeCAD/commit/7251a90f)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8d4c1982-c77c-45a7-97c3-10c6a15f2bf4)  

- When inserting [primitives](https://wiki.freecad.org/Part_Primitives) the location can be set using translation and rotation.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/92e189ae-62a8-4358-8254-1af7148ce1d5)  

- The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3916f5f5-f19f-4830-a6a7-9f36eef1ee4b) [Part CheckGeometry](https://wiki.freecad.org/Part_CheckGeometry) tool has been expanded to include more information about the [Part TopoShape](https://wiki.freecad.org/Part_TopoShape) that is contained in all solid objects of the program, not including [Mesh](https://wiki.freecad.org/Mesh)-type objects.  
[Forum discusion](https://forum.freecadweb.org/viewtopic.php?f=22&t=48792); [forum discussion 2](https://forum.freecadweb.org/viewtopic.php?f=8&t=48994); [announcement](https://forum.freecadweb.org/viewtopic.php?f=9&t=50153); [pull request #3747](https://github.com/FreeCAD/FreeCAD/pull/3747)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/343bfdc3-753c-4af7-a362-9576cc10d595)  

- A script is provided in `Mod/Part/parttests/part_test_objects.py`, that produces a test file with the [Part Primitives](https://wiki.freecad.org/Part_Primitives). This file is useful to learn scripting in Part, and can also be used to test regressions in the underlying code of the objects.  
[Pull request #3078](https://github.com/FreeCAD/FreeCAD/pull/3078)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1af7f1b3-df52-4fae-ac78-af390286252f)  

### Further improvements

- The dialog to edit [Prisms](https://wiki.freecad.org/Part_Prism) allows now to specify an angle in respect to the normal of the chosen attachment plane. This way one can create skew prisms.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=49343#p422857); [pull request #3793](https://github.com/FreeCAD/FreeCAD/pull/3793)  

- **New Face method**: `Part.Face.cutHoles(list_of_wires)` to cut holes into a face. The face usually needs to be validated after operation.  

- The [App Link](https://wiki.freecad.org/App_Link) merge introduced two new commands, [Part TransformedCopy](https://wiki.freecad.org/Part_TransformedCopy) and [Part ElementCopy](https://wiki.freecad.org/Part_ElementCopy). These commands create non-parametric copies of a body with a transformed placement, and of an element (vertex, edge, or face); [commit 6da72b9859](https://github.com/FreeCAD/FreeCAD/commit/6da72b9859f6d21119831d44a8d132c8e2dfb544).  
These operations essentially make the [Macro Repro Wire](https://wiki.freecad.org/Macro_Repro_Wire) obsolete.  

- It is now possible to set [expressions](https://wiki.freecad.org/Expressions) for all parameters of [primitives](https://wiki.freecad.org/Part_Workbench#Primitives).  
[Commit dd4874d2](https://github.com/FreeCAD/FreeCAD/commit/dd4874d2) and [commit 7405dd0e](https://github.com/FreeCAD/FreeCAD/commit/7405dd0e)  

- Fixed broken support for "INCH" units when exporting to STEP/IGES formats.
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=22&t=36808&p=314172#p314172); [commit 1b26173580](https://github.com/FreeCAD/FreeCAD/commit/1b2617358)  

## PartDesign Workbench

- [Features](https://wiki.freecad.org/PartDesign_Feature) that have an "[Attachment](https://wiki.freecad.org/Part_EditAttachment)" property now show when the attachment mode is "deactivated" by displaying a small overlay to the left of the icon in the [tree view](https://wiki.freecad.org/Tree_view). Features that are attached to a plane or other reference don't display this overlay.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=37074&p=315344#p315344); [pull request #2272](https://github.com/FreeCAD/FreeCAD/pull/2272)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fb5dbec3-ab15-4ebc-81fc-c01e64c0a172)    

- The dialog to edit [chamfers](https://wiki.freecad.org/PartDesign_Chamfer) allows now to define chamfers also either:  
  - using 2 values  
  - a value and an angle  
These 2 parameters can also be flipped using the dialog.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=46205), [pull request #3456](https://github.com/FreeCAD/FreeCAD/pull/3456)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dc7fd126-6728-4fc5-85e0-8a5cbc884f73)    

- The dialog to edit [pads](https://wiki.freecad.org/PartDesign_Pad) allows now to specify a direction in which the sketch is padded.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=49343); [pull request #3794](https://github.com/FreeCAD/FreeCAD/pull/3794)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b68d73ba-713b-4bac-833e-1d6f3e91b223)  

- [PartDesign LinearPattern](https://wiki.freecad.org/PartDesign_LinearPattern) and [PolarPattern](https://wiki.freecad.org/PartDesign_PolarPattern) now can be used with dress-up features ([fillets](https://wiki.freecad.org/PartDesign_Fillet), [chamfers](https://wiki.freecad.org/PartDesign_Chamfer), [thickness](https://wiki.freecad.org/PartDesign_Thickness) and [draft](https://wiki.freecad.org/PartDesign_Draft)) and with primitives ([Additives](https://wiki.freecad.org/PartDesign_CompPrimitiveAdditive) and [Subtractives](https://wiki.freecad.org/PartDesign_CompPrimitiveSubtractive)).  
A new property **DataSupport Transform** in these [features](https://wiki.freecad.org/PartDesign_Feature), controls whether the feature supports the pattern or not.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=43312); [pull request #3045](https://github.com/FreeCAD/FreeCAD/pull/3045); [#3155](https://github.com/FreeCAD/FreeCAD/pull/3155); [#3226](https://github.com/FreeCAD/FreeCAD/pull/3226)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/60c286fd-a6d0-49bc-b0a8-432c5669b7c3)  

- The dialog to edit [Prisms](https://wiki.freecad.org/PartDesign_AdditivePrism) (additive and subtractive) allows now to specify an angle in respect to the normal of the chosen attachment plane. This way one can create skew prisms.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=49343#p422857); [pull request #3793](https://github.com/FreeCAD/FreeCAD/pull/3793)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/84328b20-ecfc-44f7-98e8-7d5f835e3a71)  

- It is now possible to create [additive](https://wiki.freecad.org/PartDesign_AdditiveHelix) and [subtractive](https://wiki.freecad.org/PartDesign_SubtractiveHelix) helices.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=53714); [pull request #4209](https://github.com/FreeCAD/FreeCAD/pull/4209)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/49f7c8c3-00aa-40ff-96a0-dace993543fb)  

- It is now possible to select several features in the document tree before executing a [transformation](https://wiki.freecad.org/PartDesign_Workbench#Transformation_tools). This way several features can easily be transformed at once.    
The order of the features in the transformation dialog can be changed by dragging a feature to the desired position.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=48998); [pull request #3748](https://github.com/FreeCAD/FreeCAD/pull/3748); [#3760](https://github.com/FreeCAD/FreeCAD/pull/3760)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6d9bee58-ab74-44ae-be8e-671486971ad1)  

- The dialogs to edit [fillets](https://wiki.freecad.org/PartDesign_Fillet), [chamfers](https://wiki.freecad.org/PartDesign_Chamfer), [thickness](https://wiki.freecad.org/PartDesign_Thickness), and [draft](https://wiki.freecad.org/PartDesign_Draft) features were improved to allow selecting several sub-elements (edges and faces) at once.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=19&t=43383); [pull request #3050](https://github.com/FreeCAD/FreeCAD/pull/3050); [animated GIF](https://www.freecadweb.org/wiki/images/b/b8/FC019-PD-Multiple-Selection.gif) example  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fd2e3457-3182-49fb-a6c4-8edbe926e482)  

- The [hole dialog](https://wiki.freecad.org/PartDesign_Hole) offers now to select a norm to create cuts for counterbores and countersinks.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?t=51403); [pull request #3999](https://github.com/FreeCAD/FreeCAD/pull/3999)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/91331287-35e9-4c55-b904-fde473648f1c)  

- The new feature [Sprocket](https://wiki.freecad.org/PartDesign_Sprocket) allows to create chain sprockets.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=22&t=44525); [pull request #3280](https://github.com/FreeCAD/FreeCAD/pull/3280)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b4e8f5f1-ed6b-474d-916d-fc297f1fd4d2)  

### Further improvements

- The [hole dialog](https://wiki.freecad.org/PartDesign_Hole) has been overhauled to create norm-conform clearance and threaded hole dimensions.
- It is now possible to set [expressions](https://wiki.freecad.org/Expressions) for all parameters of [additive](https://wiki.freecad.org/PartDesign_CompPrimitiveAdditive) and [subtractive primitives](https://wiki.freecad.org/PartDesign_CompPrimitiveSubtractive).  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=36458); [pull request #3225](https://github.com/FreeCAD/FreeCAD/pull/3225)  
- It is now possible to set [expressions](https://wiki.freecad.org/Expressions) for the attachment angles of additive and subtractive primitives. Formerly, expressions were only available for the direction offsets.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=44346); [commit 1cfe6d2cc7](https://github.com/FreeCAD/FreeCAD/commit/1cfe6d2cc7)  
- It is now possible to change the list items in the different dialogs. For example [in this forum post](https://forum.freecadweb.org/viewtopic.php?f=27&t=48998#p420352) there is a good example why the item list matters for transformations.  
[Here](https://forum.freecadweb.org/viewtopic.php?f=19&t=50222#p430499) is another example for the sketch order for lofts.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=48998); [pull request #3760](https://github.com/FreeCAD/FreeCAD/pull/3760); [commit 94ca4388e](https://github.com/FreeCAD/FreeCAD/commit/94ca4388e)  

## Path Workbench

- Added coolant modes for coolant management.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=38852&start=10#p329868), [pull request #2463](https://github.com/FreeCAD/FreeCAD/pull/2463)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/68d849d1-a33a-4ec4-9168-788c2e8dca71)

- New Tool Management system (Toolbits)  
[Wiki Page](https://wiki.freecadweb.org/Path_Tools); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=54521)  
- Added [Path DressupPathBoundary](https://wiki.freecad.org/Path_DressupPathBoundary) for excluding parts of a path.  
- PathPocket: Extensions (For milling open pockets)  
- **New unified Profile operation**: The pre-existing Contour, Profile Faces, and Profile Edges of version 0.18.x are now combined into a single Profile operation. The new Profile operation maintains the features and capabilities of the three individual source operations.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?style=1&f=15&t=39915); [pull request #3443](https://github.com/FreeCAD/FreeCAD/pull/3443)  
- **Profile Edges**: Open Edges support added.  
**Note**: _The Profile Edges operation is now merged into the Profile operation._   
[forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=43434); [pull request #3068](https://github.com/FreeCAD/FreeCAD/pull/3068)    
- **First attempt of 4th-axis support**: Profile (limited to full contour and profiling of faces), PathPocket, and Drilling
- Fixed issue [#3993](https://freecadweb.org/tracker/view.php?id=0003993), Python 3 memory leak.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=36703); [commit 3c205946e](https://github.com/FreeCAD/FreeCAD/commit/3c205946e)  
- Ability to use an arbitrary number of an object as the base model for a Path.Job, each one being positionable individually.  
[Pull request #2056](https://github.com/FreeCAD/FreeCAD/pull/2056)  
- **PathDeburr**: Added direction selection. Fixed DressupLeadInOut problem.
- MillFace  
  - Clear edges feature added.  
  - Exclude the raised areas feature added.  
    [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=37873); [pull request #2367](https://github.com/FreeCAD/FreeCAD/pull/2367)  
  - Added `Face Region` option to boundary options. This allows the cutter to access areas smaller than the cutter diameter but physically accessible within the part geometry.  
    [Forum mention](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=46881); [pull request #3534](https://github.com/FreeCAD/FreeCAD/pull/3534)  
- Adaptive Clearing improvements  
  - Adaptive can now use feature outline  
- **3D Pocket**: Reduction of air-milling above inclined pockets.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=37869); [pull request #2366](https://github.com/FreeCAD/FreeCAD/pull/2366)    
- 3D Surface  
  - Improvements to the general surfacing algorithm.
  - Initial 4th-axis support.  
    [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=36018); [pull request #2114](https://github.com/FreeCAD/FreeCAD/pull/2114)  
  - Selection of individual faces.  
    [Forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=41997); [pull request #2849](https://github.com/FreeCAD/FreeCAD/pull/2849)  
  - Fixes to and addition of various cut patterns: Line, Circular, CircularZigZag, Offset, Spiral, ZigZag.  
    [Pull request #3327](https://github.com/FreeCAD/FreeCAD/pull/3327) and other pull requests  
- New operation: **Waterline**
  - The independent operation was split from 3D Surface.  
    [Forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=44473); [pull request #3268](https://github.com/FreeCAD/FreeCAD/pull/3268)  
  - Experimental algorithm added using a combination of `Path.Area()` offsets of model cross-sections.  
- Post Processing  
  - Update of Post Processors (GRBL, LinuxCNC, Centroid).  
  - Mach3/Mach4 Post Processor.    
    [Pull request #3195](https://github.com/FreeCAD/FreeCAD/pull/3195)    
  - Support tool height offset in the LinuxCNC Post Processor.    
    [Pull request #2479](https://github.com/FreeCAD/FreeCAD/pull/2479)    
  - Task Panel for LeadInOut Dressup  
- New operation: **Slot**     
Allows for the creation of a horizontal slotting operation based on two custom points; selecting one or more faces or edges; or selecting two vertices.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=47693); [initial pull request #3624](https://github.com/FreeCAD/FreeCAD/pull/3624)    
- New operation: **V-Carve**    
Allows for center-line engraving with V-bit.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=36135); [initial pull request #3879](https://github.com/FreeCAD/FreeCAD/pull/3879)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2125b642-f9ae-4347-bf61-28bafca813bc)  
_V-Carve example_  

- General:  
  - Added cycle time calculations to operations and total cycle time to the job.  
    [Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=15&t=26864); [pull request #3378](https://github.com/FreeCAD/FreeCAD/pull/3378)  
  - Added ability to import Base Geometry from existing operations within the same Job.  
    [Forum discussion](https://forum.freecadweb.org/viewtopic.php?style=3&f=15&t=46922); [pull request #3537](https://github.com/FreeCAD/FreeCAD/pull/3537)  
  - Added icons to section headings in the Tasks Editor window for Base Geometry, Depths, Heights, and Operation.  
     [Pull request #3631](https://github.com/FreeCAD/FreeCAD/pull/3631)    
  - Added support for conical entry helix in Adaptive Operation.  
  - Preferences to enable features that depend on openCAMLib.  
  - Preferences to suppress common warnings.  
- Job:  
  - Added a new group in Job to collect all ToolControllers.  
  - Support for gcode WCS (work coordinate system) offsets aka 'fixtures'.  
    - Gcode can be generated for any or multiple offsets.
    - Output can be ordered by tool, operation, or fixture to minimize tool changes or transit time.
    - Gcode can be split into multiple output files.

## Render Workbench

- Added support for Blender's standalone "Cycles" renderer.    
[Commit 759067912f](https://github.com/FreeCAD/FreeCAD-render/commit/759067912f0640e4b3dac41b104d2372978f94a1); [FreeCAD-render](https://github.com/FreeCAD/FreeCAD-render) repository  
- The Cycles standalone renderer usually needs to be compiled from the source, as the binary is normally not provided by itself in a complete Blender distribution.  

Besides this, the Render Workbench already has support for Pov-Ray, Luxrender, and Appleseed.  

## Sketcher Workbench

- In the Sketcher's [task panel](https://wiki.freecad.org/Task_panel), in the "Elements" section there is now a "Mode" filter to select "normal", "construction", "external", or "all" geometry. This is useful to perform an action with only one type of geometry.  
For example, one use case is selecting only the "construction" edges, and deleting them after being used.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fd1dc5e4-0b28-4fa0-84a5-ea5ab78dc892)  

- New [Sketcher ToggleActiveConstraint](https://wiki.freecad.org/Sketcher_ToggleActiveConstraint) tool to temporarily deactivate a constraint without removing it entirely. This is helpful to test the movement of the sketch before fully constraining it.  
[Pull request #2283](https://github.com/FreeCAD/FreeCAD/pull/2283); [commit 159b8e7bdf](https://github.com/FreeCAD/FreeCAD/commit/159b8e7bdf)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/25f9ee84-9c5e-4a1b-8c9d-6e7dfe18de4f)  

- It is now possible to make a dimension constraint a [reference constraint](https://wiki.freecad.org/Sketcher_ToggleDrivingConstraint) directly in the dialog.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=33705); [2](https://forum.freecadweb.org/viewtopic.php?f=3&t=36433); [pull request #3201](https://github.com/FreeCAD/FreeCAD/pull/3201); [commit 06f479622c](https://github.com/FreeCAD/FreeCAD/commit/06f479622c)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a2585381-a303-460c-b6d0-997eef993978)  

- It is now possible to display the [weight of B-spline control points](https://wiki.freecad.org/Sketcher_BSplinePoleWeight).  
[Commit 65c96a3b](https://github.com/FreeCAD/FreeCAD/commit/65c96a3b)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a072f38e-1aaf-4e28-ab9b-a5f55f895c20)  

- Sketches have a new color scheme to indicate parts of the sketch that are already fully constrained. In the image at the left you can see that the triangle and the arc are fully constrained and thus displayed by default in light green.    
The fully constrained construction circle around the triangle appears by default in light blue.  
The colors can be changed in the [Sketcher Preferences](https://wiki.freecad.org/Sketcher_Preferences#Colors).  
[Forum thread](https://forum.freecadweb.org/viewtopic.php?f=8&t=53466)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ffef45db-fa69-4768-b346-0d5c2d60029a)  

- It is now possible to [decrease the knot multiplicity](https://wiki.freecad.org/Sketcher_BSplineDecreaseDegree) of B-Splines.    
[Commit fc89f4eb0](https://github.com/FreeCAD/FreeCAD/commit/fc89f4eb0)  

- The [fillet](https://wiki.freecad.org/Sketcher_CreateFillet) tool preserves now all possible existing constraints of the touched lines.    
[Pull request #4296 ](https://github.com/FreeCAD/FreeCAD/pull/4296); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=54179)  

- New method to get the geometrical index of a [sketch](https://wiki.freecad.org/Sketcher_SketchObject), `SketchObject.getGeoVertexIndex(index)`.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=48707), [pull request #3713](https://github.com/FreeCAD/FreeCAD/pull/3713)    

## Spreadsheet Workbench

The introduction of [App Link](https://wiki.freecad.org/App_Link) also brought some improvements to the [expressions](https://wiki.freecad.org/Expressions) capabilities of FreeCAD, which are visible in the [property editor](https://wiki.freecad.org/Property_editor), and the [Spreadsheet Workbench](https://wiki.freecad.org/Spreadsheet_Workbench). These are described in [Core-Changes](https://github.com/realthunder/FreeCAD_assembly3/wiki/Core-Changes) and this [forum thread](https://forum.freecadweb.org/viewtopic.php?f=27&t=38974).  

- A new expression syntax is introduced to unambiguously reference a property of the owner object by omitting the object reference and starting with a leading dot (`.`), similar to Python's relative import syntax. So instead of `Cylinder.Height`, now you can use `.Height`.  

- You can refer to an object by its `Name` or its `Label`. In the case of a `Label`, it must be enclosed in `<<` and `>>` symbols, such as `<<Label>>`. For example, `<<Metal_cylinder>>.Height`.  

- Improved spreadsheet recomputation logic and cell copy and paste functions.  
[Pull request #2350](https://github.com/FreeCAD/FreeCAD/pull/2350); [#2475](https://github.com/FreeCAD/FreeCAD/pull/2475)  

The previous commits changed the way the autocompletion works with [expressions](https://wiki.freecad.org/Expressions), particularly when used with [Sketcher](https://wiki.freecad.org/Sketcher_Workbench) constraints, which was seen as a regression for many use cases. A new set of commits were proposed to restore this functionality.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=17&t=43412); [pull request #3062](https://github.com/FreeCAD/FreeCAD/pull/3062)    

- Aliases for table cells can now be set more easily with a new input field at the upper right of the spreadsheet.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=43957); [pull request #3154](https://github.com/FreeCAD/FreeCAD/pull/3154); [#3162](https://github.com/FreeCAD/FreeCAD/pull/3162); [#3233](https://github.com/FreeCAD/FreeCAD/pull/3233)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1833fb38-87e3-492f-b52d-59caac65ecfd)  

- The alias stability has also been improved.  
[Pull request #4232](https://github.com/FreeCAD/FreeCAD/pull/4232); [Pull request #4305](https://github.com/FreeCAD/FreeCAD/pull/4305)  

Data entered into a cell is not tested anymore as an expression by default. Now an expression needs to start with an equal sign [=](https://wiki.freecad.org/index.php?title=%3D&action=edit&redlink=1) instead.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=39665); [pull request #4215](https://github.com/FreeCAD/FreeCAD/pull/4215)  

## Start Workbench

- Re-added example files to the Start page with saved thumbnails in their icons.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=34586&start=110), [pull request #2316](https://github.com/FreeCAD/FreeCAD/pull/2316)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a37cf4ad-758e-4b52-b985-809e819f4bad)  

## Surface Workbench

- The [Surface Sections](https://wiki.freecad.org/Surface_Sections) object has been added to create surfaces from edges that represent transversal sections.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=46895); [commit 3a8a6aae1b](https://github.com/FreeCAD/FreeCAD/commit/3a8a6aae1b)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/798a650d-54d8-4e4a-a7b9-f13eb07ae1e7)  

- The [Surface Workbench documentation](https://wiki.freecad.org/Surface_Workbench) has been rewritten and expanded with more images and scripting examples to showcase better the workbench tools. All commands are now available from the toolbar: [Surface Filling](https://wiki.freecad.org/Surface_Filling), [Surface GeomFillSurface](https://wiki.freecad.org/Surface_GeomFillSurface), [Surface Sections](https://wiki.freecad.org/Surface_Sections), [Surface ExtendFace](https://wiki.freecad.org/Surface_ExtendFace), and [Surface CurveOnMesh](https://wiki.freecad.org/Surface_CurveOnMesh).  
Likewise, the icons have been updated to be more visually attractive.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/201b2e39-1504-4ad2-9bf5-b51037c2c5d5)  

## TechDraw Workbench

- Improved placing and scaling of a 3D viewport screenshot in a TechDraw page.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=34539#p290451)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b8c58abc-9f16-43a7-b789-b5895efca161)  

- New [Balloon](https://wiki.freecad.org/TechDraw_Balloon) tool to add balloon decorators to create notes with numbers, letters, and text.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=34484); [pull request #2013](https://github.com/FreeCAD/FreeCAD/pull/2013)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/890fb6ca-37c8-4247-aaf6-70dea0185b41)  

- New [TechDraw LeaderLine](https://wiki.freecad.org/TechDraw_LeaderLine) and [TechDraw RichTextAnnotation](https://wiki.freecad.org/TechDraw_RichTextAnnotation) tools to create better annotations in the drawing page.  
[Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=36169); [commit 7f07195f93](https://github.com/FreeCAD/FreeCAD/commit/7f07195f938eb76294c1de72339da5ff50093e8f); [commit 6c699887c0](https://github.com/FreeCAD/FreeCAD/commit/6c699887c02268c697a580aceaf0687d4dc53df0); testing and bug fixing [commit ab986d9a00](https://github.com/FreeCAD/FreeCAD/commit/ab986d9a00); [commit 15f440525e](https://github.com/FreeCAD/FreeCAD/commit/15f440525e); [commit 8ef3f13fbb](https://github.com/FreeCAD/FreeCAD/commit/8ef3f13fbb); [commit bf38ae958f](https://github.com/FreeCAD/FreeCAD/commit/bf38ae958f); [commit 74737f71fd](https://github.com/FreeCAD/FreeCAD/commit/74737f71fd); [commit be257182ba](https://github.com/FreeCAD/FreeCAD/commit/be257182ba); [commit de3715908e](https://github.com/FreeCAD/FreeCAD/commit/de3715908e); [commit 916fe7ced3](https://github.com/FreeCAD/FreeCAD/commit/916fe7ced3)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0212d0eb-1e5f-4927-9573-0091070faac8)  

- New [TechDraw CosmeticVertex](https://wiki.freecad.org/TechDraw_CosmeticVertex), [TechDraw Midpoints](https://wiki.freecad.org/TechDraw_Midpoints), and [TechDraw Quadrant](https://wiki.freecad.org/TechDraw_Quadrants) tools, which allow the user to place fake or "cosmetic" vertices that can be used to create dimensions.  
The midpoint and quadrant vertices can be used to add more points to straight and curved edges (circular arcs), respectively; the "CosmeticVertex" tool can add a point anywhere on the drawing view without requiring it to be based on existing geometry.    
[Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=36614); [commit 59e47de506](https://github.com/FreeCAD/FreeCAD/commit/59e47de5064e3112e65c51a0d32b1ad4584b6a80); [commit 94b167f3a2](https://github.com/FreeCAD/FreeCAD/commit/94b167f3a200f0a84365dccafcfeb3542f7a6795)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aaa6dcfb-93d1-48f7-96f4-bd7593f46e8e)  

- New [TechDraw FaceCenterLine](https://wiki.freecad.org/TechDraw_FaceCenterLine), [TechDraw 2LineCenterLine](https://wiki.freecad.org/TechDraw_2LineCenterLine), and [TechDraw 2PointCenterLine](https://wiki.freecad.org/TechDraw_2PointCenterLine) tools, to add a line in the center of a face, or between two existing edges, or between two existing points, respectively.  
Also, [TechDraw DecorateLine](https://wiki.freecad.org/TechDraw_DecorateLine) to change the appearance of single edges, and [TechDraw CosmeticEraser](https://wiki.freecad.org/TechDraw_CosmeticEraser) to remove any of the cosmetic features from the view.  
[Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=36875) (v1, alpha); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=37749) (v2); [commit 656e1654ff](https://github.com/FreeCAD/FreeCAD/commit/656e1654ff0825173a7d03f9b1b9ca8866d59adb); [commit 93431edfba](https://github.com/FreeCAD/FreeCAD/commit/93431edfba377c58dc1e49d68c39574057111523); [commit f25826bba3](https://github.com/FreeCAD/FreeCAD/commit/f25826bba3124f46e267d9a4cf078dda7e6c031d); [commit 11d8aaed61](https://github.com/FreeCAD/FreeCAD/commit/11d8aaed616b81eda8658f2d63bd97db5b4a87c7); [commit 941968b37c](https://github.com/FreeCAD/FreeCAD/commit/941968b37cd45505a5668a1df17ba9b8d6f9a66b)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/31cf18a1-fcad-40de-9f04-086190f2864b)  

- New [TechDraw WeldSymbol](https://wiki.freecad.org/TechDraw_WeldSymbol) tool to provide welding symbols. One of the most requested features from the older Drawing Workbench is finally in TechDraw.  
Russian standard (GOST) symbols are also added.  
[Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=38560) (testing); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38762) (main thread); [pull request #2446](https://github.com/FreeCAD/FreeCAD/pull/2446); [#3110](https://github.com/FreeCAD/FreeCAD/pull/3110)  
[Old welding symbols](https://github.com/hamish2014/FreeCAD_drawing_dimensioning/tree/master/Gui/Resources/icons) from Drawing Workbench.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b6342de5-bf7e-4852-a16d-9fd0072d700f)  

- New [TechDraw ActiveView](https://wiki.freecad.org/TechDraw_ActiveView) tool. It produces a static image from the active 3D view and puts it in a new TechDraw view. The result is a snapshot that doesn't update with changes to the model, and which is very fast to produce because it doesn't perform hidden line removal calculations. It is intended for rapid visualization of models or to display flat projections of models without needing to add dimensions, a workflow that may be interesting for architectural visualization.  
Together with [Arch SectionPlane](https://wiki.freecad.org/Arch_SectionPlane) and [TechDraw ArchView](https://wiki.freecad.org/TechDraw_ArchView), [TechDraw ActiveView](https://wiki.freecad.org/TechDraw_ActiveView) hopes to improve the interaction between [Arch](https://wiki.freecad.org/Arch_Workbench) and [TechDraw](https://wiki.freecad.org/TechDraw_Workbench) to document building models.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38957); [commit 13676bfe57](https://github.com/FreeCAD/FreeCAD/commit/13676bfe57)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/778290c0-be46-417d-8a72-75c94d9e581f)  

- New page templates for the architectural paper sizes Arch B, C, D, and E. Also, the possibility to use arbitrary "Custom" paper sizes for TechDraw PDF export and printing is now available.  
The user still needs to create or download an SVG template matching the desired output paper size.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=54512); [pull request #4292](https://github.com/FreeCAD/FreeCAD/pull/4292)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ae6eb517-106e-43f5-bb1e-edfb70d71dab)  

- New page templates, Russian State Standard of Technical Documentation (Unified system for design documentation), GOST 2.104-2006, GOST Р 21.1101-2013.  
[Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=36957); [pull request #2249](https://github.com/FreeCAD/FreeCAD/pull/2249)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bb57ebdc-7f5c-45a1-a418-327df75c3218)  

- New page templates, the People's Republic of China Templates A series; please use with font family "HYSWLongFangSong".  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=27&t=37459); [2](https://forum.freecadweb.org/viewtopic.php?f=17&t=48854); [pull request #2322](https://github.com/FreeCAD/FreeCAD/pull/2322)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e543d086-5078-4ad6-9927-cd8b0ec3f430)  

- New page templates, A-size, Slovenian (GPL 2).  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38623); [FreeCADTemplates](https://github.com/WandererFan/FreeCADTemplates) repository  
Only LGPL2-compatible code can be provided directly with TechDraw; code contributed under GPL2 or GPL3 needs to be stored in a separate repository.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/82471738-1f60-400a-9b62-d4578d2437b1)  

- The drawing of dimensions was completely rewritten. Now, any drawn dimension is fully compliant with one of ISO 129-1 or ASME Y14.5M standards.    
There are four styles to choose from:   
  - ISO-oriented (rotated value)  
  - ISO Referencing (horizontal value)  
  - ASME Inlined (horizontal value)  
  - ASME Referencing (value connected by a reference line)    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=39571); [pull request #2552](https://github.com/FreeCAD/FreeCAD/pull/2552)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b92942ee-b4e8-4f4e-87ce-447470b4328f)  

- New [TechDraw HorizontalExtentDimension](https://wiki.freecad.org/TechDraw_HorizontalExtentDimension) and [TechDraw VerticalExtentDimension](https://wiki.freecad.org/TechDraw_VerticalExtentDimension), to obtain the maximum dimensions in a view.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=40037); [pull request 2680](https://github.com/FreeCAD/FreeCAD/pull/2680); [commit a7d9661b1d](http://github.com/FreeCAD/FreeCAD/commit/a7d9661b1d5c5795)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6bda0676-20ee-45aa-9c74-059a32d6d1d0)  

- Improved handling and display of tolerances in combination with a new task dialog to set up [Dimensions](https://wiki.freecad.org/TechDraw_Workbench#Dimensions).  
With this and the new Balloon tool, it is possible to create 2D-[Geometric dimensioning and tolerancing](https://wiki.freecad.org/TechDraw_Geometric_dimensioning_and_tolerancing) tags for drawings.    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fdc1cfde-cffd-4307-b962-cd1b94c0514c)  

- New task dialog to set up [Detail Views](https://wiki.freecad.org/TechDraw_DetailView).  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=45236)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e3eedf26-94f8-453b-a0e1-d48b7e4ed69c)  

- New pyramid arrow style for dimensions and balloon annotations.  
[Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?p=356630); [pull request #2853](https://github.com/FreeCAD/FreeCAD/pull/2853)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ec9be1a3-64b7-4a7a-8029-387b7e2a187a)  

- SVG face hatches are now available when the page is exported to SVG. The SVG hatches are converted to bitmaps and clipped to fit the face before export.  
[Forum discussion](https://www.forum.freecadweb.org/viewtopic.php?f=35&t=47013); [commit a9b718d1e0](https://github.com/FreeCAD/FreeCAD/commit/a9b718d1e0)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7ce226ea-fc08-4600-b9d0-f303ff380d4d)  
_Example image showing the exported SVG page when it is opened in Inkscape_  

### Further TechDraw Improvements

- There have been discussions about changing the standard behavior of TechDraw. Instead of updating the drawing pages automatically, they would be updated only on demand; this would mitigate the effects of TechDraw slowing down the rest of FreeCAD when modeling.    
Moreover, now that [App Link](https://wiki.freecad.org/App_Link) is included in FreeCAD, TechDraw pages may be stored in a separate file and loaded on demand.    
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=35086) (main discussion); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38822) (alternatives)  

- Improvements on handling sectional views with [TechDraw SectionView](https://wiki.freecad.org/TechDraw_SectionView).  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=40639); [pull request #2737](https://github.com/FreeCAD/FreeCAD/pull/2737)  

- Fixed font size issues when exporting to SVG.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=27108); [pull request #2219](https://github.com/FreeCAD/FreeCAD/pull/2219)  

- Fixed regression in caption handling and hidden caption property where not applicable.  
[Pull request #2228](https://github.com/FreeCAD/FreeCAD/pull/2228)  

- Added options for page size, line width, and background when saving to SVG; this improves Draft/Arch and TechDraw integration.    
[Pull request #2455](https://github.com/FreeCAD/FreeCAD/pull/2455)    

- New panning of the page using the middle mouse button.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=29679#p327695); [pull request #2458](https://github.com/FreeCAD/FreeCAD/pull/2458)    

- Finer control of drawing updates.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38956); [pull request #2468](https://github.com/FreeCAD/FreeCAD/pull/2468); [commit 5bed53f858](https://github.com/FreeCAD/FreeCAD/commit/5bed53f858); [commit b2d8eeeb65](https://github.com/FreeCAD/FreeCAD/commit/b2d8eeeb65)  

- Also new [TechDraw RedrawPage](https://wiki.freecad.org/TechDraw_RedrawPage) tool to force a drawing page update while ignoring the state of the options "Update with 3d", "Allow page override", or "KeepUpdated".  
This tool disappeared in release 0.18, but was re-implemented for release 0.19.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=38956)  

- The new [App Link](https://wiki.freecad.org/App_Link) object is now supported as a source for creating views.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=35&t=41973); [commit 37b578bf49](http://github.com/FreeCAD/FreeCAD/commit/37b578bf49)  

- The center marks created from circular edges can now be printed.  
[Pull request #2335](https://github.com/FreeCAD/FreeCAD/pull/2335); [#2962](https://github.com/FreeCAD/FreeCAD/pull/2962)  

- It is now possible to override displayed values for tolerances, for example, to use text in tolerances.  
Furthermore, one can now use a custom display format for each over- and under-tolerance.  
[Pull request #4087](https://github.com/FreeCAD/FreeCAD/pull/4087)  

- The [LineGroup](https://wiki.freecad.org/TechDraw_LineGroup) to set the default line widths for drawings can now be selected from the available groups in the [preferences](https://wiki.freecad.org/TechDraw_Preferences#Annotation).  
[Pull request #4083](https://github.com/FreeCAD/FreeCAD/pull/4083)  

## Web

- QtWebEngine support for Qt 5.7 and above, and fallback to QWebkit for Qt 5.6 and below.  
[Pull request #1937](https://github.com/FreeCAD/FreeCAD/pull/1937)  

## Macros

- Automatic light-gauge steel frame creator and panelizer.  
[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=23&t=26092); [FreeCAD-Steel_Frame](https://gitlab.com/Oriond/FreeCAD-Steel_Frame) repository (GPL 3); [video](https://peertube.social/videos/watch/cbd2efd0-f763-41ac-9e38-2e0034c56703) example  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/96a413e8-1c7f-4d9d-897a-8fdef285b18a)  

See [Macros recipes](https://wiki.freecad.org/Macros_recipes) for many more macros.  

## Additional modules

> **Note**: These are the new workbenches created in this development cycle or older workbenches that received updates. See [external workbenches](https://wiki.freecad.org/External_workbenches) for more workbenches that can be installed and cover a wide variety of topics. If you want to see your workbench added, join the [forum](https://forum.freecadweb.org/index.php) and present your code.  

### 3D Printing Tools

Previously, it was called "MeshTools". It has utilities for working with imported STL meshes, which could be used for 3D printing, like scaling the mesh up and down, scaling it to fit a 3D printer, making objects transparent, hiding and showing objects, changing colors and line widths of groups of objects, and others.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=36564); [3D Printing Tools](https://github.com/mark1791/3D_Printing_Tools) repository (LGPL 2.1)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b08ce7be-e589-40cd-a0f9-a4da41ada2f2)  

### A2plus

The successor to the Assembly2 workbench, [A2plus](https://wiki.freecad.org/A2plus_Workbench) is the most mature assembly workbench and has received important updates in this development cycle, like an improved point-on-plane constraint and point-on-line constraint, using the center of a sphere as the point; this improves the constraining of spheres.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=29207); [A2plus](https://github.com/kbwbe/A2plus) repository (LGPL 2.1)

_Please note: A2plus is not compatible with Assembly2 or other assembly workbenches. If you have previous assemblies, they will need to be re-created entirely in A2plus._  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e0a02ee0-16a1-429f-9307-33165d755645)  

### Assembly3

[Assembly3](https://wiki.freecad.org/Assembly3_Workbench) is an assembly workbench created by developer _realthunder_, that is inspired by [Assembly2](https://wiki.freecad.org/Assembly2_Workbench), but is not compatible with it. Assembly3 makes use of _realthunder_'s [App Link](https://wiki.freecad.org/App_Link) object and various significant changes to the internal code of FreeCAD. Because of this reason, Assembly3 cannot be installed simply from the Addon Manager. Instead, _realthunder_ provides a pre-compiled version of FreeCAD that includes Assembly3.   

This workbench serves as a testing environment for the [App Link](https://wiki.freecad.org/App_Link) object and other changes that realthunder plans to submit to the main FreeCAD source code.  
The Assembly3 workbench can also be tested in the development [AppImage](https://wiki.freecad.org/AppImage).  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=25712) (massive thread); [FreeCAD_assembly3](https://github.com/realthunder/FreeCAD_assembly3) repository (GPL 3)  

_Please note: Assembly3 is not compatible with Assembly2 or other assembly workbenches. If you have previous assemblies, they will need to be re-created entirely in Assembly3._    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/15e174b0-0570-477a-8305-ab2b8b6dc99b)

### Assembly4

[Assembly4](https://wiki.freecad.org/Assembly4_Workbench) is an assembly workbench created by developer _Zolko_that uses _realthunder_'s [App Link](https://wiki.freecad.org/App_Link) object and many other changes to the base FreeCAD system, particularly the new [expression engine](https://wiki.freecad.org/Expressions). Because of this, Assembly4 doesn't work with versions below 0.19. Assembly4 can be installed from the [Addon Manager](https://wiki.freecad.org/Std_AddonMgr).  

Unlike [A2plus](https://wiki.freecad.org/A2plus_Workbench) and [Assembly3](https://wiki.freecad.org/Assembly3_Workbench), Assembly4 tries to perform assembly without using a constraint solver, but rather with the concept of arranging local coordinate systems (LCS) and setting relationships through [mathematical expressions](https://wiki.freecad.org/Expressions).  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=32843) (original idea); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=20&t=34806) (main thread); [FreeCAD_Assembly4](https://github.com/Zolko-123/FreeCAD_Assembly4) repository (LGPL 2.1)  

_Please note: Assembly4 is not compatible with Assembly3 or other assembly workbenches. If you have previous assemblies, they will need to be re-created entirely in Assembly4._    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b8a80b2a-a082-4327-9cc6-a17ea1b72ba2)  

### ArchTextures  

The ArchTextures Workbench was developed to provide basic texture support to [Arch Workbench](https://wiki.freecad.org/Arch_Workbench) elements like walls and roofs in order to visualize a building quickly. It is not intended to produce photo-realistic renderings, just simple texturing of wood, brick, and concrete materials. It also provides lights (directional, point, and spot), which makes it more feature-complete to set up a scene.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=3&t=38222) (help requests); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=10&t=38223) (development); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=31598) (only announcements); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=39031) (announcement of lights); [FreeCAD-ArchTextures](https://github.com/furti/FreeCAD-ArchTextures) repository (MIT)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/82e749b4-a7f3-481b-85b1-18d18fadc924)  

### BOLTSFC

BOLTS is an "open library of technical specifications"; it is meant to provide free, standardized parts defined parametrically that can be used in different CAD systems like OpenSCAD and FreeCAD.    
The BOLTS library was launched in 2013 but received little maintenance since 2016. Now, with a new maintainer and repository, the project has revived with the BOLTSFC workbench that provides an interface to insert the different parametric objects.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=4549); [Homepage](https://www.bolts-library.org/en/index.html); [BOLTSFC](https://github.com/boltsparts/BOLTSFC) repository; [BOLTS](https://github.com/boltsparts/BOLTS) main repository (GPL 3)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/26c3b0ab-251c-4263-92b8-ca8c78276a10)  

### CurvedShapes Workbench

The CurvedShapes workbench has tools for designing 3D surfaces starting from a skeleton of multiple curves in the XY, XZ, or YZ planes. It was created particularly to simplify the modeling of the wings of aircraft.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=36989); [CurvedShapesWorkbench](https://github.com/chbergmann/CurvedShapesWorkbench) repository (LGPL 3)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6eff80ce-3d48-42b4-84db-9d99e998230d)    

### Dodo (formerly Flamingo)

Dodo is the successor to the [Flamingo Workbench](https://wiki.freecad.org/Flamingo_Workbench), a workbench specialized in creating piping and frames. While Flamingo was developed for Python 2 and Qt4, Dodo is meant to work with Python 3 and Qt5. It provides the same features as Flamingo, but has improved tools and interfaces.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=22711) (main thread); [forum discussion](https://forum.freecadweb.org/viewtopic.php?p=304165#p304165) (Dodo announcement); [tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=38464); [dodo](https://github.com/oddtopus/dodo/) repository (LGPL 3); [flamingo](https://github.com/oddtopus/flamingo) repository (LGPL 3)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6016971b-603e-44f2-b66f-e93ccbf1fae8)  

### Fasteners

The [Fasteners Workbench](https://wiki.freecad.org/Fasteners_Workbench) to generate standard ISO screws, bolts, washers, and other fasteners, was updated to work with Python 3 and Qt5.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?t=11429); [FreeCAD_FasternersWB](https://github.com/shaise/FreeCAD_FastenersWB) repository (GPL 2); [additional details](http://theseger.com/projects/2015/07/generating-holes-for-countersunk-screws-in-freecad/)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bddb3050-7b1f-46d7-84fe-e66bc6cbda0c)  

### Geomatics 

The **Geomatics** workbench provides functionality specific to survey engineering, such as importing geodata information and creating surfaces from clouds of points. There are some issues with rendering objects that use large coordinates (kilometers) and importing large DXF files. If you want to help solve these issues, please contact the developers.    

This workbench started as a fork of the older [Geodata](https://github.com/microelly2/geodata) workbench by _microelly2_. Eventually, it became a separate project by _HakanSeven12_. Now, its code has been merged into the **Trails** workbench as it provides complementary functions to it. Therefore, please use Trails instead of the older Geomatics repository in the future.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=34371); [FreeCAD-Geomatics-Workbench](https://github.com/HakanSeven12/FreeCAD-Geomatics-Workbench) repository (LGPL 2.1)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3e955f56-b2ea-4339-a34d-b599627a4360)

### MeshRemodel Workbench  

This workbench helps convert a mesh, for example, an imported STL file, into a native FreeCAD object. It will not do the conversion automatically but will help rebuild or re-model the imported mesh.  

The general workflow is to select the mesh object and then create a "points" object from it; then, these points can be used as references for creating FreeCAD objects such as lines, polygons, circles, arcs, and BSplines. These wires can then be turned into a [Sketch](https://wiki.freecad.org/Sketcher_Workbench) object, which can be padded to create a 3D solid with the [PartDesign Workbench](https://wiki.freecad.org/PartDesign_Workbench).  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=38670) (only announcement); [MeshRemodel](https://github.com/mwganson/MeshRemodel) repository (LGPL 2.1)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a425dbb1-5eda-42e8-bf56-4a3063debb41)  

### MOOC Workbench

The MOOC workbench is an educational tool that offers interactive tutorials and exercise evaluations to learn to use FreeCAD. It was developed as part of a series of courses on Digital Manufacturing.  
At this moment, the workbench is only offered in the French language.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=37584); [mooc-workbench](https://framagit.org/freecad-france/mooc-workbench) repository (GPL 2)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4656a976-0b46-4e6f-8c46-4cb86d3fb5a1)  

### NodeEditor (PyFlow)  

The NodeEditor workbench implements a system of nodes that can be used to dynamically control the properties of objects, similar to Blender's node system to edit materials. The NodeEditor is based on a slightly modified version of the PyFlow framework, which is under active development.  

A node editor has been a requested feature for a very long time, at least since 2014 (see [this thread](https://forum.freecadweb.org/viewtopic.php?f=8&t=7442)). A fully working node editor has the potential to simplify the drawing of complex shapes using generative algorithms that produce a shape based on the values of its inputs. This could be used to create various types of meshes and surfaces with many applications in architecture and mechanical design.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=36299); [NodeEditor](https://github.com/microelly2/NodeEditor) repository (MIT License); [PyFlow](https://github.com/microelly2/PyFlow) customized fork (Apache 2.0 license); [PyFlow](https://github.com/wonderworks-software/PyFlow) original project (Apache 2.0 license)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f723314c-b364-4766-977e-f0ff7145e1ed)  

### Trails Workbench

The **Trails** workbench was formerly known as the "Transportation Engineering" workbench. It consists of a toolset for developing highway and railway designs, including horizontal alignments, vertical profiles, and 3D models.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=6973) (the original thread that started the project); [forum discussion](https://forum.freecadweb.org/viewtopic.php?f=8&t=22277) (main thread, very long); [freecad.trails](https://github.com/joelgraff/freecad.trails) repository (LGPL 2.1); [video example](https://www.youtube.com/watch?v=QRTd7056yy8&feature=youtu.be)  

Most of the functions used in the Trails workbench have been placed in a new Python library called **PyTrails**. Trails is expected to serve as a FreeCAD-based graphical interface for PyTrails, while PyTrails remains a general-purpose library that can be used outside FreeCAD in other projects.    

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?p=334760#p334760) ([PyTrails](https://github.com/joelgraff/PyTrails) announcement); PyTrails repository (LGPL 2.1)    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d9d3277a-cc59-4648-a3a1-d89924768992)  

### Turns Workbench

The **Turns** workbench is a small component created during the Trails workbench's development. It performs vehicle swept-path (turning) analysis for highway intersections and other entrances.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?p=333290#p333290) (main thread); [freecad.turns](https://github.com/joelgraff/freecad.turns) repository (LGPL 2.1); [animated GIF](https://wiki.freecadweb.org/images/8/86/Turns_vehicle.gif) example    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9769439d-9f17-4b92-92c3-fcb255663fa2)  

### pivy_trackers

After working with Trails and Turns, the author decided to split the tracker code into a separate library called **pivy_trackers**. This is a general library that could be included in other workbenches to generate tracker objects and perform actions in the scene, like dragging lines, dragging points, and changing certain geometrical elements on the fly.  

[Forum discussion](https://forum.freecadweb.org/viewtopic.php?f=9&t=39939), ([2](https://forum.freecadweb.org/viewtopic.php?t=43831), [3](https://forum.freecadweb.org/viewtopic.php?f=8&t=22277&start=890#p373426)); [pivy_trackers](https://github.com/joelgraff/pivy_trackers) repository (LGPL 2.1); [examples](https://github.com/joelgraff/pivy_trackers/wiki/Examples); [animated GIF](https://wiki.freecadweb.org/images/b/bd/Pivy_trackers_example.gif) example    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/51d7567c-43c8-4cf8-b70e-0af6eae9ffa3)  
