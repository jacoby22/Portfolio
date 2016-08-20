(function(module) {
  var resumeController = {};

  resumeController.index = function() {
    portfolio.selectNav();
    console.log('resume');
  };

  module.resumeController = resumeController;
})(window);
