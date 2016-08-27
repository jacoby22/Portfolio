(function(module) {
  var repos = {};

  repos.reqRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?sort=updated&per_page=15',
      type: 'GET',
      headers: {
        Authorization: 'token ' + gitKey
      }
    }).done(function(data) {
      console.log(data);
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
