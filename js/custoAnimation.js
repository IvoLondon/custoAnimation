window.onload = function() {
	// ADD ANIMATION
	function addCustomAnimation(el, elAttr, animation, gap) {
		var element = el;
		var elementAttr = elAttr;
		var elementAnimation = animation;
		var elementGap = gap;
		
		//gap before it activates
		if(elementGap == undefined) {
			var elementGap = 30;
		}
		if((element != undefined) && (elementAttr != undefined) && (elementAnimation != undefined) && (elementGap != undefined)) {
			
			// gets windows bottom
			var winTop = ((window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) + window.outerHeight) - elementGap;
		
			//IF IS ID ELEMENT
			if(elementAttr == 'id') { 
				var el = document.getElementById(element);
				if(el != null) {
					var el_position_top = getElementTop(el);
					if(winTop > el_position_top ) {
					el.classList.add(elementAnimation);
				}
			} else {
				return; // class doesnt exist
			}
		
		}
		//IF IS CLASS ELEMENT
		else if(elementAttr == 'class') { 
			var elClass = document.getElementsByClassName(element);
			if(elClass.length > 0) {
				var elClass_object = {  }
				// gets elements into a object
				for(var i = 0; i < elClass.length; i++) {
					elClass_object[i] = { 
					element : elClass[i],
					heightFromTop : getElementTop(elClass[i]),
				}
			}
			// checks winTop according to el top
			for(var obj in elClass_object) {
				if(!elClass_object.hasOwnProperty(obj)) continue;
					var subObj = elClass_object[obj];
					if(subObj.heightFromTop < winTop) {
						subObj.element.classList.add(elementAnimation);
					}
				}
			} else {
				return; // class doesnt exist
			}
	 
		}
		// IF IS TAGS INSIDE PARENT WITH CLASS
		else if(elementAttr == 'tagInClass') {
			var elTag = el.split(' ');
			var elTagClass = elTag[0];
			var elTagTags = elTag[1];
			var elTagParentChildren;
			var elTags_object = {  }; 
	
			var elParent = document.getElementsByClassName(elTagClass);
			if(elParent.length > 0) {
				for(var i = 0; i < elParent.length; i++ ) {
					elTagParentChildren = elParent[i].children;
				}
				for(var i2 = 0; i2 < elTagParentChildren.length; i2++){
					if(elTagParentChildren[i2].tagName == elTagTags.toUpperCase()) {
						elTags_object[i2] = { 
							element : elTagParentChildren[i2],
							heightFromTop : getElementTop(elTagParentChildren[i2]),
						}
					} else {
						continue; 
					}
				}
				for(var obj in elTags_object) {
					if(!elTags_object.hasOwnProperty(obj)) continue;
					var subObj = elTags_object[obj];
					if(subObj.heightFromTop < winTop) {
						subObj.element.classList.add(elementAnimation);
					}
				}
			} else {
				return; //if parent doesnt exist 
			}
		} else { // ELSE IF NO ELEMENT
			return; 
		}
			// checks element top position
			function getElementTop(elTop) {
				var box = elTop.getBoundingClientRect();
				var body = document.body;
				var docEl = document.documentElement;
				var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
				var clientTop = docEl.clientTop || body.clientTop || 0;
				var top = box.top + scrollTop - clientTop;
				return top;
			}
		} else {
		console.log('addCustomAnimation is not defined'); 
		}
	} // end addCustomAnimation
	
	
	// ELEMENTS ANIMATION
	elementsToAnimate(); //execute on load
	window.addEventListener('scroll', elementsToAnimate); //listen on scroll
	
	function elementsToAnimate() {
		addCustomAnimation('box1', 'id', 'visible', 300);
		addCustomAnimation('box2', 'class', 'visible', 300);
		addCustomAnimation('box3 li', 'tagInClass', 'visible', 300); 
	}
} // onload end