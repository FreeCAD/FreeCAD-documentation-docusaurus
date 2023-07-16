# Spreadsheet Workbench

## Introduction

The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4f577da0-eb55-4268-ae82-88fc5f3181a0) **Spreadsheet Workbench** allows you to create and edit spreadsheets, use data from the spreadsheet as parameters in a model, fill the spreadsheet with data retrieved from a model, perform calculations, and export the data to other spreadsheet applications such as LibreOffice or Microsoft Excel.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/46c53fbb-6f83-4107-8509-8ea3ae1ee3e8)  
_Spreadsheet workbench icon_  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8f05f908-a523-4f3c-af5d-bb2349ac1403)  
_A spreadsheet with certain cells filled with text and quantities_   

## Tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cb4db342-5912-44eb-a846-2a7a8d24a368) Create sheet: create a new spreadsheet.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3e55adfb-2fb4-47b8-8e69-57908edebba3) Import: import a CSV file into a spreadsheet.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/81fb80d7-19cf-4f6d-9583-0b367e599c25) Export: export a CSV file from a spreadsheet.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fb23d408-8d18-456e-a89d-66b8c1f0c2ce) Merge cells: merge selected cells.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5e8a45ee-68a2-46f2-a52c-4198b1937618) Split cell: split previously merged cells.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/091fa4a2-996d-4040-a42c-d992910b0b8c) Align left: align the contents of selected cells to the left.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c4ddfd53-c714-427a-8219-a5dd9b136f69) Align center: align the contents of selected cells to the center horizontally.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a62bb40e-96b8-45e6-b7e5-4cc11e9cab82) Align right: align the contents of selected cells to the right.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ff5205cd-f97c-4e00-9265-ef933d38b6e3) Align top: align the contents of selected cells to the top.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5e6d4fa3-a612-47b7-9723-7422b1e774bb) Align vertical center: align the contents of selected cells to the center vertically.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/60daa138-87b1-4ea5-ae9e-531183dc0146) Align bottom: top align the contents of selected cells to the bottom.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4fc1abb8-6720-44d8-8a86-6ea4b3c08aa2) Style bold: set the contents of selected cells to bold.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9bea5917-27de-4097-9229-76584a595c89) Style italic: set the contents of selected cells to italic.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8e5a1e47-9304-4c2f-a27c-657ede886656) Style underline: set the contents of selected cells to underlined.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/17a1930a-0b6d-46a6-9836-2950d9ea6d51) Set alias: set the alias for a selected cell.
- `Black` and `White` set the foreground and the background colors of selected cells.

## Preferences

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9c4c9afa-25b8-48e3-82a6-fa5edc8943cf) Preferences: the preferences for the Spreadsheet Workbench. introduced in version 0.20

## Insert and remove rows and columns

Rows and columns can be inserted or removed by right-clicking a row or column header and selecting the appropriate option from the contex menu. It is possible to select multiple rows or columns first. Either by holding down the `Ctrl` key while selecting the headers, or by holding down the left mouse button and dragging.

In FreeCAD version 0.19 and earlier rows are inserted above the selected rows, and columns on the left of the selected columns. In FreeCAD version 0.20 you can specify the insertion side.

Note that removing rows or columns with data can break the spreadsheet and your model if it relies on the spreadsheet. You are not prewarned if this happens.

## Cut and copy-paste cells

Cut and copy-paste operations can be used on cells in FreeCAD spreadsheets. You can use the normal shortcuts for these operations: `Ctrl`+`X`, `Ctrl`+`C`, and `Ctrl`+`V` respectively. To select multiple cells hold down the `Ctrl` key while selecting, or hold down the left mouse button and drag to select a rectangular cell range.

The cut and copy operations store the contents and properties of the cells on the Clipboard. The paste operation writes the data in such a way that the content of the top left cell of the stored data is dropped in the active cell. Other stored content is placed relative to that cell. Formulas are updated accordingly.

Note that removing cells with data can break the spreadsheet and your model if it relies on the spreadheet. You are not prewarned if this happens.

In FreeCAD version 0.19 and earlier there is a bug that can cause FreeCAD to hang if a non-rectangular cell range is pasted. It is advisable to save your work before performing any paste operations.

## Cell properties

The properties of a spreadsheet cell can be edited by right-clicking the cell and selecting **Properties...** from the context menu. The following dialog pops up:  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/60c1ca63-84d8-48a3-9236-3e989b71da2a)  

As indicated by the tabs, the following properties can be changed:
- Color: Text color and background color
- Alignment: Text horizontal and vertical alignment
- Style: Text style: bold, italic, underline
- Units: Display units for this cell. Please read the [Units](https://wiki.freecad.org/Spreadsheet_Workbench#Units) section below.
- Alias: Define an [alias](https://wiki.freecad.org/Spreadsheet_SetAlias) for this cell. This alias can be used in cell formulas and also in general [expressions](https://wiki.freecad.org/Expressions); see section [Spreadsheet data in expressions](https://wiki.freecad.org/Spreadsheet_Workbench#Spreadsheet_data_in_expressions) for more information.

## Cell expressions
A spreadsheet cell may contain a number, a text or an expression. Expressions must start with an equal sign '='.

Cell expressions may contain numbers, functions, references to other cells, and references to properties of the model (But see [Current limitations](https://wiki.freecad.org/Spreadsheet_Workbench#Current_limitations) below). A cell can be referenced by its address (CAPITAL column letter + row number, e.g. B4) or by its [alias](https://wiki.freecad.org/Spreadsheet_SetAlias).

**Note**: Cell expressions are treated by FreeCAD as programming code. Therefore, when you edit a cell the content you see may not follow your display settings:
- The decimal separator is always a dot. But commas can also be used when entering values.
- The number of displayed decimals can differ from your [preferences settings](https://wiki.freecad.org/Preferences_Editor#Units).

References to objects in the model are explained under [References to CAD-data below](https://wiki.freecad.org/Spreadsheet_Workbench#References_to_CAD-data). Using spreadsheet cell values to define model properties are explained under [Spreadsheet data in expressions below](https://wiki.freecad.org/Spreadsheet_Workbench#Spreadsheet_data_in_expressions). For more information on expressions and the available functions, see [Expressions](https://wiki.freecad.org/Expressions).

## Interaction between spreadsheets and the CAD model

Data in the cells of a spreadsheet may be used in CAD model parameter expressions. Thus, a spreadsheet may be used as the source for parameter values used throughout a model, effectively gathering the values in one place. When values are changed in the spreadsheet, they are propagated throughout the model.

Similarly, properties from CAD model objects may be used in expressions in spreadsheet cells. This allows use of object properties like volume or area in the spreadsheet. If the name of an object in the CAD model is changed, the change will automatically be propagated to any references in spreadsheet expressions using the name which was changed.

More than one spreadsheet may be used in a document. A spreadsheet can be identified using either its name or its label.

FreeCAD will automatically assign a unique name to a spreadsheet when it is created. These names follow the pattern `Spreadsheet`, `Spreadsheet001`, `Spreadsheet002` and so on. The name can not be changed, and it is not visible in the properties of the spreadsheet. It can be used to refer to the spreadsheet in an [Expression](https://wiki.freecad.org/Expressions) (see [Spreadsheet data in expressions](https://wiki.freecad.org/Spreadsheet_Workbench#Spreadsheet_data_in_expressions) below.)

The label of a spreadsheet is automatically set to the name of the spreadsheet upon creation. Unlike the name, the label can be changed, for example in the properties panel or using the context menu action Rename. By default FreeCAD does not accept duplicate labels, but there is a [preference](https://wiki.freecad.org/Preferences_Editor#Document) to override this. Spreadsheets with duplicate labels in the same document cannot be referenced by their label.

FreeCAD checks for cyclic dependencies. See [Current limitations](https://wiki.freecad.org/Spreadsheet_Workbench#Current_limitations).

### References to CAD-data

As indicated above, one can reference data from the CAD model in spreadsheet expressions.

The following table shows some examples assuming the model has a feature named "MyCube":

| **CAD-Data** | **Cell in Spreadsheet** | **Result** |
| -- | -- | -- |
| Parametric Length of a Part-Workbench Cube | `=MyCube.Length` | Length with units mm |
| Volume of the Cube | `=MyCube.Shape.Volume` | Volume in mm³ without units |
| Type of the Cube-shape | `=MyCube.Shape.ShapeType` | String: Solid |
| Label of the Cube | `=MyCube.Label` | String: MyCube |
| X coordinate of the center of mass of the Cube | `=MyCube.Shape.CenterOfMass.x` | Coordinate in mm without units |

### Spreadsheet data in expressions

In order to use spreadsheet data in other parts of FreeCAD, you will usually create an [Expression](https://wiki.freecad.org/Expressions) that refers to the spreadsheet and the cell that contains the data you want to use. You can identify spreadsheets by name or by label, and you can identify the cells by address or by alias. Autocompletion is available for all forms of referencing.

|  | **Spreadsheet by Name** | **Spreadsheet by Label** |
| -- | -- | -- |
| Cell by Address | `=Spreadsheet042.B5` | `=<<MySpreadsheet>>.B5`|
| Cell by Alias | `=Spreadsheet042.MyAlias` | `=<<MySpreadsheet>>.MyAlias` |

The recommended way to refer to spreadsheet data is to use the spreadsheet label and cell alias name. For a more in-depth explanation of the pros and cons of the referencing modes, see the section below.

Using the spreadsheet label has the advantage that it can be freely changed to describe the contents of the spreadsheet. It is also easier to identify the spreadsheet that is being used since the text in the expression matches the label shown in the model and property views. If you decide to change the label of a spreadsheet, existing references to the contents of the spreadsheet will be updated, so you won't break your expressions by renaming the spreadsheet. The internal name of the spreadsheet is not readily available anywhere except within the expression editor, so if you use the internal name and later decide to rename the spreadsheets, you might have a hard time tracing your expression data back to its source.

Be aware that when you create a new spreadsheet, the name and the label are the same, so it is easy to accidentally use the spreadsheet name instead of the label. A simple way to avoid this is to give the spreadsheet a meaningful name before starting to use it in expressions.

While you may use the row and column number in an expression to reference a cell, best practice is to give the cell an alias name and use that. See [Cell properties](https://wiki.freecad.org/Spreadsheet_Workbench#Cell_properties) on how to set the alias. For example, if the data in cell B1 contained the length parameter for an object, an alias name of `MyObject_Length` would allow the value to be referred to as `<<MyParams>>.MyObject_Length` instead of `Spreadsheet.B1`. Besides being much easier to read and understand, alias names are also much easier to change if you decide to adjust the structure of your spreadsheet. Using an alias also has the advantage that it is reasier to see which cells are used to control other parts of the document. Note that FreeCAD will automatically adjust the positional references in expressions if you insert or remove rows and columns in the spreadsheet, so even if you use row and column numbers in an expression, you can insert rows and columns without breaking the references to the surrounding cells.

### Complex models and recomputes

Editing a spreadsheet will trigger a recompute of the 3D model, even if the changes do not affect the model. For a complex model a recompute can take a long time, and having to wait after every single edit is of course quite annoying.

There are three solutions to deal with this:
  1. Temporarily skip recomputes:
     - In the [Tree view](https://wiki.freecad.org/Tree_view), right-click the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/649ec329-0e30-4a8a-a2cc-99edb7e1a02c) document that contains the spreadsheet.
     - Select the **Skip recomputes** option from the context menu.
     - There is a big disadvantage to this solution. New values entered in the spreadsheet will not be displayed until the document is recomputed. Instead `#PENDING` is shown.
     - You can either recompute manually, using the [Std Refresh](https://wiki.freecad.org/Std_Refresh) command, or disable **Skip recomputes** when you are done editing.
  2. Use a macro to automatically skip recomputes while editing a spreadsheet:
     - Download and run [skipSheet.FCMacro](https://forum.freecadweb.org/viewtopic.php?f=8&t=48600#p419301).
     - This solution saves a few steps compared to the first solution, but also has the mentioned disadvantage.
  3. Put the spreadsheet in a separate [FreeCAD file](https://wiki.freecad.org/File_Format_FCStd):
     - You can reference spreadsheet data from an external **.FCStd** file with this syntax: `=NameOfFile#<<MySpreadsheet>>.MyAlias`.
     - The advantage of having the spreadsheet in another file over switching off recomputes is that the spreadsheet itself does get recomputed.
     - The disadvantage is that the model won't automatically recompute after changes to the spreadsheet.
     - In the scenario where you first open the 'spreadsheet' file, change one or more values and then open the 'model' file, there won't be any indication that the model needs to be recomputed. But if both files are open the [Std Refresh](https://wiki.freecad.org/Std_Refresh) icon will update correctly for the 'model' file after changes to the 'spreadsheet' file.

## Units

The Spreadsheet has a notion of dimension (units) associated with cell values. A number entered without an associated unit has no dimension. The unit should be entered immediately following the number value, with no intervening space. If a number has an associated unit, that unit will be used in all calculations. For example, the multiplication of two lengths with the unit mm gives an area with the unit mm².

If a cell contains a value which represents a dimension, it should be entered with its associated unit. While in many simple cases one can get by with a dimensionless value, it is unwise to not enter the unit. If a value representing a dimension is entered without its associated unit, there are some sequences of operations which cause FreeCAD to complain of incompatible units in an expression when it appears the expression should be valid. (This may be better understood by viewing this [thread](https://forum.freecadweb.org/viewtopic.php?f=3&t=34713&p=292455#p292438) in the FreeCAD forum.)

You can change the units displayed for a cell value using the [Cell properties dialog](https://wiki.freecad.org/Spreadsheet_Workbench#Cell_properties). This does not change the value contained in the cell; it only converts the existing value for display. The value used for calculations does not change, and the results of formulas using the value do not change. For example, a cell containing the value "5.08cm" can be displayed as "2in" by changing the units tab value to "in".

A dimensionless number cannot be changed to a number with a unit by the cell properties dialog. One can put in a unit string, and that string will be displayed; but the cell still contains a dimensionless number. In order to change a dimensionless value to a value with a dimension, the value itself must be re-entered with its associated unit.

Occasionally it may be desirable to get rid of a dimension in an expression. This can be done by multiplying by 1 with a reciprocal unit.

## Importing and exporting

### CSV format

FreeCAD spreadsheets can be imported and exported to the [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) format which can also be read and written by most other spreadsheet applications such as Microsoft Excel or LibreOffice Calc. See [Spreadsheet Import](https://wiki.freecad.org/Spreadsheet_Import) and [Spreadsheet Export](https://wiki.freecad.org/Spreadsheet_Export) for more information.

### XLSX format

Spreadsheets in the Excel-format XLSX can be imported with the [Std Import](https://wiki.freecad.org/Std_Import) command or the [Std Open](https://wiki.freecad.org/Std_Open) command. The following features are supported:
- All functions that are also available in the FreeCAD spreadsheet. Other functions give an error in the corresponding cell after import.
- Alias names for cells.
- More than one sheet in the Excel-spreadsheet. In this case one FreeCAD spreadsheet is created for each Excel sheet.
  
Other functionality is not imported into the FreeCAD spreadsheet.

## Printing

To handle the page setup necessary for printing, FreeCAD spreadsheets are printed by inserting them into a [TechDraw Spreadsheet View](https://wiki.freecad.org/TechDraw_SpreadsheetView).

## Current limitations

FreeCAD checks for cyclic dependencies when it recomputes. By design, that check stops at the level of the spreadsheet object. As a consequence, you should not have a spreadsheet which contains both cells whose values are used to specify parameters to the model, and cells whose values use output from the model. For example, you cannot have cells specifying the length, width, and height of an object, and another cell which references the total volume of the resulting shape. This restriction can be surmounted by having two spreadsheets: one used as a data-source for input parameters to the model and the other used for calculations based on resultant geometry-data.

## Cell binding

[introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)

It is possible to bind the content of cells to other spreadsheet cells. This can be useful when dealing with large tables or to get cell content from another spreadsheet.

### Create binding

To bind, for example, the cell range A3-C4 to the cell range B1-D2:
1. Select the cell range A3-C4.
2. Right-click and select **Bind...** from the context menu.
3. The **Bind Spreadsheet Cells** dialog opens.
4. Set the range B1-D2 for the **To cells**:  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b175d679-654b-435d-8165-03890f3ccf49)
5. Press `OK`.
6. Bound cells have a blue border to highlight the binding.
7. If you now enter something in cell C1, the same will immediately appear in cell B3.
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/701f99b3-cb09-4866-9fa5-7e73131a9460)  
_The spreadsheet may now look like this_

### Change binding

1. Right-click a bound cell (there is no need to highlight the whole bound range) and select **Bind...** from the context menu.
2. The **Bind Spreadsheet Cells** dialog opens.
3. Change one or more options. Note that the **Bind cells**, the bound cell range, cannot be changed.
4. Press `OK`.

### Remove binding

1. Right-click a bound cell (there is no need to highlight the whole bound range) and select **Bind...** from the context menu.
2. The **Bind Spreadsheet Cells** dialog opens.
3. Press `Unbind`.

### Notes

- The **Hide dependency of binding** option can be used to prevent problems with cyclic dependencies between spreadsheets. Selecting it is necessary when, for example, cells in _Spreadsheet A_ are bound to _Spreadsheet B_, while cells in _Spreadsheet B_, in turn, are bound to some other cells in _Spreadsheet A_. This option should be used with caution:
  - Hiding dependencies can be dangerous because broken dependencies can damage your FreeCAD file. For example, when you delete a spreadsheet you will not be warned about hidden dependencies.
  - When you open a document with a spreadsheet containing a hidden dependency, you will get the spreadsheet marked to be recomputed. This is because a cyclic dependency cannot be recomputed automatically. To recompute the [Std Refresh](https://wiki.freecad.org/Std_Refresh) tool must be used.
- The cell binding has a range check and warns you about mismatched ranges. For example binding 1x3 cells to 3x2 cells cannot work because it is unknown which 3 cells of the original 6 cells should be used.
- You cannot change the cell range of an existing binding. You must first unbind the cells and then create a new binding.
- The frame color indicating the binding cannot be changed yet.

## Configuration tables

[introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)

You can use Spreadsheets to create configuration tables with sets of predefined parameters for your model, and then dynamically change which configuration to use. See [this Forum post](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183) if you want to know more about the inner workings of this feature.

###  Brief tutorial on creating a configuration table

1. In a new document, first create a [Std Part](https://wiki.freecad.org/Std_Part), then create a [Part Box](https://wiki.freecad.org/Part_Box), a [Part Cylinder](https://wiki.freecad.org/Part_Cylinder) and a Spreadsheet.
2. The Box and the Cylinder are automatically placed in the [Std Part](https://wiki.freecad.org/Std_Part) container. Manually put the Spreadsheet in the container as well.
3. In the Spreadsheet enter the content as shown below. Set the alias for B2 as `width`, C2 as `length`, and D2 as `radius`:  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/04112b5e-129c-4c68-9d7b-257a9446ba24)  
4. Bind the [expressions](https://wiki.freecad.org/Expressions) `Spreadsheet.width` and `Spreadsheet.length` to the Box's properties **Width** and **Length**, respectively:
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2258e09a-25bf-4d8f-810c-c2031d64e4d5)  
5. Bind the expression `Spreadsheet.radius` to the Cylinder's property **Radius**. Also change the **Height** of the Cylinder to `5 mm` so that it is lower than the Box.
6. Right-click the cell A2 in the Spreadsheet and select **Configuration table...** from the context menu.
7. The **Setup Configuration Table** dialog opens.
8. Enter the following:  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/812b33ce-6a7d-4ab3-bbc4-91d5af335086)  
9. Press `OK`.
10. A new property called **Configuration** is be added to the [Std Part](https://wiki.freecad.org/Std_Part) container to choose the configuration as shown below:
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1c76b9cf-e74a-4cdb-bf23-a1f69a21f8b3)

You can use either a [Std Link](https://wiki.freecad.org/Std_LinkMake) or a [PartDesign SubShapeBinder](https://wiki.freecad.org/PartDesign_SubShapeBinder) to instantiate a [Variant Instance](https://forum.freecadweb.org/viewtopic.php?f=17&t=42183&p=532130#p532130) of a configurable object with the following steps:
1. Create a [Std Link](https://wiki.freecad.org/Std_LinkMake) to the [Std Part](https://wiki.freecad.org/Std_Part) container and set its **Link Copy On Change** property to `Enabled`.
2. Move the Link to a new place by changing its **Placement** so that it is easier to distinguish from the original object.
3. Select a different **Configuration** for the Link to create a variant instance.
   
Similar steps apply to a [PartDesign SubShapeBinder](https://wiki.freecad.org/PartDesign_SubShapeBinder), except that its property for activating a variant instance is called **Bind Copy On Change**.

## Scripting basics

```
import Spreadsheet
sheet = App.ActiveDocument.addObject("Spreadsheet::Sheet","MySpreadsheet")
sheet.Label = "Dimensions"

sheet.set('A1','10mm')
sheet.recompute()
sheet.get('A1')

sheet.setAlias('B1','Diameter')
sheet.set('Diameter','20mm')
sheet.recompute()
sheet.get('Diameter')
```
