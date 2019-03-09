import * as $ from "jquery";
require ("@progress/kendo-ui/js/kendo.menu.js");

export function createNavabr(rootElement){
    var navBar = document.createElement("ul");
    rootElement.appendChild(navBar); 
    $("ul").kendoMenu({
        dataSource: [
        {
            text: "Model",
            items: [
            {
                text: "Bmw",
                items: [
                { text: "BMW X1" },
                { text: "BMW 3 Series GT" },
                { text: "BMW i8" },
                { text: "BMW X4" },
                { text: "BMW X6" },
                ]
            },
            {
                text: "Mercedes-Benz",
                items: [
                { text: "GLA 45 AMG" },
                { text: "AMG GT" },
                { text: "GLE" },
                { text: "GLE 2019" },
                ],
            }
            ],
            cssClass: "forFont"
        },
        {
            text: "German Cars",
            items: [
            { text: "Audi" },
            { text: "Opel" },
            { text: "Volkswagen" },
            { text: "Ford-Werke GmbH" }
            ],
        },
        {
            text: "Contact",
            cssClass: "forFont",
            url: "#"
        },
        {
            text: "About",
            cssClass: "forFont",
            url: "#grid"
        }
        ],
    });
}