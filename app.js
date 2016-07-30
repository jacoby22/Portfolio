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

portfolio.selectNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    var $selectedTab = $(this).data('content');
    $('.tab-content').hide();
    $('#' + $selectedTab).fadeIn(750);
  });
};

projects.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projects.forEach(function(ele) {
  articles.push(new Article(ele));
});

articles.forEach(function(a){
  $('#projects').append(a.toHtml());
});


$(function() {
  $('.tab-content').hide();
  $('#projects').fadeIn(750);
  portfolio.selectNav();
  $('.template').hide();
});
