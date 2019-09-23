jQuery('document').ready(function() {

  //menu scrolling
  jQuery('nav a').click(function() {
    var hrefLink = jQuery(this).attr('href');
    jQuery("html, body").animate({
      scrollTop: jQuery(hrefLink).offset().top - 50
    }, 1500);
    return false;
  });

  jQuery('.banner a').click(function() {
    var hrefLink = jQuery(this).attr('href');
    jQuery("html, body").animate({
      scrollTop: jQuery(hrefLink).offset().top - 50
    }, 1500);
    return false;
  });

  //activation links on scroll
  jQuery(document).scroll(function() {

    jQuery('main > div').each(function() {

      if ((jQuery(window).scrollTop() + 70 > jQuery(this).offset().top) && (jQuery(window).scrollTop() + 70 < jQuery(this).offset().top + jQuery(this).outerHeight())) {
        jQuery('nav a').eq(jQuery(this).index()+1).addClass('active');
      } else {
        jQuery('nav a').eq(jQuery(this).index()+1).removeClass('active');
      }

    });
  });

  //navbar height 
  jQuery('.navbar-toggle').click(function() {

    console.log('toggled');

    if (jQuery('.navbar-collapse').hasClass('in')) {
      jQuery('.navbar').removeClass('active-navbar');
    } else {
      jQuery('.navbar').addClass('active-navbar');
    }
  });
});