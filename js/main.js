//by default it is set on Farsi
var lang = 1;

function changeLang(newLang) {
    var mylang = '';

    if (newLang == 1) {
        if (lang != 1) {
            mylang = 'fa';
            lang = 1;
            // document.getElementById("JS-Content").innerHTML = '<script src="js/fa-content.js"></script>';
            document.getElementsByTagName('html')[0].setAttribute('lang', mylang);
            // console.log("changed to farsi");
            loadFarsi();
        }

    } else if (newLang == 2) {
        if (lang != 2) {
            mylang = 'en';
            lang = 2;
            // document.getElementById("JS-Content").innerHTML = '<script src="js/en-content.js"></script>';
            document.getElementsByTagName('html')[0].setAttribute('lang', mylang);
            // console.log("changed to English");
            loadEnglish();

        }
    }
}


(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict
