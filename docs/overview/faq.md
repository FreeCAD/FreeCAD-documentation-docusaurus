# Frequently Asked Questions (FAQs)

This page attempts to answer the most common questions asked on the FreeCAD forums. If you have a problem or question regarding FreeCAD, check below first. Then, if you cannot find an answer to your specific question, head to the [FreeCAD forum](http://forum.freecadweb.org/viewforum.php?f=3)!

## Installation

### What is the easiest way to install FreeCAD on my system?

If you are on Windows or macOS, the simplest way is to head to the [Download](docs\overview\download.md) page, where you'll find several ready-to-install packages. If you are on Debian, Fedora, or Ubuntu and some other distributions, FreeCAD is already included in the standard software repositories and you can simply install it with the software manager. On Ubuntu, the FreeCAD team also maintains its own [PPA repositories](https://wiki.freecad.org/Installing_on_Linux#Stable_PPA_version). For further details about installation, refer to the installing page for your operating system ([Windows](https://wiki.freecad.org/Installing_on_Windows), [Linux](https://wiki.freecad.org/Installing_on_Linux), or [Mac](https://wiki.freecad.org/Installing_on_Mac)).

### What are the prerequisites for running FreeCAD?

In contrast to most 3D CAD software, FreeCAD can run smoothly on the most modest computers - it's been known to run on Pentium IV and Intel Core2 Solo CPUs. If your computer is running a current operating system, chances are FreeCAD will run. The only prerequisite is that your graphics card or chipset must support [OpenGL](https://en.wikipedia.org/wiki/OpenGL), preferably no older than v2.0. In case of problems, refer to the [Troubleshooting](https://wiki.freecad.org/Frequently_asked_questions#Troubleshooting) section of this FAQ.

#### Multithreading

FreeCAD's underlying geometric modeling kernel, the [OpenCASCADE Technology](http://en.wikipedia.org/wiki/Open_Cascade_Technology) (OCCT) third-party library, [has only partial multi-threading support at this time](https://forum.freecadweb.org/viewtopic.php?f=4&t=17501&p=173095&hilit=Multithread#p173095). See the [multithreading](https://wiki.freecad.org/Multithreading) page for more details.

#### For Mac users

Only the MacIntel architecture is supported. There are no builds available for the PowerPC architecture.

### What if I want to compile FreeCAD myself?

The source code of FreeCAD is always available in the project source code repository. Compiling FreeCAD yourself allows you to use the most recent features being developed, but requires a bit of computer knowledge, although the procedure is fairly simple. Access to the source code is explained [here](https://wiki.freecad.org/Compile_on_Linux#Getting_the_source), and we have detailed instructions for compiling on [Windows](https://wiki.freecad.org/Compile_on_Windows), [Linux](https://wiki.freecad.org/Compile_on_Linux), and [macOS](https://wiki.freecad.org/Compile_on_MacOS).

### FreeCAD tells me some module or application is missing

FreeCAD depends on a lot of things to offer all its functionality. All the main required components are usually bundled within your FreeCAD installation or provided by your package manager, so normally you have nothing to worry about. If you installed FreeCAD from unofficial sources, however, or compiled FreeCAD yourself, some piece might be missing, which is not critical to FreeCAD itself, but might cause some functionality to be unavailable. Some specific file formats such as Collada or DWG also require extra components, which cannot be bundled into FreeCAD, and must be installed by yourself separately.

All those components and the appropriate way to install them are listed on the [Extra python modules](https://wiki.freecad.org/Extra_python_modules) page.

## Troubleshooting

### FreeCAD doesn't start at all

There might be a lot of reasons for that, the most likely is that some library is missing. Try starting FreeCAD from a terminal (type **freecad** at a terminal prompt, **FreeCAD** on some systems) to see if some error message appears. Also, read the rest of this FAQ as it can give you more clues to detect the cause of the problem. If nothing helps, tell about it on the [forum](http://forum.freecadweb.org/), there will surely be someone who can help.

On some older Windows XP systems you may get an error message like this: _The application can't start, because the side-by-side configuration is wrong. The reinstallation of the application may solve the problem_. The reason for this problem is that on your system either the CRT runtime libraries are missing or the version installed is too old because FreeCAD was linked against a newer version. In this case you have to install the _Microsoft Visual C++ Redistributable Package_ which you'll find at Microsoft. See also the corresponding [forum message](http://forum.freecadweb.org/viewtopic.php?f=3&t=1298&p=9961).

### FreeCAD starts normally, but not all icons are displayed, some of them are replaced by a black 'X'

Some parts of FreeCAD depend on an external Python module called Pivy. On Windows, pivy is included in the FreeCAD installation. On Debian/Ubuntu systems, the python-pivy package is part of standard software repositories. On other systems, at the moment, you might have to compile pivy yourself. Note that although some tools are not available without pivy, the rest of FreeCAD works normally.

### I have display problems, the 3D view doesn't behave correctly, there is garbage when I move/rotate the view, etc.

FreeCAD depends on OpenGL for displaying 3D contents, and therefore requires a working OpenGL environment. On some systems, OpenGL is not activated by default, and you might need to install or upgrade your graphics drivers. This problems happens most often on Linux systems or on virtual systems. If you are on a Linux-based system, try the following steps:
- verify that your computer has a 3D-capable graphics board
- type **glxinfo** in a terminal window, and check in the output that Direct Rendering is set to "yes", and that the OpenGL vendor/renderer/version matches your graphics card.
- install other OpenGL-based software ([Blender](http://www.blender.org/), for example) and check if it runs and displays correctly.

### FreeCAD crashes on startup

A crash might indicate a more serious bug, or some problem in your configuration. Most startup crashes occur because of one of the two following reasons:

#### OpenGL drivers are not installed, or not working properly

This is a very common cause of the problem. The symptoms are simply that FreeCAD crashes at startup, or whenever you open a 3D view (for example by creating a new document). Try to find out what your graphic chip is, then find out if it supports [OpenGL](https://en.wikipedia.org/wiki/OpenGL) (most recent chips do), then find the correct driver and install it. A good way to doublecheck if OpenGL is available is to try to run another OpenGL application such as [blender](http://www.blender.org/).

And as a general tip to get some more information about crashes with FreeCAD you can start it with the program parameter **--write-log**. This will create the file **FreeCAD.log** in **$XDG_CONFIG_HOME/FreeCAD** (version 0.20 and above) or **$HOME/.FreeCAD** (version 0.19 and below) on Linux, or **$HOME/Library/Preferences/FreeCAD** on macOS, or **%APPDATA%/FreeCAD** on Windows systems.

In some rare cases you may have a graphic driver installed that doesn't fit to your graphic card. We had a case where the user's laptop had an Intel on-board graphic but some ATI drivers were installed. Refer to forum thread in German [FreeCAD startet nicht](http://forum.freecadweb.org/viewtopic.php?f=13&t=5160&start=10#p41042). After removing the files and re-installing the correct driver FreeCAD started to work.

#### Some library, needed by FreeCAD, is not present on your system, or wasn't found by FreeCAD

There can be two paths to this problem: either some library is simply missing, therefore FreeCAD will refuse to start, or the library is there, but it is an older version than the one FreeCAD expects, so a crash will occur when FreeCAD attempts to use a missing feature from that library. A common example is when you have Qt3 and Qt4 installed on your system, FreeCAD might detect Qt4 but if your Qt installation is not properly configured, some pieces of Qt3 might still be used, provoking crashes.

Please review the installing procedure ([Windows](https://wiki.freecad.org/Installing_on_Windows), [Linux](https://wiki.freecad.org/Installing_on_Linux), or [Mac](https://wiki.freecad.org/Installing_on_Mac)), make sure you installed all the required libraries (on most linux systems this is done automatically), and check what is the minimum version number for each of the components.

If everything seems correct, describe the problem on the [forum](http://forum.freecadweb.org/) or [submit a bug](https://wiki.freecad.org/Tracker). If you are on a linux system, it is easy to do a debug backtrace, which provides very useful information about the crash to the developers:
- in a terminal, type: **gdb freecad** (assuming package gdb is installed)
- inside gdb, type **run**
- after the crash, type **bt** to get the backtrace, that you can include in your bug report.

### FreeCAD freezes after startup

When starting FreeCAD the GUI appears almost immediately but the GUI is frozen and the CPU is about 99%. This can happen on the KDE desktop when using the Oxygen theme. That's a bug in the Oxygen theme and choosing another theme should fix this issue.

### FreeCAD crashes on creating a new document or opening a file

If FreeCAD crashes when it creates a new 3D view, try launching FreeCAD from a terminal. If a message error appears when the crash occurs, mentioning `Assertion Failed`, and a component name beginning with "So" (`SoBase`, `SoFieldContainer`, etc.), the chances are very high, especially if you are on Linux, that FreeCAD is trying to use two different versions of the Coin library, which causes the crash. To verify if that is indeed the problem, try the following:
- Locate the FreeCAD executable (usually in **/usr/lib/FreeCAD/bin**)
- Run the command **ldd FreeCAD** from a terminal
- Note down the version of the **libCoin.so** library that FreeCAD is using (for example **libCoin.so.60**)
- Locate the **libSoQt.so** library (usually in **/usr/lib**)
- Run **ldd libSoQt.so** and check if it links to the same Coin version as FreeCAD

If there is any difference, either FreeCAD or SoQt must be recompiled (better to recompile the one that uses the oldest Coin version). The normal behavior is to try to contact the people responsible for packaging either SoQt or FreeCAD and kindly ask them to consider recompiling. If you want to undertake that step for yourself, and it is not possible to recompile SoQt because it breaks other applications on your system, you can force FreeCAD to compile with the required Coin version with **./configure --with-coin=DIR**. But you have to make sure that the correct development package of this Coin version is installed.

### FreeCAD crashes after Edit → Alignment

A segmentation fault happens at `vbo_save_playback_vertex_list()`. This means that the implementation of VBO in the graphic driver is bad. In order to avoid caching OpenGL calls you can try to set the environment variable **IV_SEPARATOR_MAX_CACHES=0** and restart FreeCAD.

### I have trouble running FreeCAD on macOS

The Mac platform is less easy to support than Windows or Linux, since none of the core developers owns one. The macOS packages are compiled by volunteering FreeCAD users, and they might sometimes not work correctly on your machine, depending on your system. Your best chance is probably to head to the forums, look for macOS-related threads, and discuss your problem there or see if someone else encountered a solution.

### I cannot change numeric values in FreeCAD's properties panels

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/deabd849-15c8-4c90-ab72-a02815a903c2)  
You most likely have bad windows regional settings set-up. Please check if you have the same symbol for decimal separator and digit grouping symbol in your regional settings. If you do, [adapt your system settings](http://forum.freecadweb.org/viewtopic.php?f=4&t=2655&p=20046#p20041) to use different characters for the digit grouping symbol and decimal separator. Note that it is not mandatory to have dot as decimal separator. It is mandatory to use different symbols in these two settings.

### FreeCAD was running normally, and suddenly it doesn't start anymore

This can also happen if you had an older version of FreeCAD installed, and you upgraded to a newer version. In that process, the configuration files of FreeCAD might have been corrupted for some reason, and now FreeCAD cannot read them anymore, and fails to start. The solution is simply to delete these configuration files, so FreeCAD will recreate them on first run.
- **On Windows**: Open the file explorer, and write** %APPDATA%\FreeCAD** as the file path. Once there, delete the files **user.cfg** and **system.cfg**
- **On Linux**: Navigate to **/home/USERNAME/.local/share/FreeCAD** (version 0.20 and above) or **/home/USERNAME/.FreeCAD** (version 0.19 and below) and delete the files **user.cfg** and **system.cfg**
- **On Mac**: Navigate to **/Users/USERNAME/Library/Preferences/FreeCAD** and delete the files **user.cfg** and **system.cfg**
  
FreeCAD should now start again normally with all its settings reset.

There is a [Macro findConfigFiles](https://wiki.freecad.org/Macro_findConfigFiles) available to help in locating your configuration files. It can be installed using the Addon Manager in the Tools menu. **Tools → Addon Manager → Macros → findConfigFiles**. The macro will find your config file folder, copy it to the clipboard, and (attempt to) open that location with your default file browser. It makes no changes to your files or settings.

## Using FreeCAD

### Is FreeCAD really free? Even for commercial use?

FreeCAD is [open-source software](http://en.wikipedia.org/wiki/Open-source_software), and is free not only to use, for yourself or for doing commercial work, but also to distribute, modify, or even use in a closed-source application. To summarize, you are free to do (almost) anything you want with it. See the [Licence](docs\development\licence.md) page for more details.

### How do I rotate the 3D view?

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3b36d744-e21b-4e2f-96e1-9cfd00865af1)  
_From the right button mouse_  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3bd4d56d-2f03-47a8-873c-cbc92a9a3088)  
_From the menu Edit → Preferences_  

FreeCAD has several different [navigation modes](docs\general-usage\navigation-styles.md) available that can be set in the preferences settings dialog or changed by right-clicking in the 3D view. For full details about the modes, see the [Mouse navigation](docs\general-usage\navigation-styles.md) page.

### What can I do with FreeCAD? Where do I start?

Head to the [Getting Started](docs\general-usage\getting-started.md) page for a quick description of the tools you can use. There is also a new Tutorials section containing a few resources. The [User hub](docs\general-usage\user-hub.md) section contains more detailed information about the different workbenches of FreeCAD. Note that since FreeCAD is relatively new, its user interface is still very bare and doesn't feature many tools. But much more advanced functionality is already available to you from [Python scripting](docs\python-scripting\powerusers-hub.md).

### Is there documentation for newcomers? How can I learn to use FreeCAD?

There is a lot of documentation spread in different places, both on and outside the FreeCAD website. You might want to start with the [Getting Started](docs\general-usage\getting-started.md) page. The [Tutorials](docs\general-usage\tutorials.md) section contains many specialized tutorial pages to help you get started with the different workbenches. The [Manual: Introduction](docs\general-usage\manual.md) is a general, complete user-oriented guide to FreeCAD. The [User hub](docs\general-usage\user-hub.md) section of this wiki lists all pages aimed at end users. On external sites like [YouTube](https://www.youtube.com/results?search_query=freecad), you will also find a load of video tutorials created by users. And last but not least, the [forum](https://forum.freecadweb.org/) contains a lot of replies to questions asked by other newcomers.

### I want to import/export data in the format XYZ to/from FreeCAD. How do I do that?

Please refer to the [FreeCAD Howto Import Export](https://wiki.freecad.org/FreeCAD_Howto_Import_Export) page. Maybe your questions are already answered there.

### Where can I find workarounds for features that FreeCAD currently does not support?

Please refer to the [Workarounds](https://wiki.freecad.org/Workarounds) page.

## Working with Part geometry

### How do I extrude stuff into solids? I don't get the right result

The theory is simple: Lines (or wires), when extruded, form faces. Faces, when extruded, form solids.

If you extrude something and the result is not solid, then the something is not a face. If you have lines and you want to extrude a solid from them, you must first select lines that form a closed perimeter (select several objects by pressing `Ctrl`), join them into a wire ([Draft Upgrade](https://wiki.freecad.org/Draft_Upgrade) tool), then make a face from that wire (![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5914121e-a261-4e77-88d3-a516091f6a67) [Draft Upgrade](https://wiki.freecad.org/Draft_Upgrade) tool again). There you are; if all went well, you can now extrude it to a solid.

Now, there can be many little twists that make you obtain the wrong result. The best way to make sure is to check what's inside the object you are extruding. Objects' contents can be easily explored with Python. Assuming for example you have an object called "Wire," you could type this into the Python console:

```python
obj = FreeCAD.ActiveDocument.Wire
shp = obj.Shape
print shp.Faces
print shp.Wires
if shp.Wires:
    for w in shp.Wires:
        print w.isClosed()
```

The above code retrieves the shape from an object, shows the faces and wires your object has (if any), and, if there are wires, prints if those wires are closed. If you don't have any face, you won't get a solid. If there is no closed wire, it won't become a face. If you are interested, there is more info about what you can check with Python on the part scripting page. If you cannot join several lines into a wire, the most probable cause is that their endpoints don't meet; there must be small gaps between (some of) them. There, I'm afraid; my experience tells me the quickest way would be to redraw a wire on top of them.

### My boolean operations fail or give weird results

The [Open CASCADE](https://en.wikipedia.org/wiki/Open_CASCADE_Technology) geometric modeling kernel used in FreeCAD for Part geometry, although probably the best open-source geometry kernel available, has its flaws and limitations. Indeed the boolean operations (fusion, subtraction, intersection) are not its best features and often give strange results. This is a current limitation we have no way to solve at once, so your best path is to try obtaining the desired result by modeling another way. For example, problems with primitives such as cylinders can often be solved by using an extruded circle instead. Coplanar surfaces between parts can cause trouble, as well as surface tangency. As a general rule, if a shape doesn't work, try remodeling it a different way. In 99% of the cases in the end, you will manage to obtain the result you want.

### When I export (or view) my model, the holes are filled in

Don't use `Ctrl` + `A` (Select All) to export everything from the hierarchy tree. If the model is of one single item, try selecting only the newest item (usually the last one) in the hierarchy tree.

As we create a model in the [PartDesign Workbench](docs\workbenches\part-design.md), each feature takes the shape of the last one and adds or removes something, creating linear dependencies from feature to feature as the model is created. Hence a "Cut" feature is not only the cut hole itself, but the whole part with the cut. This is why the user usually should only have the newest item (feature) in the model tree visible because otherwise, the phases of the model overlay each other, and holes are filled in by the earlier model features.

To toggle the visibility of an object on or off, select it in the hierarchy tree and press the `spacebar` on your keyboard. Usually, everything but the last item in the hierarchy tree should be greyed out and, therefore, not visible in the [3D view](https://wiki.freecad.org/3D_view).

### My parametric objects break when I modify their base sketches

You have met the (in)famous topo-naming problem. This is currently a major issue in FreeCAD for newcomers. It is present all over FreeCAD but is more prominent when using sketches. The explanation is simple: When recalculating a sketch, the geometric entities (edges, faces...) are rebuilt in a different order, depending on the constraint's precedence. They then receive a different name (Edge1, Edge2, Face1, Face2...). Most subsequent operations depend on these names to identify which subcomponent they work on. Therefore, when the sketch is rebuilt, features that are based on such subcomponents might suddenly get their base geometry changed and give a wrong result.

This is a very hard problem to overcome (the [Topological Naming Project](https://wiki.freecad.org/Topological_Naming_Project) aims to solve it). However, there are many workarounds available to mitigate the problem, and more advanced users generally manage to avoid it completely. A couple of strategies are:

- Know that sketches are highly sensitive to the problem. Referencing a specific edge of a sketch, or a face of an object built on a sketch, such as a PartDesign Pad, is dangerous unless you are pretty confident that these sketches will not change over time or the sketch is very simple. A Pad built on a simple rectangular sketch, for example, will likely be safe as it will generate only one face, so there is no order problem.
- Prefer other kinds of objects such as Part or Draft when possible. These objects are always built the same way, and therefore their geometric components usually follow the same order each time they are rebuilt. They are much less susceptible to topo-naming problems.
- To attach further objects onto the faces of sketch-based geometry, prefer using Datum geometry. These invisible "helper objects" don't depend on sketch geometry, and therefore stay stable over time.

## Contributing to FreeCAD

### FreeCAD is such a great program! How can I help?

There are a lot of different ways to help, even if you are not a programmer. Here are a couple of things you can do:

- Give feedback to the FreeCAD developers: It is always useful to know what people think, what they find good, what they miss, etc. Drop a note on the [forum](http://forum.freecadweb.org/) giving your opinion or make a request on our [issue tracker](https://tracker.freecadweb.org/main_page.php)!
- Help with writing documentation: The documentation we have here on this site is sometimes very limited. If you discovered something that is not well documented, add your knowledge there!
- Help other newcomers: Hang around the forum, and help new people to solve basic questions, like how do I install, how do I add a cube, etc.
- [Translate the documentation](https://wiki.freecad.org/Help_FreeCAD#Translate_the_documentation) into your own language.
- [Translate FreeCAD](https://wiki.freecad.org/Help_FreeCAD#Translate_FreeCAD) into your own language.
- Write [Tutorials](docs\general-usage\tutorials.md) or record video tutorials: Tutorials are a very easy way for newcomers to learn new software. If you did some nice stuff, why not show other people how to do it?
- Contribute with assets and examples: We are still missing good example files in FreeCAD. If you created something good, share it with us!
- [Submit bugs](https://wiki.freecad.org/Tracker): It is very important to have all possible bugs fixed. If you find one, report it as clearly as possible, so we can understand exactly what's happening.
- Try to do some Python coding: You never programmed before, but you want to try? Python is easy. Read our [introduction to Python](docs\python-scripting\discovering-python.md), but beware, you might get addicted quickly!
- See the [Help FreeCAD](docs\development\how-to-contribute.md) page for more details on how to contribute.

### How can I get edit permission on the wiki?

See the [Work on the documentation page](https://wiki.freecad.org/Help_FreeCAD#Work_on_the_documentation) paragraph for more details on how to contribute.

### Does FreeCAD participate in Google Summer of Code?

Yes. Beginning in 2016, FreeCAD participated in Google Summer of Code. See [Google Summer of Code 2020](https://wiki.freecad.org/Google_Summer_of_Code_2020) for information on past editions, and [Google Summer Of Code 2016](http://forum.freecadweb.org/viewtopic.php?f=8&t=13838) in the forum for the original announcement.

### I want to start translating the wiki in my own language. What do I do?

This wiki hosts a lot of content. The most up-to-date and interesting material is gathered in the [manual](https://wiki.freecad.org/Online_Help_Toc).

See the [Translate the documentation](https://wiki.freecad.org/Help_FreeCAD#Work_on_the_documentation) page paragraph for more details on how to translate the wiki.

### Can I buy swag?

FreeCAD doesn't offer swag you can order to support the project. But you can create your own. See our [Swag](https://wiki.freecad.org/Swag) page for instructions.

## Licensing, copying, and reuse

### Do I have to pay something to use FreeCAD?

No. 
FreeCAD is totally free to use, download, redistribute, or modify. It is [open-source software](https://en.wikipedia.org/wiki/Open_source), published under the terms of the [GNU Lesser General Public License 2.1](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License), which guarantees you those freedoms and, even more important, guarantees you that these freedoms will never be taken from you.

### Can I reuse any part of the FreeCAD artwork or pieces of the website?

Sure. 
All the artwork (icons, banners, etc.) of FreeCAD are licensed LGPL, the same as the FreeCAD code. Help yourself on the [Artwork](https://wiki.freecad.org/Artwork) page. The website is a standard MediaWiki site; all graphic elements can freely be reused, and if you are curious about how to tweak the MediaWiki software as we did, look for the special Common CSS and JS pages.

### Can I reuse pieces of FreeCAD in another application?

Yes, you can use the core parts of FreeCAD in other applications as long as you comply with the terms of the LGPL. Third-party libraries, [external workbenches](docs\workbenches\external-workbenches.md), and [macros](docs\python-scripting\macros.md) may be subject to their own [license](docs\development\licence.md) terms, so please consult with their authors. More details on the Licence page.
