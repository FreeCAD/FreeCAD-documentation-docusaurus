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

## Dimensions

These are tools for creating and working with Dimension objects.

Linear dimensions can be based on two points, on one line, or on two lines.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e13987bc-896b-4c4b-bcca-fce3a06cad5e) [Insert Length Dimension](https://wiki.freecad.org/TechDraw_LengthDimension): adds a length dimension.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b999fe7-e72c-44d6-ba84-8240127e0d17) [Insert Horizontal Dimension](https://wiki.freecad.org/TechDraw_HorizontalDimension): adds a horizontal length dimension.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/30dc12ed-87ff-4d91-82b7-c0cb9fead9c1) [Insert Vertical Dimension](https://wiki.freecad.org/TechDraw_VerticalDimension): adds a vertical length dimension.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fe462eb9-e8b5-4681-aa97-7934b61cdddf) [Insert Radius Dimension](https://wiki.freecad.org/TechDraw_RadiusDimension): adds a radius dimension to a circle or circular arc.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/216d431f-c699-4578-b10f-384f612d991a) [Insert Diameter Dimension](https://wiki.freecad.org/TechDraw_DiameterDimension): adds a diameter dimension to a circle or a circular arc.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2a485d14-4872-45b6-a814-d63f5aaa28be) [Insert Angle Dimension](https://wiki.freecad.org/TechDraw_AngleDimension): adds an angle dimension between two straight edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6aeabb3a-51f4-42ce-8e43-e762443e2064) [Insert 3-Point Angle Dimension](https://wiki.freecad.org/TechDraw_3PtAngleDimension): adds an angle dimension using three vertices.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bb95f43b-d947-44a8-8620-bff96191b7f4) Insert Extent Dimensions:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/35b35b7b-7fd9-44ca-b0c4-8d20eb8a9a3f) [Insert Horizontal Extent Dimension](https://wiki.freecad.org/TechDraw_HorizontalExtentDimension): adds a horizontal extent dimension.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9e22b7e3-d67b-4431-a9ce-a4b97de7ea0c) [Insert Vertical Extent Dimension](https://wiki.freecad.org/TechDraw_VerticalExtentDimension): adds a vertical extent dimension.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0fd26a6f-0e66-4f48-80bf-711a83edf761) [Link Dimension to 3D Geometry](https://wiki.freecad.org/TechDraw_LinkDimension): links an existing dimension to the 3D geometry.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e501bdd0-b2e3-4078-bcb5-9c48f4e8bfab) [Insert Balloon Annotation](https://wiki.freecad.org/TechDraw_Balloon): adds a "balloon" annotation to a page.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5be18aaa-1c6a-44d6-befa-b301777baac0) [Insert Axonometric Length Dimension](https://wiki.freecad.org/TechDraw_AxoLengthDimension): adds an axonometric length dimension. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/07da2b97-a207-45dd-a095-f0183147810d) [Insert Landmark Dimension (EXPERIMENTAL)](https://wiki.freecad.org/TechDraw_LandmarkDimension): adds a landmark distance dimension.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bd09f049-04fa-459b-b7d5-b3c16b4ec66c) [Dimension Repair](https://wiki.freecad.org/TechDraw_DimensionRepair): can adjust the 2D or 3D geometry references of a dimension. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)

## Annotations

The annotation tools are for "marking up" a drawing with additional information.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a11eaa74-c1e6-480d-9ed4-989b162068df) [Insert Annotation](https://wiki.freecad.org/TechDraw_Annotation): adds a plain text block as annotation.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/db41e441-5073-4e14-9f23-b2194781493f) [Add Leaderline to View](https://wiki.freecad.org/TechDraw_LeaderLine): adds a leaderline to a view.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7efc1ce2-504d-4f93-98f2-c67e3b79a8da) [Insert Rich Text Annotation](https://wiki.freecad.org/TechDraw_RichTextAnnotation): adds an rich text block as annotation to a leaderline or a view.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b3f681a-3d08-4ea4-8391-5fcd713d12f4) Add Cosmetic Vertices:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/12fbfac2-dd4c-4337-ab8c-a57af5d42dee) [Add Cosmetic Vertex](https://wiki.freecad.org/TechDraw_CosmeticVertex): adds a Vertex which is not part of the source geometry.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b53c3b64-a8a4-4ac1-a3c0-39ba3e38eed0) [Add Midpoint Vertices](https://wiki.freecad.org/TechDraw_Midpoints): adds Cosmetic Vertices at midpoints of selected edges.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c832353a-947b-46c8-bac5-ecb2eec78223) [Add Quadrant Vertices](https://wiki.freecad.org/TechDraw_Quadrants): adds Cosmetic Vertices at quarter points of selected (circular) edges.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/743a7c79-c7aa-48ec-8dba-5cf8416192c5) Add Centerlines:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3b978d0f-24c1-492d-9de3-cadeaa2964aa) [Add Centerline to Faces](https://wiki.freecad.org/TechDraw_FaceCenterLine): adds a centerline to selected face(s).
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/73c7fea6-ecc0-4777-8abe-9425e4b639eb) [Add Centerline between 2 Lines](https://wiki.freecad.org/TechDraw_2LineCenterLine): adds a centerline between 2 lines.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4bb90a3c-929f-45a0-8ac0-64c9f71c88d4) [Add Centerline between 2 Points](https://wiki.freecad.org/TechDraw_2PointCenterLine): adds a centerline between 2 points.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9351db4e-b285-4c01-9b8e-ab55133e051e) [Add Cosmetic Line Through 2 points](https://wiki.freecad.org/TechDraw_2PointCosmeticLine): adds a cosmetic line connecting 2 vertices.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d028cc87-d6e9-4576-be5c-af78ef363c32) [Remove Cosmetic Object](https://wiki.freecad.org/TechDraw_CosmeticEraser): removes cosmetic objects from a page.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fe3e7759-d5b5-4c9d-b9b9-df4624ed3883) [Change Appearance of Lines](https://wiki.freecad.org/TechDraw_DecorateLine): changes the appearance of selected line(s).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b5e4905a-a3fe-4746-9540-02fe7fac369a) [Show/Hide Invisible Edges](https://wiki.freecad.org/TechDraw_ShowAll): shows/hides invisible lines/edges in a view.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5ef9e626-04bf-47d0-a3c8-dd82ad460094) [Add Welding Information to Leader](https://wiki.freecad.org/TechDraw_WeldSymbol): adds welding specifications to an existing leaderline.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c20c015a-db06-4f1b-8d88-c43c6042fcd7) [Add Surface Finish Symbol](https://wiki.freecad.org/TechDraw_SurfaceFinishSymbol): adds a surface finish symbol to a page. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/914eb750-f53f-4ef9-bb5d-562fdd7af756) [Add Hole/Shaft Fit](https://wiki.freecad.org/TechDraw_HoleShaftFit): adds hole or shaft tolerances using ISO 286 to a dimension. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)

## Extensions

These are tools to improve your TechDraw drawings. ([introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20))

### Attributes and modifications 

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a80c1bfc-5f68-494f-9260-afb1a47e92c6) [Select Line Attributes, Cascade Spacing and Delta Distance](https://wiki.freecad.org/TechDraw_ExtensionSelectLineAttributes): selects the attributes (style, width and color) for new cosmetic lines and centerlines, and specifies the cascade spacing and delta distance.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8b66d3bf-b65b-4c74-bfed-b8f4a3da1fa1) [Change Line Attributes](https://wiki.freecad.org/TechDraw_ExtensionChangeLineAttributes): changes the attributes (style, width and color) of cosmetic lines and centerlines. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d3f6dd6e-1dc6-468a-9899-fc4cdb597b07) Change Length of Cosmetic Lines or Centerlines:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/27e27a40-54ee-42f4-aed2-64ad602d9f28) [Extend Line](https://wiki.freecad.org/TechDraw_ExtensionExtendLine): extends a cosmetic line or centerline at both ends. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1906a1c5-2b11-4589-b486-0db8a67672f0) [Shorten Line](https://wiki.freecad.org/TechDraw_ExtensionShortenLine): shortens a cosmetic line or centerline at both ends. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1f45f6c3-5b9b-49d5-b87e-a6b014446ad9) [Lock/Unlock View](https://wiki.freecad.org/TechDraw_ExtensionLockUnlockView): locks or unlocks the position of a view.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4cb2ea2f-9a2e-4ee7-840c-dccf31e404dd) [Position Section View](https://wiki.freecad.org/TechDraw_ExtensionPositionSectionView): orthogonally aligns a section view with its source view.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/119352e9-6f37-4e55-bd7e-3f244ed2f22e) Align Dimensions:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b2d21ad3-98f7-4dd4-8f69-8784d9e4faca) [Position Horizontal Chain Dimensions](https://wiki.freecad.org/TechDraw_ExtensionPosHorizChainDimension): aligns horizontal dimensions to create a chain dimension. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ac65def1-00c3-4fd5-92f8-fd8a5afc203e) [Position Vertical Chain Dimensions](https://wiki.freecad.org/TechDraw_ExtensionPosVertChainDimension): aligns vertical dimensions to create a chain dimension. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b6df1f6a-3f1c-418d-b3a7-727724a266f7) [Position Oblique Chain Dimensions](https://wiki.freecad.org/TechDraw_ExtensionPosObliqueChainDimension): aligns oblique dimensions to create a chain dimension. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/906f1b20-e9ff-49cc-8746-a21898b7ef10) Evenly Space Dimensions:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fe70c879-37c1-4208-8b33-c915b0a202b2) [Cascade Horizontal Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCascadeHorizDimension): evenly spaces horizontal dimensions. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/262b84ea-e5cb-4a5c-abad-9a451b476e89) [Cascade Vertical Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCascadeVertDimension): evenly spaces vertical dimensions. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b9c13aea-b31c-4d36-8f4e-f8b1eb137449) [Cascade Oblique Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCascadeObliqueDimension): evenly spaces oblique dimensions. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3adcbf16-67ed-4ba2-aa86-ecbacc179f45) [Calculate the area of selected faces](https://wiki.freecad.org/TechDraw_ExtensionAreaAnnotation): calculates the area of selected faces and inserts an area annotation. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bc5679e9-5e7e-4c69-b511-45a922d6e3a8) [Customize format label](https://wiki.freecad.org/TechDraw_ExtensionCustomizeFormat): customizes the formatting of a balloon text or dimension text. GD&T symbols and other special character can be added. 

### Centerlines and threading

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ee206fc1-f41f-40bf-b3aa-5efbb1e367be) Add Centerlines:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bb934d5c-b98e-47f8-b683-533a247a652e) [Add Circle Centerlines](https://wiki.freecad.org/TechDraw_ExtensionCircleCenterLines): adds centerlines to circles and arcs. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8e2ca1a1-630a-475e-854e-be804d421e9e) [Add Bolt Circle Centerlines](https://wiki.freecad.org/TechDraw_ExtensionHoleCircle): adds centerlines to a circular pattern of circles. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/643c3fac-663a-4858-bf93-b0b37fe7e18d) Add Cosmetic Threads:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d23b94e3-7935-4d7d-9117-b12f5d0b954a) [Add Cosmetic Thread Hole Side View](https://wiki.freecad.org/TechDraw_ExtensionThreadHoleSide): adds a cosmetic thread to the side view of a hole. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4c036b21-0f4e-4035-9443-9cea58461c66) [Add Cosmetic Thread Hole Bottom View](https://wiki.freecad.org/TechDraw_ExtensionThreadHoleBottom): adds a cosmetic thread to the top or bottom view of holes. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/338f7cff-4c3c-4cbb-aac1-98a9f7660e1f) [Add Cosmetic Thread Bolt Side View](https://wiki.freecad.org/TechDraw_ExtensionThreadBoltSide): adds a cosmetic thread to the side view of a bolt/screw/rod. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/29b08b58-5d78-4457-b8af-62074427bd6e) [Add Cosmetic Thread Bolt Bottom View](https://wiki.freecad.org/TechDraw_ExtensionThreadBoltBottom): adds a cosmetic thread to the top or bottom view of bolts/screws/rods. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/41828498-876c-425f-8f76-35de4244522e) [Add Cosmetic Intersection Vertex(es)](https://wiki.freecad.org/TechDraw_ExtensionVertexAtIntersection): adds cosmetic vertex(es) at the intersection(s) of selected edges. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0d2c51d7-5038-4851-8b8f-23c4205f5aa8) Add Cosmetic Circles or Arcs:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5d882988-9561-448a-8703-22a9ea154479) [Add Cosmetic Circle](https://wiki.freecad.org/TechDraw_ExtensionDrawCosmCircle): adds a cosmetic circle based on two vertexes. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3c2b3f8b-e846-462c-9831-ee9ea9848dba) [Add Cosmetic Arc](https://wiki.freecad.org/TechDraw_ExtensionDrawCosmArc): adds a cosmetic counter clockwise arc based on three vertexes. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1ab5ce05-7198-4226-bf23-6f2fbd00c16a) [Add Cosmetic Circle 3 Points](https://wiki.freecad.org/TechDraw_ExtensionDrawCosmCircle3Points): adds a cosmetic circle based on three vertexes. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/80df505a-dc66-45b1-8187-b70f3a425b1d) Add Cosmetic Parallel or Perpendicular Lines:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/730b45e4-0aa6-464b-b78d-d9a4806fd307) [Add Cosmetic Parallel Line](https://wiki.freecad.org/TechDraw_ExtensionLineParallel): adds a cosmetic line parallel to another line through a vertex.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7fd26fe7-dd9d-4886-9a2e-7607099e6a92) [Add Cosmetic Perpendicular Line](https://wiki.freecad.org/TechDraw_ExtensionLinePerpendicular): adds a cosmetic line perpendicular to another line through a vertex. 

### Dimensions

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/30c50273-b51d-4d11-9cbb-dd4e79b2c160) Create Chain Dimensions:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f997331a-2066-4c0f-9301-e5c6dd2b1abb) [Create Horizontal Chain Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCreateHorizChainDimension): creates a sequence of aligned horizontal dimensions. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6bc273c6-52bc-4b8b-bd72-bf6304ad7347) [Create Vertical Chain Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCreateVertChainDimension): creates a sequence of aligned vertical dimensions. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b45e42bd-fd6b-4aef-86ec-e13715631598) [Create Oblique Chain Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCreateObliqueChainDimension): creates a sequence of aligned oblique dimensions. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/330e04b9-9842-4d32-918d-2143e7e24d2e) Create Coordinate Dimensions:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c650e5d3-1b2f-4c3a-8f5c-18552d346e76) [Create Horizontal Coordinate Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCreateHorizCoordDimension): creates multiple evenly spaced horizontal dimensions starting from the same baseline. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4b01fdf1-f8b7-4f6c-8728-b1fb69cf5304) [Create Vertical Coordinate Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCreateVertCoordDimension): creates multiple evenly spaced vertical dimensions starting from the same baseline. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6e2f3202-cf83-45d5-8808-6b2b1740a482) [Create Oblique Coordinate Dimensions](https://wiki.freecad.org/TechDraw_ExtensionCreateObliqueCoordDimension): creates multiple evenly spaced oblique dimensions starting from the same baseline. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e138f1db-1efc-46c2-a338-6887d6c66d6b) Create Chamfer Dimensions:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/883294a9-da76-4a4f-a0fd-cfc4c537999b) [Create Horizontal Chamfer Dimension](https://wiki.freecad.org/TechDraw_ExtensionCreateHorizChamferDimension): creates a horizontal size and angle dimension for a chamfer. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6f5f63e6-b36d-43c6-a40a-a13064e68e4b) [Create Vertical Chamfer Dimension](https://wiki.freecad.org/TechDraw_ExtensionCreateVertChamferDimension): creates a vertical size and angle dimension for a chamfer. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9f291edd-5010-413e-ad6c-3ea789d39bfa) [Create Arc Length Dimension](https://wiki.freecad.org/TechDraw_ExtensionCreateLengthArc): creates an arc length dimension. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4a7e4576-f7df-44a8-8e30-aaca80409f43) Insert Prefix:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9668a24e-4d51-4373-8f1a-3a93df046724) [Insert '⌀' Prefix](https://wiki.freecad.org/TechDraw_ExtensionInsertDiameter): inserts a '⌀' symbol at the beginning of the dimension text. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d10053e0-0127-423f-8a5b-14d7f68e8b1d) [Insert '〼' Prefix](https://wiki.freecad.org/TechDraw_ExtensionInsertSquare): inserts a '〼' symbol at the beginning of the dimension text. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3cb464ed-7a71-4f51-bfe7-b5edddd481c6) [Remove Prefix](https://wiki.freecad.org/TechDraw_ExtensionRemovePrefixChar): removes all symbols at the beginning of the dimension text. 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4954b526-7cfa-4483-8ca1-752474d9b3f3) Change Decimal Places:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7cfa22a6-b9c4-47bd-9ac8-6e3d5b04bb40) [Increase Decimal Places](https://wiki.freecad.org/TechDraw_ExtensionIncreaseDecimal): increases the number of decimal places of the dimension text. 
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a60294f0-2f82-4f8d-bef7-718569e7d35a) [Decrease Decimal Places](https://wiki.freecad.org/TechDraw_ExtensionDecreaseDecimal): decreases the number of decimal places of the dimension text. 

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
