(function($){
  $(function(){

    $('.tap-target').tapTarget('open');
    $(".button-collapse").sideNav({
      menuWidth: 240, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    });
    $('.parallax').parallax();
    $('.slider').slider({
        indicators: false,
    });



  }); // end of document ready
})(jQuery); // end of jQuery name space
