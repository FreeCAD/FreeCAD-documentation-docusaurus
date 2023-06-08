# Arch Workbench

## Introduction

The ![arch-workbench](./assets/workbench-arch.png) Arch Workbench provides a modern [**B**uilding **I**nformation **M**odelling](http://en.wikipedia.org/wiki/Building_Information_Modeling) (BIM) workflow to FreeCAD, with support for features like fully parametric architectural entities such as walls, beams, roofs, windows, stairs, pipes, and furniture. It supports [**I**ndustry **F**oundation **C**lasses](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/workbenches/arch-ifc.md) (IFC) files, and production of 2D floor plans in combination with the [TechDraw Workbench](docs\workbenches\techdraw.md).

The Arch Workbench imports all tools from the [Draft Workbench](docs\workbenches\draft.md), as it uses its 2D objects to build 3D parametric architectural objects. Nevertheless, Arch can also use solid shapes created with other workbenches like [Part](docs\workbenches\part.md) and [PartDesign](docs\workbenches\part-design.md).

The BIM functionality of FreeCAD is now progressively split into this Arch Workbench, which holds basic architectural tools, and the [BIM Workbench](https://wiki.freecad.org/BIM_Workbench), which is available from the [Addon Manager](https://wiki.freecad.org/Std_AddonMgr). This BIM Workbench adds a new interface layer on top of the Arch tools, with the aim of making the BIM workflow more intuitive and user-friendly. See [FreeCAD BIM migration guide](https://yorik.uncreated.net/blog/2020-010-freecad-bim-guide).

The developers of Draft, Arch, and BIM also collaborate with the greater [OSArch community](https://osarch.org/), with the ultimate goal of improving building design by using entirely free software.

## Tools

These are tools for creating architectural objects.

- Wall: Creates a wall from scratch or using a selected object as a base.
- Structure: Creates a structural element from scratch or using a selected object as a base.
- Rebar tools: These tools are only available if the Reinforcement Workbench has been installed.
  - Straight Rebar: Creates a straight reinforcement bar in a selected structural element.
  - U-Shape Rebar: Creates a U-shape reinforcement bar in a selected structural element.
  - L-Shape Rebar: Creates an L-shape reinforcement bar in a selected structural element.
  - Stirrup: Creates a stirrup reinforcement bar in a selected structural element.
  - Bent-Shape Rebar: Creates a bent-shape reinforcement bar in a selected structural element.
  - Helical Rebar: Creates a helical reinforcement bar in a selected structural element.
  - Column Reinforcement: Creates reinforcement bars in a selected rectangular column.
  - Beam Reinforcement: Creates reinforcement bars in a selected beam.
  - Slab Reinforcement: Creates reinforcement bars in a selected slab.
  - Footing Reinforcement: Creates reinforcement bars inside a selected footing.
  - Custom Rebar: Creates a custom reinforcement bar in a selected structural element using a sketch.
- Curtain Wall: Creates a curtain wall from scratch or using a selected object as a base.
- Building Part: Creates a building part including selected objects.
- Project: Creates a project including selected objects.
- Site: Creates a site including selected objects.
- Building: Creates a building including selected objects.
- Level: Creates a floor including selected objects.
- External reference: Links objects from another FreeCAD file into the current document.
- Window: Creates a window from scratch or using a selected object as a base.
- Roof: Creates a sloped roof from a selected wire.
- Axis tools
  - Axis: Adds a 1-direction array of axes.
  - Axis System: Adds an axis system composed of several axes.
  - Grid: Adds a grid-like object.
- Section Plane: Adds a section plane object.
- Space: Creates a space object.
- Stairs: Creates a stairs object.
- Panel tools
  - Panel: Creates a panel object from a selected 2D object.
  - Panel Cut: Creates a 2D cut view from a panel.
  - Panel Sheet: Creates a 2D cut sheet including panel cuts or other 2D objects.
  - Nest: Allows to nest several flat objects inside a container shape.
- Equipment: Creates an equipment or furniture object.
- Frame: Creates a frame object from a selected layout.
- Fence: Creates a fence object from a selected post and path.
- Truss: Creates a truss from a selected line or from scratch.
- Profile: Creates a parametric 2D profile.
- Material tools
  - Material: Creates a material and attributes it to selected objects, if any.
  - Multi-Material: Creates a multi-material and attributes it to selected objects, if any.
- Schedule: Creates different types of schedules.
- Pipe tools
  - Pipe: Creates a pipe.
  - Connector: Creates a corner or T-connection between 2 or 3 selected pipes.

### Modification tools

These are tools for modifying architectural objects.

- Cut with plane: Cuts an object according to a plane.
- Cut with line: Cuts an object according to a line.
- Add component: Adds objects to a component.
- Remove component: Subtracts or removes objects from a component.
- Survey: Enters or leaves surveying mode.

### Utilities

These are additional tools to help you in specific tasks.

- Component: Creates a non-parametric Arch component.
- Clone component: Produces Arch Components that are clones of selected Arch objects (not to be confused with Draft Clone).
- Split Mesh: Splits a selected mesh into separate components.
- Mesh to Shape: Converts a mesh into a shape, unifying coplanar faces.
- Select non-manifold meshes: Selects all non-manifold meshes from the current selection or from the document.
- Remove Shape from Arch: Turns cubic shape-based Arch object fully parametric.
- Close holes: Closes holes in a selected shape-based object.
- Merge Walls: Merge two or more walls.
- Check: Check if the selected objects are solids and don't contain defects.
- Toggle IFC Brep flag: Forces a selected object to be exported as an IfcFacetedBrep.
- 3 Views from mesh: Creates top, front and side views from a mesh.
- Create IFC spreadsheet...: Creates a spreadsheet to store IFC properties of an object.
- Toggle subcomponents: Shows or hides the subcomponents of an Arch object.

### Preferences

- [Preferences](https://wiki.freecad.org/Arch_Preferences): preferences for the default appearance of walls, structures, rebars, windows, stairs, panels, pipes, grids and axes.

### File formats

- [IFC](https://wiki.freecad.org/Arch_IFC): Industry Foundation Classes
- [DAE](https://wiki.freecad.org/Arch_DAE): Collada mesh format
- [OBJ](https://wiki.freecad.org/Arch_OBJ): OBJ mesh format (export only)
- [JSON](https://wiki.freecad.org/Arch_JSON): JavaScript Object Notation format (export only)
- [3DS](https://wiki.freecad.org/Arch_3DS): 3DS format (import only)
- [SHP](https://wiki.freecad.org/Arch_SHP): GIS Shapefiles (import only)

## API

The Arch module can be used in [Python](https://wiki.freecad.org/Python) scripts and [macros](https://wiki.freecad.org/Macros) using the [Arch Python API](https://wiki.freecad.org/Macros) functions.

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
