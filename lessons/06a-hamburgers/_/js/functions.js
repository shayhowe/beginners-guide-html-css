var Site = window.Site || {};
(function($) {

	$(function() {
						 
    $('nav a').click(function (e) {
      $('.active').removeClass('active');
      e.preventDefault();
      $(this).tab('show');
    });
  	
	});

})(jQuery);