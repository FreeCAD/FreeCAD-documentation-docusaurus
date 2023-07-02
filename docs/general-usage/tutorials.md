# Tutorials

This page presents a selection of high-quality written tutorials. A complete, unsorted list of tutorials can be found in [Category: Tutorials](https://wiki.freecad.org/Category:Tutorials), a complete and sortable one can be found in the [table below](https://wiki.freecad.org/Tutorials#Tutorials_-_Comprehensive_list).

If you'd like to contribute with writing wiki documentation and tutorials, see the general wiki guidelines in [WikiPages](https://wiki.freecad.org/WikiPages), and read the [Tutorial guidelines](https://wiki.freecad.org/Tutorial_guidelines).

Please notice the version of FreeCAD used in the tutorial, as some tutorials may use an old version of the program. Although the general modeling process may still work, some tools may have changed.

See also [video tutorials](https://wiki.freecad.org/Video_tutorials) and [books](https://wiki.freecad.org/Books).

## Architecture and BIM

![Arch tutorial](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fc0c799d-2f3b-4aef-8ee1-5cc6e34693ae)   
[Arch tutorial](https://wiki.freecad.org/Arch_tutorial) (v0.14)  
This is the essential introduction to the Arch Workbench. It is extensive and showcases a typical workflow, from importing plans in DXF format to building the 3D model.  

![BIM modelling](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/009b9ceb-031b-46cc-ba9a-76145ea964c4)   
[BIM modeling](https://wiki.freecad.org/Manual:BIM_modeling)   
How to model a small house, produce a blueprint with TechDraw, and export to IFC.  

![Open Windows and Doors](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fc33c924-16cf-49e1-8db5-2cfb1fd1412a)   
[Open windows and doors](https://wiki.freecad.org/Tutorial_for_open_windows) (v0.18)    
How to display windows and doors as open, with elevation and plan symbols, and produce a basic floor plan with TechDraw.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/fccc3bf2-4df3-4340-8165-f8eb85652717)   
[Design custom windows](https://wiki.freecad.org/Tutorial_custom_placing_of_windows_and_doors) (v0.18)   
How to draw custom doors and windows using the Sketcher, and adjust their normals to correctly place them in walls.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c7cf0966-1396-4f34-8104-08a633f563d6)   
[Arch panel tutorial](https://wiki.freecad.org/Arch_panel_tutorial) (v0.15)   
Modeling a microhouse roof panel by using the Sketcher, the Window tool, and the Panel tool.    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/37fd1c59-724c-41d1-9b46-0959b69784d9)   
[WikiHouse modelling](https://wiki.freecad.org/Wikihouse_porting_tutorial)   
Re-modeling the WikiHouse project using sketches and panels, starting from importing a mesh model created in SketchUp.  

## Modeling parts

FreeCAD provides two main workflows to modeling parts:
- combining objects, a method called [Constructive solid geometry](https://wiki.freecad.org/Constructive_solid_geometry) (CSG) using the [Part Workbench](docs\workbenches\part.md), and
- using parametric modelling and [feature editing](https://wiki.freecad.org/Feature_editing) with the [PartDesign Workbench](docs\workbenches\part-design.md).

Please note that the [PartDesign Workbench](docs\workbenches\part-design.md) workflow was considerably changed from FreeCAD 0.17 onward; some of the tutorials haven't been updated and may refer to the 0.16 version.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/508fd4f5-6c36-41e6-ae5a-4953700ad325)    
[Creating a simple part with Part Workbench](https://wiki.freecad.org/Creating_a_simple_part_with_Part_WB)  
An introduction to FreeCAD and Part Workbench using primitive solids.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b940c389-7110-4686-9ded-cfd401b65b5d)   
[Creating a simple part with Draft and Part Workbench](https://wiki.freecad.org/Creating_a_simple_part_with_Draft_and_Part_WB)   
An introduction to modeling solids with Draft Workbench by creating a 2d profile in draft.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/21f0915f-5fb4-4df8-aaa3-be8bc75384a1)   
[Creating a simple part with PartDesign](https://wiki.freecad.org/Creating_a_simple_part_with_PartDesign) (v0.17)  
An introduction to the PartDesign workflow: tracing a sketch, using pad, pocket, and moving the object.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/da2cc413-a620-4689-8b0d-7bd611c5d3ff)   
[Basic Part Design Tutorial](https://wiki.freecad.org/Basic_Part_Design_Tutorial) (v0.17)  
Model a simple part using a feature editing methodology: creating a sketch, using pad, external references, pocket, and mirror.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/99dc1497-32a8-4988-8352-f83d3875c6da)   
[Basic Part Design Tutorial 019](https://wiki.freecad.org/Basic_Part_Design_Tutorial_019) (v0.19 or above)  
An updated version of the previous tutorial that creates the same model using techniques that avoid the [topological naming problem](https://wiki.freecad.org/Topological_naming_problem).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ce93950e-8418-4d13-ac50-73ce49925ef9)    
[Model an electric toothbrush head stand](https://wiki.freecad.org/Toothbrush_Head_Stand) (v0.16 or above)  
Multiple features used: sketch, distance and coincident constraints, pad, external references, fillet, chamfer, linear pattern, and draft.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/883a71a5-4de6-49ce-9dff-9a8562bc9bf7)  
[Modeling for product design](https://wiki.freecad.org/Manual:Modeling_for_product_design) (v0.16)
Modeling a Lego block: sketches, vertical and horizontal distance constraints, pad, pocket, external reference, linear pattern, and assembly.


![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/396a9485-7815-4976-a0a1-6d4032d7122a)   
[Traditional modeling, the CSG way](https://wiki.freecad.org/Manual:Traditional_modeling,_the_CSG_way)  
Modeling a table by using simple solids like cubes and cylinders, and performing boolean operations (fusions and cuts) with them.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ec5e27a0-4bff-4893-b11c-a4b36550503b)   
[Draft ShapeString tutorial](https://wiki.freecad.org/Draft_ShapeString_tutorial) (v0.19)  
Create engraved text on a solid: extrude a shapestring to make it solid, then use a boolean cut to carve it from another solid.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f55080af-53f0-4407-b928-fa83d79a45ed)   
[Create a wiffle ball](https://wiki.freecad.org/Whiffle_Ball_tutorial) (v0.19)  
Use solid primitives, like cubes and cylinders, and boolean operations, like union and cut, to create a hollowed ball.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/171a9ede-612b-48d8-b1e2-30489db1ca50)   
[Basic modeling tutorial](https://wiki.freecad.org/Basic_modeling_tutorial)  
Create an iron angle by two methods: using solid primitives, and boolean operations (CSG); and by extruding a planar profile.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1a41b5ba-0e54-4a45-b112-35392516b89a)   
[Aeroplane tutorial](https://wiki.freecad.org/Aeroplane)  
Understand placements in FreeCAD by creating a simple aeroplane model. Then learn about rotation angles, yaw (Z), pitch (Y), and roll (X).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8a2ed942-8126-405a-8d1e-1d4c3a97dc1c)   
[Thread for screw tutorial](https://wiki.freecad.org/Thread_for_Screw_Tutorial) (v0.19)  
Understand how to create threads with several techniques that include use of the tools [Part Helix](https://wiki.freecad.org/Part_Helix), [PartDesign AdditivePipe](https://wiki.freecad.org/PartDesign_AdditivePipe), [Part Sweep](https://wiki.freecad.org/Part_Sweep), [Part Fuse](https://wiki.freecad.org/Part_Fuse), and [Part Cut](https://wiki.freecad.org/Part_Cut).  

The Raspberry Pi project has made simple tutorials that are easy to follow, particularly for those new to CAD systems:

- [freecad-dice](https://projects.raspberrypi.org/en/projects/freecad-dice), model a die with six faces, and optionally 3D print it.
- [freecad-headphone-tidy](https://projects.raspberrypi.org/en/projects/freecad-headphone-tidy), model a spool to organize and store earphones, and optionally 3D print it.
- [freecad-chess-set](https://projects.raspberrypi.org/en/projects/freecad-chess-set), model and entire chess set in Bauhaus modernist style.
- [raspberrypilearning repository](https://github.com/raspberrypilearning?utf8=%E2%9C%93&q=freecad&type=source&language=) (CC-BY 4.0) with other examples.

## Drafting and Sketching

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/310adaca-7ce8-485f-b55c-371a68ce42a5)    
[Traditional 2D drafting](https://wiki.freecad.org/Manual:Traditional_2D_drafting)  
Draw a floor plan with lines, wires, rectangles, circular arcs, and add hatch patterns, annotations, and dimensions. Export the result to DXF.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d529c2a5-2fb6-4da1-b0a9-0e894de144bb)    
[Draft tutorial](https://wiki.freecad.org/Draft_tutorial) (v0.19)  
This is a basic introduction to the tools of the [Draft Workbench](docs\workbenches\draft.md): working plane, grid, line, arc, upgrade, rectangle, circle, polygon, arrays, dimensions, annotations, and shapestring.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e738b3ed-5375-47ff-91cc-a592047efc20)  
[Sketcher reference](https://wiki.freecad.org/Sketcher_reference) (v0.18)  
This is a 70-page long PDF document that serves as a detailed manual for the [Sketcher Workbench](docs\workbenches\sketcher.md). It explains the basics of Sketcher usage, and goes into a lot of detail about the creation of geometrical shapes, and each of the constraints.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3ba20fe0-c985-45aa-b2b5-81eb71ea3875)   
[Basic Sketcher Tutorial](https://wiki.freecad.org/Basic_Sketcher_Tutorial) (v0.19)  
This is a basic introduction to the tools of the Sketcher Workbench: construction mode, line, circle, arc, constraints (equality, vertical, horizontal, tangential, distance, angle, radius).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/68f9d8a6-e609-4e2d-a027-5cc55d5fa1bf)  
[Sketcher constraints practices](https://wiki.freecad.org/Sketcher_Micro_Tutorial_-_Constraint_Practices) (v0.19)  
Learn to efficiently constrain a sketch. Prefer geometric constraints over datum constraints.  

## Technical Drawings

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/6a7f3176-42fa-4e69-bf80-ebdaf28b39bb)   
[Basic TechDraw Tutorial](https://wiki.freecad.org/Basic_TechDraw_Tutorial) (v0.17)  
This is the essential introduction to the tools of the TechDraw Workbench: page, view, scale, vertical and horizontal dimensions, annotations, projection groups, linking dimensions to the 3D view.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3ec21c85-b056-4f5f-b8c6-f6a61cdb8930)   
[Creating a new background template](https://wiki.freecad.org/TechDraw_TemplateHowTo) (v0.17)  
Instructions to create a page template in Inkscape for using it with the TechDraw Workbench. Determine the size of the sheet, draw a frame for the page, define fixed text, and editable text fields.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9b907ca5-2beb-4da8-ab8e-01c617c8c237)   
[Measurement Of Angles On Holes](https://wiki.freecad.org/Measurement_Of_Angles_On_Holes) (v0.19)  
Instructions for adding center lines and subsequent angle representations on holes.  

## FEM

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a45cb487-3e75-4918-b96c-7d93125566eb)   
[CalculiX cantilever FEM analysis](https://wiki.freecad.org/FEM_CalculiX_Cantilever_3D) (v0.20)  
This in an example included in every installation of FreeCAD; it demonstrates a basic analysis with the CalculiX FE solver. Purge the current result, re-run the solver, and view the displacements and stresses in the deformed mesh in the viewport.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/679c1601-ff43-4f49-a503-0d056b4998fe)    
[Simple FEM introduction](https://wiki.freecad.org/FEM_tutorial) (v0.20)   
This is a short introduction to the steps required to perform an analysis in the FEM Workbench: model your object, create a mesh, add constraints and forces, add a material, run the solver, and visualize the results.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d88183e4-e32f-4ebe-a1c9-bb3ea6cc972d)   
[FEM shear analysis of a composite block](https://wiki.freecad.org/FEM_Shear_of_a_Composite_Block) (v0.17)  
Study the deformation of a block made of a hard nucleus surrounded by a softer material: create mesh regions, add materials, set up sliding constraints, add shear loads, run the solver, and visualize the results with a clip plane.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/98d2d0ed-7e9b-4163-95bd-dae601c1c4ee)   
[Analysis of reinforced concrete with FEM](https://wiki.freecad.org/Analysis_of_reinforced_concrete_with_FEM) (v0.19)  
Estimate the level of reinforcement required in a concrete structure to prevent brittle failure under tension or shear.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/50c10181-c803-4f28-b40b-a07f0baa0add)   
[Electrostatic equation – Capacitance of two balls](https://wiki.freecad.org/FEM_Example_Capacitance_Two_Balls) (v0.19)  
This example shows how to simulate a capacitance. It illustrates how to setup the example, study it's various parts, solve it using the [Elmer Solver](https://wiki.freecad.org/FEM_SolverElmer) and visualize the results using [Clip Filter](https://wiki.freecad.org/FEM_PostFilterClipRegion).  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3a898df7-9ffe-41d6-94fe-1718ebdce00f)   
[Post-Processing of FEM results with Paraview](https://wiki.freecad.org/Post-Processing_of_FEM_Results_with_Paraview) (v0.19)  
This tutorial explains the basics of transferring data from the FEM Workbench to Paraview and shows some of the options and settings for displaying data.  

## CNC & 3D Printing

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a36f3d80-d86b-483c-9a9b-0b07577c220c)    
[Path Workbench for the impatient](https://wiki.freecad.org/Path_Walkthrough_for_the_Impatient)  
This is a quick presentation of the workflow for the Path Workbench: create a job, define the output, define the milling tool, define the path operations, start the simulation, and generate a G-code output file.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4a307e71-4cc6-4f6d-8ea9-3b4cfb565e76)  
[Preparing models for 3D printing](https://wiki.freecad.org/Manual:Preparing_models_for_3D_printing) (v0.16)
Convert a solid object to a mesh object using the Mesh Workbench, export the mesh to STL format, and use Slic3r to prepare the G-code. Alternatively use the Cura Workbench or the Path Workbench to generate the G-code.

## Rendering

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e0614f3f-2095-408e-a8fb-a04fde193d0c)  
[Creating renderings](https://wiki.freecad.org/Manual:Creating_renderings)  
Quickly produce a rendered image of your bodies with POV-Ray and LuxRender, if they are installed in your system.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9588cbdb-62de-4840-9e7c-01b8dc28b060)   
[Raytracing tutorial](https://wiki.freecad.org/Raytracing_tutorial) (v0.16)  
Describes the basic workflow of the Raytracing Workbench using POV-Ray or LuxRender: set the path to the renderers, create a project, set the camera position, select the model, run the renderer.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ac453ffd-89e6-4926-a3c5-4a072a2d9225)   
[Intermediate FreeCAD and POV-ray tutorial](https://wiki.freecad.org/Tutorial_FreeCAD_POV_ray) (v0.18)  
Workflow to produce a better render with POV-Ray: create a project, add objects, set the camera, save the .pov file, manually edit the file to improve the textures, planes, lights, and then run the renderer.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/419fa674-e677-46dc-99d7-bc14250ab360)   
[Rendering a FreeCAD assembly with Blender](https://wiki.freecad.org/Tutorial_Render_with_Blender) (v0.18)  
Export bodies from FreeCAD to Wavefront .obj, import the file into Blender, set up a simple Sun light, assign basic materials with the Principled BSDF shader, and produce a rendered image with EEVEE and Cycles.  

## Robot workbench

```
Development of the Robot Workbench is currently abandoned. Please inquire on our forum regarding any news or alternative workbenches.
```

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1d8f63b3-602f-460e-8d83-326abff8555a)   
[Robot tutorial](https://wiki.freecad.org/Robot_tutorial) (v0.17)  
Simulate the movement of an industrial robot: set up a trajectory, set up home position, change the robot position, insert various waypoints, and simulate the robot movement.  

## Scripting

These are tutorials that are related to scripting or programming. They are geared towards more experienced users, who are already somewhat familiar with the program.

- [Python scripting tutorial](https://wiki.freecad.org/Python_scripting_tutorial)
- [How to install macros](https://wiki.freecad.org/How_to_install_macros)
- [How to install additional workbenches](https://wiki.freecad.org/How_to_install_additional_workbenches)

## Tutorials - Comprehensive list

Here are listed all the tutorials that are not in the manual **regardless of their quality**. If a tutorial is listed in the [Category: Tutorials](https://wiki.freecad.org/Category:Tutorials) and not in this table please insert it.

| Tutorial    | Topic       | Level       | Time to complete (hh:mm) | Authors      | FreeCAD version | Example files   |
| ----------- | ----------- | ----------- | -----------              | -----------  | -----------     | -----------     |
| [Add Button to FEM Toolbar Tutorial](https://wiki.freecad.org/Add_Button_to_FEM_Toolbar_Tutorial)     | Finite Element Analysis |   |   | JohnWang |    |    |    
| [Add FEM Constraint Tutorial](https://wiki.freecad.org/Add_FEM_Constraint_Tutorial)	| Finite Element Analysis	|   |   | M42kus |   |   |     	
| [Add FEM Equation Tutorial](https://wiki.freecad.org/Add_FEM_Equation_Tutorial)     | Finite Element Analysis |   |   | JohnWang |    |     |
| [Adding a new mouse navigation option to FreeCAD (unfinished)](https://wiki.freecad.org/Adding_a_new_mouse_navigation_option_to_FreeCAD) | Programming | Advanced	|   | [Kunda1](https://wiki.freecad.org/User:Kunda1) | 0.19.x |	None |
| [Advanced Attachment OYX](https://wiki.freecad.org/Advanced_Attachment_OYX) |	Attachment | Intermediate/Advanced | | drmacro | 0.19	| None |
| [Advanced TechDraw Tutorial (unfinished)](https://wiki.freecad.org/Advanced_TechDraw_Tutorial) | TechDraw Workbench | Advanced | | domad | 0.19 |	None |
| [Aeroplane](https://wiki.freecad.org/Aeroplane) |	Part Workbench | Beginner |	0:10 | Hughthecat | | |
| [Analysis of reinforced concrete with FEM](https://wiki.freecad.org/Analysis_of_reinforced_concrete_with_FEM) |	Finite Element Analysis	| Intermediate | 1:00 | HarryvL	| 0.19 or above	| |
| [Arch panel tutorial](https://wiki.freecad.org/Arch_panel_tutorial) |	Arch Workbench | Beginner	| 1:00 | [Yorik](https://wiki.freecad.org/User:Yorik) |  |  |
| [Arch tutorial](https://wiki.freecad.org/Arch_tutorial) | Modeling | Intermediate |  |	Yorik	| 0.14 |  |
| [Basic Attachment Tutorial](https://wiki.freecad.org/Basic_Attachment_Tutorial) |	Attachment | Beginner/intermediate | 1:00 | Bance	| 0.17 or above	| [Basic Attachment Tutorial.FCStd](https://github.com/BanceFC/Examples/blob/master/Basic_Attachment_Tutorial.FCStd) |
| [Basic modeling tutorial](https://wiki.freecad.org/Basic_modeling_tutorial) | Modelling | Beginner | 0:15 | NormandC | Any | None |
| [Basic Part Design Tutorial	Modeling](https://wiki.freecad.org/Basic_Part_Design_Tutorial) | Beginner	| |	[Mark Stephen (Quick61)](https://wiki.freecad.org/User:Quick61) and HarryGeier | 0.17 or above | [Basic Part Design for v0.17](https://github.com/FreeCAD/Examples/blob/master/Basic_Part_Design_Tutorial_Example_017_Files/Basic_Part_Design_Tutorial_017.fcstd) |
| [Basic Part Design Tutorial 019](https://wiki.freecad.org/Basic_Part_Design_Tutorial_019) |	Modeling | Beginner | 1:00 | [Carlo Dormeletti](https://wiki.freecad.org/User:Onekk) and Ed Williams | 0.19 or above	| |
| [Basic Sketcher Tutorial](https://wiki.freecad.org/Basic_Sketcher_Tutorial) | Sketcher Workbench | Beginner | 1:00 | [Drei](https://wiki.freecad.org/User:Drei) and Vocx | 0.19 | [Basic Sketcher tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=43594) |
| [Basic TechDraw Tutorial](https://wiki.freecad.org/Basic_TechDraw_Tutorial) | TechDraw Workbench | Beginner | | WandererFan	| 0.17 or above | [Basic Part Design for v0.17 Sample](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd) [Basic TechDraw Tutorial Sample](https://github.com/FreeCAD/Examples/blob/master/Basic_TechDraw_Tutorial_Example_Files/Basic_TechDraw_Tutorial.fcstd) |
| [BIM ingame tutorial](https://wiki.freecad.org/BIM_ingame_tutorial) | Arch Workbench | Beginner | | [Yorik](https://wiki.freecad.org/User:Yorik) | | |
| [Code snippets](https://wiki.freecad.org/Code_snippets) | Python | Beginner | | | | |		
| [Creating a simple part with Draft and Part WB](https://wiki.freecad.org/Creating_a_simple_part_with_Draft_and_Part_WB) | Modeling | Beginner | 1:30 | Heda | - | - |
| [Creating a simple part with Part WB](https://wiki.freecad.org/Creating_a_simple_part_with_Part_WB) | Modeling | Beginner |	2:00 | Heda | - |	- |
| [Creating a simple part with PartDesign](https://wiki.freecad.org/Creating_a_simple_part_with_PartDesign) | Modeling | Beginner	| 1:00 | GlouGlou | 0.17 or above	| [Creating a simple PartDesign Body.FCStd](https://github.com/FreeCAD/Examples/blob/master/Creating_a_simple_PartDesign_Body.FCStd) |
| [Customize Toolbars](https://wiki.freecad.org/Customize_Toolbars) | Customization	| Beginner | 0:05	| [Mario52](https://wiki.freecad.org/User:Mario52) | Any | None |
| [Draft ShapeString tutorial](https://wiki.freecad.org/Draft_ShapeString_tutorial) | Product Design | Beginner	| 0:30 | r-frank and vocx	| 0.17 or above | [Draft_Shapestring_Text](https://github.com/FreeCAD/Examples/blob/master/Draft_Shapestring_Tutorial_Examples/Draft_Shapestring_Tutorial_Text.FCStd?raw=true) |
| [Draft tutorial](https://wiki.freecad.org/Draft_tutorial) | Draft Workbench | Beginner | 0:30	| [Drei](https://wiki.freecad.org/User:Drei) and vocx	| 0.19 | [Draft tutorial updated](https://forum.freecadweb.org/viewtopic.php?f=36&t=43651) |
| [Dxf Importer Install](https://wiki.freecad.org/Dxf_Importer_Install) | Import | Intermediate | 0:05 | [Mario52](https://wiki.freecad.org/User:Mario52) | Any | None |
| [Engine Block Tutorial](https://wiki.freecad.org/Engine_Block_Tutorial) | Part Workbench | Beginner | 1:00 | Andrewbuck40	| 0.14.3700	| |
| [Example Combined Footing](https://wiki.freecad.org/Example_Combined_Footing) | Reinforcement Workbench	| Intermediate | | [Shiv Charan](https://wiki.freecad.org/User:Shiv_Charan) |	0.20 | None |
| [Example Slab Having LShape Rebars Reinforcement Mesh](https://wiki.freecad.org/Example_Slab_Having_LShape_Rebars_Reinforcement_Mesh) | Reinforcement Workbench	| Intermediate | | [Shiv Charan](https://wiki.freecad.org/User:Shiv_Charan) | 0.20 | None |
| [Example Slab Having Mesh Of Straight Rebars](https://wiki.freecad.org/Example_Slab_Having_Mesh_Of_Straight_Rebars) | Reinforcement Workbench |	Intermediate | [Shiv Charan](https://wiki.freecad.org/User:Shiv_Charan) | 0.20	| None |
| [Example Slab Having UShape Rebars Reinforcement Mesh](https://wiki.freecad.org/Example_Slab_Having_UShape_Rebars_Reinforcement_Mesh) |	Reinforcement Workbench	| Intermediate | [Shiv Charan](https://wiki.freecad.org/User:Shiv_Charan) | 0.20 | None |
| [Example Slab Spanning in One Direction](https://wiki.freecad.org/Example_Slab_Spanning_in_One_Direction) | Reinforcement Workbench |	Intermediate | [Shiv Charan](https://wiki.freecad.org/User:Shiv_Charan) | 0.20	| None |
| [Example Slab Spanning in Two Directions](https://wiki.freecad.org/Example_Slab_Spanning_in_Two_Directions) | Reinforcement Workbench |	Intermediate | [Shiv Charan](https://wiki.freecad.org/User:Shiv_Charan) | 0.20	| None |
| [Export to STL or OBJ](https://wiki.freecad.org/Export_to_STL_or_OBJ) | Export | Beginner | 0:20 | r-frank | 0.16.6703 | |
| [Extend FEM Module](https://wiki.freecad.org/Extend_FEM_Module) |	Finite Element Analysis	| | | M42kus | | |
| [FEM CalculiX Cantilever 3D](https://wiki.freecad.org/FEM_CalculiX_Cantilever_3D) | Finite Element Analysis | Beginner | 0:10 | Bernd |	0.16.6377 or above | |
| [FEM Example Capacitance Two Balls](https://wiki.freecad.org/FEM_Example_Capacitance_Two_Balls) | Finite Element Analysis |	Beginner | | [Sudhanshu Dubey](https://wiki.freecad.org/User:Sudhanshu_Dubey) | 0.19 | None |
| [FEM Shear of a Composite Block](https://wiki.freecad.org/FEM_Shear_of_a_Composite_Block) |	Finite Element Analysis	| Beginner/Intermediate	| 0:30 | HarryvL | 0.17.12960 or above | |
| [FEM tutorial](https://wiki.freecad.org/FEM_tutorial) |	Finite Element Analysis | Beginner | 0:10	| [Drei](https://wiki.freecad.org/User:Drei) | 0.17 or above | |
| [FEM Tutorial Python](https://wiki.freecad.org/FEM_Tutorial_Python) |	Finite Element Analysis |	Intermediate | 0:30	| Bernd	| 0.18.15985 or above	| |
| [FreeCAD-Ship s60 tutorial](https://wiki.freecad.org/FreeCAD-Ship_s60_tutorial) |	Ship Workbench | Beginner	| | | | |			
| [FreeCAD-Ship s60 tutorial (II)](https://wiki.freecad.org/FreeCAD-Ship_s60_tutorial_(II)) |	Ship Workbench | Beginner | | | | |
| [How to install additional workbenches](https://wiki.freecad.org/How_to_install_additional_workbenches) |	Programming	| Medium programmer	| 0:15 | r-frank | Any | None |
| [How to install macros](https://wiki.freecad.org/How_to_install_macros) | Programming | Medium programmer | 0:15 | [Mario52](https://wiki.freecad.org/User:Mario52) | Any |	None |
| [Import from STL or OBJ](https://wiki.freecad.org/Import_from_STL_or_OBJ) | Import | Beginner |	0:30 | r-frank | 0.16.6703 | |
| [Import OpenSCAD code](https://wiki.freecad.org/Import_OpenSCAD_code) |	Import | Beginner	| 0:30 | r-frank | 0.16.6704 | None |
| [Import text and geometry from Inkscape](https://wiki.freecad.org/Import_text_and_geometry_from_Inkscape) | Import | Beginner	| 0:30 | r-frank | 0.16.6704 | |	
| [Import/Export IFC - compiling IfcOpenShell](https://wiki.freecad.org/Import/Export_IFC_-_compiling_IfcOpenShell) |	Arch Workbench | Advanced	| 2:00 | Pablo Gil | | |	
| [Measurement Of Angles On Holes	TechDraw Workbench](https://wiki.freecad.org/Measurement_Of_Angles_On_Holes) | Beginner | 0:01 | AnHi	| 0.19 | |
| [PartDesign Bearingholder Tutorial I](https://wiki.freecad.org/PartDesign_Bearingholder_Tutorial_I) |	Product design | Beginner | 1:00 | NormandC | | |
| [PartDesign Bearingholder Tutorial II](https://wiki.freecad.org/PartDesign_Bearingholder_Tutorial_II) |	Product design | Beginner | 1:00 | NormandC | | |
| [PartDesign tutorial](https://wiki.freecad.org/PartDesign_tutorial) |	Sketcher Workbench | Beginner |	0:15 | [Drei](https://wiki.freecad.org/PartDesign_tutorial) |	0.16 or above | |
| [Path Walkthrough for the Impatient](https://wiki.freecad.org/Path_Walkthrough_for_the_Impatient) |	Path Workbench | | | Chrisb | | |		
| [Plot Basic tutorial](https://wiki.freecad.org/Plot_Basic_tutorial) |	Plot Workbench | Beginner	| | | | |			
| [Plot MultiAxes tutorial](https://wiki.freecad.org/Plot_MultiAxes_tutorial) | Plot workbench | Intermediate	| | | | |				
| [Post-Processing of FEM Results with Paraview](https://wiki.freecad.org/Post-Processing_of_FEM_Results_with_Paraview) | Finite Element Analysis	| Intermediate | 2:00 | HarryvL	| 0.19 | [Beam](https://forum.freecadweb.org/download/file.php?id=103403) and [wall](https://forum.freecadweb.org/download/file.php?id=103557) |
| [Private Preference Packs](https://wiki.freecad.org/Private_Preference_Packs) | Customization |	Intermediate/Advanced	| | drmacro	| 1.0 or above| |
| [Python scripting tutorial](https://wiki.freecad.org/Python_scripting_tutorial) | Programming	| Intermediate | | | | |	
| [Raytracing tutorial](https://wiki.freecad.org/Raytracing_tutorial) | Raytracing Workbench | Beginner	| 0:10 | [Drei](https://wiki.freecad.org/User:Drei) | 0.16 or above	| |
| [Robot 6-Axis](https://wiki.freecad.org/Robot_6-Axis) | Robot Workbench | Intermediate | | | | |				
| [Robot tutorial](https://wiki.freecad.org/Robot_tutorial) | Robot Workbench | Beginner | | r-frank | | |
| [Scripted Parts: Ball Bearing - Part 1](https://wiki.freecad.org/Scripted_Parts:_Ball_Bearing_-_Part_1) | Python | Beginner	| 0:30 | r-frank | 0.16.6706 | |
| [Scripted Parts: Ball Bearing - Part 2](https://wiki.freecad.org/Scripted_Parts:_Ball_Bearing_-_Part_2) | Python | Beginner	| 0:30 | r-frank | 0.16.6706 | |
| [Scripts](https://wiki.freecad.org/Scripts) | Python | Beginner | | onekk Carlo	| 0.19 | |
| [Sketcher Micro Tutorial - Constraint Practices](https://wiki.freecad.org/Sketcher_Micro_Tutorial_-_Constraint_Practices) | Sketcher Workbench | Beginner	| 0:30 | [Mark Stephen (Quick61)](https://wiki.freecad.org/User:Quick61) and vocx | 0.19	| [Sketcher Constraints practices](https://forum.freecadweb.org/viewtopic.php?f=36&p=371659#p371659) |
| [Sketcher reference](https://wiki.freecad.org/Sketcher_reference) | Sketcher Workbench | | | | | |				
| [Sketcher requirement for a sketch](https://wiki.freecad.org/Sketcher_requirement_for_a_sketch) | Sketcher Workbench | Beginner	| [Maker](https://wiki.freecad.org/User:Maker) | | None |
| [Sketcher Tutorial](https://wiki.freecad.org/Sketcher_Tutorial) | Sketcher Workbench | Beginner	| | Ulrich | | |
| [TechDraw HowTo Page](https://wiki.freecad.org/TechDraw_HowTo_Page) | TechDraw Workbench | | | | 0.19 |	None |
| [TechDraw Pitch Circle](https://wiki.freecad.org/TechDraw_Pitch_Circle_Tutorial) | Tutorial	| TechDraw Workbench | Beginner	| 0:10 | Andergrin | 0.19 |	None |
| [TechDraw TemplateGenerator](https://wiki.freecad.org/TechDraw_TemplateGenerator) |	TechDraw Workbench | Intermediate	| |	[FBXL5](https://wiki.freecad.org/User:FBXL5) | 0.19 | None |
| [TechDraw TemplateHowTo](https://wiki.freecad.org/TechDraw_TemplateHowTo) |	TechDraw Workbench | Intermediate |	1:00 | wandererfan | 0.17 | None |
| [Thread for Screw Tutorial](https://wiki.freecad.org/Thread_for_Screw_Tutorial) | Product design | Advanced | 1:00 | [DeepSOIC](https://wiki.freecad.org/User:DeepSOIC), Murdic, vocx | 0.19 | [Updated: Thread for screw tutorial](https://forum.freecadweb.org/viewtopic.php?f=36&t=44668) |
| [Toothbrush Head Stand](https://wiki.freecad.org/Toothbrush_Head_Stand) | Modeling | Beginner | 1:00 | [EmmanuelG](https://wiki.freecad.org/User:EmmanuelG) | 0.16 or above	| [Thingiverse 2403310](https://www.thingiverse.com/thing:2403310) |
| [Topological data scripting](https://wiki.freecad.org/Topological_data_scripting) | Programming	| Intermediate | | | | |				
| [Transient FEM analysis](https://wiki.freecad.org/Transient_FEM_analysis) | Finite Element Analysis | | | | | |		
| [Tutorial custom placing of windows and doors](https://wiki.freecad.org/Tutorial_custom_placing_of_windows_and_doors) | Arch Workbench | Intermediate	| 1:00 | Vocx | 0.18 or above	| None |
| [Tutorial for open windows](https://wiki.freecad.org/Tutorial_for_open_windows) | Arch Workbench | Beginner | 1:00 | Vocx	| 0.18 or above |	None |
| [Tutorial FreeCAD POV ray](https://wiki.freecad.org/Tutorial_FreeCAD_POV_ray) | Raytracing Workbench | Intermediate	| 2:00 | Vocx |	0.18 or above |	None |
| [Tutorial KinematicAssembly](https://wiki.freecad.org/Tutorial_KinematicAssembly) | Assembly3 Workbench	| Beginner | 0:30	| [FBXL5](https://wiki.freecad.org/User:FBXL5) |	0.20 or above |	None |
| [Tutorial KinematicController](https://wiki.freecad.org/Tutorial_KinematicController) | Programming	| Intermediate | 1:00	| [FBXL5](https://wiki.freecad.org/User:FBXL5) | 0.20 or above |	None |
| [Tutorial KinematicSkeleton](https://wiki.freecad.org/Tutorial_KinematicSkeleton) | Assembly3 Workbench |	Intermediate | 0:40	| [FBXL5](https://wiki.freecad.org/User:FBXL5) | 0.20 |	None |
| [Tutorial Render with Blender](https://wiki.freecad.org/Tutorial_Render_with_Blender) | Rendering	| Intermediate | 1:00	| Vocx | 0.18 or above | None |
| [VRML Preparation for Robot Simulation](https://wiki.freecad.org/VRML_Preparation_for_Robot_Simulation) | Robot Workbench | Intermediate | | | 0.11.4252ppa1 | |	
| [Whiffle Ball tutorial](https://wiki.freecad.org/Whiffle_Ball_tutorial) |	Product design | Beginner | 0:30 | r-frank and vocx |	0.17 or above	| [WhiffleBall_Tutorial_FCWiki.FCStd](https://github.com/FreeCAD/Examples/blob/master/Whiffle_Ball_Tutorial_ExampleFiles/WhiffleBall_Tutorial_FCWiki.FCStd?raw=true) |
| [Wikihouse porting tutorial](https://wiki.freecad.org/Wikihouse_porting_tutorial) |	Import | Intermediate/Advanced | 1:00 | | | | 
