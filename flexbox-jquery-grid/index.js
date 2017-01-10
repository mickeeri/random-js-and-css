'use strict'

function init() {
  App = new App();
}

var App = function() {
  this.fetchingData = true;

  this.getData();
}

App.prototype.renderData = function(photos) {
  photos.forEach(photo => {
    var list = $('#photos');
    var imageContainer = "<img src='" + photo.thumbnailUrl + "'>";
    var textContainer = "<div class='text-container'><p>" + photo.title + "</p></div>";
    var detailsContainer = "<div class='details-container'><a href='" + photo.url + "'>See details</a></div>";
    var listItem = "<figure>" + imageContainer + textContainer + detailsContainer + "</figure>";

    $(listItem).appendTo(list);
  })
}

App.prototype.getData = function() {
  var rootUrl = 'https://jsonplaceholder.typicode.com';
  const numberOfItems = 500;

  var that = this;

  $.ajax({
    method: 'GET',
    url: rootUrl + '/photos',
  })
  .done(function(photos) {
    const timeOut = 400;

    setTimeout(function() {
      $('.loader').hide();
      that.renderData(photos.slice(0, numberOfItems));
    }, 400)
  })
}


window.onload = init();
