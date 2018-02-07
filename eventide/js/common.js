window.addEventListener('scroll', function () {
  let bg = document.querySelector("header");
  let y = scrollY;
  
  bg.style = "background-position-y: -" + scrollY / 3 + "px";;
})

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 75,
  autoplay: true,
  autoplayTimeout: 2000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});
