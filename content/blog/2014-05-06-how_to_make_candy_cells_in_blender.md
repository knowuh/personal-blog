---
title: How to make candy cells in Blender
date: 2014-05-06
tags: photo images blender
old_layout: blog
---

In the [Blender G+ group](https://bit.ly/1siChID), people asked for some details about a render I did.
I promised I would send a small explanation, and include the .blend file.
Spoiler: I used Cycles, a light table, a glass surface shader,
and a volume absorption shader.

<img src="/images/2014-05/final.jpg" class="img img-responsive blog-image" alt="final"/>

### The light table scene setup ###

The entire scene is photographed from the top-down on a light table. I
was trying to model these guys on microscope slides, which are often
back-lit.

This first image shows the cycles light-plane at the bottom. The camera
isn't visible, but it would be just above the top of the frame in this
image:

<img src="/images/2014-05/lit.png" class="img img-responsive blog-image" alt="bottom-lit"/>

### The candy shader ###

All the candy-blobs use the same simple cycles shader-node setup.

The Beckman glass shader is used for the mesh surface, and a volume absorption shader is used for volume.  The glass shader has some roughness to it, so that the glass is visible when back-lit, and doesn't cause too many fireflies.  The Index of refraction is just below 1. I found values from 0.7 → 0.9 worked well for this application.

To make Each candy-blob thing have its own delicious color, an HSV node
is used as the color input to the volume node. The HSV takes its Hue
from a random value assigned to each object via the Object Info node.
To make it extra candy-ish the saturation is pumped up to 10.

<img src="/images/2014-05/shader-nodes.png" class="img img-responsive blog-image" alt="Candy shader settings"/>

### Room for imagination ###

The only other interesting thing about this setup, is the camera has a very wide aperture, and makes use of a DOF empty object. This simple camera rig is part of my default scene because I use it so often.

<img src="/images/2014-05/camera-dof.png" class="img img-responsive blog-image" alt="images/2014-05/camera-dof.png"/>


### Meta ###

I hope that this information is useful to a few people. If there was
enough interest, I would be happy to put together a video, as a way for
myself to learn something new.

Here is a link to the [.blend file](/candy.blend).  This is my first
time ever sharing a blend file. I hope its prepared OK, and isn't too
confusing.  Any tips about removing unwanted bits and bobs or otherwise
packaging a blend file would be appreciated.
