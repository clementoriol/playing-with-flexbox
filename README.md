# Playing With Flexbox
Let's try some stuff to fiddle around with Flexbox :-)

## Installation
First, clone the repo. Then :

- Install node modules :
  ```
  npm install
  ```

- Install bower modules :
  ```
  bower install
  ```

## Launch the Server
Let's Launch the server using :

```
gulp server
```

Your brower should open the page to http://localhost:3000/

## The Playground
We'll mostly fiddle around with two files :
- `src/styles/main.scss` where we'll write all of our CSS (in SASS)
- `src/views/pages/index.jade` where we'll write our HTML (in jade)


## Let's play !

### The Basics
(already setup for your convenience !)
To use flexbox, we'll need two things :

  - A Container. In our case, a `div` with the class of `wrapper`
  - Multiple Divs inside our container. Ours are `div.block-color`

Our Container must have the `display:flex` CSS property.

### Flex proportions
We can tweak our elements proportions changing the value of the `flex-grow` property.
They will fit the container size.

- A ratio of one is set using `flex-grow:1`
- Ratio of two using `flex-grow:2`
- etc.

### Flex Directions
We can change the direction of our blocks are displayed, using the `flex-direction` property **on the container**.

- `flex-direction: row` (default) displays them from left to right
- `flex-direction: column` displays them from top to bottom (useful for mobile display)

You can also display them reversed !

- `flex-direction: row-reverse` right to left
- `flex-direction: column-reverse` bottom to top

### Re-ordering
Flexbox enables us to reordering the order our blocks are displayed, using the `order` property **on a child element**
No DOM-Change, no JS, just visually reordered.

- Adding `order:0` (default) will set the block before every other block
- Adding `order:1` will set the block *after* every `order:0` block

### More control of the layout
Let's say we decided to tell flexbox that our block must meet specific size requirements.
Let's add `min-width:250px` to the elements, to be sure they're at least 200px wide.

When we refresh our browser, every element is 200px wide, but they're breaking out of the container.
To avoid this, we can use the `flex-wrap:wrap` property **on the container** to let flexbox occupy the container
in a smarter way.

**You can also try to switch the container's `flex-direction` to column to see how it changes**
**Add a min-height to the child elements and check the differences**

### Sizing an element using flex-basis
If we want to specify a precise size for one or multiple elements we can use the `flex-basis` property.
Adding, for exemple, `flex-basis:300px` one one **child element** will assure us it size approach 300px.

In truth, if we're using `flex-grow:1` like we did before, the element won't be precisely 300px, because it will
try to follow two contradictory rules :
- "You must have a ratio of 1 compared to other elements"
- "You must be 300px"

Switch the `flex-grow` property to `0` will enable it to be precisely 300px.




