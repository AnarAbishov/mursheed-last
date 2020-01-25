let addRouteBtn = $(".add-route-btn");
//table datas
let fromRoute = $(".from-route-table")[0];
let toRoute = $(".to-route-table")[0];
let routePrice = $(".route-price-table")[0];
let form = $("#addRouteForm");

addRouteBtn.click(function(e){
    e.preventDefault();

    $.validator.unobtrusive.parse(form);

    var dataArray = form.serializeArray(),
        dataObj = {};

    $(dataArray).each(function (i, field) {
        dataObj[field.name] = field.value;
    });

    function getData(dataValue){
        return dataObj[dataValue];
    }

    if (form.valid()){
        console.log(getData("routeTo"));
        fromRouteTable.attr("value", getData("routeFrom"));
        toRouteTable.attr("value", getData("routeTo"));
        routePriceTable.attr("value", `$${getData("routeCost")}`);
    } 
    else {
        alert("poks");
    }
});