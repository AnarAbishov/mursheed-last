let addRouteBtn = $(".add-route-btn");
let $addRouteForm = $("#add-route-form");

//table datas
let fromRouteTable = $(".from-route-table");
let toRouteTable = $(".to-route-table");
let routePriceTable = $(".route-price-table");

addRouteBtn.click(function (e) {
    e.preventDefault();

    $.validator.unobtrusive.parse($addRouteForm);

    var dataArray = $addRouteForm.serializeArray(),
        dataObj = {};

    $(dataArray).each(function (i, field) {
        dataObj[field.name] = field.value;
    });

    function getData(dataValue){
        return dataObj[dataValue];
    }

    if ($addRouteForm.valid()){
        console.log(getData("routeTo"));
        fromRouteTable.attr("value", getData("routeFrom"));
        toRouteTable.attr("value", getData("routeTo"));
        routePriceTable.attr("value", `$${getData("routeCost")}`);
    } 
    else {
        alert("poks");
    }
});