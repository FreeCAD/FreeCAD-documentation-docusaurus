# FEM Workbench

## Introduction

The **FEM Workbench** provides a modern [finite element analysis](https://en.wikipedia.org/wiki/Finite_element_analysis) (FEA) workflow for FreeCAD. Mainly this means all tools to make an analysis are combined into one graphical user interface (GUI).

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c5d049b3-d95d-44b5-90ef-2d4ee61a49e4)  
_FEM workbench icon_  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d52b84ba-3203-42cd-ae47-c7484b6f948c)

## Workflow

The steps to carry out a finite element analysis are:
  1. Preprocessing: setting up the analysis problem.
     1. Modeling the geometry: creating the geometry with FreeCAD, or importing it from a different application.
     2. Creating an analysis.
        1. Adding simulation constraints such as loads and fixed supports to the geometric model.
        2. Adding materials to the parts of the geometric model.
        3. Creating a finite element mesh for the geometrical model, or importing it from a different application.
  2. Solving: running an external solver from within FreeCAD.
  3. Postprocessing: visualizing the analysis results from within FreeCAD, or exporting the results so they can be postprocessed with another application.

The FEM Workbench can be used on Linux, Windows, and Mac OSX. Since the workbench makes use of external solvers, the amount of manual setup will depend on the operating system that you are using. See [FEM Install](https://wiki.freecad.org/FEM_Install) for instructions on setting up the external tools.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f7ee657f-ac88-47fe-9cf1-b6c9cf1fbce4)  
_Workflow of the FEM Workbench; the workbench calls two external programs to perform the meshing of a solid object, and the actual solution of the finite element problem._

## Menu: Model

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/169f97eb-4bba-4483-a25f-33ced6840a4e) [Analysis container](https://wiki.freecad.org/FEM_Analysis): Creates a new container for a mechanical analysis. If a solid is selected in the tree view before clicking on it, the meshing dialog will be opened next.

### Materials

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5b2cbd43-557b-420d-8391-ffbb09d8e497) [Material for solid](https://wiki.freecad.org/FEM_MaterialSolid): Lets you select a solid material from the database.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/939f089e-1129-411d-8d4c-9d3b46fa9e72) [Material for fluid](https://wiki.freecad.org/FEM_MaterialFluid): Lets you select a fluid material from the database.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/871a09e3-b774-4aca-bab8-5300c87958b2) [Nonlinear mechanical material](https://wiki.freecad.org/FEM_MaterialMechanicalNonlinear): Lets you add a nonlinear mechanical material model.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e513dffb-a982-40f4-ab71-170c220d962c) [Reinforced material (concrete)](https://wiki.freecad.org/FEM_MaterialReinforced): Lets you select reinforced materials consisting of a matrix and a reinforcement from the database.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5feee29f-fac1-4cc8-8820-e103879878ca) [Material editor](https://wiki.freecad.org/FEM_MaterialEditor): Lets you open the material editor to edit materials.

### Element Geometry

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1251edc8-d51f-417c-b64d-b11299fd10da) [Beam cross section](https://wiki.freecad.org/FEM_ElementGeometry1D): Used to define cross sections for beam elements.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/56a01304-ae92-48e7-81e2-ea9d76b95394) [Beam rotation](https://wiki.freecad.org/FEM_ElementRotation1D): Used to rotate cross sections of beam elements.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5e6f8f21-ff97-4eae-ae21-863e6803d832) [Shell plate thickness](https://wiki.freecad.org/FEM_ElementGeometry2D): Used to define shell element thickness.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ee777ebf-651e-4e5c-b432-735c15048a98) [Fluid section for 1D flow](https://wiki.freecad.org/FEM_ElementFluid1D): Used to create fluid section element for pneumatic and hydraulic networks.

### Electromagnetic Constraints

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3b514eed-2202-48f9-876e-9acef94591c6) [Electromagnetic constraints](https://wiki.freecad.org/FEM_CompEmConstraints): This is an icon menu in the FEM Constraints toolbar that holds the following constraints:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5555c3f4-7022-4583-ac00-b06cc58ecae6) [Constraint electrostatic potential](https://wiki.freecad.org/FEM_ConstraintElectrostaticPotential): Used to define electrostatic potential.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cd23a95c-b84f-4d7b-b6ab-b069ee63113b) [Constraint current density](https://wiki.freecad.org/FEM_ConstraintCurrentDensity): Used to define a current density. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/62772163-33c2-48aa-b4a2-c0ec6907375f) [Constraint magnetization](https://wiki.freecad.org/FEM_ConstraintMagnetization): Used to define a magnetization. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)

### Fluid Constraints

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aba28bd5-647b-42f7-ac54-3a45c4b7f458) [Constraint initial flow velocity](https://wiki.freecad.org/FEM_ConstraintInitialFlowVelocity): Used to define an initial flow velocity for a body (volume).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c4c9a5a3-910b-4b43-9021-feb59a1cd060) [Constraint initial pressure](https://wiki.freecad.org/FEM_ConstraintInitialPressure): Used to define an initial pressure for a body (volume). [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e16055ba-6fb7-4b6c-bc18-38121211bf4b) [Constraint flow velocity](https://wiki.freecad.org/FEM_ConstraintFlowVelocity): Used to define a flow velocity as a boundary condition at an edge (2D) or face (3D).

### Geometrical Constraints

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bd910931-126b-4ac7-b048-2b9ba871b0c8) [Constraint plane rotation](https://wiki.freecad.org/FEM_ConstraintPlaneRotation): Used to define a plane rotation constraint on a planar face.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/05930701-cdf3-4938-a9b0-e8fd0852bf83) [Constraint section print](https://wiki.freecad.org/FEM_ConstraintSectionPrint): Used to print the predefined facial output variables (forces and moments) to the .dat file.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/10873071-e64d-470d-b1d0-8d76dde49da6) [Constraint transform](https://wiki.freecad.org/FEM_ConstraintTransform): Used to define a transform constraint on a face.

### Mechanical Constraints

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eb12f13c-cbf7-4aa8-a7fb-373cb5771e71) [Constraint fixed](https://wiki.freecad.org/FEM_ConstraintFixed): Used to define a fixed constraint on a point/edge/face(s).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ca21e092-5cea-4d32-bfdf-8945584773b1) [Constraint displacement](https://wiki.freecad.org/FEM_ConstraintDisplacement): Used to define a displacement constraint on a point/edge/face(s).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7ee711bb-56a3-48a6-aeed-6305f13d0d27) [Constraint contact](https://wiki.freecad.org/FEM_ConstraintContact): Used to define a contact constraint between two faces.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9fe0896d-36eb-4efc-bb64-dae0157ca17c) [Constraint tie](https://wiki.freecad.org/FEM_ConstraintTie): Used to define a tie constraint ("bonded contact") between two faces.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3e345de4-5c34-48ce-9468-c84298d23d3f) [Constraint spring](https://wiki.freecad.org/FEM_ConstraintSpring): Used to define a spring. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0792e278-6ca8-40a6-b1f8-70d280ba2d3d) [Constraint force](https://wiki.freecad.org/FEM_ConstraintForce): Used to define a force in [N] applied uniformly to a selectable face in a definable direction.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f97efbf1-b349-40c9-a035-980c7825a639) [Constraint pressure](https://wiki.freecad.org/FEM_ConstraintPressure): Used to define a pressure constraint.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9a6b6e68-5eb8-45c8-bad1-af25cdb56914) [Constraint centrif](https://wiki.freecad.org/FEM_ConstraintCentrif): Used to define a centrifugal body load constraint. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6667d797-0aa6-4e79-b396-675022e8f52f) [Constraint self weight](https://wiki.freecad.org/FEM_ConstraintSelfWeight): Used to define a gravity acceleration acting on a model.

### Thermal Constraints

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/76cf79bd-a823-442f-8b16-e2305254f818) [Constraint initial temperature](https://wiki.freecad.org/FEM_ConstraintInitialTemperature): Used to define the initial temperature of a body.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f7dd81c0-77c2-4e31-81f9-a5dbd6236d89) [Constraint heatflux](https://wiki.freecad.org/FEM_ConstraintHeatflux): Used to define a heat flux constraint on a face(s).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8ce32b0f-5c71-43cb-9e91-68a5129fdb0a) [Constraint temperature](https://wiki.freecad.org/FEM_ConstraintTemperature): Used to define a temperature constraint on a point/edge/face(s).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e21ec48d-82bc-4cfe-b161-e18aeeb6ae57) [Constraint body heat source](https://wiki.freecad.org/FEM_ConstraintBodyHeatSource): Used to define an internally generated body heat.

### Constraints without solver

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7bb63525-e1f5-4a5c-8575-1f7f3051c136) [Fluid boundary condition](https://wiki.freecad.org/FEM_ConstraintFluidBoundary): Used to define a fluid boundary condition.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f3a97c0a-ccba-469a-b9d4-93ec7d6fa997) [Constraint bearing](https://wiki.freecad.org/FEM_ConstraintBearing): Used to define a bearing constraint.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/edf880bb-0641-451e-a8d4-b7e4abda5953) [Constraint gear](https://wiki.freecad.org/FEM_ConstraintGear): Used to define a gear constraint.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/75534a84-a32b-400f-9f22-ae3a0ffeca3c) [Constraint pulley](https://wiki.freecad.org/FEM_ConstraintPulley): Used to define a pulley constraint.

### Overwrite Constants

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c3317874-bed0-4ed1-85b5-fabc073f6af3) [Constant vacuum permittivity](https://wiki.freecad.org/FEM_ConstantVacuumPermittivity): Used to overwrite the [permittivity of vacuum](https://en.wikipedia.org/wiki/Vacuum_permittivity) with a custom value.

## Menu: Mesh

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9d3506d7-edea-4560-9955-7bdbabab63c8) [FEM mesh from shape by Netgen](https://wiki.freecad.org/FEM_MeshNetgenFromShape): Generates a finite element mesh for a model using Netgen.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ff9a7c0e-c27d-4a74-8f53-893288a053d1) [FEM mesh from shape by Gmsh](https://wiki.freecad.org/FEM_MeshGmshFromShape): Generates a finite element mesh for a model using Gmsh.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0b6c8e3e-b3cc-4b14-9e6b-be5b9d03a22a) [FEM mesh boundary layer](https://wiki.freecad.org/FEM_MeshBoundaryLayer): Creates anisotropic meshes for accurate calculations near boundaries.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/422cc52e-9bbf-4c20-8585-7e73b01d7c6d) [FEM mesh region](https://wiki.freecad.org/FEM_MeshRegion): Creates a localized area(s) to mesh which highly optimizes analysis time.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/479a8fb6-8a14-4d8f-a7b7-01d18a51ce26) [FEM mesh group](https://wiki.freecad.org/FEM_MeshGroup): Groups and labels elements of a mesh (vertex, edge, surface) together, useful for exporting the mesh to external solvers.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/599f0788-2eda-4bc3-8bec-ade0ad538681) [Nodes set](https://wiki.freecad.org/FEM_CreateNodesSet): Creates/defines a node set from FEM mesh.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cfb5f45b-85c6-4d6b-8472-98d539dd822f) [FEM mesh to mesh](https://wiki.freecad.org/FEM_FemMesh2Mesh): Convert the surface of a FEM mesh to a mesh.

## Menu: Solve

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f4cc2411-61b1-435c-b9a9-161c7a840f93) [Solver CalculiX Standard](https://wiki.freecad.org/FEM_SolverCalculixCxxtools): Creates a new solver for this analysis.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/933b394c-2d26-4198-ae0d-bc11576e7ca5) [Solver CalculiX (new framework)](https://wiki.freecad.org/FEM_SolverCalculiX): Same as the original framework ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b626126e-4b6e-4e42-bf2e-a319b3e65ed6) [Solver CalculiX Standard](https://wiki.freecad.org/FEM_SolverCalculixCxxtools) with extra checks.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/76f0136e-9f31-4ed3-9d47-d46ff1a90919) [Solver Elmer](https://wiki.freecad.org/FEM_SolverCalculiX): Creates the solver controller for Elmer.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5c59c9ee-ae1b-429d-8ddf-0ef5f3141ec6) [Solver Mystran](https://wiki.freecad.org/FEM_SolverMystran): Creates the solver controller for the MYSTRAN solver. [introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20) 
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ef0b2b0f-04d2-41d0-b2da-e47bf7f0d323) [Solver Z88](https://wiki.freecad.org/FEM_SolverZ88): Creates the solver controller for Z88.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3d9bd47b-e980-4543-b73d-98834dcb8185) [Mechanical equations](https://wiki.freecad.org/FEM_CompMechEquations): This is an icon menu in the FEM Equations toolbar that holds the following equations: [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b0b2a1c2-f39f-4a52-be5d-3228dd2e7e43) [Elasticity equation](https://wiki.freecad.org/FEM_EquationElasticity): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to perform linear mechanical analyses.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/194b1dff-4e9c-431c-b344-16ff31c8736f) [Deformation equation](https://wiki.freecad.org/FEM_EquationDeformation): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to perform nonlinear mechanical analyses (deformations). [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5224d75c-fb03-40b0-a1ce-af39b76992ee) [Electromagnetic equations](https://wiki.freecad.org/FEM_CompEmEquations): This is an icon menu in the FEM Equations toolbar that holds the following equations: [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4ca0afd9-31be-43c2-8b67-e6f89e3380d4) [Electrostatic equation](https://wiki.freecad.org/FEM_EquationElectrostatic): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to perform electrostatic analyses.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/74c34f68-993e-4a57-86bf-a306ca1ece2f) [Electricforce equation](https://wiki.freecad.org/FEM_EquationElectricforce): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to calculate the electric force on surfaces.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4c6e79c0-8517-4c45-bf57-76dae61d3c7d) [Magnetodynamic equation](https://wiki.freecad.org/FEM_EquationMagnetodynamic): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to calculate magnetodynamics. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/03bc9967-f1d6-4b7c-ac9a-ed2cf867df23) [Magnetodynamic 2D equation](https://wiki.freecad.org/FEM_EquationMagnetodynamic2D): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to calculate magnetodynamics in 2D. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/904451c9-b810-465c-9f33-cc421f423387) [Flow equation](https://wiki.freecad.org/FEM_EquationFlow): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to perform flow analyses.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a5ce527a-c56f-404d-a6ee-9287e103b3c4) [Flux equation](https://wiki.freecad.org/FEM_EquationFlux): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to perform flux analyses.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/407ebdf3-85a1-4813-bd48-250fd06f09c1) [Heat equation](https://wiki.freecad.org/FEM_EquationHeat): Equation for the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fa047bd7-7f39-47e8-9f0e-eb61111c699d) [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) to perform heat transfer analyses.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/50a4c948-79c7-4c6a-98ef-8172d809c10d) [Solver job control](https://wiki.freecad.org/FEM_SolverControl): Opens the menu to adjust and start the selected solver.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/be54ac0d-003b-4ab5-b6d4-9423511b455a) [Run solver calculations](https://wiki.freecad.org/FEM_SolverRun): Runs the selected solver of the active analysis.

## Menu: Results

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3a114f69-8ccf-4395-8c8b-253a24b12f81) [Purge results](https://wiki.freecad.org/FEM_ResultsPurge): Deletes the results of the active analysis.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/17c38231-5d8d-4887-93c6-be00a0f1a348) [Show result](https://wiki.freecad.org/FEM_ResultShow): Used to display the result of an analysis. This dialog is not available for the [Solver Elmer](https://wiki.freecad.org/FEM_SolverElmer) as this solver visualizes using the [Post pipeline from result](https://wiki.freecad.org/FEM_PostPipelineFromResult) object only.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2d00a2bf-2523-4ac5-b65c-8d027d9975db) [Apply changes to pipeline](https://wiki.freecad.org/FEM_PostApplyChanges): Toggles if changes to pipelines and filters are applied immediately.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/354b842b-104d-40ed-bc9a-35178cf83c52) [Post pipeline from result](https://wiki.freecad.org/FEM_PostPipelineFromResult): Used to add a new graphical representation of FEM analysis results (color scale and more display options).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7b07020c-237f-4f57-b8ab-2448e469f980) [Warp filter](https://wiki.freecad.org/FEM_PostFilterWarp): Used to visualize the scaled deformed shape of the model.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0fb91b00-9001-48f7-904b-1a745ccfabdd) [Scalar clip filter](https://wiki.freecad.org/FEM_PostFilterClipScalar): Used to clip a field with a specified scalar value.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/560d257f-ccf3-43b1-a7a5-33e8d7992034) [Function cut filter](https://wiki.freecad.org/FEM_PostFilterCutFunction): Used to display the results on a sphere or a plane cutting through the model.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/93a82895-01d6-480f-bcdd-ad61144c0743) [Region clip filter](https://wiki.freecad.org/FEM_PostFilterClipRegion): Used to clip a field with a sphere or a plane cutting through the model.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f80e2184-0179-4994-863c-d6de325d22d8) [Contours filter](https://wiki.freecad.org/FEM_PostFilterContours): Used to display iso-lines (for analyses in 2D) or iso-contours. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5dd0565b-3f98-4559-9c6f-f9a841d12323) [Line clip filter](https://wiki.freecad.org/FEM_PostFilterDataAlongLine): Used to plot the values of a field along a specified line.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4626f889-826d-479a-bb14-6289e8824ce9) [Stress linearization plot](https://wiki.freecad.org/FEM_PostFilterLinearizedStresses): Creates a stress linearization plot.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f9ed218e-baa5-4eba-9515-be7b0e95109e) [Data at point clip filter](https://wiki.freecad.org/FEM_PostFilterDataAtPoint): Used to display value of a selected field at a given point.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c4a7baa9-6a42-4d0e-a39c-a677ee716615) [Filter functions](https://wiki.freecad.org/FEM_PostCreateFunctions): This is an icon menu in the FEM Results toolbar that holds the following commands:
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/364ac59e-d0d6-4712-a176-0f717c39f1d7) [Filter function plane](https://wiki.freecad.org/FEM_PostCreateFunctionPlane): Cuts the result mesh with a plane.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/46e0780f-3015-45e7-8e2b-ef835df5e45a) [Filter function sphere](https://wiki.freecad.org/FEM_PostCreateFunctionSphere): Cuts the result mesh with a sphere.
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c6bbcb6a-3c27-40a6-bb00-a8e90e19cf78) [Filter function cylinder](https://wiki.freecad.org/FEM_PostCreateFunctionCylinder): Cuts the result mesh with a cylinder. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)
  - ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1faec104-392f-4571-b8b7-7366dddbcfd1) [Filter function box](https://wiki.freecad.org/FEM_PostCreateFunctionBox): Cuts the result mesh with a box. [introduced in version 0.21](https://wiki.freecad.org/Release_notes_0.21)

## Menu: Utilities

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b2d0712c-942e-4d54-b63d-d7894fc3b673) [Clipping plane on face](https://wiki.freecad.org/FEM_ClippingPlaneAdd): Adds a clipping plane for the whole model view.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f0a9f20c-a4d1-49b9-a054-64288a5bc7c6) [Remove all clipping planes](https://wiki.freecad.org/FEM_ClippingPlaneRemoveAll): Removes all existing [clipping planes](https://wiki.freecad.org/FEM_ClippingPlaneAdd).
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ad5f01b5-4466-4c8f-8044-f9dc3254506a) [Open FEM examples](https://wiki.freecad.org/FEM_Examples): Open the GUI to access FEM examples.

## Context Menu

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f7f37b36-16f7-43ae-afc6-218ecdd6c1fe) [Clear FEM mesh](https://wiki.freecad.org/FEM_MeshClear): Deletes the mesh file from the FreeCAD file. Useful to make a FreeCAD file lighter.
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/de8fa9ee-2ced-4ab2-b357-26389dc96093) [Display FEM mesh info](https://wiki.freecad.org/FEM_MeshDisplayInfo): Displays basic statistics of existing mesh - number of nodes and elements of each type.

## Preferences

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/423465ca-55de-4bb9-90cf-a12a7dc11172) [Preferences](https://wiki.freecad.org/FEM_Preferences): Preferences available in FEM Tools.

## Information

The following pages explain different topics of the FEM Workbench.
- [FEM Install](https://wiki.freecad.org/FEM_Install): a detailed description on how to set up the external programs used in the workbench.
- [FEM Mesh](https://wiki.freecad.org/FEM_Mesh): further information on obtaining a mesh for finite element analysis.
- [FEM Solver](https://wiki.freecad.org/FEM_Solver): further information on the different solvers available in the workbench, and those that could be used in the future.
- [FEM CalculiX](https://wiki.freecad.org/FEM_CalculiX): further information on CalculiX, the default solver used in the workbench for structural analysis.
- [FEM Concrete](https://wiki.freecad.org/FEM_Concrete): interesting information on the topic of simulating concrete structures.

## Tutorials

- Tutorial 1: [FEM CalculiX Cantilever 3D](https://wiki.freecad.org/FEM_CalculiX_Cantilever_3D); basic simply supported beam analysis.  
- Tutorial 2: [FEM Tutorial](https://wiki.freecad.org/FEM_tutorial); simple tension analysis of a structure.  
- Tutorial 3: [FEM Tutorial Python](https://wiki.freecad.org/FEM_Tutorial_Python); set up the cantilever example entirely through scripting in Python, including the mesh.  
- Tutorial 4: [FEM Shear of a Composite Block](https://wiki.freecad.org/FEM_Shear_of_a_Composite_Block); see the deformation of a block that is comprised of two materials. 
- Tutorial 5: [Transient FEM analysis](https://wiki.freecad.org/Transient_FEM_analysis)  
- Tutorial 6: [Post-Processing of FEM Results with Paraview](https://wiki.freecad.org/Post-Processing_of_FEM_Results_with_Paraview)  
- Tutorial 7: [FEM Example Capacitance Two Balls](https://wiki.freecad.org/FEM_Example_Capacitance_Two_Balls); Elmer's GUI tutorial 6 "Electrostatics Capacitance Two Balls" using FEM Examples.  
- Coupled thermal mechanical analysis tutorials by [openSIM](https://opensimsa.github.io/training.html)  
- Video tutorial 1: [FEM video for beginner](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499#p158353) (including YouTube link)  
- Video tutorial 2: [FEM video for beginner](https://forum.freecadweb.org/viewtopic.php?f=18&t=20499&start=10#p162321) (including YouTube link)  
- Many video tutorials: [anisim Open Source Engineering Software](https://www.youtube.com/channel/UCnvFCm2BbXOVI3ObfXcxXhw) (in German)  

## Extending the FEM Workbench

The FEM Workbench is under constant development. An objective of the project is to find ways to easily interact with various FEM solvers, so that the end user can streamline the process of creating, meshing, simulating, and optimizing an engineering design problem, all within FreeCAD.

The following information is aimed at power users and developers who want to extend the FEM Workbench in different ways. Familiarity with C++ and Python is expected, and also some knowledge of the "document object" system used in FreeCAD is necessary; this information is available in the [Power users hub](docs\python-scripting\powerusers-hub.md) and the [Developer hub](docs\development\developers-hub.md). Please notice that since FreeCAD is under active development, some articles may be too old, and thus obsolete. The most up to date information is discussed in the [FreeCAD forums](https://forum.freecadweb.org/index.php), in the Development section. For FEM discussions, advice or assistance in extending the workbench, the reader should refer to the [FEM subforum](https://forum.freecadweb.org/viewforum.php?f=18).

The following articles explain how the workbench can be extended, for example, by adding new types of boundary conditions (constraints), or equations.
- [Extend FEM Module](https://wiki.freecad.org/Extend_FEM_Module)
- [Onboarding FEM Devs](https://wiki.freecad.org/Onboarding_FEM_Devs) attempts to orient new devs on how to contribute to the FEM workbench.
- [Add FEM Constraint Tutorial](https://wiki.freecad.org/Add_FEM_Constraint_Tutorial)
- [Add FEM Equation Tutorial](https://wiki.freecad.org/Add_FEM_Equation_Tutorial)
  
A developer's guide has been written to help power users in understanding the complex FreeCAD codebase and the interactions between the core elements and the individual workbenches. The book is hosted at github so multiple users can contribute to it and keep it updated.
- [Early preview of ebook: Module developer' guide to FreeCAD source](https://forum.freecadweb.org/viewtopic.php?t=17581) forum thread.
- [FreeCAD Mod Dev Guide](https://github.com/qingfengxia/FreeCAD_Mod_Dev_Guide) GitHub repository.

## Extending the FEM Workbench documentation

More information regarding extending or missing FEM documentation can be found in the forum: [FEM documentation missing on the Wiki](https://forum.freecadweb.org/viewtopic.php?f=18&t=20823)
