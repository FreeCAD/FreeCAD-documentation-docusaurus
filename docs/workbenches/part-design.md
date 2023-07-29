# PartDesign Workbench

## Introduction

The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/161bb635-f9a3-4fc3-82ca-d2d83616b38b) **PartDesign Workbench** provides advanced tools for modeling complex solid parts. It is mostly focused on creating mechanical parts that can be manufactured and assembled into a finished product. Nevertheless, the created solids can be used in general for any other purpose, such as [architectural design](docs\workbenches\arch.md), [finite element analysis](docs\workbenches\FEM.md), [machining and 3D printing](docs\workbenches\path.md).

The PartDesign Workbench is intrinsically related to the [Sketcher Workbench](docs\workbenches\sketcher.md). The user normally creates a Sketch, then uses the [PartDesign Pad](https://wiki.freecad.org/PartDesign_Pad) tool to extrude it and create a basic solid, and then this solid is further modified.

While the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f52c9b61-e57a-4a01-8550-4dd06f240caf) [Part Workbench](docs\workbenches\part.md) is based on a [constructive solid geometry](https://wiki.freecad.org/Constructive_solid_geometry) (CSG) methodology for building shapes, the PartDesign Workbench uses a parametric, feature editing methodology, which means a basic solid is sequentially transformed by adding features on top until the final shape is obtained. See the [feature editing](https://wiki.freecad.org/Feature_editing) page for a more complete explanation of this process, and then see [Creating a simple part with PartDesign](https://wiki.freecad.org/Creating_a_simple_part_with_PartDesign) to get started with creating solids.

A more detailed discussion of Part workbench versus Part Design workbench can be found here: [Part and Part Design](https://wiki.freecad.org/Part_and_PartDesign).

The bodies created with PartDesign are often subject to the [topological naming problem](https://wiki.freecad.org/Topological_naming_problem), which causes internal features to be renamed when the parametric operations are modified. This problem can be minimized by following the best practices described in the [feature editing](https://wiki.freecad.org/Feature_editing) page and by taking advantage of datum objects as support for sketches and features.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e2315587-c98f-4cc3-ad77-df69d69571dd)  
_PartDesign workbench icon_  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ee973a6e-0c40-4443-9e6a-d8389568885b)  

## Tools

The Part Design tools are all located in the **Part Design** menu and the PartDesign toolbar that appear when you load the Part Design workbench.

### Structure tools

These tools are, in fact, not part of the PartDesign Workbench. They belong to the [Std Base](https://wiki.freecad.org/Std_Base) system. They were developed in v0.17 with the intention that they would be useful to organize a model and create [assemblies](https://wiki.freecad.org/Assembly); as such, they are very useful when working with bodies created with this workbench.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e0036fb8-269b-49ec-9238-fb9c4028f2a7) Part: adds a new Part container in the active document and makes it active.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/af99f57d-277f-4b93-a2ce-28a090609484) Group: adds a Group container in the active document, which allows organizing the objects in the [tree view](https://wiki.freecad.org/Tree_view).

### Part Design Helper tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4c9a333f-d075-4958-aad0-aa43f9a21f83) Create body: creates a [Body](https://wiki.freecad.org/Body) object in the active document and makes it active.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6d9939b0-3583-4440-8bc2-6cf19dd8738e) Create sketch: creates‎ a new sketch on a selected face or plane. If no face is selected while this tool is executed, the user is prompted to select a plane from the Tasks panel. The interface then switches to the [Sketcher Workbench](docs\workbenches\sketcher.md) in sketch editing mode.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c76e6888-42e4-46fc-856e-da3c1e19b694) Edit sketch: edit the selected Sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2ec71e80-3d8a-461c-82e9-e12224fb839f) Map sketch to face: maps a sketch to a previously selected plane or a face of the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0c04f7be-ce3e-47de-9377-662a9a68f93a) Validate sketch: verifies the tolerance of different points and adjusts them.

### Part Design Modeling tools

#### Datum tools

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a5645ef7-4f22-4cc2-8bbb-4ab1b10c7ed2) Create a datum point: creates a datum point in the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/180976dc-1726-479f-a194-d0b14b96395d) Create a datum line: creates a datum line in the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/60c44578-2770-452a-be68-071a02fc1e5a) Create a datum plane: creates a datum plane in the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d9c25830-46c8-48ff-90bf-c377e8087dac) Create a local coordinate system: creates a local coordinate system attached to datum geometry in the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/93bcf90b-7db9-4215-a410-b8e6f886185f) Create a shape binder: creates a shape binder referencing geometry from a single parent object.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/876ce247-6222-48b0-8c56-33f9fac8c5d8) Create a sub-object(s) shape binder: creates a shape binder referencing geometry from one or more parent objects.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e425843f-5f16-4cbb-b3fc-4ac1364546f3) Create a clone: creates a clone of the selected body.

#### Additive tools

These are tools for creating base features or adding material to an existing solid body.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bf96a9d2-97c6-4526-a9ee-21200fdd1a3e) Pad: extrudes a solid from a selected sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/72d05f8b-029f-4be8-9746-320df4c548a3) Revolution: creates a solid by revolving a sketch around an axis. The sketch must form a closed profile.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7feed6eb-643b-46d5-8103-47b654feb9d8) Additive loft: creates a solid by making a transition between two or more sketches.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ff2eb402-0d9a-47fe-975d-3507589a29a8) Additive pipe: creates a solid by sweeping one or more sketches along an open or closed path.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4847a7ca-e6d9-4912-9206-7de4bed36ad4) Additive helix: creates a solid by sweeping a sketch along a helix.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/825332a9-3b42-4994-acf9-81ef0fa9418d) Create an additive primitive: adds an additive primitive to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6fea85af-468d-4bb1-b349-120ae7b2ade6) Additive box: creates an additive box.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e5a0024a-a526-49d8-816f-88d622742ce4) Additive cylinder: creates an additive cylinder.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4ca07725-0bea-46ad-895b-2e9d86e0e3cc) Additive sphere: creates an additive sphere.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6b814c0d-7e62-425e-a6b2-ff9eb703b72e) Additive cone: creates an additive cone.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/31ffadcc-1582-4b65-809b-011c3887bf33) Additive ellipsoid: creates an additive ellipsoid.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/439307f3-2d97-4dd2-840b-8a73b0ca9b3f) Additive torus: creates an additive torus.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b519c40-7fa9-47db-a7d0-3b66ac865ecd) Additive prism: creates an additive prism.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3154bc46-a4a6-462c-8d32-48a67a124840) Additive wedge: creates an additive wedge.

#### Subtractive tools

These are tools for subtracting material from an existing body.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5c6a95d9-3dd1-419a-821a-9411bc09bdb1) Pocket: creates a pocket from a selected sketch.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2b65e3d8-d0b5-4fb9-bc22-412af259dd15) Hole: creates a hole feature from a selected sketch. The sketch must contain one or multiple circles.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1967416d-d542-4ed8-890a-b7267e86f72c) Groove: creates a groove by revolving a sketch around an axis.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aeccd054-073b-4ab4-9b33-3a44a49d67da) Subtractive loft: creates a solid shape by making a transition between two or more sketches and subtracts it from the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/85e53da7-17f9-4f93-999c-148198eb6315) Subtractive pipe: creates a solid shape by sweeping one or more sketches along an open or closed path and subtracting it from the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/89f4c88e-4582-4559-a9d3-0275047577b4) Subtractive helix: creates a solid shape by sweeping a sketch along a helix and subtracting it from the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/66bb0e80-ea5b-4c2c-b947-50c8d6f3c7df) Create a subtractive primitive: adds a subtractive primitive to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bffc84c0-fb04-4f88-85fa-43dfc9cafa04) Subtractive box: adds a subtractive box to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4bddc8ae-ff81-4984-ae41-bc6e15e1c77d) Subtractive cylinder: adds a subtractive cylinder to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c3e3e97c-aad7-4755-b5e7-364cb29020a3) Subtractive sphere: adds a subtractive sphere to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/65c4b5df-3782-4784-861a-f90fc4dc22ec) Subtractive cone: adds a subtractive cone to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ed239183-f53a-46ef-bef5-426461ffde6d) Subtractive ellipsoid: adds a subtractive ellipsoid to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0da93b0f-72bb-4752-9cc6-694853288567) Subtractive torus: adds a subtractive torus to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9ad9231d-17ac-4d94-a68b-06e97d14a286) Subtractive prism: adds a subtractive prism to the active body.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0924fddd-d34c-4f36-bda5-578b794c9f8a) ‎Subtractive wedge: adds a subtractive wedge to the active body.

#### Transformation tools

These are tools for transforming existing features.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2ee719e3-2b8f-4958-a93e-6eea9205a523) Mirrored: mirrors one or more features.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a77ece61-362e-4c85-8d78-b5445da6c03c) Linear Pattern: creates a linear pattern of one or more features.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bfabdcff-3af1-4b6a-81bb-6048dcffcf44) Polar Pattern: creates a polar pattern of one or more features.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e79218dd-3e5e-415d-ba01-2f6ea424c324) Create MultiTransform: creates a pattern by combining any of the transformations mentioned above, as well as the [Scaled](https://wiki.freecad.org/PartDesign_Scaled) transformation.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/749d732c-daaa-4b49-bc94-9375cabe2855) Scaled: scales one or more features. This is not available as a separate transformation tool.

#### Dress-up tools

These tools apply a treatment to edges or faces.

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/25753fd9-1114-4447-88a8-1fd402350093) Fillet: fillets (rounds) edges of the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/08f2504a-06a9-4ea9-a2bb-8e680dc477f2) Chamfer: chamfers edges of the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5178a792-f21c-4c81-a823-4ceb3084093a) Draft: applies an angular draft to selected faces of the active body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a2eaddee-4be9-43c8-b69f-d75e7448c396) Thickness: creates a thick shell from the active body and opens the selected face.

#### Boolean

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a4c7a4d9-0934-491b-a595-3b075b40890c) Boolean operation: imports one or more Bodies or PartDesign Clones into the active body and applies a Boolean operation.
  
#### Extras

Some additional functionality found in the Part Design menu:

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6c145cab-8877-4ab0-8d6d-5b207683d1fb) Migrate: migrates files created with older FreeCAD versions. If the file is purely PartDesign feature-based, migration should succeed. If the file contains mixed Part/Part Design/Draft objects, the conversion will most likely fail.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b905f253-6a28-4f01-8c0f-0610e4122940) Sprocket: creates a sprocket profile that can be padded.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/77920be3-101d-4957-9cf8-ccd68b2e7c46) Involute gear: creates an involute gear profile that can be padded.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c21f7c5a-aafa-49a2-9b26-5b6bb2d9ecb2) Shaft design wizard: Generates a shaft from a table of values and allows to analyze forces and moments. The shaft is made with a revolved sketch that can be edited.
