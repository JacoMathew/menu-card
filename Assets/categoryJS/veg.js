const _veg =
    [
        {
            name: "Panner Masala",
            category: "Veg",
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
            name: "Panner Fry",
            category: "Veg",
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
            name: "Dal Curry",
            category: "Veg",
            photo: "http://placehold.it/100",
            gallery: [
                "http://placehold.it/400/FF0000",
                "http://placehold.it/400/FFFF00",
                "http://placehold.it/400/0000FF",
            ],
            price: "79.00",
            class: "Veg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Panner Mutter Masala",
            category: "Veg",
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
            name: "Allo Masala",
            category: "Veg",
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
    ];

$(document).ready(function () {
    const templateHTML = $("#item-template").html();
    const compliedHTML = Handlebars.compile(templateHTML);
    const compliedObject = compliedHTML(_veg);
    $("#veg-container").html(compliedObject);
});