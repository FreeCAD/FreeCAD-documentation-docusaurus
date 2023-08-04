# TechDraw Workbench

## Introduction

The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7c83eade-2c54-4e5b-a1d3-486ff8f6bfb0) TechDraw Workbench is used to produce basic technical drawings from 3D models created with another workbench, such as [Part](docs\workbenches\part.md), [PartDesign](docs\workbenches\part-design.md), or [Arch](docs\workbenches\arch.md), or imported from other applications. Each drawing is a Page, which can contain various Views of drawable objects such as Part::Features, PartDesign::Bodies, App::Part groups, and Document Object groups. The resulting drawings can be used for things like documentation, manufacturing instructions, contracts, permits, etc.

Dimensions, sections, hatched areas, annotations, and [SVG](https://wiki.freecad.org/SVG) symbols can be added to the page, which can be further exported to different formats like [DXF](https://wiki.freecad.org/DXF), [SVG](https://wiki.freecad.org/SVG), and [PDF](https://wiki.freecad.org/PDF).

If your primary goal is the production of complex 2D drawings and [DXF](https://wiki.freecad.org/DXF) files, and you don't need 3D modelling, FreeCAD may not be the right choice for you. You may wish to consider a dedicated software program for technical drafting instead, such as [LibreCAD](https://en.wikipedia.org/wiki/LibreCAD) or [QCad](https://en.wikipedia.org/wiki/QCad).

![TechDraw workbench icon](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1c68621d-3ad3-4cea-a29f-32c8db7b3dd1)  
_TechDraw workbench icon_  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4a7fa477-fa86-41bc-b1c7-e071d92fc39d)  

## Pages

These are tools for creating Page objects.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/64e990ad-3fa8-4bb5-94d9-b47f7a65e357) [Insert Default Page](https://wiki.freecad.org/TechDraw_PageDefault): adds a new page using the default [template](https://wiki.freecad.org/TechDraw_Templates).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e02071f2-86d6-4757-9990-d3bb215ad3df) [Insert Page using Template](https://wiki.freecad.org/TechDraw_PageTemplate): adds a new page using a selected [template](https://wiki.freecad.org/TechDraw_Templates).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a6db5d92-8105-49e9-b541-002bf9a7d3da) [Redraw Page](https://wiki.freecad.org/TechDraw_RedrawPage): forces an update of the selected page.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5541ced6-1b14-471f-af4a-02756f024344) [Print All Pages](https://wiki.freecad.org/TechDraw_PrintAll): prints all pages in a document. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)

## Views

These are tools for creating View objects.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f1b86170-a684-4f32-952a-e8becc53f499) [Insert View](https://wiki.freecad.org/TechDraw_View): adds a 2D projection view of an object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7aed95c9-684a-4f48-ac00-ff8aebb724b4) [Insert Active View](https://wiki.freecad.org/TechDraw_ActiveView): inserts a view of the active 3D view.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5fd7c1a5-b0e3-45db-8185-4196c456c565) [Insert Projection Group](https://wiki.freecad.org/TechDraw_ProjectionGroup): invokes a dialog to create multiple views of an object from different directions.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7bf715d3-c34d-4b53-aa6e-17630a20fe50) Insert Section Views:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2eb219c7-51ed-458c-8eb1-fb9da73f0ce4) [Insert Simple Section View](https://wiki.freecad.org/TechDraw_SectionView): inserts a cross-section view of an existing view.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0f5e974e-2fd2-461d-a899-26a7655be6af) [Insert Complex Section View](https://wiki.freecad.org/TechDraw_ComplexSection): inserts a cross-section view of an existing view based on a profile. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f7f0d856-ae3c-46b8-9284-cd12c6bd2923) [Insert Detail View](https://wiki.freecad.org/TechDraw_DetailView): inserts a detail view of a portion of an existing view.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f814018f-96d0-4c19-8a12-aed0d0f2dd52) [Insert Draft Workbench Object](https://wiki.freecad.org/TechDraw_DraftView): inserts a view of a [Draft Workbench](docs\workbenches\draft.md) object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/01208593-bc5f-426e-89f5-5700deb8137c) [Insert Arch Workbench Object](https://wiki.freecad.org/TechDraw_ArchView): inserts a view of an [Arch Workbench](docs\workbenches\arch.md) [Section Plane](https://wiki.freecad.org/Arch_SectionPlane) object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1a366514-fe4e-45cc-8d21-1187bdfbf66e) [Insert Spreadsheet View](https://wiki.freecad.org/TechDraw_SpreadsheetView): inserts a view of a [Spreadsheet Workbench](docs\workbenches\spreadsheet.md) sheet.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c84a07a8-0c3d-4268-aa52-08e13c4caf77) [Move View](https://wiki.freecad.org/TechDraw_MoveView): moves a view and its dependents to a different page. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6818bd01-2f2c-49cd-8cb7-864090fbb307) [Share View](https://wiki.freecad.org/TechDraw_ShareView): shares a view between multiple pages. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5cbcd2d5-2963-4d31-a643-7cf7fd370937) [Project Shape](https://wiki.freecad.org/TechDraw_ProjectShape): creates projections of shapes in the [3D view](https://wiki.freecad.org/3D_view). [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)

## Stacking

These are tools for changing the stacking order which controls the apparent depth of views on a page.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a40a77cf-3899-453e-9337-48728562aa9c) Adjust Stacking Order:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d01250e9-e376-463b-95e2-81bfb4274d80) [Move view to top of stack](https://wiki.freecad.org/TechDraw_StackTop): moves views to the top of the stacking order. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e6ada473-15c4-42a6-ae46-7775013d9b3a) [Move view to bottom of stack](https://wiki.freecad.org/TechDraw_StackBottom): moves views to the bottom of the stacking order. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c0c96437-7e54-4eef-b668-67dd2a87cfa6)[ Move view up one level](https://wiki.freecad.org/TechDraw_StackUp): moves views up one level in the stacking order. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a7aaae74-da64-4676-856d-3599530dac34) [Move view down one level](https://wiki.freecad.org/TechDraw_StackDown): moves views down one level in the stacking order. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)

## Clips

These are tools to create and manage Clip objects (clipped views).

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/959701d1-e3cf-418e-93e1-f1a63547e966) [Insert Clip Group](https://wiki.freecad.org/TechDraw_ClipGroup): inserts a clip group into a page.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/12d8deba-35bc-4912-bbf4-b55a32ab2819) [Add View to Clip Group](https://wiki.freecad.org/TechDraw_ClipGroupAdd): adds an existing view to a clip group.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cbc20ad8-f92e-4fb2-b0b5-1cbbb35c252e) [Remove View from Clip Group](https://wiki.freecad.org/TechDraw_ClipGroupRemove): removes a view from a clip group.

## Decorations

These are tools to decorate pages or views:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cd608b25-3ef2-4ddd-92d0-605d23a00c05) [Hatch Face using Image File](https://wiki.freecad.org/TechDraw_Hatch): applies a hatch pattern from a file to a face.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/74a63bce-11a4-43b1-b893-429bcdfdc211) [Apply Geometric Hatch to Face](https://wiki.freecad.org/TechDraw_GeometricHatch): applies a hatch pattern to a face using an Autodesk PAT specification.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f7dc0216-742a-4157-855b-1a1e4791376d) [Insert SVG Symbol](https://wiki.freecad.org/TechDraw_Symbol): inserts a symbol from a [SVG](https://wiki.freecad.org/SVG) file into a page.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bfc216d7-25a2-48ca-9f74-230b6aa8f939) [Insert Bitmap Image](https://wiki.freecad.org/TechDraw_Image): inserts a PNG or JPG [bitmap](https://wiki.freecad.org/Bitmap) image into a page.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5600760a-34e8-436a-ba71-be097708e3f4) [Turn View Frames On/Off](https://wiki.freecad.org/TechDraw_ToggleFrame): turns on/off frames and labels surrounding a view.

## Export

These are tools for exporting pages to other applications.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8e30f82e-3395-480e-b3f2-6f06deac14a3) [Export Page as SVG](https://wiki.freecad.org/TechDraw_ExportPageSVG): saves the current page as [SVG](https://wiki.freecad.org/SVG) file.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3c84226f-9785-4e11-980f-05da6f3e876d) [Export Page as DXF](https://wiki.freecad.org/TechDraw_ExportPageDXF): saves the current page as [DXF](https://wiki.freecad.org/DXF) file.
  
## Additional features

- [Line Groups](https://wiki.freecad.org/TechDraw_LineGroup): to control the appearance of various types of lines.
- [Templates](https://wiki.freecad.org/TechDraw_Templates): the default templates defined for the drawing pages.
- [Hatching](https://wiki.freecad.org/TechDraw_Hatching): explanation of the different hatching techniques.
- [Geometric dimensioning and tolerancing](https://wiki.freecad.org/TechDraw_Geometric_dimensioning_and_tolerancing): explanation on how to achieve geometric dimensioning and tolerancing.

## Preferences

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b659dfec-ea6b-4dcd-8499-9dbcbed91648)[Preferences](https://wiki.freecad.org/TechDraw_Preferences): preferences for the default values of the drawing page such as projection angle, colors, text sizes, and line styles.

## Scripting

The TechDraw tools can be used in macros and from the Python console. For more information, see:
- [Autogenerated API documentation](https://freecad.github.io/SourceDoc/)
- [FreeCAD Scripting Basics](docs\python-scripting\python-in-freecad.md)
- [Editable Text Fields](https://wiki.freecad.org/TechDraw_PageDefault#Editable_text_fields)
  
## Limitations

- Do not cut, copy and paste TechDraw objects in the [Tree view](https://wiki.freecad.org/Tree_view) as this generally does not work out well.
- Do not drag TechDraw objects in the [Tree view](https://wiki.freecad.org/Tree_view) with the mouse.

## Tutorials

- [Basic TechDraw Tutorial](https://wiki.freecad.org/Basic_TechDraw_Tutorial): introduction to creating drawings with the TechDraw Workbench.
- [Creating a new template](https://wiki.freecad.org/TechDraw_TemplateHowTo): instructions to create a new page template in Inkscape for using with the TechDraw Workbench.
- [TechDraw TemplateGenerator](https://wiki.freecad.org/TechDraw_TemplateGenerator): instructions to create a macro for generating a basic template.
A "few" added lines of code result in a tool like the [Macro TemplateHelper](https://wiki.freecad.org/Macro_TemplateHelper).
- [Measurement Of Angles On Holes](https://wiki.freecad.org/Measurement_Of_Angles_On_Holes): instructions for adding centerlines and subsequent angle representations on holes.
- [Miscellaneous](https://wiki.freecad.org/TechDraw_HowTo_Page): instructions for different settings like center marks, etc.
- [TechDraw Pitch Circle Tutorial](https://wiki.freecad.org/TechDraw_Pitch_Circle_Tutorial): instructions for adding a pitch circle.

Video tutorials by sliptonic:
  - [Part 1](https://www.youtube.com/watch?v=7LbOmSGW9F0) (Basics)
  - [Part 2](https://www.youtube.com/watch?v=z3w84RfvqaE) (Dimensions)
  - [Part 3](https://www.youtube.com/watch?v=uNjXg-m38aI) (Multiview)
  - [Part 4](https://www.youtube.com/watch?v=3zSdeFV6I5o) (Section and Detail)
  - [Part 5](https://www.youtube.com/watch?v=kcmdJ7xa7gg) (Customizing Templates)

## Development

Do you want to know about the future of the TechDraw Workbench? Visit the [TechDraw Roadmap Page](https://wiki.freecad.org/TechDraw_Roadmap) to learn more.
