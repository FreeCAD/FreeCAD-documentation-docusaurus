# Macros

## Introduction

**Macros** are a convenient way to reproduce complex actions in FreeCAD. You simply record actions as you do them, save those actions under a name, and replay them whenever you want. Since macros are in reality a list of [Python](https://wiki.freecad.org/Python) commands, you can also edit them, and create very complex scripts.

While Python scripts normally have the `.py` extension, FreeCAD macros should have the `.FCMacro` extension. A collection of macros written by experienced users is found in the [macros recipes](https://wiki.freecad.org/Macros_recipes) page.

See the [Power users hub](docs\python-scripting\powerusers-hub.md) to learn more about the [Python](https://wiki.freecad.org/Python) programming language, and about writing macros. In particular, you should start with these pages:

- [Introduction to Python](docs\python-scripting\discovering-python.md)
- [Python scripting tutorial](https://wiki.freecad.org/Python_scripting_tutorial)
- [FreeCAD Scripting Basics](docs\python-scripting\python-in-freecad.md)

## How it works

Enable the console output in the menu **Edit → Preferences → General → Macro → Show scripts commands in python console**. You will see that in FreeCAD, every action you do, such as pressing a button, outputs a Python command. Those commands are what can be recorded in a macro. The main tool for making macros is the macros toolbar: ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f0b8918d-b4ec-4f54-b803-51d636600939).
On it you have 4 buttons: Record, stop recording, edit and play the current macro.

It is very simple to use: Press the record button, you will be asked to give a name to your macro, then perform some actions. When you are done, click the stop recording button, and your actions will be saved. You can now access the macro dialog with the edit button.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8fbb077c-970d-4965-81d8-71d67e67aded)  
_Macro dialog, listing the macros available in the system_

There you can manage your macros, delete, edit, duplicate, install or create new ones from scratch. If you edit a macro, it will be opened in an editor window where you can make changes to its code. New macros can be installed using the 'Addons' button, which links to the [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md).

## Example

Press the record button, give a name, let's say "cylinder 10x10", then, in the [Part Workbench](docs\workbenches\part.md), create a cylinder with radius = 10 and height = 10. Then, press the "stop recording" button. In the edit macros dialog, you can see the python code that has been recorded, and, if you want, make alterations to it. To execute your macro, simply press the execute button on the toolbar while your macro is in the editor. You macro is always saved to disk, so any change you make, or any new macro you create, will always be available next time you start FreeCAD.

## Customizing

Of course it is not practical to load a macro in the editor in order to use it. FreeCAD provides much better ways to use your macro, such as assigning a keyboard shortcut to it or putting an entry in the menu. Once your macro is created, all this can be done via the **Tools → Customize** menu.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/445f4e71-dc99-49c6-9b6a-984c810bad17)  

This way you can make your macro become a real tool, just like any standard FreeCAD tool. This, added to the power of python scripting within FreeCAD, makes it possible to easily add your own tools to the interface.

See [Customize Toolbars](https://wiki.freecad.org/Customize_Toolbars) for a more detailed description.

## Creating macros without recording

You can also directly copy/paste python code into a macro, without recording GUI action. Simply create a new macro, edit it, and paste your code. You can then save your macro the same way as you save a FreeCAD document. Next time you start FreeCAD, the macro will appear under the "Installed Macros" item of the Macro menu.

See [How to install macros](https://wiki.freecad.org/How_to_install_macros) for a more detailed description.

## Macro repositories

There are two main places for macros. The first one is the official peer-reviewed macro repository on [GitHub](https://github.com/FreeCAD/FreeCAD-macros). The second one is the [Macros recipes](https://wiki.freecad.org/Macros_recipes) page from which you can pick some useful macros to add to your FreeCAD installation. Macros from both repositories can be installed via the [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md) directly from FreeCAD.

## Additional information

- [Automatically run macro at startup](https://wiki.freecad.org/Macro_at_Startup)
- [Installing more workbenches](https://wiki.freecad.org/Installing_more_workbenches)

## Tutorials

You can manually install extensions, however, it is much simpler to just use the [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md).

- [How to install macros](https://wiki.freecad.org/How_to_install_macros)
- [How to install additional workbenches](https://wiki.freecad.org/How_to_install_additional_workbenches)
