const _drinks =
    [
        {
            name: "Lemon Juice",
            category: "Drinks",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "49.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Orange Juice",
            category: "Drinks",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "49.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Musambi Juice",
            category: "Drinks",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "49.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Water Melon Juice",
            category: "Drinks",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "49.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Tea",
            category: "Drinks",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "49.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Coffee",
            category: "Drinks",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "49.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ];

$(document).ready(function () {
    const templateHTML = $("#item-template").html();
    const compliedHTML = Handlebars.compile(templateHTML);
    const compliedObject = compliedHTML(_drinks);
    $("#drinks-container").html(compliedObject);
});