let addRouteBtn = $(".add-route-btn");
//table datas
let fromRoute = $(".from-route");
let toRoute = $(".route-to");
let routePrice = $(".route-price");
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
        console.log(getData("routeFrom"));
        console.log(getData("routeTo"));
        console.log(getData("routePrice"));
        
        fromRoute.attr("value", getData("routeFrom"));
        toRoute.attr("value", getData("routeTo"));
        routePrice.attr("value", `$${getData("routeCost")}`);
    } 
    else {
        alert("poks");
    }
});

let editRouteBtn = $(".edit-route-btn");
let deleteRouteBtn = $(".delete-route-btn");
let saveRouteBtn = $(".save-route-btn");

