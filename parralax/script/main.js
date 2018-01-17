window.addEventListener("load", function(e) {
  
  var navbar = document.querySelector(".navbar");
  var header = document.querySelector(".header");

  var blur = document.querySelector(".blur");
  var blurText = document.querySelector(".blur__text");

  window.addEventListener("scroll", function(e) {
    var headerOffset = header.offsetHeight - 100;

    blurText.style.top = "-" + header.offsetHeight;
    header.style = "background-position-y: " + scrollY / 3 + "px";
    blur.style = "background-position-y: -" + scrollY + "px";

    blurText.style.top = header.offsetHeight / 2 - scrollY + "px";

    if (scrollY > headerOffset) {
      navbar.style.top = headerOffset - scrollY + "px";
    } else {
      navbar.style.top = 0;
    }
  });
});
