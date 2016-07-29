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

$(function() {
  articlesCreated.populateFilters();
});
