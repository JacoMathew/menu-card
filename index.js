// Open the description section of card and change the icon
$(document).on('click', '.card-footer', function () {
    var footerId = $(this).attr("id");
    var descriptionId = "#" + footerId + "description"
    var arrowIconId = "#" + footerId + "arrow"

    $(arrowIconId).toggleClass('fa-angle-up fa-angle-down');

    $(descriptionId).slideToggle('1000', 'linear');
});



// $(document).on('click', '.imageBtn', function () {
//     var footerId = $(this).attr("id");
// //     var descriptionId = "#" + footerId + "description"
// //     var arrowIconId = "#" + footerId + "arrow"
//     alert(`The Id is ${footerId}`);

// });

// Card Carousel Setting
$('.carousel-item', '.show-neighbors').each(function(){
    var next = $(this).next();
    if (! next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  }).each(function(){
    var prev = $(this).prev();
    if (! prev.length) {
      prev = $(this).siblings(':last');
    }
    prev.children(':nth-last-child(2)').clone().prependTo($(this));
  });