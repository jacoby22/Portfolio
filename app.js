var articles = [];
var portfolio = {};

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {
  var source = $('#article-template').html();
  var template = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  var html = template(this);
  $('#projects').append(html);
};

Article.all = [];

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
    $('#' + $selectedTab).fadeIn(750);
  });
};

portfolio.loadAll = function(projects) {
  projects.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
  projects.forEach(function(ele) {
    articles.push(new Article(ele));
  });

  articles.forEach(function(a){
    $('#projects').append(a.toHtml());
  });
};

portfolio.fetchAll = function() {
  console.log('Hellos');
  if (localStorage.projects) {
    console.log('1');
    portfolio.loadAll(JSON.parse(localStorage.projects));
  } else {
    console.log('2');
    var $data = $.get('projects.json', function(data) {
      console.log(data);
      return data;
    });
    $data.done(function(data) {
      console.log('3');
      portfolio.loadAll(data);
    });
    $data.done(function(data) {
      console.log('4');
      localStorage.setItem('projects', JSON.stringify(($data.responseText)));
    });
    ;
  }
};


$(function() {
  $('.tab-content').hide();
  $('#projects').fadeIn(750);
  portfolio.displayNav();
  portfolio.selectNav();
  portfolio.displayNavOnScreenChange();
  portfolio.fetchAll();
  $('.template').hide();
});
