/*
 * Familie`s Portal Template Design (http://skrips.org)
 * Code licensed under the MIT License.
 * For details, see https://opensource.org/licenses/MITs
 */

(function($) {
  "use strict";

  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1050, 'easeInOutExpo');
    event.preventDefault();
  });

  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  $('#portalNav').affix({
    offset: {
      top: 100
    }
  });

  $('.carousel').carousel({
    interval: 5000
  });

  $(document).ready(function() {
     $('i.animated').hover(
      function() {
       $(this).addClass('tada');
      },
      function() {
       $(this).removeClass('tada');
      }
    );
	});

 new WOW().init();

})(jQuery);
