$(document).ready(function () {
    $('.select2MultipleDropDown').select2();
    $('.select2DropDown').select2();
    $('#driver-ride-table').DataTable();
    $("#driver-time-table").DataTable();
    $("#driver-route-table").DataTable();
    let deleteBtn = $(".delete-btn");
    let singleImg = $(".single-img-container")

    deleteBtn.click(function(){
        let question = confirm("Are you sure to delete this photo ?");
        if (question) {
            this.parentNode.parentNode.removeChild(singleImg);
        } 
        else {
            return;
        }
    });

    $(function () {
        var imagesPreview = function (input, placeToInsertImagePreview) {
            if (input.files) {
                var filesAmount = input.files.length;
                for (i = 0; i < filesAmount; i++) {
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                    }
                    reader.readAsDataURL(input.files[i]);
                }
            }
            let imgCount = $(".single-image-container").length;
            if (imgCount >= 6) {
                $("#add-photo").attr('disabled', 'disabled');
            }
        };
        
        $('#add-photo').on('change', function () {
            let carImgContainer = $(".car-img-container");
            let jsSingleImg = document.createElement("div");
            jsSingleImg.setAttribute("class", "single-image-container");
            let carOverlay = document.createElement("div");
            carOverlay.setAttribute("class", "car-overlay");
            let zoomBtn = document.createElement("button");
            let jsDeleteBtn = document.createElement("button");
            jsDeleteBtn.setAttribute("class", "delete-btn")
            zoomBtn.innerHTML = "<i class='fas fa-search-plus'></i>";
            jsDeleteBtn.innerHTML = "<i class='fas fa-trash-alt'></i>";
            imagesPreview(this, jsSingleImg);
            carImgContainer.append(jsSingleImg);
            jsSingleImg.append(carOverlay);
            carOverlay.append(zoomBtn);
            carOverlay.append(jsDeleteBtn)

            jsDeleteBtn.addEventListener("click", function () {
                let question = confirm("Are you sure to delete this photo ?");
                if (question) {
                    this.parentNode.parentNode.parentNode.removeChild(jsSingleImg);
                } else {
                    return;
                }
            });
        });

    });
});