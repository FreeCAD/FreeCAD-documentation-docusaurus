# Part Module

## Introduction

The solid modelling capabilities of FreeCAD are based on the [OpenCASCADE Technology](https://wiki.freecad.org/OpenCASCADE) (OCCT) kernel, a professional-grade CAD system that features advanced 3D geometry creation and manipulation. The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5f19cbb7-1ffa-426e-bd4d-a259abfacfb5) [Part Workbench](docs\workbenches\part.md) is a layer sitting on top of the OCCT libraries, that gives the user access to OCCT geometric primitives and functions. Essentially all 2D and 3D drawing functions in every workbench (![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ea065ab9-6d7b-4e07-8f60-22d1d4eb6f08) [Draft](docs\workbenches\draft.md), ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/39d49322-2447-4104-a7b8-78f775d4c8f0) [Sketcher](docs\workbenches\sketcher.md), ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f4d2c091-e3aa-4de0-9c29-dd756a9ee452) [PartDesign](docs\workbenches\part-design.md), etc.), are based on these functions exposed by the Part Workbench. Therefore, the Part Workbench is considered the core component of the modeling capabilities of FreeCAD.

A more detailed discussion of Part workbench versus Part Design workbench can be found here: [Part and Part Design](https://wiki.freecad.org/Part_and_PartDesign).

The objects created with the Part Workbench are relatively simple; they are intended to be used with boolean operations (unions and cuts) in order to build more complex shapes. **This modeling paradigm is known as the [constructive solid geometry](https://wiki.freecad.org/Constructive_solid_geometry) (CSG) workflow, and it was the traditional methodology used in early CAD systems.** On the other hand, the PartDesign Workbench provides a more modern workflow to constructing shapes: it uses a parametrically defined sketch, that is extruded to form a basic solid body, which is then modified by parametric transformations ([feature editing](https://wiki.freecad.org/Feature_editing)), until the final object is obtained.

Part objects are more complex than mesh objects created with the [Mesh Workbench](docs\workbenches\mesh.md), as they permit more advanced operations like coherent boolean operations, modifications history, and parametric behaviour.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2ccc0bdb-7df0-446f-a499-8f22c730e232)  
_Part workbench icon_  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8b927ccc-f847-45aa-b74a-f5a7de573c15)  
_The Part Workbench is the basic layer that exposes the OCCT drawing functions to all workbenches in FreeCAD._  

## Tools

The tools are located in the **Part** menu or the **Measure** menu.

### Primitives

These are tools for creating primitive objects.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/46f3f697-7ec4-4730-adc0-397a3f7f871d) Box: Creates a box.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f1d7569a-0c13-430e-ba17-73a9542301f5) Cylinder: Creates a cylinder.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/312d360e-6b83-44d6-a8d0-97af50bad96b) Sphere: Creates a sphere.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ac25e34f-6c88-499d-8add-70fc3a7db2d5) Cone: Creates a cone.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/93496c55-3911-4c1c-b64e-d2ef28f084ad) Torus: Creates a torus.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7e017497-5488-4049-9e99-670e60da6ab9) Tube: Creates a tube.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d350e586-0652-4dd5-85ea-358ffda2475a) Create primitives...: A tool to create one of the following primitives:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/895db49c-224e-4fbf-a92f-60d00197a682) Plane: Creates a plane.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/96a5a851-c727-44de-b131-3c3d925aeb52) Box: Creates a box. This object can also be created with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9937901a-0a04-4223-bc99-a98c225e773a) Box tool.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cc743837-e172-486b-a6ae-8245df44e106) Cylinder: Creates a cylinder. This object can also be created with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/08713564-51b6-413e-9092-85c91b5ce2fc) Cylinder tool.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6e73615a-4a3a-4dbb-96a0-2b96274ba1b6) Cone: Creates a cone. This object can also be created with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f3e43049-a299-42a4-a629-41e1b823599d) Cone tool.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/54bf1542-d809-431c-8dfa-006c01601595) Sphere: Creates a sphere. This object can also be created with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e2df9c29-ae74-4be2-828f-18bd46d43371) Sphere tool.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/99184972-4a60-4c93-844b-f722895bbd5c) Ellipsoid: Creates a ellipsoid.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/48e76afc-69f7-4995-9043-4e3a12858ef9) Torus: Creates a torus. This object can also be created with the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1c0e70df-c708-431b-8324-c8259589823d) Torus tool.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2c9de713-d073-4294-b8ba-0eadcec1550b) Prism: Creates a prism.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/105ae29f-510d-48f4-b01b-c172cb33ec2a) Wedge: Creates a wedge.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c2b45b56-7440-4f87-a035-52fe89505d06) Helix: Creates a helix.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/98f825df-ec84-4ef1-9feb-ab7eb56fa246) Spiral: Creates a spiral.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b9925796-8ba7-4d06-ad43-93e8e20bcbce) Circle: Creates a circular arc.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a1932829-713e-40a7-b03c-d49ccf717438) Ellipse: Creates an elliptical arc.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/959be0ee-94f8-4458-ad48-07954a2f41a1) Point: Creates a point.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2ede3992-9794-4072-9ac9-7634e9a62f12) Line: Creates a line.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c26ea6c6-f8a4-407b-b47d-dc0ec609ed62) Regular polygon: Creates a regular polygon.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e0f182f8-1f19-4e8f-b769-015e384818fb) Shape builder...: Creates shapes from various primitives.

### Creation and modification

These are tools for creating new and modifying existing objects.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c874e5dc-90ba-4981-8f02-eeba738ed83d) Extrude: Extrudes planar faces.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f543c462-228e-4d93-b670-ae6e67351a05) Revolve: Creates a solid by revolving an object (not a solid) around an axis.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f91f64ae-b4b4-4f81-bf4b-87775ed355ae) Mirror: Mirrors the selected object across a mirror plane.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b6e03eef-6a84-4395-a6c0-47b17a0f41fd) Fillet: Fillets (rounds) edges of an object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a3a84e50-eec9-44ac-b7e8-4db3676e335c) Chamfer: Chamfers edges of an object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e987ea34-40dc-4cab-9c8c-647fe47f1308) Make face from wires: Makes a face from a set of wires (contours).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eb8fd342-d84a-417f-b74a-870232a0d77e) Ruled Surface: Creates a ruled surface.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/34840433-6fb3-4ba4-b1c4-75acb3c2901b) Loft: Lofts from one profile to another.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/355f2a7f-8690-47cd-a4d1-219a585d0381) Sweep: Sweeps one or more profiles along a path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f20cef82-04c7-46cc-b937-ff3c6dc91a15) Section: Creates a section by intersecting an object with a section plane.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1ebb95d6-7cf4-45b5-95e7-2d4982034523) Cross sections...: Creates one or more cross-sections through an object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dac11797-a521-4d8d-929d-f344d24cd77f) Offset tools:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e88e36ee-a40b-4a71-95cb-a3ad535ba276) 3D Offset: Constructs a parallel shape at a certain distance from an original.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/319273ac-aba6-4a49-804c-bcf21b36658e) 2D Offset: Constructs a parallel wire at certain distance from an original, or enlarges/shrinks a planar face.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5ff38db3-14bf-4f3e-8302-de4a1d8718b7) Thickness: Hollows out a solid.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/af7d544d-236e-45fc-bc61-e6d0dedbcf5b) Projection on surface: Projects a logo, text or any face, wire or edge onto a surface.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e4288e81-7ac9-40e4-8668-43b6f44c7106) Attachment: Attaches an object to another object.

### Boolean

These tools perform boolean operations.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cc454266-23d2-460e-8968-388d064d685b) Compound Tools:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c806bf55-a8a5-4c14-a34d-45e3bfd5720f) Make compound: Creates a compound from the selected objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/336addf8-43ad-4c36-8ecb-20fdf7711d1e) Explode Compound: Splits up compounds.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8857bd74-bc2f-4d62-913d-e17101983ff7) Compound Filter: Extracts the individual pieces from compounds.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/595b169c-1ed4-4516-b378-68269f1de13d) Boolean: Performs boolean operations on objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d9897765-c153-4a3a-bb68-a8b3e011aeed) Cut: Cuts (subtracts) one object from another.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/24be4368-6f02-414d-9bf5-ad533a846a72) Fuse: Fuses (unions) two or more objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4e659441-db8f-4eb2-abbf-715a563cd1f0) Common: Extracts the common (intersection) part of two objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0df729bd-6e16-4615-b493-ebe9278f4bdb) Join features:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f875dbb2-e5cb-4ad5-b31b-3ae122a2bc6c) Connect: Connects interiors of walled objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c6b96e4a-8b6b-45b5-a5b7-fe9355fa72f5) Embed: Embeds a walled object into another walled object.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/69780e43-c613-4f40-aa7d-8a918c88c6bc) Cutout: Creates a cutout in a wall of an object for another walled object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dce9a2c1-98f6-4bb3-9292-ecbbe1aaf6f1) Splitting tools:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8f64d295-1f8e-41f7-b775-0c04e1d19801) Boolean fragments: Creates all pieces obtained from Boolean operations.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/26ace7c5-0033-433b-a49c-851aa65738d8) Slice apart: Slices and splits an object by intersecting it with other objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7fadd446-ae5e-40a4-afd3-20faeba63574) Slice: Slices an object by intersecting it with other objects.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6cc5e9df-775e-4886-8a72-acb0c81dee9b) XOR: Removes space shared by an even number of objects.

### Measure

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7ebff117-d6e2-4fd7-a725-863518e05499) Measure Linear: Creates a linear measurement.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/84b3bd31-cf6d-49bc-a141-72d399a6dfb7) Measure Angular: Creates an angular measurement.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f6207bbc-0888-4771-82f9-094c9e2f9a8c) Measure Refresh: Updates all measurements.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/41f3a727-923b-4110-86cd-d2ad339657c0) Clear All: Clears all measurements.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8d908c60-a3c6-4690-b615-22a9e5f5dd8d) Toggle All: Shows or hides all measurements.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6f4e7f65-3081-411d-9a4c-810a6591cba1) Toggle 3D: Shows or hides 3D measurements.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c4d3c02d-70f9-4e4f-9c8f-90489d7b16c6) Toggle Delta: Shows or hides delta measurements.

### Other tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0cad8205-8e8e-40f5-aabe-a26d62dbef1e) Import: Imports from *.IGES, *.STEP, or *.BREP files.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a20d7d25-ba39-4ac1-ae08-73d5334debee) Export: Exports to *.IGES, *.STEP, or *.BREP files.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bde6b80e-8528-4e44-9b67-fccd3a633533) Box selection: Selects faces from a rectangular area.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a36912a0-7fe7-4480-b3bb-179e410c83b4) Create shape from mesh: Creates a shape object from a mesh object.
-  Create points object from geometry: Creates a points object from a geometric object.
-  Convert to solid: Converts a shape object to a solid object.
-  Reverse shapes: Flips the normals of all faces of selected objects.
- Create a copy:
  - Create simple copy: Creates a simple copy of a selected object.
  - Create transformed copy: Creates a transformed copy of a selected object.
  - Create shape element copy: Creates a copy from an element (vertex, edge, face) of a selected object.
  - Refine shape: Cleans faces by removing unnecessary lines.
- Check geometry: Checks the geometry of selected objects for errors.
- Defeaturing: Removes features from an object.

### Context menu items

- Appearance: Determines the appearance of a whole object (color, transparency etc.).
- Set colors: Assigns colors to individual faces of objects.

## Preferences

- Preferences: Preferences available for Part Tools (the Part workbench also uses the PartDesign Preferences).
- Import Export Preferences: Preferences available for importing from and exporting to different file formats.
- Fine-tuning: Some extra parameters to fine-tune Part behavior.

## Scripting

See [Part scripting](https://wiki.freecad.org/Part_scripting)

## Tutorials

- [Import from STL or OBJ](https://wiki.freecad.org/Import_from_STL_or_OBJ): How to import STL/OBJ files in FreeCAD
- [Export to STL or OBJ](https://wiki.freecad.org/Export_to_STL_or_OBJ): How to export STL/OBJ files from FreeCAD
- [Whiffle Ball tutorial](https://wiki.freecad.org/Whiffle_Ball_tutorial): How to use the Part Module
