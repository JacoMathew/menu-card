var soups = [
    {
    name : "Sweet Corn Chicken Soup",
    category : "Soup",
    photo : "xyz.png",
    price : "99.00" 
    },
    {
    name : "Cream of Chicken Soup",
    category : "Soup",
    photo : "xyz.png",
    price : "120.00" 
    }
];

$(document).ready(function(){
    const soupsTemplateHTML = $("#soups-template").html();
    const compliedHTML = Handlebars.compile(soupsTemplateHTML);
    const compliedSoupObject = compliedHTML(soups);
    $("#soups-container").html(compliedSoupObject);
});