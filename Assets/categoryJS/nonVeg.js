const _nonVeg =
    [
        {
            name: "Chicken Curry",
            category: "Non Veg",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "149.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Beef Curry",
            category: "Non Veg",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "159.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Chicken Roast",
            category: "Non Veg",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "179.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Chicken Fry",
            category: "Non Veg",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "89.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Beef Fry",
            category: "Non Veg",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "119.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ];

$(document).ready(function () {
    const templateHTML = $("#item-template").html();
    const compliedHTML = Handlebars.compile(templateHTML);
    const compliedObject = compliedHTML(_nonVeg);
    $("#nonVeg-container").html(compliedObject);
});