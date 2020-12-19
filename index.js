// Load item template partial to containers
$("#item-template-script-container").load("partials/itemPartial.html")

// Load Header html template to Navbar container
$("#headerNavbar").load("partials/headerPartial.html",
  function () {
    const templateHTMLHeader = $("#header-template").html();
    const compliedHTMLHeader = Handlebars.compile(templateHTMLHeader);
    const compliedObjectHeader = compliedHTMLHeader(_menu);
    $("#headerNavbar").html(compliedObjectHeader);
});

// On Click function for Menu items to toggle the menu visibility
function menuClick(){
  $('.navbarButton').trigger('click');
}

// Load Footer html template to footer
$("#footer").load("partials/footerPartial.html")



// Open the description section of card and change the icon
$(document).on('click', '.card-footer', function () {
  var footerId = $(this).attr("id");
  var descriptionId = "#" + footerId + "description"
  var arrowIconId = "#" + footerId + "arrow"

  $(arrowIconId).toggleClass('fa-angle-up fa-angle-down');
  $(arrowIconId).toggleClass('angleAnimateUp angleAnimateDown');

  $(descriptionId).slideToggle('1000', 'linear');
})

// Card Carousel Setting
$('.carousel-item', '.show-neighbors').each(function () {
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
}).each(function () {
  var prev = $(this).prev();
  if (!prev.length) {
    prev = $(this).siblings(':last');
  }
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});


// Handlebar template compilation function : NOT WORKING
// function handlebarCompilation(
//   {template, itemObj, container}) {
//   const templateHTML = $("#"+ template).html();
//   const compliedHTML = Handlebars.compile(templateHTML);
//   const compliedObject = compliedHTML(itemObj);
//   $("#"+ container).html(compliedObject);
// };
