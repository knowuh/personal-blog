---
title: Animation using mesh vertex positons in cycles materials
date: 2015-03-05
old_layout: blog
tags: blender video tutorial
---

### I am lazy ###

I am always looking for ways to avoid unwrapping my blender mesh UVs for my cycles materials. Procedural textures and shaders are  tempting, but often look lifeless because they are full of repeating and predictable elements. Textures should relate to the geometry they cover. If only there were a way to use parts of the geometry to influence a proceedural textures attributes …


### Cycles geometry input node to the rescue!  ###

__Enter the Geometry input node__. I have been tempted by this node in the past. It suggests that an object's geometry can be made available as input parameters. But I never worked out the magic of exactly how to do it until recently. Basically, it boils down to extracting the geometric attributes of your mesh that you want to use with a vector mapping node. You can see the basic of how this is done in the node setup shown here: 

{% image "./images/2015-03-05/geom-nodes.jpg", "Geometry input nodes" %}


### Sample NPR Results:  ###

Node setups like this can combine in interesting ways, and change your procedural textures so that they emphasize the shape of your geometry. Below is still image from a recent animated gif I put together using a similar node setup.  In this case, the Z postion of the mesh verticies were used to change the width of vertical lines along the meshe's y axis. The node setup for the below NPR render involved 2 vector maps. Can you guess the setup?


{% image "./images/2015-03-05/output0025.jpg", "Sample rendering showing terain contour" %}


### Video Tutorial ###

Incase you were wondering how to do this on your own, I put together a quick (16m) video tutorial of the process. The example in the video created concentric 'contour lines' -- the type that you might find in topographic maps. You can watch it here:

<div class="panel panel-default">
  <div class="panel-heading">I probably shouldn't have filmed my face...</div>
  <div class="panel-body">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="//www.youtube.com/embed/qWruDX_IPFg" frameborder="0" allowfullscreen></iframe> 
    </div>
  </div>
</div>

### Your Turn: ###

Try it out, and let me know what you do with this awesome Blender Cycles feature. Post your ideas and results below.  Let me know if this was useful, or if you have questions.

Thanks for reading and sharing!


