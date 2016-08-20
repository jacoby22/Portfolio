(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    portfolio.selectNav();
    console.log('about');
  };

  module.aboutController = aboutController;
})(window);
