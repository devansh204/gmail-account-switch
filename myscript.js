window.addEventListener('keyup', doKeyPress, false); //adds a listener for keypress
 
function doKeyPress(e){
	var trigger_key = 90; //ASCII code for key Z
	var open = document.querySelector("div.gb_db"); // selects div fields. These fields contain the url's to the next account
	var list = open.children;
	var next = list[0].href;//takes in url of the 0th child
	for(var i =0 ; i < list.length -1 ; i++){
		if(list[i].classList.length > 1){ //we check if we have the div with more than one classes. This div denotes the account we are currently on
			next = list[i + 1].href;      //we store the link to the account next to current
		}
	}

 	if (e.shiftKey && e.ctrlKey && e.keyCode == trigger_key){
 		window.location.href = next;     //Changes the window location to the link obtained when all three keys pressed
 	}
}