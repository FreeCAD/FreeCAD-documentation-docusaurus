# Release 0.11

This summarizes the most important changes and new features available in the **0.11 release** of FreeCAD.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/61627d50-fc31-4664-b607-7fc6c4d1e043)  
_A screenshot of the 0.11 version_  

## General

- The [FreeCAD translation project](http://crowdin.net/project/freecad) has received huge help from many people around the world, and FreeCAD now ships with no less than 15 languages: English, German, French, Italian, Swedish, Spanish, Portuguese, Russian, Ukrainian, Norwegian, Afrikaans, Finnish, Simplified Chinese, Croatian and Dutch. And many more languages are being worked on for the next releases.
  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/52ba6bf0-0754-4a86-91e2-9ef6228f3526)  

- Several improvements have been brought all over FreeCAD; for example, the hierarchy tree now allows complex object stacks, keeping all your geometry history clean, easily accessible, and modifiable. New Python API improvements also allow objects to interact better with the tree, defining their own behavior, icons, etc.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/92dc3c07-70bc-4924-9aad-20ed343a3942)  

- The copy/paste mechanism has also been much improved, allowing easy copy/pasting of objects between documents.

- The [Part Workbench](https://wiki.freecad.org/Part_Workbench) features new tools such as mirroring, edge fillets, and chamfers.

## Sketch and part design

- The constraint solver of the [Sketcher Workbench](https://wiki.freecad.org/Sketcher_Workbench) has been totally rewritten and the Sketcher, even if still not complete, already features a good array of tools such as lines, rectangles, and constraints such as point coincidence, parallelism, fixed length or horizontal or vertical constraints.

- In addition to the Sketcher, a new PartDesign workbench now allows you to quickly build solids on top of Sketches. As a rule now in FreeCAD, everything is parametric, you can go back anytime to change your sketch, and all geometry that depends on it will be adapted automatically.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9400d0ef-6b53-4b07-be28-c88694ce5e38)  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d7f18446-53d2-43d1-af40-01fb17133560) Examples: 
- [Sketcher demo](http://www.youtube.com/watch?v=hvXupH5bA0E) 
- [PartDesign demo](http://www.youtube.com/watch?v=7ih9Jp3OAwA)

## Robot simulation

The [Robot Workbench](https://wiki.freecad.org/Robot_Workbench) has been extended with many GUI tools and is now fairly functional and allows you to easily simulate industrial robot movements.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8b2ae102-47f8-47b2-bd9c-973b5cead167)  

## 2D drafting

- Snapping has been greatly optimized and works pretty fast, even on complex objects.

- The "Trim/Extend" tool can now be called "Trim/Extend/Extrude" since it allows you to quickly extrude single faces, offering a convenient shortcut to the standard Part Extrude tool.

- The Draft-to-Drawing sheet workflow has also been enhanced. All the Draft workbench objects can now be placed on a Drawing page, and they all offer the same level of comfort as standard Part objects, offering the ability to change their position, rotation, and scale on the fly. They also offer some extra features, such as hatch pattern fillings.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/11d913bb-6801-498b-87c8-9ac7066032e9)  

- The Draft workbench offers new tools such as regular polygons and B-splines.

- There is also a new Edit tool, allowing to edit the geometry of most of the Draft objects.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1e38f26c-ccb7-433e-85a6-e11a323b12e4)  

- Dimensions can now have their text edited and moved, and wires can have an end arrow, allowing to use them as leaders.

- Several commands such as move, rotate, or dimensioning now allow you to do several copies without exiting the tool.

- The Draft workbench also gained a Python [API](https://wiki.freecad.org/Draft_API).

- The DXF importer now supports block attributes.    

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3cde6b15-2abf-4d75-be7d-0eec8dfde6f0) Examples: 
- [Draft module demo](http://www.youtube.com/watch?v=Q7cG-LQK8Ps)

## Images

- The image workbench now features an ImagePlane object, allowing you to display an image file inside the 3D scene that can be used for example to construct geometry on top of scanned blueprints.

## Documentation

- The [FreeCAD manual](https://wiki.freecad.org/Online_Help_Toc) now has several well-advanced translations. Check the main page!
