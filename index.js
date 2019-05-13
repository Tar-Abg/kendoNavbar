var $ = require("jquery");
require('./css/style.css');
require ("@progress/kendo-ui/js/kendo.menu.js");

export function createNavabr(rootElement, dataForMenu){
    rootElement.append(
        $("<ul>").kendoMenu({
            dataSource: dataForMenu,
            orientation: "vertical"           
        }).addClass("first-menu")
    )
};
export function createSecondNavabr(rootElement, dataForMenu){
    rootElement.append(
        $("<ul>").kendoMenu({
            dataSource: dataForMenu,
            orientation:"horizontal"
        }).addClass("second-menu")
    )
}
