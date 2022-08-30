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
