let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc ==='images/render6.1.png'){
		myImage.setAttribute('src', 'images/render3.png')
	}else{
		myImage.setAttribute('src', 'images/render6.1.png')
	}
}
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = name + '的Blender学习日记';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;