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
                 mouseDrag: false,
                touchDrag: false,
                pullDrag: false,  
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 36000,
                autoplay: 36000
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




document.addEventListener("DOMContentLoaded", function () {

  const steps = document.querySelectorAll(".step");
  const progress = document.getElementById("progress");

  const total = steps.length;

  let currentStep = 0;

  const STEP_TIME = 1400;
  const CARD_DELAY = 250;
  const RESTART_DELAY = 2500;


  function resetTimeline() {

    steps.forEach(step => {

      step.classList.remove(
        "visible",
        "active",
        "completed"
      );

      const card = step.querySelector(".step-card");

      if (card) {
        card.classList.remove("visible");
      }

    });

    progress.style.width = "0%";

    currentStep = 0;
  }


  function animateStep(index) {

    if (index >= total) {

      setTimeout(() => {

        resetTimeline();

        setTimeout(() => {
          animateStep(0);
        }, 500);

      }, RESTART_DELAY);

      return;
    }


    const current = steps[index];

    const card = current.querySelector(".step-card");


    /* --------------------------------
       Show current circle
    -------------------------------- */

    current.classList.add(
      "visible",
      "active"
    );


    /* --------------------------------
       Show current card
    -------------------------------- */

    setTimeout(() => {

      if (card) {
        card.classList.add("visible");
      }

    }, CARD_DELAY);


    /* --------------------------------
       Move progress line
    -------------------------------- */

    setTimeout(() => {

      const percentage =
        (index / (total - 1)) * 100;

      progress.style.width =
        percentage + "%";

    }, CARD_DELAY + 150);


    /* --------------------------------
       Complete previous step
    -------------------------------- */

    if (index > 0) {

      const previous = steps[index - 1];

      previous.classList.remove("active");

      previous.classList.add("completed");
    }


    /* --------------------------------
       Next step
    -------------------------------- */

    currentStep++;

    setTimeout(() => {

      animateStep(currentStep);

    }, STEP_TIME);
  }


  /* Start animation */

  setTimeout(() => {

    animateStep(0);

  }, 500);

});
})(jQuery);