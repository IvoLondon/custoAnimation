# custoAnimation
Simple function to add animation classes to elements. For more projects, please check out my website on http://www.ivelin.me

At the bottom of custoAnimation.js, init the elements you wish to get animation classes added. 

addCustomAnimation('target', 'attribute', 'class', 'gap');

---------------------------------------------------------------------------------------------
target : this accepts an ID attribute, CLASS or TAGs which are/is inside a parent with CLASS
for example:

addCustomAnimation('parentUL li', 'tagInClass', 'visible', '300');
---------------------------------------------------------------------------------------------
attribute : this accepts on of the following values 'id', 'class', 'tagInClass', it is used to clarify what the target is.

addCustomAnimation('elAnimate', 'id', 'visible', '300');
---------------------------------------------------------------------------------------------
class: Class for animation to add. This needs to be clarified on the css file.

addCustomAnimation('elAnimate', 'id', 'visible', '300');
---------------------------------------------------------------------------------------------
gap : number in pixels. Default is 300; This adds a gap between the bottom of the view port and the start of the animation. By default, the animation will start after 300 extra pixels.

addCustomAnimation('animateElements', 'class', 'visible', '100');
---------------------------------------------------------------------------------------------
