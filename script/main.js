(() => {
	//collect the buttons at the bottom of the jpgImage
	let theThumbnails = document.querySelectorAll("#buttonHolder img");
       gameBoard=document.querySelector(".puzzle-board");


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
	//add event handling here -> loop through theThumbnails array and add event handling to each image
 theThumbnails.forEach( item => item.addEventListener("click", changeBgImg));



})();
