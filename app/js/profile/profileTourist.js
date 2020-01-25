$(document).ready(function () {
    // $('.select2MultipleDropDown').select2();
    // $('.select2DropDown').select2();
    var routeTable = $('#routeTable').DataTable({
        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        "ordering": false,
        "ajax": "routes.txt",

        "columns": [
            {
                "data": "id"
            },
            {
                "data": "fromRoute",
                render: function (row) {
                    return readSelectData(row);
                }
            },
            {
                "data": "toRoute",
                render: function (row) {
                    return readSelectData(row);
                }
            },
            {
                "data": "price"
            },
            {
                "data": "price",
                "autoWidth": true,
                render: function (row) {
                    return `
                        <ul class="m-0 p-0 d-flex justify-content-center">
                            <li class=" list-group mr-2">
                                <a class='edit-route-btn btn text-primary btn-sm'><i class='fa fa-edit'></i></a>
                            </li>
                            <li class="list-group">
                                <a onclick="deleteItem()" class="delete-rout-btn btn text-danger btn-sm"><i class="fa fa-trash"></i></a>
                            </li>
                            <li class="list-group">
                                <a class="save-route-btn btn text-success btn-sm"><i class="fas fa-check"></i></a>
                            </li>
                        </ul>`;
                }
            }
        ],
        "order": [
            [1, 'asc']
        ]
    });
});

function readSelectData(row) {
    let selectStart = "<select disabled style='color:black' class='routeSelect'>"
    let selectEnd = "</select>";
    Array.prototype.forEach.call(row,
        function (item) {
            selectStart += `<option value="${item.id}">${item.name}</option>`;
        });
    selectStart += selectEnd;
    return selectStart;
}

