$(".product-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  navText: [
    '<img src="/images/001-previous.svg" class="owl-navigator">',
    '<img src="/images/002-next.svg" class="owl-navigator">',
  ],
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

$(function () {
  var owl_instance = $(".thumbnail-carousel");
  var item_count = parseInt(owl_instance.find(".item").length);
  var use_items;

  if (item_count == 1) {
    use_items = 1;
  } else if (item_count == 2) {
    use_items = 2;
  } else if (item_count == 3) {
    use_items = 3;
  } else if (item_count == 4) {
    use_items = 4;
  } else {
    use_items = 5;
  }

  owl_instance.on("initialized.owl.carousel resized.owl.carousel", function (
    e
  ) {
    $(e.target).toggleClass("owl-autothumbnail", e.item.count <= e.page.size);
  });
  owl_instance.owlCarousel({
    items: use_items,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      1000: {
        items: use_items,
      },
    },
    loop: false,
    margin: 15,
    nav: true,
    autoplay: false,
    dots: false,
    nav: true,
    navText: [
      '<img src="/images/001-previous.svg" class="owl-navigator">',
      '<img src="/images/002-next.svg" class="owl-navigator">',
    ],
  });
});

//EasyZoom
var $easyzoom = $(".easyzoom").easyZoom();

//Thumbnails
var api1 = $easyzoom.filter(".easyzoom--with-thumbnails").data("easyZoom");

$(".thumbnails").on("click", "a", function (e) {
  var $this = $(this);

  e.preventDefault();

  //Swap
  api1.swap($this.data("standard"), $this.attr("href"));
});

//InputSpinner
$("input[type='number']").inputSpinner();

//Star raiting
$(document).ready(function ($) {
  $(".btnrating").on("click", function (e) {
    var previous_value = $("#selected_rating").val();

    var selected_value = $(this).attr("data-attr");
    $("#selected_rating").val(selected_value);

    $(".selected-rating").empty();
    $(".selected-rating").html(selected_value);

    for (i = 1; i <= selected_value; ++i) {
      $("#rating-star-" + i).toggleClass("btn-warning");
      $("#rating-star-" + i).toggleClass("btn-default");
    }

    for (ix = 1; ix <= previous_value; ++ix) {
      $("#rating-star-" + ix).toggleClass("btn-warning");
      $("#rating-star-" + ix).toggleClass("btn-default");
    }
  });
});
