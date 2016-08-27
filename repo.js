(function(module) {
  var repos = {};

  repos.reqRepos = function(callback) {
    $.get('/github/users/jacoby22/repos?sort=updated&per_page=15', function(data) {
      callback(data);
    });
  };

  repos.writeContent = function(data) {
    console.log(data);
    data.forEach(function(project) {
      $('#resume-item').append('<li>' + project.name + '</li>');
    });
  };

  module.repos = repos;
})(window);
