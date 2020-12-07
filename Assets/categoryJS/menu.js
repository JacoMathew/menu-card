const _menu = {
    menuCategory:
        [{
            sectionId: "Soup",
            category: "SOUPS",
            divId: "soups-container",
        },
        {
            sectionId: "Biriyani",
            category: "BIRIYANI",
            divId: "biriyani-container",
        },
        {
            sectionId: "Breads",
            category: "BREADS",
            divId: "bread-container",
        },
        {
            sectionId: "Chinese",
            category: "CHINESE",
            divId: "chinese-container",
        },
        {
            sectionId: "NonVeg",
            category: "NON-VEG",
            divId: "nonVeg-container",
        },
        {
            sectionId: "Veg",
            category: "VEG",
            divId: "veg-container",
        },
        {
            sectionId: "Continental",
            category: "CONTINENTAL",
            divId: "continental-container",
        },
        {
            sectionId: "Drink",
            category: "DRINKS",
            divId: "drinks-container",
        },
        ]
};

Handlebars.registerHelper('isVeg', function (value) {
    return value == "Veg";
});

// handlebarCompilation({
//     template : "menu-template", 
//     itemObj : "_menu",
//     container : "menu-container"
// });

$(document).ready(function () {

    const templateHTML = $("#menu-template").html();
    const compliedHTML = Handlebars.compile(templateHTML);
    const compliedObject = compliedHTML(_menu);
    $("#menu-container").html(compliedObject);
    
});
