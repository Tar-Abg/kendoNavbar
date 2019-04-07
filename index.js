import * as $ from "jquery";
require ("@progress/kendo-ui/js/kendo.menu.js");

export function createNavabr(rootElement, dataForMenu){
    rootElement.append(
        $("<ul>").kendoMenu({
            dataSource: dataForMenu,
            orientation: "vertical"           
        }).addClass("first-menu")
    )
};
export function createSecndNavabr(rootElement, dataForMenu){
    rootElement.append(
        $("<ul>").kendoMenu({
            dataSource: dataForMenu,
            orientation:"horizontal"
        }).addClass("secnd-menu")
    )
}
