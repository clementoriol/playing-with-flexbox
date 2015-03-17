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
Every `div.block-color` inside should have the `flex:1` property

### Flex proportions
We can tweak our elements proportions changing the value of the `flex` property

- A ratio of one is set using `flex:1`
- Ratio of two using `flex:2`
- etc.

### Flex Directions
We can change the direction of our blocks are displayed, using the `flex-direction` property **on the container**.

- `flex-direction: row` (default) displays them from left to right
- `flex-direction: column` displays them from top to bottom (useful for mobile display)
-
You can also display them reversed !

- `flex-direction: row-reverse` right to left
- `flex-direction: column-reverse` bottom to top

### Re-ordering
Flexbox enables us to reordering the order our blocks are displayed, using the `order` property **on a child element**
No DOM-Change, no JS, just visually reordered.

- Adding `order:0` (default) will set the block before every other block
- Adding `order:1` will set the block *after* every `order:0` block



