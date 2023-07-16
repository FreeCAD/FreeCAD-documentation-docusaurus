# Download

## Current stable version

The 0.20.2 release of FreeCAD (29603) was published on 2022-12-07. To find out what's new, see the [release notes](https://wiki.freecad.org/Release_notes_0.20).

You can find SHA256 checksums to verify the integrity of your download on the [0.20.2 release page](https://github.com/FreeCAD/FreeCAD/releases/tag/0.20.2).

Previous versions can be downloaded from the [releases](https://github.com/FreeCAD/FreeCAD/releases) page.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0336dd63-6e10-4b8c-8de2-82ba9c6a54de)  
[Install on Windows](https://wiki.freecad.org/Installing_on_Windows)  
[64-bit installer](https://github.com/FreeCAD/FreeCAD/releases/download/0.20.2/FreeCAD-0.20.2-WIN-x64-installer-3.exe)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6bcc120c-9bc6-475c-b100-5201fe2e8b42)  
[Install on Mac](https://wiki.freecad.org/Installing_on_Mac)  
[macOS 64-bit](https://github.com/FreeCAD/FreeCAD/releases/download/0.20.2/FreeCAD_0.20.2-2022-12-27-conda-macOS-x86_64-py310.dmg)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4bea3d76-c212-4b26-9328-630371544422)  
[Install on Linux](https://wiki.freecad.org/Installing_on_Linux)  
[AppImage 64-bit](https://wiki.freecad.org/AppImage)  

### Notes for Windows users

- The following Windows versions are supported: 64-bit 7/8/10/11. 32-bit Windows is not supported.
- A portable version that doesn't need installation is available on the [releases](https://github.com/FreeCAD/FreeCAD/releases/) page.
- The package can also be installed from the Chocolatey manager.

### Notes for macOS users

macOS 10.12 Sierra is the minimum supported version.

### Notes for GNU/Linux users

Most distributions carry FreeCAD in their official repositories; however, if the distribution doesn't follow a rolling release model, the version they provide might be outdated. Instead you can download the AppImage above, mark it as executable and launch it without installation.

Please see the [Installing on Linux](https://wiki.freecad.org/Installing_on_Linux) page for more installation options, including daily packages for Ubuntu and derivatives.

A portable version that doesn't need installation can be achieved by starting FreeCAD with these commands:
```
cd path/to/directory_containing_AppImage/
chmod +x ./name_of_AppImage_file.AppImage
HOME="$PWD/Settings" FREECAD_USER_HOME="$PWD/Settings" ./name_of_AppImage_file.AppImage
```

More information about FreeCAD's environment variables can be found on the [configuration page](https://wiki.freecad.org/Start_up_and_Configuration#Environment_variables).

## Development versions

FreeCAD's development is active.
- For development builds and development source code, see the [weekly builds](https://github.com/FreeCAD/FreeCAD-Bundle/releases/tag/weekly-builds) page.
- To compile the latest source code, see compiling.
  
## Additional modules and macros

The FreeCAD community provides many additional modules and macros. Since 0.17 they can be easily installed from within FreeCAD using the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a7793c42-15ba-4db0-a661-f7c0ab4ce406) [Addon manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md).
