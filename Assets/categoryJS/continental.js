const _continental =
    [
        {
            name: "Pasta Cream Sause",
            category: "Continental",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "219.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Pasta Red Sause",
            category: "Continental",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "199.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Green Salad",
            category: "Continental",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "129.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Meat Pizza",
            category: "Continental",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "219.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Veg Pizza",
            category: "Continental",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "189.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Meat Burger",
            category: "Continental",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "239.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ];

$(document).ready(function () {
    const templateHTML = $("#item-template").html();
    const compliedHTML = Handlebars.compile(templateHTML);
    const compliedObject = compliedHTML(_continental);
    $("#continental-container").html(compliedObject);
});