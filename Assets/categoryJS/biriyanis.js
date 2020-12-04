const _biriyani = {biriyani :
    [
    {
        name : "Chicken Biriyani",
        category : "Biriyani",
        photo : "http://placehold.it/100",
        gallery : [
            "http://placehold.it/400/FF0000",
            "http://placehold.it/400/FFFF00",
            "http://placehold.it/400/0000FF",
        ],
        price : "199.00",
        class : "NonVeg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name : "Mutton Biriyani",
        category : "Biriyani",
        photo : "http://placehold.it/100",
        gallery : [
            "http://placehold.it/400/FF0000",
            "http://placehold.it/400/FFFF00",
            "http://placehold.it/400/0000FF",
        ],
        price : "239.00",
        class : "NonVeg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name : "Fish Biriyani",
        category : "Biriyani",
        photo : "http://placehold.it/100",
        gallery : [
            "http://placehold.it/400/FF0000",
            "http://placehold.it/400/FFFF00",
            "http://placehold.it/400/0000FF",
        ],
        price : "219.00",
        class : "NonVeg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name : "Biriyani Rice",
        category : "Biriyani",
        photo : "http://placehold.it/100",
        gallery : [
            "http://placehold.it/400/FF0000",
            "http://placehold.it/400/FFFF00",
            "http://placehold.it/400/0000FF",
        ],
        price : "99.00",
        class : "NonVeg",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
    ]
};

$(document).ready(function(){
    const soupsTemplateHTML = $("#biriyani-template").html();
    const compliedHTML = Handlebars.compile(soupsTemplateHTML);
    const compliedSoupObject = compliedHTML(_biriyani);
    $("#biriyani-container").html(compliedSoupObject);
});