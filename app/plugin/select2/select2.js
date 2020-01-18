$(document).ready(function () {
    $(".select2DropDown").select2({
        closeOnSelect: true,
        allowClear: true,
        placeholder: "Select"
    });
    $(".select2MultipleDropDown").select2({
        multiple: true,
        placeholder: "Select",
        width: 'resolve',
        tags: true
    });
   
});