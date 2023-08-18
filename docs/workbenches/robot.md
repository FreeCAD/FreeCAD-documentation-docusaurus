# Robot Workbench

> The Robot Workbench is unmaintained. If you have experience with the topic and are interested in maintaining it, please state your intention in the developer's section of the [FreeCAD forum](https://forum.freecadweb.org/index.php).  
> The reason this workbench is still in the master source code is because it is programmed in C++. If this workbench could be programmed in Python, then it could be made an [external workbench](https://wiki.freecad.org/External_workbenches) and it could be moved to a separate repository.

## Introduction

The ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/99c5d3cb-b13c-449b-a121-7e4350323905) Robot Workbench is a tool to simulate a standard [6-axis industrial robot](https://wiki.freecad.org/Robot_6-Axis), like [Kuka](http://kuka.com/).

You can do the following tasks:
- Set up a simulation environment with a robot and work pieces.
- Create and fill up movement trajectories.
- Decompose features of a CAD part to a trajectory.
- Simulate the robot movement and reaching distance.
- Export the trajectory to a robot program file.

To get started try the [Robot tutorial](https://wiki.freecad.org/Robot_tutorial), and see the programming interface in the [RobotExample.py](https://github.com/FreeCAD/FreeCAD_sf_master/blob/master/src/Mod/Robot/RobotExample.py) example file.    

![Robot workbench icon](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/071a693b-b74f-4ecb-9c8b-e17f3af8b663)  
_Robot workbench icon_  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e1915a82-4773-4fa4-9e87-fc38307cba09)    

## Tools

Here the principal commands you can use to create a robot set-up.

### Robots

The tools to create and manage the 6-Axis robots
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/061b53fc-3386-40b4-af44-29f4f0076c85) [Create a robot](https://wiki.freecad.org/Robot_CreateRobot): Insert a new robot into the scene
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3559ad79-d792-403b-b570-6ce6a955034c) [Simulate a trajectory](https://wiki.freecad.org/Robot_Simulate): Opens the simulation dialog and lets you simulate
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dffad2ac-a920-4724-b0a6-7493d90fa9ce) [Export a trajectory](https://wiki.freecad.org/Robot_Export): Export a robot program file
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dab14829-b925-44ce-87f5-16535f1c77fc) [Set home position](https://wiki.freecad.org/Robot_SetHomePos): Set the home position of a robot
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5f670686-4cfe-4837-ab22-7c4f36b4e2e4) [Restore home position](https://wiki.freecad.org/Robot_RestoreHomePos): move the robot to its home position

### Trajectories

Tools to create and manipulate trajectories. There are two kinds, the parametric and non parametric ones.

#### Non parametric trajectories

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ae95a800-8fd5-4117-9d37-ed225c549ebb) [Create a trajectory](https://wiki.freecad.org/Robot_CreateTrajectory): Inserts a new empty trajectory-object into the scene
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8c404354-60da-4174-a0d4-62ed67b7b5f6) [Set the default orientation](https://wiki.freecad.org/Robot_SetDefaultOrientation): Set the orientation way-points gets created by default
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5b8342fe-101b-4fc8-8047-fa35e37c5c29) [Set the default speed parameter](https://wiki.freecad.org/Robot_SetDefaultValues): Set the default values for way-point creation
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8bcd760e-1502-408e-97fd-6207a05fb67d) [Insert a waypoint](https://wiki.freecad.org/Robot_InsertWaypoint): Insert a way-point from the current robot position into a trajectory
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8c00d9f7-1c07-4b80-ae5b-b0b20f71280b) [Insert a waypoint preselected](https://wiki.freecad.org/Robot_InsertWaypointPre): Insert a way-point from the current mouse position into a trajectory

#### Parametric trajectories

- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dcf324d3-10b1-43f6-bf02-8d10ecc3cd6c) [Create a trajectory out of edges](https://wiki.freecad.org/Robot_Edge2Trac): Insert a new object which decompose edges to a trajectory
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/32292e84-02e6-4d34-bbd6-9570a3e030b9) [Dress-up a trajectory](https://wiki.freecad.org/Robot_TrajectoryDressUp): Lets you override one or more properties of a trajectory
- ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d9a19bfc-d77e-4620-b911-dcbbe3d3f07a) [Trajectory compound](https://wiki.freecad.org/Robot_TrajectoryCompound): Create a compound out of some single trajectories

## Scripting

See the [Robot API example](https://wiki.freecad.org/Robot_6-Axis) for a description of the functions used to model the robot displacements.

## Tutorials

- [Robot 6-Axis](https://wiki.freecad.org/Robot_6-Axis)
- [VRML Preparation for Robot Simulation](https://wiki.freecad.org/VRML_Preparation_for_Robot_Simulation)
