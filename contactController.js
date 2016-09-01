(function(module) {
  var contactController = {};

  contactController.index = function(ctx, next) {
    next();
  };

  module.contactController = contactController;
})(window);
