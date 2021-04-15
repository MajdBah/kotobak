// back to top button


$(document).ready(function(){
  var mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

$("#backToTop").on("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
});
