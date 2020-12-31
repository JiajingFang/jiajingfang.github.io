let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc ==='images/profile.jpg'){
		myImage.setAttribute('src', 'images/profile1.jpg')
	}else{
		myImage.setAttribute('src', 'images/profile.jpg')
	}
}
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Welcome '+name+'!';
}

function setUserName() {
  let myName = prompt('please input your name');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   //setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;