$(document).ready(function () {
    $(".select2DropDown").select2({
        closeOnSelect: true,
        allowClear: true,
        placeholder: "Select"
    });
    $(".select2MultipleDropDown").select2({
        multiple: true,
        placeholder: "Select",
        width: "resolve",
        tags: true
    });
});
// variable
const photoInput = "Photo",
    carPhotosInput = "CarPhotos",
    LanguageIds = "LanguageIds";
var formData = new FormData();
//
//
//
function onChangeSelect(selectBox) {
    clearSelect();
    if ($(selectBox).val() !== "") {
        $.ajax({
            url: `/Select2/GetModelsForBrand`,
            data: { id: $(selectBox).val() },
            type: "POST"
        }).done(function (response) {
            fillToModelSelect(response.items);
        }).fail(function (response) {
            console.log("fail");
        });
    }
}
//
//
//
function fillToModelSelect(data) {
    $("#ModelId").select2({
        closeOnSelect: true,
        allowClear: true,
        placeholder: "Select",
        data: data
    });
}
//
//
function createFormDataField() {
    $(".driverRegister").find(":input.formField").each(function () {
        formData.append(this.name, null);
    });
}
//
createFormDataField();
//
function clearSelect() {
    $("#ModelId").empty().append(`<option></option>`);
}//
//
//
//
//#region read Form Data
function readFormData() {
    $(".driverRegister").find(":input.formField").not("#LanguageIds ").each(function () {
        var input;
        var files;
        // if this name === Photo
        if (this.name === photoInput) {
            input = document.getElementById(photoInput);
            files = input.files[0];
            formData.set(photoInput, files);
            //console.log(formData.get(photoInput));
        } else if (this.name === carPhotosInput) { // if this name === CarPhotos
            input = document.getElementById(carPhotosInput);
            files = input.files;
            for (let i = 0; i !== files.length; i++) {
                formData.set(carPhotosInput, files[i]);
                //console.log(formData.get(carPhotosInput));
            }
        } else {  // form other fields
            formData.set(this.name, $(this).val());
            ////console.log(formData.get(this.name));
        }

        //console.log(formData.get(LanguageIds));
    });
    formData.set(LanguageIds, JSON.stringify($("#LanguageIds").val()));
}
//#endregion
//
//
function clearFormData() {
    formData.forEach(function (val, key, fD) {
        // here you can add filtering conditions
        formData.set(key, null);
    });
}
//
function onClickRegister() {
    var $form = $(".driverRegister");
    clearFormData();
    // read form fields` val
    readFormData();
    $.validator.unobtrusive.parse($form);
    if ($form.valid()) {
        $.ajax({
            url: `/Account/Register/Driver`,
            cache: false,
            contentType: false, // Not to set any content header
            processData: false, // Not to process data
            traditional: true,
            data: formData,
            type: "POST"
        }).done(function (response) {
            window.Swal.fire({
                title: 'success!',
                //text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            window.location.href = response.href;
        }).fail(function (xhr) {
            window.Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: xhr.responseText
            });
        });
    }
}
//