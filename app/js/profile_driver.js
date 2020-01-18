$(document).ready(function () {
    $('.select2MultipleDropDown').select2();
    $('.select2DropDown').select2();
    $('#driver-ride-table').DataTable();
    $("#driver-time-table").DataTable();
    $("#driver-route-table").DataTable();


    $(function () {
        var imagesPreview = function (input, placeToInsertImagePreview) {
            if(input.files) {
                var filesAmount = input.files.length;
                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                    }
                    reader.readAsDataURL(input.files[i]);
                }
            }
            let imgCount = $(".car-img-container img").length;
            if(imgCount >= 5){
                $("#add-photo").attr('disabled', 'disabled');
            }
        };
        $('#add-photo').on('change', function () {
            let carImgContainer = $(".car-img-container");
            let singleImg = document.createElement("div");
            singleImg.setAttribute("class", "single-image-container");
            let carOverlay = document.createElement("div");
            carOverlay.setAttribute("class", "car-overlay");
            let zoomBtn = document.createElement("button");
            let deleteBtn = document.createElement("button");
            deleteBtn.setAttribute("class", "delete-btn")
            zoomBtn.innerHTML = "<i class='fas fa-search-plus'></i>";
            deleteBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
            imagesPreview(this, singleImg);
            carImgContainer.append(singleImg);
            singleImg.append(carOverlay);
            carOverlay.append(zoomBtn);
            carOverlay.append(deleteBtn)

            deleteBtn.addEventListener("click", function(){
                let question = confirm("Are you sure to delete this photo ?");
                if(question){
                    this.parentNode.parentNode.parentNode.removeChild(singleImg);
                }
                else{
                    return;
                }
            }); 
        });
    });

    let addRouteBtn = $(".add-route-btn");
    let $addRouteForm = $("#add-route-form");
    let fromRouteTable = $(".from-route-table");
    let toRouteTable = $(".to-route-table");
    let routePriceTable = $(".route-price-table");

    addRouteBtn.click(function(e){
        e.preventDefault();
        let formValue = $($addRouteForm).serialize();
        $.validator.unobtrusive.parse($addRouteForm);
        if($addRouteForm.valid()){
            alert("gul");  
            let data = JSON.stringify($($addRouteForm).serializeArray()); 
            
        }
        else{
            alert("pox");
        }
    }); 



});