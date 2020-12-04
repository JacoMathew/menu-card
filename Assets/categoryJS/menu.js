const _menu = [{
    sectionId: "Soup",
    category : "SOUPS",
    divId : "soups-container",
    scriptId: "soups-template",
    objectName : "soups"
    },
    {
    sectionId: "Biriyani",
    category : "BIRIYANI",
    divId : "biriyani-container",
    scriptId: "biriyani-template",
    objectName : "biriyani"
    },
];


const soupsTemplateHTML = $("#menu-template").html();
const compliedHTML = Handlebars.compile(soupsTemplateHTML);
const compliedSoupObject = compliedHTML(_menu);
$("#menu-container").html(compliedSoupObject);

