# Start up and Configuration

> In FreeCAD version 0.20 the default location of the program's configuration, data, and cache files was changed for Linux.  
See [Release notes 0.20](https://wiki.freecad.org/Release_notes_0.20#Core) for more information. This page has not yet been updated accordingly.

## Overview

This page shows the different ways to start FreeCAD and the most important configuration features.

## Starting FreeCAD from the Command line

FreeCAD can be started normally by double-clicking on its desktop icon or selecting it from the start menu, but it can also be started directly from the command line. This allows you to change some of the default startup options.

### Using command line options without a command line shell

- On Ubuntu you can create a desktop icon and edit its properties. Add the command line options separated by spaces behind the program name in the "Command" field.
- On Windows create a shortcut and edit the properties. Add the command line options separated by spaces to "Target" field.

### Command line options

The command line options are subject to frequent changes.Therefore, it is a good idea to check the current options by typing:
```
FreeCAD --help
```
From the response you can read the possible parameters:
```
 Usage: FreeCAD [options] File1 File2 ...
 
 Allowed options:
 
 Generic options:
   -v [ --version ]          Prints version string
   -h [ --help ]             Prints help message
   -c [ --console ]          Starts in console mode
   --response-file arg       Can be specified with '@name', too
   --dump-config             Dumps configuration
   --get-config arg          Prints the value of the requested configuration key
 
 Configuration:
   -l [ --write-log ]        Writes a log file to:
                             /home/username/.FreeCAD/FreeCAD.log
   --log-file arg            Unlike --write-log this allows logging to an 
                             arbitrary file
   -u [ --user-cfg ] arg     User config file to load/save user settings
   -s [ --system-cfg ] arg   System config file to load/save system settings
   -t [ --run-test ] arg     Test case - or 0 for all
   -M [ --module-path ] arg  Additional module paths
   -P [ --python-path ] arg  Additional python paths
   --single-instance         Allow to run a single instance of the application
```

In the following table, selected options are described in more detail:
| **Long option** | **Corresponding** [**config var name**](https://wiki.freecad.org/Start_up_and_Configuration#Configuration_set) | **Synopsis** |
| -- | -- | -- |
| `--user-cfg <filename>` | UserParameter |	Filename or relative path that ends with a filename. Defaults to `user.cfg`. |
| `--module-path <dir>` | Prepends to AdditionalModulePaths	| Directory that contains modules. This option can be given repeatedly to specify multiple directories. |
| `--get-config <config-var-name>` | most | Outputs the requested value in a popup dialog. Exits upon confirmation with OK. Cannot be used repeatedly. If an unknown/illegal variable name is used, the response is empty. The `--console` flag is not honored. |

Options can written in two forms: `--long-option arg` and `--long-option=arg`.

### Response and config files

FreeCAD can read some of these options from a config file. This file must be in the bin path and must be named **FreeCAD.cfg**. Be aware that options specified in the command line override the config file!

Some operating systems have a very low limit of characters on the command line. The common way to work around those limitations is using response files. A response file is just a configuration file which uses the same syntax as the command line. If the command line specifies a response file, it's loaded and parsed in addition to the command line:
```
FreeCAD @ResponseFile.txt
```
or:
```
FreeCAD --response-file=ResponseFile.txt
```
or:
```
FreeCAD --response-file ResponseFile.txt
```

### Hidden options

There are a couple of options not visible to the user. These options are e.g. the X-Window parameters parsed by the Windows system:

- _-display_ - Sets the X display (default is $DISPLAY).
- _-geometry_ - Sets the client geometry of the first window that is shown.
- _-fn_ or _-font_ - Defines the application font. The font should be specified using an X logical font description.
- _-bg_ or _-background_ - Sets the default background color and an application palette (light and dark shades are calculated).
- _-fg_ or _-foreground_ - Sets the default foreground color.
- _-btn_ or _-button_ - Sets the default button color.
- _-name_ - Sets the application name.
- _-title_ - Sets the application title.
- _-visual_ - Forces the application to use a TrueColor visual on an 8-bit display.
- _-ncols_ - Limits the number of colors allocated in the color cube on an 8-bit display, if the application is using the QApplication::ManyColor color specification. If count is 216 then a 6x6x6 color cube is used (i.e. 6 levels of red, 6 of green, and 6 of blue); for other values, a cube approximately proportional to a 2x3x1 cube is used.
- _-cmap_ - Causes the application to install a private color map on an 8-bit display.

### Running FreeCAD without GUI (headless)

FreeCAD is usually built with two executables: a GUI-capable one called **FreeCAD** or **freecad**, and a headless one, called **FreeCADCmd** or **freecadcmd**. FreeCAD can be used in console mode using the `--console` switch (which is the default behavior of **FreeCADCmd**):
```
FreeCAD --console
```
In console mode, no graphical user interface will be displayed, and you will be presented with a Python interpreter prompt: `>>>`. From that prompt, you have the same functionality as the Python interpreter that runs inside the FreeCAD GUI, and access to all modules and plugins of FreeCAD, except the FreeCADGui module. Be aware that modules that depend on FreeCADGui might also be unavailable.

To read more about console or headless mode, refer to [Headless FreeCAD](https://wiki.freecad.org/Headless_FreeCAD).

### Running modules, macros, and scripts

| **File type** |	**System** | **Command line example** |
| -- | -- | --|
| Module | Windows | `"C:\Program Files\FreeCAD\bin\FreeCAD.exe" -M "C:\FreeCAD\Mod\Draft"` |
| | Linux | `FreeCAD_0.19 -M ~/.FreeCAD/Mod/Draft` |
| | Linux (AppImage) | `path/to/FreeCADXXX.AppImage -M ~/.FreeCAD/Mod/Draft` |
| .FCMacro or .py | Windows	| `"C:\Program Files\FreeCAD\bin\FreeCAD.exe"` `"C:\Users\userName\AppData\Roaming\FreeCAD\Mod\WorkFeature\start_WF.FCMacro"` |
| | Linux	| `FreeCAD_0.19 ~/.FreeCAD/Mod/WorkFeature/start_WF.FCMacro` |
| | Linux (AppImage) | `path/to/FreeCADXXX.AppImage ~/.FreeCAD/Mod/WorkFeature/start_WF.FCMacro` |

See [Macro at Startup](https://wiki.freecad.org/Macro_at_Startup) on how to set up a macro to automatically run at FreeCAD startup.

## Environment variables

FreeCAD supports the following environment variables, which can be used to configure directories: [introduced in version 0.19](https://wiki.freecad.org/Release_notes_0.19)

| **Environment variable** | **Corresponding** [**config var name**](https://wiki.freecad.org/Start_up_and_Configuration#Configuration_set) | **Synopsis** |
| -- | -- | -- |
| `FREECAD_USER_HOME` | UserHomePath | FreeCAD's "base" directory for keeping local user data. |
| `FREECAD_USER_DATA` | UserAppData | If not set, defaults to `FREECAD_USER_HOME/.FreeCAD`, but only if `FREECAD_USER_HOME` is set. |
| `FREECAD_USER_TEMP` | AppTempPath | If not set, defaults to `FREECAD_USER_HOME/temp`, but only if `FREECAD_USER_HOME` is set. |

If the specified path does not exist, the setting is ignored!

The above environment variables are meant to be used to realize a portable FreeCAD environment. For an example how environment variables can be used from the command line on Linux refer to the [notes for Linux users on the downloads page](https://wiki.freecad.org/Download#Notes_for_GNU.2FLinux_users).

```
HOME
```
FreeCAD uses [Qt](https://wiki.freecad.org/Third_Party_Libraries#Qt), which does honor the `HOME` environmental variable. Thus, setting HOME can be used to specify the base directory of Qt-related configuration files (`.config/FreeCAD/FreeCAD.conf`).

FreeCAD itself does not honor the `HOME` environmental variable (because it determines the user's home directory from a lower-level system API). Use `FREECAD_USER_HOME` for this pupose.

```
TMPDIR
```
The default temporary directory is **/tmp/**. The `TMPDIR` environmental variable can be used to override the default.

### Libraries

Some libraries need to call system environment variables. Sometimes when there is a problem with a FreeCAD installation, it is because some environment variable is absent or incorrect. Therefore, some important variables get duplicated in the Config and saved in the log file.

#### Python

- PYTHONPATH
- PYTHONHOME
- CL_LIBRARY
- TCLLIBPATH

#### OpenCascade

- CSF_MDTVFontDirectory
- CSF_MDTVTexturesDirectory
- CSF_UnitsDefinition
- CSF_UnitsLexicon
- CSF_StandardDefaults
- CSF_PluginDefaults
- CSF_LANGUAGE
- CSF_SHMessage
- CSF_XCAFDefaults
- CSF_GraphicShr
- CSF_IGESDefaults
- CSF_STEPDefaults

## Configuration set

On every startup FreeCAD examines its surrounding and the command line parameters. It builds up a **configuration set** which holds the essence of the runtime information. This information is later used to determine the place where to save user data or log files. It is also very important for postmortem analyzes. Therefore it is saved in the log file.

### User related information

| **Config var name** | **Synopsis** | **Example Windows** | **Example Linux** |
| -- | -- | -- | -- |
| UserAppData	| Path where FreeCAD stores User Related application data. | **C:\Documents and Settings\username\AppData\FreeCAD** | **/home/username/.FreeCAD** |
| UserParameter | File where FreeCAD stores User Related application data. | **C:\Documents and Settings\username\AppData\FreeCAD\user.cfg** | **/home/username/.config/FreeCAD/user.cfg** |
| SystemParameter | File where FreeCAD stores Application Related data. | **C:\Documents and Settings\username\AppData\FreeCAD\system.cfg** | **/home/username/.config/FreeCAD/system.cfg** |
| UserHomePath | Home path of the current user | **C:\Documents and Settings\username** | **/home/username** |
Note: For Linux distributions, an additional configuration file that relates to [Qt](https://wiki.freecad.org/Third_Party_Tools#Qt-Toolkit) may exist at path **/home/username/.config/FreeCAD/FreeCAD.conf**.

### Command line arguments

| **Config var name**	| **Synopsis** | **Example** |
| -- | -- | -- |
| LoggingFile | 1 if the logging is switched on	| 1 |
| LoggingFileName	| File name where the log is placed |	**C:\Documents and Settings\username\AppData\FreeCAD\FreeCAD.log** |
| RunMode	| This indicates how the main loop will work. **"Script"** means that the given script is called and then exit. **"Cmd"** runs the command line interpreter. **"Internal"** runs an internal script. **"GUI"** enters the Gui event loop. **"Module"** loads a given python module. | "Cmd" |
| FileName | Meaning depends on the RunMode	| |
| ScriptFileName | Meaning depends on the RunMode | |
| Verbose	| Verbosity level of FreeCAD | "" or "strict" |
| OpenFileCount | Holds the number of files opened through command line arguments	| "12" |
| AdditionalModulePaths | Holds the additional Module paths given in the cmd line	| "extraModules/" |

### System related

| **Config var name** | **Synopsis** | **Example Windows** | **Example Linux** |
| -- | -- | -- | -- |
| AppHomePath	| Path where FreeCAD is installed	| **c:/Progam Files/FreeCAD_0.19** | **/user/local/FreeCAD_0.19** |
| PythonSearchPath | Holds a list of paths which python search modules. This is at startup can change during execution | | |
| AppTempPath	| Path of the temporary directory. Can be given with `TMPDIR` environment variable, or with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/47236ddc-1f3f-46b4-aa15-48b0269a0629) [Parameter Editor](https://wiki.freecad.org/Std_DlgParameter): **Tools → Edit parameters → BaseApp → Preferences → General → TempPath** | | **/tmp/** (default) |

### Build related information

The table below shows the available information about the Build version. Most of it comes from the Subversion repository. This stuff is needed to exactly rebuild a version!

| **Config var name**	| **Synopsis** | **Example** |
| -- | -- | -- |
| BuildVersionMajor | Major Version number of the Build. Defined in **src/Build/Version.h.in** | 0 |
| BuildVersionMinor | Minor Version number of the Build. Defined in **src/Build/Version.h.in** | 7 |
| BuildRevision	SVN | Repository Revision number of the src in the Build. Generated by SVN | 356 |
| BuildRevisionRange | Range of different changes | 123-356 |
| BuildRepositoryURL | Repository URL | [https://free-cad.svn.sourceforge.net/svnroot/free-cad/trunk/src](https://free-cad.svn.sourceforge.net/svnroot/free-cad/trunk/src) |
| BuildRevisionDate | Date of the above Revision | 2007/02/03 22:21:18 |
| BuildScrClean | Indicates if the source was changed after checkout | Src modified |
| BuildScrMixed | | Src not mixed |

### Branding related

These Config entries are related to the branding mechanism of FreeCAD. See [Branding](docs\development\branding.md) for more details.

| **Config var name**	| **Synopsis** | **Example** |
| -- | -- | -- |
| ExeName | Name of the build Executable file. Can differ from FreeCAD if a different **main.cpp** is used.	| **FreeCAD.exe** |
| ExeVersion | Over all Version shows up at start time | "0.19" |
| AppIcon | Icon which is used for the Executable, shows in Application MainWindow. | "FCIcon" |
| ConsoleBanner	| Banner which is prompted in console mode | |
| SplashPicture | Name of the Icon used for the Splash Screen | "FreeCADSplasher" |
| SplashAlignment	| Alignment of the Text in the Splash dialog | "Bottom" or "Left" |
| SplashTextColor | Color of the splasher Text | "#000000" |
| StartWorkbench | Name of the Workbench which get started automatically after Startup | "Part design" |
| HiddenDockWindow | List of dockwindows (separated by a semicolon) which will be disabled | "Property editor" |

### Querying the configuration

#### From FreeCAD's Python console

Entries of the configuration set can be queried with the **config var name** (see tables above) from the [Python console](https://wiki.freecad.org/Python_console). For example:
```
 >>> FreeCAD.ConfigGet("ExeVersion")
 '0.19'
```
If the name is not found, an empty string is returned.

#### From command line
Use the `--get-config <config-var-name>` option to query a single name. Not all names are supported. For example:
```
FreeCAD --get-config ExeVersion
```
Use the `--dump-config` option to get a list of names and their values. Not all names are supported.

#### From FreeCAD console

Start FreeCAD in console mode with `--console` and query with Python code. For example:
```
 $ FreeCAD --console
 [FreeCAD Console mode <Use Ctrl-D (i.e. EOF) to exit.>]
 >>> FreeCAD.ConfigGet("ExeVersion")
 '0.19'
 >>> exit()
```
For Linux (bash shell) you can modify the following command line to suit your needs:
```
 $ FreeCAD --console <<EOF
 print( "FREECAD_USER_HOME: " + ( "not set" if ( os.environ.get('FREECAD_USER_HOME') is None ) else os.environ.get('FREECAD_USER_HOME') ) )
 print( "UserHomePath: " + FreeCAD.ConfigGet("UserHomePath") )
 exit()
 EOF
 ```

## Starting FreeCAD from the desktop

### Linux: Creating an additional start option

The following assumes that your desktop is configured such that you can launch FreeCAD from it. Depending on your Linux distribution and desktop environment, you may have to adapt the following steps:

1. Copy the freedesktop entry file for FreeCAD from **/usr/share/applications/freecad.desktop** to **~/.local/share/applications**.
2. Change the name from **freecad.desktop** to something else (e.g. **MyFreeCADConfig.desktop**).
3. Open the file with a text editor and change how FreeCAD is invoked by modifying the line starting with `Exec`.
4. As a result, an additional entry in your start menu/application launcher is available. This way, you can have multiple FreeCAD entries with various launch options.

## Starting FreeCAD from a portable USB medium

### Windows

Put the FreeCAD executable, **FreeCAD.exe**, on the USB medium. Create a batch file, **FreeCAD.bat**, and put it into the same directory as **FreeCAD.exe**. Inside the batch file write:
```
set CURRENTDIR=%cd%
set FREECAD_USER_HOME=%CURRENTDIR%
start FreeCAD.exe -u FreeCAD/user.cfg -s FreeCAD/system.cfg --write-log
```
Or with `FREECAD_USER_DATA` ([see](https://forum.freecadweb.org/viewtopic.php?f=12&t=54784&start=60#p474759)):
```
set CURRENTDIR="%cd%"
set FREECAD_USER_DATA=%CURRENTDIR%/..
start FreeCAD.exe -u %FREECAD_USER_DATA%/user.cfg -s %FREECAD_USER_DATA%/system.cfg
```
With the batch in the root of the USB medium:
```
set CURRENTDIR=%cd%
set FREECAD_USER_DATA=%CURRENTDIR%FreeCAD\
start %cd%FreeCAD\bin\FreeCAD.exe -u %FREECAD_USER_DATA%user.cfg -s %FREECAD_USER_DATA%system.cfg
```
Now double-click the batch file to start FreeCAD. ([see](https://forum.freecadweb.org/viewtopic.php?f=4&t=49028))
