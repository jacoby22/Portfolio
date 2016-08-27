(function(module) {
  var resumeController = {};

  resumeController.index = function() {
    portfolio.selectNav();
  };

  module.resumeController = resumeController;
})(window);
