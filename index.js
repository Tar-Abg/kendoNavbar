import * as $ from "jquery";
import "@progress/kendo-ui/js/kendo.menu.js";

export function createNavabr(rootElement, dataForMenu){
    rootElement.append(
        $("<ul>").kendoMenu({
            dataSource: dataForMenu
        })
    )
}
