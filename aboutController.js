(function(module) {
  var aboutController = {};

  aboutController.index = function(ctx, next) {
    next();
  };

  module.aboutController = aboutController;
})(window);
