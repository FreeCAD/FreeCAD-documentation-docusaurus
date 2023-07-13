# Customizing FreeCAD

> Interface Customization

## Introduction

The FreeCAD interface is based on the modern [Qt](http://en.wikipedia.org/wiki/Qt_(toolkit)) toolkit and has a state-of-the-art organization. Some aspects of the interface can be customized. You can, for example, add custom toolbars, with tools from several workbenches or tools defined in macros, and you can create you own keyboard shortcuts. But the menus and default toolbars that come with FreeCAD and its workbenches cannot be changed.

[introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21): The Workbenches tab is no longer available. Its functionality has been moved to the [Available Workbenches](https://wiki.freecad.org/Preferences_Editor#Available_Workbenches) tab in the Workbenches section of the [Preferences Editor](https://wiki.freecad.org/Preferences_Editor).

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c33107a8-80ab-40e8-a982-68f378cd1419)  
_The Customize dialog box_

## Usage

1. The commands available in the Customize dialog box depend on the workbenches that have been loaded in the current FreeCAD session. So you should first load all workbenches whose commands you want to have access to.
2. There are several ways to invoke the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/11426b0f-513c-4a17-9c46-3f234c979cd8) [Std DlgCustomize](https://wiki.freecad.org/Std_DlgCustomize) command:
  - Select the **Tools → ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c302c151-5538-47dd-9659-1ec542aecf5d) Customize** option from the menu.
  - Right-click a toolbar area and choose ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8542089a-c667-44a3-8059-6d1c842fa138) **Customize...** from the context menu.
3. The Customize dialog box opens. For more information, see [Options](https://wiki.freecad.org/Interface_Customization#Options).
4. The `Help` button starts the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/85f872e4-58a9-4258-9aa5-49f1e9df5a43) [Std WhatsThis](https://wiki.freecad.org/Std_WhatsThis) command.
5. Press the `Close` button to close the dialog box.

## Options

In the Customize dialog box the following tabs are available:

### Keyboard

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/42210318-a138-4860-b068-6790478b6bb8)  
_The Keyboard tab_

On this tab custom keyboard shortcuts can be defined. Shortcuts for macro commands can be defined on the [Macros](https://wiki.freecad.org/Interface_Customization#Macros) tab.

### Search

You can search for commands by entering at least 3 characters of their menu text or name in the search field. The search is case-insensitive.

It is also possible to search for shortcuts:
- In the search field special keys in shortcuts must be entered as strings. For example to search for commands that use Ctrl in their shortcut enter `ctrl` (4 letters).
- Add parenthesis to search for single character shortcuts, for example: `(c)`.
- Add a comma and space between the characters of multi-character shortcuts, for example: `g, b, b`.

### Add a shortcut

1. Select a command category from the **Category** dropdown list.
2. Select a command from the **Commands** panel.
  - Optionally click the `Command`, `Shortcut`, or `Default` column headings to reorder the list.
  - Optionally drag the splitter to the right of the panel to resize it.
3. The **Current shortcut** box displays the current short cut, if available.
4. Enter a new shortcut in the **New shortcut** input box. Shortcuts can be up to 4 inputs long. Each input is either a single character, a combination of one or more special keys or a combination of one or more special keys and a character. Use _Backspace_ to correct mistakes.
5. Other active commands (see Notes) that already use the shortcut will be listed in the **Shortcut priority list**.
6. Press the _Assign_ button to assign the new shortcut.
7. If the **Shortcut priority list** contains more than one command: optionally change its order by selecting individual commands and pressing the _Up_ button or the _Down_ button. If active commands share the same shortcut, the shortcut will trigger the one that is highest in the list.

### Remove a shortcut

1. Select a command category from the **Category** dropdown list.
2. Select a command from the **Commands** panel.
3. Press the _Clear_ button.

### Restore a default shortcut

1. Select a command category from the **Category** dropdown list.
2. Select a command from the **Commands** panel.
3. Press the _Reset_ button.

### Restore all default shortcuts
1. Press the _Reset All_ button.

### Notes

Shortcuts only work for active commands. Active commands are commands that appear in the standard menu, or in the menu of a workbench that has been loaded in the current FreeCAD session, or commands that appear on a _visible_ toolbar.

### Toolbars

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7b8bfa99-89dd-42d8-8d45-ea2db7130ef4)  
_The Toolbars tab_

On this tab custom toolbars can be created and modified.

### Search

See [Keyboard](https://wiki.freecad.org/Interface_Customization#Search).

### Select the workbench

1. In the dropdown list on the right select the workbench whose custom toolbars you want to modify. The `Global` option is there for custom toolbars that should be available in all workbenches.

### Create a toolbar

1. Press the _New..._ button.
2. Enter a name in the dialog box that opens.
3. Press the _OK_ button.
4. The new toolbar will appear in the panel on the right.

### Rename a toolbar

1. Select a toolbar in the panel on the right.
2. Press the _Rename..._ button.
3. Enter a new name in the dialog box that opens.
4. Press the _OK_ button.

### Delete a toolbar

1. Select a toolbar in the panel on the right.
2. Press the _Delete_ button.

### Disable a toolbar

1. Uncheck the checkbox in front of the toolbar name in the panel on the right.
2. A disabled toolbar will be invisible in the FreeCAD interface.

### Add a command

1. At least one custom toolbar is required. See [Create a toolbar](https://wiki.freecad.org/Interface_Customization#Create_a_toolbar).
2. Select the correct toolbar in the panel on the right. If no toolbar is selected, the command will be added to the first toolbar in the list.
3. Select a command category from the **Category** dropdown list. Macro commands that have been set up on the [Macros](https://wiki.freecad.org/Interface_Customization#Macros) tab appear in the `Macros` category.
4. Select a command from the **Commands** panel, or select `<Separator>` to add a separator (a line between two toolbar buttons).
  - Optionally drag the splitter to the right of the panel to resize it.
5. Press ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/85bfd735-ec9c-4438-8351-6e1f7afb30f5) button.

### Remove a command

1. If required, expand the toolbar in the panel on the right.
2. Select a command.
3. Press ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/659afb0a-7917-4747-a646-e0e7f9a4cc22) button.

### Change a command position

1. If required, expand the toolbar in the panel on the right.
2. Select a command.
3. Press the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c37a3073-1fd8-4519-b017-d05a5b1f9091) button or the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4315ef25-6f3f-43d3-8045-a20adaa54bb7) button.
4. Optionally repeat this until the command is in the correct position.

### Notes

- Toolbars belonging to the current workbench are updated immediately, but after disabling/re-enabling a toolbar a workbench change is required (switch to a different workbench and then switch back).
- To update global toolbars a workbench change (if commands have been added or removed) or a restart (if the order of a toolbar has changed or a toolbar was renamed) is required.

### Macros

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b0df1c42-f551-41e1-9e4c-29ed41e04bd5)  
_The Macros tab_

On this tab macro commands can be set up. Once set up, they can be added to custom toolbars. Macros installed with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/44b9d7f2-d68c-4be4-b05a-16b947d3152c) [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md) are set up automatically, and added to a `Global` toolbar (see [Toolbars](https://wiki.freecad.org/Interface_Customization#Toolbars)), if you confirm the **Add button** popup during the installation process.

If you want to use a macro downloaded from a different source you will have to install it manually. See [How to install macros](https://wiki.freecad.org/How_to_install_macros) for more information. Note that FreeCAD uses a dedicated folder for macros and only macros in that folder can be set up. Use the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b453b1cd-2a48-449a-b567-3b8e91fd932d) [Std DlgMacroExecute](https://wiki.freecad.org/Std_DlgMacroExecute) command to find this folder on your system.

### Add a macro command

1. In the **Macro** dropdown list select a macro.
2. Enter a **Menu text**. This will be the name used to identify the macro command and will also appear in the toolbar if there is no icon.
3. Optionally enter a **Tool tip**. This text will appear near the location of the mouse when you hover the toolbar icon.
4. Optionally enter a **Status text**. This text will appear in the [status bar](https://wiki.freecad.org/Status_bar) when you hover the toolbar icon.
5. Optionally enter the wiki page for the macro, if available, in the **What's this** input box. Enter the page name, not the full URL.
6. Optionally enter a shortcut in the **Accelerator** input box. See [Keyboard](https://wiki.freecad.org/Interface_Customization#Keyboard) for more information.
7. To add an icon:
  - Press the _**Pixmap ...**_ button.
  - The **Choose Icon** dialog box opens.
  - If required press the _Icon folders..._ button to add an icon folder.
  - Select an icon from the panel. The **Choose Icon** dialog box closes automatically.
8. Press the _Add_ button.
9. The macro command appears in the panel on the left.
10. The macro command can now be selected on the [Toolbars](https://wiki.freecad.org/Interface_Customization#Toolbars) tab.

### Remove a macro command

1. Select the macro command in the panel on the left.
2. Press the _Remove_ button.

### Change a macro command

1. Double-click the macro command in the panel on the left.
2. Make the required changes. Note that you cannot remove the icon, you can only replace it.
3. Press the _Replace_ button.

### Spaceball Motion

This tab is blank if no Spaceball is detected. See: [3Dconnexion input devices](https://wiki.freecad.org/3Dconnexion_input_devices).

### Spaceball Buttons

This tab is blank if no Spaceball is detected. See: [3Dconnexion input devices](https://wiki.freecad.org/3Dconnexion_input_devices).

## Themes

FreeCAD supports complete theming of the interface, via .qss stylesheets. The [qss format](https://doc.qt.io/qt-5/stylesheet-syntax.html) is very similar to the [css format](https://en.wikipedia.org/wiki/CSS) used in web pages, it basically adds methods to reference the different widgets and elements of the Qt interface. You can change the default theme (which simply takes the style defined by your desktop system) by selecting a **style sheet** in the [FreeCAD preferences](https://wiki.freecad.org/Preferences_Editor#General).

You can also create your own theme if you are not satisfied with the themes that are bundled with FreeCAD, for example by editing an [existing style sheet](https://github.com/FreeCAD/FreeCAD/tree/master/src/Gui/Stylesheets). Your new style must be placed in a specific folder for it to be found by FreeCAD:

- **%APPDATA%/FreeCAD/Gui/Stylesheets** (on Windows). The **%APPDATA%** folder can be retrieved by entering `App.getUserAppDataDir()` in the [Python console](https://wiki.freecad.org/Python_console).
- **$HOME/.FreeCAD/Gui/Stylesheets** (on Linux).
- **$HOME/Library/Application Support/FreeCAD/Gui/Stylesheets** (on macOS).

## Addons

Addons from the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/76cd1c16-450a-4a40-8ccb-fc70103148a5) [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md) offer yet another way to customize the user interface. Several [Preference Packs](https://wiki.freecad.org/Preference_Packs) to change the [theme](https://wiki.freecad.org/Interface_Customization#Themes) are available.

In the Workbenches category of the Addon Manager some addons by user triplus can be found:
- [https://github.com/triplus/CubeMenu](https://github.com/triplus/CubeMenu) (for version 0.20 and below)
- [https://github.com/triplus/Glass](https://github.com/triplus/Glass)
- [https://github.com/triplus/IconThemes](https://github.com/triplus/IconThemes)
- [https://github.com/triplus/Launcher](https://github.com/triplus/Launcher)
- [https://github.com/triplus/PieMenu](https://github.com/triplus/PieMenu)
- [https://github.com/triplus/RemBench](https://github.com/triplus/RemBench)
- [https://github.com/triplus/ShortCuts](https://github.com/triplus/ShortCuts)
  
