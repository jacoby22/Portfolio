(function(module) {
  var resumeController = {};

  resumeController.index = function(ctx, next) {
    next();
  };

  module.resumeController = resumeController;
})(window);
