(function(module) {
  var projectController = {};

  portfolio.showIndex();

  projectController.index = function() {
    portfolio.selectNav();
  };

  projectController.error = function() {
    console.log('Site could not be found. Are you connected to the internet?');
  };

  module.projectController = projectController;
})(window);
