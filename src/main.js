$(document).ready(function($) {
  $.extend($.scrollTo.defaults, {
    axis: 'y',
    duration: 800
  })
  setTimeout(function() {
    $('#learnMore').on('click', function() {
      console.log('clicked')
      $(window).scrollTo('#main', 800)
    })
  }, 1500)
})
