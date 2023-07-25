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

FreeCAD has several different navigation modes available, that can be set in the preferences settings dialog or changed by right-clicking in the 3D view. For full details about the modes, see the Mouse navigation page.

