# Section 6 : HTML and CSS crash course

## 64. Basic HTML structure and elements
* HTML (hyper text markup language)
* creates pages' content / formatting
* in VS code, use the shortcut ! + tab to create a basic HTML setup

## 65. Attributes, classes, and ids
* "child" elements are any element that exists within an "parent" element

## 66. Basic styling with CSS
* use CSS to style elements and create page layout, styling, sizing, etc

## 67. Introduction to the CSS box model
* the box model describes each element on an HTML page as a box
* each box can have width, height, padding, margin, and border
* each of these properties can be defined using CSS, and they are all optional
* content: text, images, content
* padding: a transparent area around the content, *inside* the box
* border: goes around the padding and content
* margin: space between boxes; *outside* the box itself
* fill area: area that gets filled with background color or background image; will cover the entire element (fill area); includes padding and border, but not the margin
* some elements have a built-in margin property; reset all margins / padding before doing any work on these properties
* `box-sizing: border-box;` will add padding / margin to specified boxes;  will contain widths to defined measurements -- if a `width` property is set on the element, adding margin or padding will not affect the overall size of the element, but rather the width of the content will be reduced to limit the element width to match the set property (read about this, not sure what's going on here)
* block elements create their own line
* inline elements exist within another line of text / within the page