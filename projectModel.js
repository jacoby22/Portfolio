(function(module) {
  var portfolio = {};

  function Project (opts) {
    this.author = opts.author;
    this.authorUrl = opts.authorUrl;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
    this.prodTime = opts.prodTime;
  }

  Project.prototype.toHtml = function() {
    var source = $('#article-template').html();
    var template = Handlebars.compile(source);

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    var html = template(this);
    $('#projects').append(html);
  };

  Project.all = [];

  portfolio.displayNav = function() {
    $('.icon-menu').on('click', function() {
      $('.tab').toggle();
    });
  };

  portfolio.displayNavOnScreenChange = function() {
    $(window).resize(function() {
      var $winSize = $(window).width();
      if ($winSize > 679) {
        $('.tab').show();
      }
    });
  };

  portfolio.selectNav = function() {
    $('.main-nav').on('click', '.tab', function() {
      var $selectedTab = $(this).data('content');
      $('.tab-content').hide();
      $('#' + $selectedTab).fadeIn(250);
    });
  };

  portfolio.loadAll = function(projects) {
    projects.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    Project.all = projects.map(function(project) {
      return new Project(project);
    });
    Project.all.forEach(function(a){
      $('#projects').append(a.toHtml());
    });
  };

  portfolio.fetchAll = function() {
    if (localStorage.projects) {
      portfolio.loadAll(JSON.parse(localStorage.projects));
      articlesCreated.populateFilters();
    } else {
      $.get('projects.json', function(data) {
        return data;
      }).done(function(data) {
        localStorage.setItem('projects', JSON.stringify((data)));
        portfolio.loadAll(data);
        articlesCreated.populateFilters();
      });
    }
  };

  portfolio.reduceHours = function() {
    return Project.all.map(function(project) {
      return parseInt(project.prodTime);
    })
    .reduce(function(acc, b) {
      return acc + b;
    }, 0);
  };

  portfolio.showIndex = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn(750);
    portfolio.displayNav();
    portfolio.selectNav();
    portfolio.displayNavOnScreenChange();
    portfolio.fetchAll();
    $('.template').hide();
  };

  module.portfolio = portfolio;
  module.Project = Project;
})(window);
