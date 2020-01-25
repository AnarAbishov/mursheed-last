let addRouteBtn = $(".add-route-btn");
//table datas
let fromRoute = $(".from-route-table")[0];
let toRoute = $(".to-route-table")[0];
let routePrice = $(".route-price-table")[0];
let form = document.getElementById("addRouteForm");

function createRoute(data) {

    let route={
        "FromRoute":"",
        "ToRoute":"",
        "Price":"",
        "Info":""
    }
    
    return route;
}

function readFormData() {
    var formData = {};
    $(form).find(":input").not(".add-route-btn").each(function () {
        // The selector will match buttons; if you want to filter
        // them out, check `this.tagName` and `this.type`; see
        // below
        // if (this.name == "ProductName") {
        //     formData[this.name] = $("select[name='ProductId']").find('option:selected').text();
        // } else if (this.name == "PersonnelFullname") {
        //     formData[this.name] = $("select[name='PersonnelId']").find('option:selected').text();
        // } else {
        //     formData[this.name] = $(this).val();
        // }
    });
    return formData;
}
function addRoute(){
    $form=$(form);
    $.validator.unobtrusive.parse($form);

if($form.valid()){
    alert("gul");

    var dataArray = $addRouteForm.serializeArray()
    dataObj = {};
    console.log(dataArray);

    

    $(dataArray).each(function (i, field) {
        dataObj[field.name] = field.value;
    });

}else{
    alert("bok");
}
}
// addRouteBtn.click(function (e) {
//     e.preventDefault();

//     $.validator.unobtrusive.parse($addRouteForm);

//     var dataArray = $addRouteForm.serializeArray(),
//         dataObj = {};

//     $(dataArray).each(function (i, field) {
//         dataObj[field.name] = field.value;
//     });

//     function getData(dataValue){
//         return dataObj[dataValue];
//     }

//     if ($addRouteForm.valid()){
//         console.log(getData("routeTo"));
//         fromRouteTable.attr("value", getData("routeFrom"));
//         toRouteTable.attr("value", getData("routeTo"));
//         routePriceTable.attr("value", `$${getData("routeCost")}`);
//     } 
//     else {
//         alert("poks");
//     }
// });