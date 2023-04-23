let menu = document.getElementById("menu");
let menuButton = document.getElementById("menu-button");
let menuButtonClose = document.getElementById("close-menu-button"); 


let darkModeButton = document.getElementById("dark-mode-button");
let lightModeButton = document.getElementById("light-mode-button");


// Open & Close Menu

menuButton.onclick = function(anything) {
  menuButton.style.display = "none";
  menuButtonClose.style.display = "inline-block";
  
  menu.style.display = "flex";
  
}

menuButtonClose.onclick = function(anything) {
  menuButtonClose.style.display = "none";
  menuButton.style.display = "inline-block";

  menu.style.display = "none";

}

// Night Mode & Light Mode 

darkModeButton.onclick = function() {
  document.body.classList.toggle("dark-theme");
  
  darkModeButton.style.display = "none";
  lightModeButton.style.display = "inline-block";
}

lightModeButton.onclick = function() {
  document.body.classList.toggle("dark-theme");

  lightModeButton.style.display = "none";
  darkModeButton.style.display = "inline-block";
}
