(function(module) {
  var projectController = {};

  projectController.index = function(ctx, next) {
    next();
  };

  projectController.error = function() {
    console.log('Site could not be found. Are you connected to the internet?');
  };

  module.projectController = projectController;
})(window);
