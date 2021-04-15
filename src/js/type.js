$(document).ready(function () {
    // Type Effect  book 1
    var bookName = document.getElementById("typeIt1");

    var typewriter = new Typewriter(bookName, {
        loop: true
    });

    typewriter.typeString('طريقك إلى العمل الحر عبر الإنترنت')
        .pauseFor(2500)
        .deleteAll()
        .typeString('أحصل عليه الآن')
        .pauseFor(2500)
        .deleteAll()
        .typeString('لا تضيع الفرصة')
        .pauseFor(2500)
        .start();


    // Type Effect  book 2
    var bookName = document.getElementById("typeIt2");

    var typewriter = new Typewriter(bookName, {
        loop: true
    });

    typewriter.typeString('مدخل إلى تجربة المستخدم UX')
        .pauseFor(2500)
        .deleteAll()
        .typeString('أحصل عليه الآن')
        .pauseFor(2500)
        .deleteAll()
        .typeString('لا تضيع الفرصة')
        .pauseFor(2500)
        .start();


});
