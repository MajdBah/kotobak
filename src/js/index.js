import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '../sass/style.scss';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

// cuurent year
new Date().getFullYear();

document.getElementById("year").innerHTML = new Date().getFullYear();

// back to top button
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
  

