# project-etch-a-sketch
The Odin Project assignment.

Things I've learned:

1) One of the most annoying bugs is forgetting to add the letters 'px' in CSS styles.
   Good thing that most dynamic resizing takes place in css so I don't have to deal with
   it too much. Getting style info in JS is a bit odd. I had to use the getComputedStyle
   function which took a while to find. I really hope there is a node method to get them.
   Object methods are just easier to remember.

2) Dynamic resizing was easy, but the browser doesn't seem to be able to handle too many
   elements. The decimals fit tightly inside the container so I can't complain. I don't have
   to limit the board cells to perfect square integers.

3) I tried a really complex approach, trying to add and remove listeners depending on if
   the mouse is pressed down. That was horrible. It's doable, but not only it's unoptimized
   but the removeEventListener command is odd. I mean, I kind of get why they would implement
   it that way, but I had to refactor my code and I ended up scraping the whole approach
   anyway.

4) Understanding how to build the conditional structures with event listeners is paramount.
    

5) Make sure to set the user-select property to none in CSS otherwise it introduces a bug
   where the mouse tries to drag some element and pauses the listeners.

6) The refresh rate isn't very good. I consider 64x64 the highest worthwhile res. From there on
   the browser starts getting sluggish and the lines don't get filled very well. I guess I could
   fix it by forcing nearbly divs to change color but that would require a lot of computing
   when the browser can barely handle these dimensions anyway. I may try it later out of
   curiosity but only if I find some way to optimize performance because I don't see how can
   I scale it as is.

Plans for the future:

1) Export the image. If that was Python, I'd know how to do it. With JS I'm not very sure.
   One approach would be to export the color list to a plaintext file and somehow launch
   a python script stored in the server? 

2) Add rainbow functionality
3) Fix layout
4) Increase button functionality and fix Eraser bug


