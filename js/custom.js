$(document).ready(function(){

  // Add smooth scrolling
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });  

  // Nav background and shadow
  $(window).on('scroll',function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $("nav").addClass("bg-white");
      $("nav").removeClass("shadow-none");
      $(".navbar-light .navbar-nav .nav-link").removeClass("text-white");
      $(".navbar-brand").removeClass("text-white");
    }else{
      $("nav").removeClass("bg-white");
      $("nav").addClass("shadow-none");
      $(".navbar-light .navbar-nav .nav-link").addClass("text-white");
      $(".navbar-brand").addClass("text-white");
    }
  }); 

  // Statistics
  var x = 0;
  $(window).scroll(function() {

    var oTop = $('#stats-counter').offset().top - window.innerHeight;
    if (x == 0 && $(window).scrollTop() > oTop) {
      $('.stats-counter-value').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        },
                   {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      });
      x = 1;
    }
  });  
  
}); 