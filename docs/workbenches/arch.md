# Arch Workbench

## Introduction

The ![Arch-Workbench](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4c866953-d6f1-487d-9adf-b0686f135acf) Arch Workbench provides a modern [**B**uilding **I**nformation **M**odelling](http://en.wikipedia.org/wiki/Building_Information_Modeling) (BIM) workflow to FreeCAD, with support for features like fully parametric architectural entities such as walls, beams, roofs, windows, stairs, pipes, and furniture. It supports [**I**ndustry **F**oundation **C**lasses](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/workbenches/arch-ifc.md) (IFC) files, and production of 2D floor plans in combination with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/44a4ccdf-bee2-455e-88c0-b07d8514e1b4)
 [TechDraw Workbench](docs\workbenches\techdraw.md).

The Arch Workbench imports all tools from the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ff077e19-016d-4c8e-bd3a-2b4e1acc355a) [Draft Workbench](docs\workbenches\draft.md), as it uses its 2D objects to build 3D parametric architectural objects. Nevertheless, Arch can also use solid shapes created with other workbenches like ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/028a5b15-4e61-4a62-aeb5-7585d1f06cbe)
[Part](docs\workbenches\part.md) and ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/56be3f73-55b1-4edb-aeba-1cbb6e72b157) [PartDesign](docs\workbenches\part-design.md).

The BIM functionality of FreeCAD is now progressively split into this Arch Workbench, which holds basic architectural tools, and the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b6c3b0bc-e1e2-434d-9a29-db571b8e3b40) [BIM Workbench](https://wiki.freecad.org/BIM_Workbench), which is available from the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c547761c-5283-4fcf-8e87-3bdb84912e52) [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md). This BIM Workbench adds a new interface layer on top of the Arch tools, with the aim of making the BIM workflow more intuitive and user-friendly. See [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide).

The developers of Draft, Arch, and BIM also collaborate with the greater [OSArch community](https://osarch.org/), with the ultimate goal of improving building design by using entirely free software.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/49d6512a-4ec0-4141-9a4f-3497641de6bc)  

## Tools

These are tools for creating architectural objects.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ba323bb1-ea1f-4b29-b67b-4491aa4b7444) [Wall](https://wiki.freecad.org/Arch_Wall): Creates a wall from scratch or using a selected object as a base.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/85e212c6-2a8e-4f6d-a469-60cfcdc5126a) [Structure](https://wiki.freecad.org/Arch_Structure): Creates a structural element from scratch or using a selected object as a base.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3a422b82-e941-43a1-a39f-d74fe267e60b) [Rebar tools](https://wiki.freecad.org/Arch_CompRebarStraight): These tools are only available if the [Reinforcement Workbench](https://wiki.freecad.org/Reinforcement_Workbench) has been installed.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a5bd2f2f-ef90-44c7-88b4-a14fe67f5411) [Straight Rebar](https://wiki.freecad.org/Arch_Rebar_Straight): Creates a straight reinforcement bar in a selected structural element.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f1e931ee-9e86-4e44-a873-8b5080ebe12d) [U-Shape Rebar](https://wiki.freecad.org/Arch_Rebar_UShape): Creates a U-shape reinforcement bar in a selected structural element.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3f3414a8-3c3a-4a85-89ea-d7deef8d9bac) [L-Shape Rebar](https://wiki.freecad.org/Arch_Rebar_LShape): Creates an L-shape reinforcement bar in a selected structural element.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b2e9a9df-99bc-4ca8-baf4-014fd73b0f55) [Stirrup](https://wiki.freecad.org/Arch_Rebar_Stirrup): Creates a stirrup reinforcement bar in a selected structural element.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8fa0b0f9-87c4-4e2e-9551-3bc75476e137) [Bent-Shape Rebar](https://wiki.freecad.org/Arch_Rebar_BentShape): Creates a bent-shape reinforcement bar in a selected structural element.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b51f41c-9baa-43e3-af16-575d8ce81e6a) [Helical Rebar](https://wiki.freecad.org/Arch_Rebar_Helical): Creates a helical reinforcement bar in a selected structural element.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/032cc31b-71c3-49fb-8115-241475e6dbff) [Column Reinforcement](https://wiki.freecad.org/Arch_Rebar_ColumnReinforcement): Creates reinforcement bars in a selected rectangular column.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/03e7c0eb-6cbf-4534-b271-c7badb6769f5) [Beam Reinforcement](https://wiki.freecad.org/Arch_Rebar_BeamReinforcement): Creates reinforcement bars in a selected beam.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/53ae1981-3386-4f2a-9321-a18e6609e894) [Slab Reinforcement](https://wiki.freecad.org/Arch_Rebar_Slab_Reinforcement): Creates reinforcement bars in a selected slab.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e6be62de-06cd-4879-967f-c60f75bc9681) [Footing Reinforcement](https://wiki.freecad.org/Arch_Rebar_Footing_Reinforcement): Creates reinforcement bars inside a selected footing.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6f808878-7418-4902-80eb-82b1b35f1a8b) [Custom Rebar](https://wiki.freecad.org/Arch_Rebar): Creates a custom reinforcement bar in a selected structural element using a sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/597e506c-a3d7-4725-8f04-e1e352fe29d8) [Curtain Wall](https://wiki.freecad.org/Arch_CurtainWall): Creates a curtain wall from scratch or using a selected object as a base.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a8dab72e-ec59-485c-b181-19480a3aea33) [Building Part](https://wiki.freecad.org/Arch_BuildingPart): Creates a building part including selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/efc96ab3-9e46-44d6-aa39-2d73b0502f8e) [Project](https://wiki.freecad.org/Arch_Project): Creates a project including selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a19687e4-e3f8-4e38-9501-05f43865a898) [Site](https://wiki.freecad.org/Arch_Site): Creates a site including selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9a30d863-e0fc-4085-9d91-af163b7f5406) [Building](https://wiki.freecad.org/Arch_Building): Creates a building including selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a2fd9dfd-7fdf-4b20-801f-78c7e6adebaa) [Level](https://wiki.freecad.org/Arch_Floor): Creates a floor including selected objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/952544af-e7b0-4be1-9025-cfd62ef76ad8) [External reference](https://wiki.freecad.org/Arch_Reference): Links objects from another FreeCAD file into the current document.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9a463af1-741c-4dad-a30d-c31170f65d67) [Window](https://wiki.freecad.org/Arch_Window): Creates a window from scratch or using a selected object as a base.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/414e1a96-0bfb-4431-b79b-c2aa5ed3e382) [Roof](https://wiki.freecad.org/Arch_Roof): Creates a sloped roof from a selected wire.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fe05dc43-d283-4089-b661-02573b78a0f3) [Axis tools](https://wiki.freecad.org/Arch_CompAxis)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ed535cd9-394d-450e-bc40-d29735b916c7) [Axis](https://wiki.freecad.org/Arch_Axis): Adds a 1-direction array of axes.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e2dc2d2e-8eac-4836-8b75-3b3bb0cf7755) [Axis System](https://wiki.freecad.org/Arch_AxisSystem): Adds an axis system composed of several axes.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e875d21e-b63e-4d4c-8e4f-999448af4c0f) [Grid](https://wiki.freecad.org/Arch_Grid): Adds a grid-like object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/85cf2f86-e811-4959-a82d-eeb2f9fa27c9) [Section Plane](https://wiki.freecad.org/Arch_SectionPlane): Adds a section plane object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c2c43f33-066e-47c2-a2e6-b16b589fb794) [Space](https://wiki.freecad.org/Arch_Space): Creates a space object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/41ca93e9-30e3-46c1-b04e-8725fa7a4280) [Stairs](https://wiki.freecad.org/Arch_Stairs): Creates a stairs object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f7de9cd7-2cc5-49a2-ba4d-d9226ca1e533) [Panel tools](https://wiki.freecad.org/Arch_CompPanel)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2d19afe9-c2de-4c63-974f-467b337aacba) [Panel](https://wiki.freecad.org/Arch_Panel): Creates a panel object from a selected 2D object.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ab436758-67d6-4252-bcf7-aba2789e1a72) [Panel Cut](https://wiki.freecad.org/Arch_Panel_Cut): Creates a 2D cut view from a panel.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6b5bbac7-8259-41ec-b777-f6d35ac90921) [Panel Sheet](https://wiki.freecad.org/Arch_Panel_Sheet): Creates a 2D cut sheet, including panel cuts or other 2D objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4127b249-dc2b-4c45-bdf4-166bc1d4718c) [Nest](https://wiki.freecad.org/Arch_Nest): Allows nesting several flat objects inside a container shape.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b52c8c3f-a252-4e81-bccc-a53f7311b6ac) [Equipment](https://wiki.freecad.org/Arch_Equipment): Creates an equipment or furniture object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/beb9ecf4-f8f7-49b2-a77d-fc712e538445) [Frame](https://wiki.freecad.org/Arch_Frame): Creates a frame object from a selected layout.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/923652dd-bd1c-4afc-af49-df4375e50e6e) [Fence](https://wiki.freecad.org/Arch_Fence): Creates a fence object from a selected post and path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/687689e0-09f3-477d-96c3-93124435bd9b) [Truss](https://wiki.freecad.org/Arch_Truss): Creates a truss from a selected line or from scratch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/12a785a4-5dcb-4968-bb91-90b72674fcf7) [Profile](https://wiki.freecad.org/Arch_Profile): Creates a parametric 2D profile.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9adefc62-a022-457c-ac92-5ac4a466bb50) [Material tools](https://wiki.freecad.org/Arch_CompSetMaterial)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3d07ff7d-a85b-4b40-8c5a-f77ba1b85b25) [Material](https://wiki.freecad.org/Arch_SetMaterial): Creates a material and attributes it to selected objects, if any.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/343230c0-9a3a-4d6c-8bc8-b13787dfed64) [Multi-Material](https://wiki.freecad.org/Arch_MultiMaterial): Creates a multi-material and attributes it to selected objects, if any.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ef2ec9bd-b09d-4246-acc4-9174d0360794) [Schedule](https://wiki.freecad.org/Arch_Schedule): Creates different types of schedules.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cf1dfae3-673b-4722-a81a-29b016bb6d31) [Pipe tools](https://wiki.freecad.org/Arch_CompPipe)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c5095881-fd60-4a43-ac0e-045e38423628) [Pipe](https://wiki.freecad.org/Arch_Pipe): Creates a pipe.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b46c8b14-93cc-4d09-986c-51c98f67f72d) [Connector](https://wiki.freecad.org/Arch_PipeConnector): Creates a corner or T-connection between 2 or 3 selected pipes.

### Modification tools

These are tools for modifying architectural objects.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1ef623ef-31da-4f8c-b0eb-c9ea0c58e887) [Cut with plane](https://wiki.freecad.org/Arch_CutPlane): Cuts an object according to a plane.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8be77f60-f71b-4733-a783-21fe26b72e51) [Cut with line](https://wiki.freecad.org/Arch_CutLine): Cuts an object according to a line.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c0bc4071-c2ae-477c-8031-7d7583e80854) [Add component](https://wiki.freecad.org/Arch_Add): Adds objects to a component.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d636d9ff-9fba-4284-8f80-d62c2e125625) [Remove component](https://wiki.freecad.org/Arch_Remove): Subtracts or removes objects from a component.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/05126f81-e9a9-4f36-937e-7bb21e679bb1) [Survey](https://wiki.freecad.org/Arch_Survey): Enters or leaves surveying mode.

### Utilities

These are additional tools to help you with specific tasks.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d368b3f5-63f6-47ac-9ed8-747ab276654c) [Component](https://wiki.freecad.org/Arch_Component): Creates a non-parametric Arch component.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8ac9cfd6-5b6b-450c-aa9c-3cb3132ac3ee) [Clone component](https://wiki.freecad.org/Arch_CloneComponent): Produces Arch Components that are clones of selected Arch objects (not to be confused with [Draft Clone](https://wiki.freecad.org/Draft_Clone)).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/85e4d866-5a2d-4adf-9ec8-f13c50ebb253) [Split Mesh](https://wiki.freecad.org/Arch_SplitMesh): Splits a selected mesh into separate components.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1fc1bb06-e03d-4413-8a7f-ed82ed2bc186) [Mesh to Shape](https://wiki.freecad.org/Arch_MeshToShape): Converts a mesh into a shape, unifying coplanar faces.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5ea41fc3-fe0d-45be-9588-90c9b99bd322) [Select non-manifold meshes](https://wiki.freecad.org/Arch_SelectNonSolidMeshes): Selects all non-manifold meshes from the current selection or from the document.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b572e4c-27c6-42e3-850b-0afed12840eb) [Remove Shape from Arch](https://wiki.freecad.org/Arch_RemoveShape): Turns cubic shape-based Arch object fully parametric.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b9bd4628-ef96-404e-8075-f6cbb6a5c791) [Close holes](https://wiki.freecad.org/Arch_CloseHoles): Closes holes in a selected shape-based object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9329ab6d-b310-45be-96b0-e59a06d868c9) [Merge Walls](https://wiki.freecad.org/Arch_MergeWalls): Merge two or more walls.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a21e5526-7fc5-41ae-b423-663eba792510) [Check](https://wiki.freecad.org/Arch_Check): Check if the selected objects are solids and don't contain defects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/742754b8-03ce-4488-8988-d8bfe5d7b45d) [Toggle IFC Brep flag](https://wiki.freecad.org/Arch_ToggleIfcBrepFlag): Forces a selected object to be exported as an [IfcFacetedBrep](http://www.buildingsmart-tech.org/ifc/IFC4/final/html/schema/ifcgeometricmodelresource/lexical/ifcfacetedbrep.htm).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/95231af1-b0e0-4255-b313-282a7bb3d3e2) [3 Views from mesh](https://wiki.freecad.org/Arch_3Views): Creates top, front and side views from a mesh.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3960a841-5886-4cf6-9d7c-658d40dac631) [Create IFC spreadsheet](https://wiki.freecad.org/Arch_IfcSpreadsheet): Creates a spreadsheet to store IFC properties of an object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f81df809-d1cd-4cf9-8947-65b2bf64cbcc) [Toggle subcomponents](https://wiki.freecad.org/Arch_ToggleSubs): Shows or hides the subcomponents of an Arch object.

### Preferences

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/37cbd046-c8f8-4093-880a-61d14a9dd48e) [Preferences](https://wiki.freecad.org/Arch_Preferences): preferences for the default appearance of walls, structures, rebars, windows, stairs, panels, pipes, grids and axes.

### File formats

- [IFC](https://wiki.freecad.org/Arch_IFC): Industry Foundation Classes
- [DAE](https://wiki.freecad.org/Arch_DAE): Collada mesh format
- [OBJ](https://wiki.freecad.org/Arch_OBJ): OBJ mesh format (export only)
- [JSON](https://wiki.freecad.org/Arch_JSON): JavaScript Object Notation format (export only)
- [3DS](https://wiki.freecad.org/Arch_3DS): 3DS format (import only)
- [SHP](https://wiki.freecad.org/Arch_SHP): GIS Shapefiles (import only)

## API

The Arch module can be used in [Python](https://wiki.freecad.org/Python) scripts and [macros](docs\python-scripting\macros.md) using the [Arch Python API](https://wiki.freecad.org/Macros) functions.

## Tutorials

- [Migrating to FreeCAD from Revit](https://wiki.freecad.org/Migrating_to_FreeCAD_from_Revit)
- [Architecture workflow](http://yorik.uncreated.net/guestblog.php?tag=freecad): An example of how FreeCAD can begin to have its preliminary place in an architecture workflow.
- [Arch tutorial](https://wiki.freecad.org/Arch_tutorial) (v0.14)
- [Quick arch overview on Yorik's blog](http://yorik.uncreated.net/guestblog.php?2012=180) (v0.13)
- [Video presentation of the Arch workbench](https://www.youtube.com/watch?v=lTDOeHapv_E) (2016)
- [Arch panel tutorial](https://wiki.freecad.org/Arch_panel_tutorial) (v0.15)
- [BIM modeling chapter from the FreeCAD manual](https://wiki.freecad.org/Manual:BIM_modeling)
- [Import from STL or OBJ](https://wiki.freecad.org/Import_from_STL_or_OBJ)
- [Export to STL or OBJ](https://wiki.freecad.org/Export_to_STL_or_OBJ)
