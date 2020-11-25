var soups = [{
        name: "Sweet Corn Chicken Soup",
        category: "Soup",
        photo: "http://placehold.it/100",
        price: "99.00",
        class: "NonVeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Cream of Chicken Soup",
        category: "Soup",
        photo: "http://placehold.it/100",
        price: "120.00",
        class: "NonVeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Sweet Corn Veg Soup",
        category: "Soup",
        photo: "http://placehold.it/100",
        price: "120.00",
        class: "Veg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Cream of Veg Soup",
        category: "Soup",
        photo: "http://placehold.it/100",
        price: "120.00",
        class: "Veg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Cream of Tomato Soup",
        category: "Soup",
        photo: "http://placehold.it/100",
        price: "120.00",
        class: "Veg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Hot and Sour Chicken Soup",
        category: "Soup",
        photo: "http://placehold.it/100",
        price: "120.00",
        class: "NonVeg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Hot and Sour Veg Soup",
        category: "Soup",
        photo: "http://placehold.it/100",
        price: "120.00",
        class: "Veg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
];

$(document).ready(function() {
    const soupsTemplateHTML = $("#soups-template").html();
    const compliedHTML = Handlebars.compile(soupsTemplateHTML);
    const compliedSoupObject = compliedHTML(soups);
    $("#soups-container").html(compliedSoupObject);
});