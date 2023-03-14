---
title: Converting texture data to voxels in Blender
date: 2014-08-24
old_layout: blog
tags: blender video tutorial python
---

It all started when I wanted to grab some colors from Vincent Van Gogh for use in one of my renders.

I figured it should be possible to convert pixels into voxels, and using [Blender's Python API](https://bit.ly/1rePf90), it was pretty easy.
This technique might have general appeal, so I created a video tutorial for it.

The python script reads pixels RGB values from an texture image you specify by name. It then creates a new diffuse shader material of the same color for each pixel (wasteful!), and final it creates a rectangular prism at x,y coordinates, whose hight is determined by the pixels intesity.

You can read the [script on github](https://bit.ly/photoblend) (or fork it, or comment on it).

#### Here are a some renders I made using this script:

{% image "./images/2014-08/blenderblocks.jpg", "Sample 1: Simple blender logo converted to voxels" %}

{% image "./images/2014-08/starynight.jpg", "Sample 2: Van Gogh voxels" %}



#### Here is the tutorial. 

It covers some basic info about getting started scripting python, as well as the details
of how to read pixel data from a texture, and how to then create voxels from that data.

<div class="panel panel-default">
	<div class="panel-heading">#{comment}</div>
	<div class="panel-body">
		<div class="embed-responsive embed-responsive-16by9">
			<iframe class="embed-responsive-item" src="//www.youtube.com/embed/bfwCrSGLfws" frameborder="0" allowfullscreen></iframe> 
		</div>
	</div>
</div>


#### And as promised here are the videotorial links: 

 * Blender [Python API](https://bit.ly/1rePf90) documentation.
 * The [Python script](https://bit.ly/photoblend) used in the tutorial.

All Comments, revisions, suggestions welcome. Post in the comments section, or poke me on twitter or G+.

I might do a follow up video about framing, focus, and camera rigging if people are interested.

