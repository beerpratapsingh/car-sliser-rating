(function () {
  //Slide Fade In
  $('.dot').on('click', function(){
    let currentSlide = $(this).attr('data-attr');
    $(this).addClass('active').siblings().removeClass('active');
    $('.slide').fadeOut(100, () => {
      $('.bar').removeClass('bar-animation');
      $(".needle").removeClass("percent-20");
    });
    $('.slide[data-slide="' + currentSlide + '"]').fadeIn(500, () => {      
      $('.bar').addClass('bar-animation');
      $(".needle").addClass("percent-20");
    });
  });

  //Animate bar and niddle on page load
  $('.bar').addClass('bar-animation');
  $(".needle").addClass("percent-20");
  
})();