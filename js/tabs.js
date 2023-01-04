/* window.addEventListener("load", function() {
    var thumbs = document.querySelector(".reviews__images");

    thumbs.addEventListener("click", function(e) {
        e.target.nodeName.toLowerCase() == 'img';

    });
}); */

function tabMove(imgs) {
    var text = document.querySelector(".reviews__text blockquote");
    var author = document.querySelector(".reviews__text p span");
    var city = document.getElementById("city");

    var i = parseInt(imgs.alt);
    switch(i) {
        case 1:
            text.innerHTML = '“ Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem qui bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odioodio. ”';
            author.innerHTML = 'Mark Squirrel';
            city.innerHTML = 'Switzerland';
            break;
        case 2:
            text.innerHTML = 'Hello2';
            author.innerHTML = 'B';
            city.innerHTML = 'City 2';
            break;
        case 3:
            text.innerHTML = 'Hello3';
            author.innerHTML = 'C';
            city.innerHTML = 'City 3';
            break;
        case 4:
            text.innerHTML = 'Hello4';
            author.innerHTML = 'D';
            city.innerHTML = 'City 4';
            break;
        case 5:
            text.innerHTML = 'Hello5';
            author.innerHTML = 'E';
            city.innerHTML = 'City 5';
            break;
    }
  }