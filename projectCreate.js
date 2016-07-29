articlesCreated = {};

articlesCreated.populateFilters = function() {
  $('article').each(function() {
    if(!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var $optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#author-filter option[value="' + val + '"]').length === 0) {
        $('#author-filter').append($optionTag);
      }
      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articlesCreated.handleAuthorChange = function() {
  $('#author-filter').on('change', function() {
    var val = $(this).val();
    if (val) {
      var $author = val;
      console.log($author);
      $('article').hide();
      $('article[data-author="' + $author + '"]').show();
    } else {
      $('article').show();
      $('.template').hide();
    }
    $('#category-filter').val('');
  });
};

articlesCreated.handleCategoryChange = function() {
  $('#category-filter').on('change', function() {
    var val = $(this).val();
    if (val) {
      var $category = val;
      console.log($category);
      $('article').hide();
      $('article[data-category="' + $category + '"]').show();
    } else {
      $('article').show();
      $('.template').hide();
    }
    $('#author-filter').val('');
  });
};

$(function() {
  articlesCreated.populateFilters();
  articlesCreated.handleAuthorChange();
  articlesCreated.handleCategoryChange();
});
