// Load Header inside Index Header
// $(document).ready(function(){
//     $('#headerNavbar').load("./partialsIndex/header.html");
// });


// $(".card-footer").click(function(event) {
//     alert("Description");
// $(".descriptionToggle").toggleClass("d-flex").slideToggle('1000', 'linear');
// // If it is visible, then change the icon of the gallary to upwards arrow
// $("#upDownIcon").toggleClass('fa-angle-double-up fa-angle-double-down');
// });

$(document).on('click', '.card-footer', function () {
    var footerId = $(this).attr("id");
    var descriptionId = "#" + footerId + "description"
    var arrowIconId = "#" + footerId + "arrow"

    var msg = $(arrowIconId).attr('id');

    console.log(msg);

    // $(arrowIconId).toggleClass('fa-angle-double-up fa-angle-double-down');
    // $(arrowIconId).addClass('fa-angle-double-up');

    
    $(descriptionId).slideToggle('1000', 'linear');
});


// ----------------

// $("#certificate").click(function (event) {
//     $("#certificates").toggleClass("d-flex").slideToggle('1000', 'linear');
//     // If it is visible, then change the icon of the gallary to upwards arrow
//     $("#upDownIcon").toggleClass('fa-angle-double-up fa-angle-double-down');
//   });