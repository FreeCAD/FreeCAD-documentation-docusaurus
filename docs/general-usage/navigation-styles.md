# Navigation styles

> Mouse navigation

## Overview

The FreeCAD **mouse navigation** consists of the commands used to visually navigate 3D space and interact with the displayed objects. FreeCAD supports multiple mouse navigation styles. The default navigation style is referred to as [CAD Navigation](https://wiki.freecad.org/Mouse_navigation#CAD_navigation), and is very simple and practical, but FreeCAD also provides several alternative navigation styles to choose from. The selected style is used for all workbenches.

For more information about selecting objects see [Selection methods](https://wiki.freecad.org/Selection_methods).

For more information about manipulating objects see [Std TransformManip](https://wiki.freecad.org/Std_TransformManip).

## Selecting a navigation style

1. Do one of the following:
  - Press the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a826df76-d208-414c-b367-40e08f7eb75e) button in the [Status bar](https://wiki.freecad.org/Status_bar).
  - Right-click an empty area in the [3D view](https://wiki.freecad.org/3D_view), and select **Navigation styles** from the context menu.
  - Use the [Preferences Editor](https://wiki.freecad.org/Preferences_Editor#Navigation). In the menu select **Edit → Preferences** and then **Display → Navigation → 3D Navigation**.
2. Select a style from the list.
3. Optionally change the **Orbit style**: press the ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/2d69a63a-e97e-4539-858e-a07f4b6edaa4) button in the [Status bar](https://wiki.freecad.org/Status_bar) and then choose **Settings → Orbit style**. See [Preferences Editor](https://wiki.freecad.org/Preferences_Editor#Navigation).
4. Optionally change the **Rotation mode**. See [Preferences Editor](https://wiki.freecad.org/Preferences_Editor#Navigation).
5. If the **CAD** navigation style is selected: optionally change the **Enable animation** setting. See [Preferences Editor](https://wiki.freecad.org/Preferences_Editor#Navigation).

## Available navigation styles

### Blender navigation

The Blender navigation style was modeled after [Blender](https://www.blender.org/).

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/60a6f9b1-ec85-480a-8899-d4ca1dfebf94)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/09e6dc55-360d-456d-ad8e-87e60655bf51)  
Press the left mouse button over an object you want to select.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0f4d1640-6aba-4b05-b470-e19831e3acde)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f2a222d8-b16c-4b07-9343-20317f331c02) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d2bbabf4-79c3-4a2d-9c90-60fb19be4f3a)  
Hold `Shift` and the middle mouse button, then move the pointer.  
Alternatively, hold both left and right mouse buttons, and then move the pointer.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1809b1cd-b5f0-4f63-8e5c-d4f3a2413932)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a9de2baf-e957-4ee3-9ad7-1982d17b1afe)  
Use the mouse wheel to zoom in and out.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5560512e-0e20-4d89-9dbe-c747e3f8d359)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ec7fc32d-4a50-4609-abec-11014317d6e8)  
Hold the middle mouse button, then move the pointer.

### CAD navigation

This is the default navigation style. It allows the user a simple control of the view, and does not require the use of keyboard keys except to make multi-selections.

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d1932208-3aac-4fe6-b1bc-6ea0026f30bc)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1977af30-7355-4f39-b14d-b9f4b2590a31)  
Press the left mouse button over an object you want to select.  
Hold down `Ctrl` to select multiple objects.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3b439cc7-e3cf-4c7c-a92f-8c2b1289cccb)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e1ed5cb4-c8ba-4a8b-96d7-7ed4f94f6931)  
Hold the middle mouse button, then move the pointer.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e1c10164-b31e-480d-97fc-e41942bf224a)
> **Pan mode**: hold the `Ctrl` key, press the right mouse button once, then move the pointer.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/46ecc134-0c86-4255-bba2-0e9a190965b3)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1e82f645-1fbc-4518-a9be-6aaa9e0efc73)  
Use the mouse wheel to zoom in and out.  
Clicking the middle mouse button re-centers the view on the location of the cursor.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/470a3c48-3465-41ab-ba40-e673160c26bd)  
> **Zoom mode**: hold the `Ctrl` and `Shift` keys, press the right mouse button once, then move the pointer.

#### Rotate view (First method)
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/799e8e6e-eb01-4579-a6ca-93b884355c01)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3d284543-684c-4ce7-864f-f047a4c584ca)  
Hold the middle mouse button, then press and hold the left mouse button, then move the pointer.  
If the buttons are released before you stop the mouse motion, the view continues spinning, if this is enabled.  
A double click with the middle mouse button sets a new center of rotation.

#### Rotate view (Alternate method)
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/902718d3-1c30-44ed-9c2b-4b2921344c36)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d5ec0769-4aa9-4e37-be45-e902e854294b)  
Hold the middle mouse button, then press and hold the right mouse button, then move the pointer.  
With this method the middle mouse button may be released after the right mouse button is held pressed.  
Users who use the mouse with their right hand may find this method easier than the first method.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7de4a191-152a-45ad-8d0d-85b03a8d3695)
> **Rotate mode**: hold the `Shift` key, press the right mouse button once, then move the pointer.

### Gesture navigation

This style was tailored for use with a touchscreen and pen. Nevertheless, it can also be used with a mouse, and is recommended for use when using a Mac with a trackpad.

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/56ae3d3f-adfa-4ff8-b0ee-cd450aef22e9)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/39f766f4-be0c-427b-9072-38dd2a5db736)  
Press the left mouse button over an object you want to select.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1893064c-6b06-48b4-99c1-91286e8134aa)  
> Tap to select.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c01a2b2e-1cf3-4ab8-8907-21498deaa7c0)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7b99fcfc-42fb-4907-9ced-d44e6ef2e763)  
Hold the right mouse button, then move the pointer.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/707403d6-91f6-4f11-8639-5125d8bc7930) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/962aaa13-5e78-4774-ba66-969ffd79c111)  
> Drag with two fingers.  
> Alternatively, tap and hold, then drag. This simulates the pan with the right mouse button.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d60fc8ae-25d5-47ce-8ebc-043ce70273c1)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9d28810e-53ab-48d4-92c3-25b9daa8c50c)  
Use the mouse wheel to zoom in and out.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ef50d31b-7819-4496-a8e1-ed87ccef3f42)  
> Drag two fingers (pinch) closer or farther apart.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4c6ae84c-60aa-41a1-9054-d317a9890f04)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d01f3c82-4e8f-49dc-855b-6c062a688008)  
Hold the left mouse button, then move the pointer.  
In Sketcher and other edit modes, this behavior is disabled. Hold `Alt` when pressing the mouse button to enter rotation mode.  
To set the camera's focus point for rotation, click a point with the middle mouse button. Alternatively, aim the cursor at a point and press `H` on the keyboard.

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4cf93bbb-331b-4697-82cf-e0d2f4e807ec)  
> Drag with one finger to rotate.  
> Hold Alt when in the Sketcher.

#### Tilt view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cfcc8b36-0f0f-43f7-80d2-d446ab0f1a7b)  
Hold both left and right mouse buttons, then move the pointer sideways.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1e78c0a4-bae0-4641-be5b-5a03347934fa)
> Rotate the imaginary line formed by two touch points.  
> On v0.18 this method is disabled by default. To enable, go to **Edit → Preferences → Display**, and untick "Disable touchscreen tilt gesture" checkbox.

### Maya-Gesture navigation

In Maya-Gesture Navigation, panning, zooming, and rotating the view require the `Alt` key together with a mouse button; therefore, a three-button mouse is required. It's also possible to use gestures as this style was developed over the [Gesture navigation](https://wiki.freecad.org/Mouse_navigation#Gesture_navigation) style.

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/8dfd995f-d343-4358-bfe9-23509f2a8462)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bd62c07e-a157-4cc8-97b8-c3511ed30cfc)  
Press the left mouse button over an object you want to select.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3e6c90f6-3f42-4b27-b372-512007b76da4)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5d0d2a01-f027-4744-b324-5385ead7d7d5)  
Hold `Alt` and the middle mouse button, then move the pointer.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3d914c0f-0739-4c89-80ac-8e783d4eaa05)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/73b49443-37cd-4406-889d-c701947bba0d) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c673c3b0-a8b1-4cbe-ba20-5fe097d73c8e)  
Hold `Alt` and the right mouse button, then move the pointer.  
Alternatively, use the mouse wheel to zoom in and out.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/71aa7d64-57b4-4c02-b529-2e4c23ea5ae9)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f5c090ee-e064-4e9c-8e95-040f206d6668)  
Hold `Alt` and the left mouse button, then move the pointer.

### OpenCascade navigation

The OpenCascade navigation style was modeled after [OpenCascade](https://www.opencascade.com/).

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e926fe44-6784-4ccd-97ed-8de0804435d1)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b3d71489-1521-459b-a834-4e8115b5aea4)  
Press the left mouse button over an object you want to select.  

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7ebb5c17-a19b-46c8-a2cf-aef625738ae9)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bb2c1d72-e3f9-431b-9c5b-06ae41379015) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/389f6cee-830e-4ab2-92fc-2bf4ed293f58)  
Hold the middle mouse button, then move the pointer.
 
#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/50c4cd12-0ed2-4379-bc03-e916ae0b8435)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a42b23e2-4a7d-4a97-819f-d4a403e87d8c) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/1989a1cc-8813-4595-b4e4-60a80050d1e8)  
Use the mouse wheel to zoom in and out.  
Alternatively, hold `Ctrl` and the left mouse button, then move the pointer.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ff195c7e-f6a7-475e-86b4-866b6ae66a8c)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/97772e4b-1c02-46cd-a2aa-628ba2c21199)  
Hold `Ctrl` and the right mouse button, then move the pointer.

### OpenInventor navigation

OpenInventor navigation (formerly Inventor) was modeled after [Open Inventor](http://en.wikipedia.org/wiki/Open_Inventor). In order to select objects, you must hold down the `Shift` or `Ctrl` key.

This style is not based on Autodesk Inventor.

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/da5640e6-3d85-4ea1-b17e-fd3ad9f759bb)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/96ef99c8-968f-4258-9256-e2d6c70aad9f)  
Hold `Shift`, then press the left mouse button over an object you want to select.  
Hold down `Ctrl` instead to select multiple objects.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5eddc293-53c9-4c84-bc40-cc41d6ed947e)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f6a63839-1a23-49bd-827f-a86ac87a1d40)  
Hold the middle mouse button, then move the pointer.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a0966207-6b97-45bb-93cc-24f14078c418)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3696bda7-89d9-4d7a-8635-24fdc9519036) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/0de651f2-bdc3-4932-9adb-970f9a65b82f)  
Use the mouse wheel to zoom in and out.  
Alternatively, hold the middle mouse button, then press and hold the left mouse button, then move the pointer.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/62a10247-849e-4366-b1dc-02c550e6000b)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/9ffe6cf2-12bb-4418-8ba6-0c1b5001e46c)  
Hold the left mouse button, then move the pointer.

### OpenSCAD navigation

The OpenSCAD navigation style was modeled after [OpenSCAD](https://openscad.org/).
[introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4b60893e-b8c2-4019-9cef-2942368d7663)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/613448cd-9ad8-4f0b-a8b9-33e3650bd88c)  
Press the left mouse button over an object you want to select.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/bcdffe75-e1bf-46df-b753-0d3f607f7b59)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5e9e2fc9-36f9-4e3d-97ee-6bf3629476c2)  
Hold the right mouse button, then move the pointer.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/7f0b4f13-1ce9-4439-a578-0a06ec4696ff)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d1aa47f8-9205-4cc4-af8c-d75705235686) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4052e7a3-443c-4ec4-af00-b77f0fea0c70)  
Hold the middle mouse button, then move the pointer.  
Alternatively, hold `Shift` and the right mouse button, then move the pointer.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/e60677d0-8606-4dbe-9b94-6a4890a11568)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/291dca80-ac20-4dc5-88d1-5987b7fb4f04)  
Hold the left mouse button, then move the pointer.

### Revit navigation

The Revit navigation style was modeled after [Revit](https://en.wikipedia.org/wiki/Autodesk_Revit).

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3d040aba-2a46-4646-9d21-21108fcd21af)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/eb521ad9-40bb-4ab0-9b26-a4fa12db645f)  
Press the left mouse button over an object you want to select.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/36ecae8e-06c9-4c0c-917e-efffc2ea3917)   
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b28667c0-4ba6-40c8-bdd9-4e04b4ac8c40) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c78a6a29-cb88-471a-8fa0-86718053e72b)  
Hold the middle mouse button, then move the pointer.  
Alternatively, hold both left and right mouse buttons, then move the pointer.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ac0e63f1-fac2-4dbe-9286-1198d589bfb0)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/a09274bd-24ea-44fb-8dd5-2cb82a0f26e1)  
Use the mouse wheel to zoom in and out.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/3dd8c78a-9586-4d28-aad3-adf350b8dd21)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/88da34a0-fe35-4694-8feb-d25831d74ffd) ![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/27c05fae-7cfb-4f67-a559-04b6d38f0c7c)  
Hold `Shift` and the middle mouse button, then move the pointer.  
Alternatively, hold the middle mouse button, then press and hold the right mouse button, then move the pointer.

### TinkerCAD navigation

The TinkerCAD navigation style was modeled after [TinkerCAD](https://en.wikipedia.org/wiki/Tinkercad).
[introduced in version 0.20](https://wiki.freecad.org/Release_notes_0.20)

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/c5cab414-1ef1-4f4b-b7bd-15bed6b1716f)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/dc872e25-5b8a-4963-9684-eb2e6a0c1da6)  
Press the left mouse button over an object you want to select.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/972707dd-65b7-4dac-ba31-0418e7d3f16b)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/cb5f2739-8495-463d-975f-c1623ef562cf)  
Hold the middle mouse button, then move the pointer.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/4befcab9-f527-4ab7-af53-06421eb67b37)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/ccd1d521-b5df-4ec3-9c26-f81699edddae)  
Use the mouse wheel to zoom in and out.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/37c28bd1-10c5-4d47-90bc-00c3aa049653)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5229a5e7-7eb0-4cce-803e-9388d1288c73)  
Press the right mouse button, then move the pointer.

### Touchpad navigation

In Touchpad Navigation, panning, zooming, and rotating the view require a modifier key together with the touchpad.

#### Select
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/682a649d-41e2-41d2-903d-495da7299c76)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/d3d9904a-0fde-454c-b90e-86aa16975531)  
Press the left mouse button over an object you want to select.

#### Pan
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/62ae556f-d24b-4524-9df4-3364f93e4c9c)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/f623fecd-93af-44c7-bbe6-c1f9f36edbf8)  
Hold `Shift`, then move the pointer.

#### Zoom
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/658025df-7b42-4068-bce2-f64d6d83e422)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/b9f57c63-dcb0-4cc4-926c-c7da8377d032)  
Use `PageUp` and `PageDown` to zoom in and out.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5bfc2172-bb78-4d8d-b05b-b18f82a3b9f7)  
> Alternatively, hold `Ctrl` and `Shift`, then move the pointer.

#### Rotate view
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/406a3504-0747-4ddb-9f61-cef7290d0ca0)  
![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/aed8583a-0686-4439-84a1-0be8eba3609b)  
Hold `Alt`, then move the pointer.  

![image](https://github.com/FreeCAD/FreeCAD-documentation-docusaurus/assets/100439627/5ed87f9a-dca0-49e5-b88f-28c53c06a85b)  
Alternatively, hold `Shift` and the left button, then move the pointer.

## Hardware support

FreeCAD also supports some [3D input devices](https://wiki.freecad.org/3D_input_devices).

## Recommended navigation for macOS

On MacBooks with a trackpad, the Gesture navigation works very well, but the gestures have a special meaning:

- Zoom: drag with two fingers.
- Rotate: drag with three fingers.
- Pan: `Ctrl` + three fingers.

## Developing a custom navigation

The tutorial [Adding a new mouse navigation option to FreeCAD](https://wiki.freecad.org/Adding_a_new_mouse_navigation_option_to_FreeCAD) orients developers who want to develop a custom mouse navigation option. Familiarity with the C++ syntax is required.
