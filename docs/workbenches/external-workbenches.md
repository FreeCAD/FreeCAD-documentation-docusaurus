# External workbenches

## Introduction

**External workbenches** are those created by power users that haven't been integrated into the main FreeCAD source code.

These workbenches aren't supported by the core FreeCAD development team, so they aren't tested to work with every version of FreeCAD. Questions, bug reports, and improvement requests should be made directly to the authors of the workbench.

Workbenches marked with ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/90a79042-b678-43b8-99c8-5209ddb1c0d7) can be installed from the [Addon Manager](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/blob/main/src/pages/std-addonMgr.md). For manual installation, see [Installing more workbenches](https://wiki.freecad.org/Installing_more_workbenches). If there are specific instructions or prerequisites for using an external workbench, then these should be noted on the workbench's home page.

Workbenches marked with ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5937db8b-b7e4-464b-be8d-587e631f4551) is not recommended for recent versions of FreeCAD. They are obsolete, unmaintained, superseded by a newer workbench, or maybe they don't work with Python 3 or with Qt5. In most cases, they should be avoided.

## Assembly workbenches

As of FreeCAD 0.19, there is no official assembly workbench. However, several external tools have been created or are in development to manipulate objects to produce assemblies.

Note that the assembly workbenches are generally incompatible with each other. If you create an assembly with one of them, you should stick to the original workbench, and not use another assembly workbench in the same document.

There are also 'pseudo assembly' workbenches, which actually don't use constraints to keep relationships between parts, but simply re-position them in space.

## Overview

## Translating external workbenches

See the wiki page for more information [Translating an external workbench](https://wiki.freecad.org/Translating_an_external_workbench).
