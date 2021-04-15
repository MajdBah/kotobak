import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '../sass/style.scss';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import 'typewriter-effect/dist/core.js';
import 'lightbox2/dist/css/lightbox.css';
import 'lightbox2/dist/js/lightbox.js';
import 'jquery-validation/dist/jquery.validate';
import 'jquery-validation/dist/localization/messages_ar';
import './type.js';
import './backToTop.js';


$(document).ready(function(){
    // cuurent year
new Date().getFullYear();

document.getElementById("year").innerHTML = new Date().getFullYear();

// form validation
$("#contact-form").validate();

  });


