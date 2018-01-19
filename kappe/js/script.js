window.addEventListener("load", function() {
  var btn = document.querySelector(".btn-menu");
  var menu = document.querySelector(".container-menu");

  btn.addEventListener("click", function() {
    menu.classList.toggle("active");
  });
});
