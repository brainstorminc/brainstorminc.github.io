$(document).ready(function ($) {
  AOS.init()
  onePageScroll('.main')
  $('.menu').square_menu({
    flyDirection: 'bottom', // The direction where the menu will fly from. Available options are "top", "bottom", "left", "right", "top-left", "top-right", "bottom-left" and "bottom-right". The default value is "bottom".
    button: 'Menu', // You can define text inside the auto-generated button here. If you want to prevent the plugin from generating a menu button, change this to false. The default value is "Menu".
    animationStyle: 'vertical', // The type of animation style you will see after it flew in. Available options are "vertical" which expands vertically and "horizontal" which expands horizontally. Vertical works best with "top" or "bottom" flyDirection whereas Horizontal works best with "left" or "right" flyDirection. The default value is "vertical".
    closeButton: 'X' // You can define the content of the close button appears after animates are completed here. Change this to false to hide the close button. The default value is X.
  })
  $('#learnMore').on('click', function () {
    moveTo('.main', 2)
  })
})
