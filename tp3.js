/**************** silder main *************/
var slideIndex = 0;
animation1();

function animation1() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
  setTimeout(animation1, 2000); // Change image every 2 seconds
}

// setTimeout(() => {
    
// }, timeout);
/**************** silder main *************/
// animation2();

// function animation2() {
//   var x = document.getElementsByClassName("slider");
  // const x = document.querySelectorAll('.slider');
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//     console.log(x[0])
//   }
//   for (i = 0; i < 8; i++) {
//     x[i].style.display = "block";
//   }
   
// }
// function pres() {
//   var x = document.getElementsByClassName("div_slider&");
//   // x.style.overflow-x= scroll;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//     if(i>=3) x[i].style.display = "block";
 
// }
// }
animation2();

function animation2() {
  var x = document.getElementsByClassName("slider");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < 8; i++) {
    x[i].style.display = "block";
  }

}
function pres() {
  var x = document.getElementsByClassName("slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    if(i>=3) x[i].style.display = "block";

}

}
// Bouton Menu responsive
const boutonMenu = document.querySelector('.boutonM')
const menu = document.querySelector('.div_matériels')

boutonMenu.addEventListener('click', ()=>
{
    menu.style.display = 'block'
}
)
/**************** silder responsive *************/
// const sizeR= document.querySelector(html);
// if (sizeR==280){
//   animationR();
// }

// function animationR() {
//   const x = document.querySelectorAll('.slider');
//   var i;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   for (i = 0; i < 4; i++) {
//     x[i].style.display = "block";
//   }
   
// }
// function presR() {
//   var x = document.getElementsByClassName("slider");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//     if(i>=3) x[i].style.display = "block";
 
// }

// }
