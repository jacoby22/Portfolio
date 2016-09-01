(function(module) {
  var projectController = {};

  portfolio.showIndex();
  repos.reqRepos(repos.writeContent);

  projectController.index = function(ctx, next) {
    next();
  };

  projectController.error = function() {
    console.log('Site could not be found. Are you connected to the internet?');
  };

  module.projectController = projectController;
})(window);
