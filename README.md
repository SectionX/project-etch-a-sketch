# project-etch-a-sketch
The Odin Project assignment.


Version History:

v1.1

- Changed the color button to color input. Now the user can choose any color.
- The chosen color is now visible.
- Visual que that rainbow mode is enabled.


v1.0

- Completed the required functionality for the assignment.
- Major refactors. 
- Resolution: Loops among 8x8, 16x16, 32x32, 64x64 and 80x80. The default is 64x64. Resets the board
- Color: Loops among 4 colors, Black, Red, Green and Blue.
- Eraser: Resets cells to White.
- Rainbow Mode: 
    If the cell is white, it paints it with a random rgb value.
    If the cell is painted, it makes it darker. 
- Reset: Changes all cells to white color.



What's next:

- Touchscreen Support


Future plans:

- Undo button (End of v1)
- Export button
- GUI overhauls



Things I've learned:

- Getting color info is a bit odd, and I still haven't exactly figured it out.
  If you manually set a named color, like "white", the node stores "white".
  If you set a hex color like #ffffff, the node stores "rgb(255, 255, 255)"
  I decided to just go with the rgb(x, x, x) syntax.

- I dislike having to reference the global scope in my functions but they\ way
  event listeners work it's kind of hard not to. While this is a fairly small
  application, I wouldn't want to scale this without encapsulating them in a
  namespace somehow. I'm not very familiar with JS classes though, So I'll 
  leave this for another time.

- The activate function does a bit too much for my liking but I decided to 
  refactor the code as much as I can without changing the function itself. 
  The way it works is very hierarchical so it shouldn't be to hard to 
  figure out what it does. For reference, this is how it works:

  1) Checks if the user is currently holding down the mouse button.
  2) Checks if the eraser is toggled on.
  3) Checks if the rainbowmode is enabled.
  4) Default behavior.

- Rainbow mode was more trouble than I initialy thought but that was mostly
  till I figure out how the nodes store color information. The logic was
  fairly straightforward. Add a data attribute that holds the color set by
  the randomizer, and then subtract 10% each pass. However I had to create
  interactivity for the eraser function, and it's very easy to make spelling
  mistakes when having to parse attributes. Spelling mistakes are messy
  to troubleshoot.

- One thing that bugs me is performance. Coding different approaches is
  too much work, and I can't really know if it's better to include more
  event listeners or more complex functions. It's also hard to find a
  definitive answer online, which makes sense since each program has
  it's own bottlenecks. 

- While designing the logic for toggle interactivity isn't too hard, without
  a clear plan it becomes messy. It becomes especially messy if you decide
  to change your approach in the middle of the implementation. Planning is
  paramount to save time. 