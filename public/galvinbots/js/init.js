(function($){
  $(function(){

  	// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    
      $(".button-collapse").sideNav();
    $('.parallax').parallax();
    
     $('.carousel.carousel-slider').carousel({full_width: true});
     $('.slider').slider();

     $('.tooltipped').tooltip({delay: 50});

      $('.materialboxed').materialbox();

      $('.collapsible').collapsible();

  }); // end of document ready
})(jQuery); // end of jQuery name space