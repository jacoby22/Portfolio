(function(module) {
  var contactController = {};

  contactController.index = function() {
    portfolio.selectNav();
    console.log('contact');
  };

  module.contactController = contactController;
})(window);
