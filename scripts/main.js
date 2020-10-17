$(".product-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  navText: ['<img src="/images/001-previous.svg" class="owl-navigator">', '<img src="/images/002-next.svg" class="owl-navigator">'],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});