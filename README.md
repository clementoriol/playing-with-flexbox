# Playing With Flexbox
Let's try some stuff to fiddle around with Flexbox :-)

# Installation
First, clone the repo. Then :

- Install node modules :
  ```
  npm install
  ```

- Install bower modules :
  ```
  bower install
  ```

# Launch the Server
Let's Launch the server using :

```
gulp server
```

Your brower should open the page to http://localhost:3000/

## The Playground
We'll mostly fiddle around with two files :
- `src/styles/flexbox/step01.scss` where we'll write the CSS for the first example (in SCSS)
- - `src/styles/flexbox/step02.scss` for the second example

The HTML for the examples is visible here :
- `src/views/pages/index.jade` Example 1
- `src/views/pages/menu.jade` Example 2


# Let's play !

## Example 1: index.jade [http://localhost:3000/](http://localhost:3000/)
*A small full-screen exemple to grab the basics*

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


## Exemple 2: menu.jade [http://localhost:3000/menu.html](http://localhost:3000/menu.html)
*A simple nav bar demo to understand alignements*

### Adding flexbox to the example
When we're opening the page, the nav bar is broken.
The Logo and the Navigation are displayed in the classic pattern for block-elements: stacked horizontally.

Let's start by enabling flexbox on the container (`.flex-nav`) by adding the `display:flex;` property

### Vertically Centering our menu
It looks better now. At least it's inlined.
But we still need to vertically center everything inside the header.

Let's play with the `align-items` property.

Adding `align-items:center` **to the container** (`.flex-nav`) will achieve just that.

**Other possible values for the `align-items` are :**

- `flex-start`: align at the start of the flex flow
- `flex-end`: align at the end of the flex flow
- `center`: centered
- `baseline`: aligned to other elements `line-height`
- `stretch` (default): stretch to fill the container (still respect min-width/max-width)


### Positionning the navigation to the right of the screen
Not bad ! Now, we'd like to move the nav bar to the right.
Adding the `justify-content` property **to the container** allows that.

**let's check the possible values of the property :**

- `flex-start`: aligning elements at the start of the container
- `flex-end`: aligning elements at the end of the container
- `center`: aligning elements at the center of the container
- `space-between`: Distribute the elements evenly, with space between them.
- `space-around`: Distribute the elements evenly, with space around them.
- `stretch`: Default value

## That's it for now :)
A more detailing doc covering the extra properties here :

[https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)





