const _chinese =
    [
        {
            name: "Chicken Fried Rice",
            category: "Chinese",
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
            name: "Beef Fried Rice",
            category: "Chinese",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "169.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Veg Fried Rice",
            category: "Chinese",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "119.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Chilli Chicken",
            category: "Chinese",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "129.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Chilli Beef",
            category: "Chinese",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "139.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Chilli Paneer",
            category: "Chinese",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "99.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Dragon Chicken",
            category: "Chinese",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "169.00",
            class: "NonVeg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Dragon Beef",
            category: "Chinese",
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
    ];

$(document).ready(function () {
    const templateHTML = $("#item-template").html();
    const compliedHTML = Handlebars.compile(templateHTML);
    const compliedObject = compliedHTML(_chinese);
    $("#chinese-container").html(compliedObject);
});