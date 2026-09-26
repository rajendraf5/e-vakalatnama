(function ($) {

    "use strict";

  new PureCounter();
jQuery(window).scroll(function () {
  if (jQuery(window).scrollTop() >= 300) {
    jQuery('.headerfixed').addClass('is-sticky');
  } else {
    jQuery('.headerfixed').removeClass('is-sticky');
  }
});

// Mobile Navigation

  let scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  
        if ($('.slider-one__carousel').length) {
            var slideOneWrap = $('.slider-one');
            var slideOneCarousel = $('.slider-one__carousel').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                // animateOut: 'slideOutUp',
                // animateIn: 'fadeUp',
                active: true,
                smartSpeed: 1000,
                autoplay: 7000
            });
            slideOneWrap.find('.slide-one__left-btn').on('click', function (e) {
                slideOneCarousel.trigger('next.owl.carousel');
                e.preventDefault();
            });
            slideOneWrap.find('.slide-one__right-btn').on('click', function (e) {
                slideOneCarousel.trigger('prev.owl.carousel');
                e.preventDefault();
            });
        }



              
   // Clients carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 900: { items: 1 }
    }
  });


})(jQuery);