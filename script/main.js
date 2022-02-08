(() => {
	//collect the buttons at the bottom of the jpgImage
	let theThumbnails = document.querySelectorAll("#buttonHolder img");
       gameBoard=document.querySelector(".puzzle-board"),
			 puzzlePieces=document.querySelectorAll(".puzzle-pieces img"),
			 dropZones=document.querySelectorAll(".drop-zone");


//theThumbnails, gameBoard,puzzlePieces,dropZones are variables

// theThumbnailscollects all of the image elements into  an array-like container that looks like this:
    /*
		  <img src="images/topLeft0.jpg" class="puzzle-image" alt="top left">
			<img src="images/topRight0.jpg" class="puzzle-image" alt="top right">
			<img src="images/bottomLeft0.jpg" class="puzzle-image" alt="bottom left">
			<img src="images/bottomRight0.jpg" class="puzzle-image" alt="bottom right">
		*/

function changeBgImg() {

//the 'this' keyword refers to the element that triggers  this function (the nav button we click with the custom data attribute of bgref)
	//debugger;

	gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
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


let droppedEl = event.dataTransfer.getData("currentItem");
console.log(droppedEl);
this.appendChild(document.querySelector(`#${droppedEl}`));
}


	//add event handling here -> loop through theThumbnails array and add event handling to each image
 theThumbnails.forEach( item => item.addEventListener("click", changeBgImg));
 // listen for the dragstarted event on the puzzle puzzlePieces
 puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

 //add event handling for the drop zones (dragover and drop)
 dropZones.forEach(zone => {
	 zone.addEventListener("dragover", allowDragover);
	  zone.addEventListener("drop", allowDrop);
 })
})();
