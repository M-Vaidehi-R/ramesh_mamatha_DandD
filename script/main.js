(() => {
	//collect the buttons at the bottom of the jpgImage
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),     
       gameBoard=document.querySelector(".puzzle-board"),
		puzzlePieces=document.querySelectorAll(".puzzle-pieces img"),
		puzzle= document.querySelectorAll(".puzzle-pieces"),
		dropZones=document.querySelectorAll(".drop-zone");


//theThumbnails, gameBoard,puzzlePieces,dropZones are variables

// theThumbnailscollects all of the image elements into  an array-like container that looks like this:
    /*
		  <img src="images/topLeft0.jpg" class="puzzle-image" alt="top left">
			<img src="images/topRight0.jpg" class="puzzle-image" alt="top right">
			<img src="images/bottomLeft0.jpg" class="puzzle-image" alt="bottom left">
			<img src="images/bottomRight0.jpg" class="puzzle-image" alt="bottom right">
		*/

		const puzzlePaths=["topLeft", "topRight", "bottomLeft", "bottomRight"]   //this is an array :)


function changeImgSet() {
	

    moveChild();
//the 'this' keyword refers to the element that triggers  this function (the nav button we click with the custom data attribute of bgref)
	//debugger;
	gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;  //game boarde -> style -> backgroundImage        $ specifies that end-numbers in image name, 
	//loop through all of the small draggable images and change their src attribute with js
	puzzlePaths.forEach((img, index) => {
		puzzlePieces[index].src =`images/${img + this.dataset.bgref}.jpg`;
	}); //update each image's src one at a time)
   
}

function dragStarted(event) {
	console.log("started dragging a piece");
	// use the setData method of the drag event to store a reference to the current element
event.dataTransfer.setData("currentItem", event.target.id);
}

function allowDragover(event) {
	event.preventDefault();  //turn off default behaviour
	console.log ("dragged over me");
	// retrieve the dragged element using the Datatransfer object
	//this was set in the  drag event using the SetData method
	let droppedEl=event.dataTransfer.getData("currentItem");
	console.log(droppedEl);
}

function allowDrop(event) {
	event.preventDefault();  //turn off default behaviour----follow our instructions instead of what the browser would do on drop
	console.log ("dropped on me");

	if (this.childElementCount > 0)
	   {
		   return;
	   }
   
	else {   
let droppedEl = event.dataTransfer.getData("currentItem");
console.log(droppedEl);
this.appendChild(document.querySelector(`#${droppedEl}`));
	}
}

function moveChild() {
	dropZones.forEach(zone => {
		if(zone.childElementCount > 0)
		{
            //childElemt = zone.firstElementChild.innerHTML;
			//document.getElementByClass("puzzle-image").appendChild(zone.firstElementChild.innerHTML);
			//document.getElementsByClass("puzzle-image")=zone.firstElementChild.innerHTML;
			theThumbnails.addEventListener('click', dropZones.forEach(zone => {
				puzzle.appendChild(zone.children);
				zone.removeChild(zone.children);
				
			}));
		}
    else {
		return;
	}
	})
}


// end of declaring all functions.....now its calling time :]


	//add event handling here -> loop through theThumbnails array and add event handling to each image
 theThumbnails.forEach( item => item.addEventListener("click", changeImgSet));      //thumbnails lle oro item, when clicked, call changeImgSet function.
 // listen for the dragstarted event on the puzzle puzzlePieces
 puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));    //dragstart is a prop               puzzlePieces(inside that verticle box- 4 imgs), when its dragged from there, dragStarted function is called.

 //add event handling for the drop zones (dragover and drop)
 dropZones.forEach(zone => {                                    
	 // for each zone in dropzone, if element is dragged over an element(dragover- keyword), call allowDragover func else if its dropped in the zone, call allowdrop func
	 zone.addEventListener("dragover", allowDragover);
	 zone.addEventListener("drop", allowDrop);
 })


})();
