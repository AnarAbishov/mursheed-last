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
                "data": "id",
                "class": "text-center pt-3",
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
                "data": "price", 
                "class": "text-center pt-3 routePrice",
            },
            // icon deyisecek todo
            {
                "data": null,
                "className": 'details-control',
                "orderable": false,
                "defaultContent": ''
            },
            {
                "autoWidth": true,
                render: function (row) {
                    return `
                        <ul class="m-0 p-0 d-flex justify-content-center">
                            <li class=" list-group mr-2">
                                <a onclick="editItem(this)" class='edit-route-btn btn text-primary btn-sm'><i class='fa fa-edit'></i></a>
                            </li>
                            <li class="list-group">
                                <a onclick="deleteItem(this)" class="delete-rout-btn btn text-danger btn-sm"><i class="fa fa-trash"></i></a>
                            </li>
                            <li class="list-group">
                                <a onclick="saveItem(this)" class="save-route-btn btn text-success btn-sm"><i class="fas fa-check"></i></a>
                            </li>
                        </ul>`;
                }
            }
        ],
        "order": [
            [1, 'asc']
        ],
        language: {
            paginate: {
                next: `<i style="color: #007BFF;" class="fas fa-arrow-right"></i>`,
                previous: `<i style="color: #007BFF;" class="fas fa-arrow-left"></i>`,
            }
        }
    });
    //#region row Details
var detailRows = [];

$('#routeTable tbody').on('click',
    'tr td.details-control',
    function () {

        var tr = $(this).closest('tr');
        var row = routeTable.row(tr);
        var idx = $.inArray(tr.attr('id'), detailRows);

        if (row.child.isShown()) {
            tr.removeClass('details');
            row.child.hide();
            tr.removeClass('shown');
            // Remove from the 'open' array
            detailRows.splice(idx, 1);
        } else {
            tr.addClass('shown');
            tr.addClass('details');
            row.child(format(row.data())).show();

            // Add to the 'open' array
            if (idx === -1) {
                detailRows.push(tr.attr('id'));
            }
        }
    });


$('#btn-show-all-children').on('click',
    function () {
        // Enumerate all rows
        routeTable.rows().every(function () {
            // If row has details collapsed
            if (!this.child.isShown()) {
                // Open this row
                this.child(format(this.data())).show();
                $(this.node()).addClass('shown');
            }
        });
    });

$('#btn-hide-all-children').on('click',
    function () {
        // Enumerate all rows
        routeTable.rows().every(function () {
            // If row has details expanded
            if (this.child.isShown()) {
                // Collapse row details
                this.child.hide();
                $(this.node()).removeClass('shown');
            }
        });
    });

routeTable.on('draw',
    function () {
        $.each(detailRows,
            function (i, id) {
                $('#' + id + ' td.details-control').trigger('click');
            });
    });
//#endregion
});


function format(row) {

    var card = `<div class="card">
                 <div class="card-body">
                    <h4 class="header-title text-center header-title p-2">Routes</h4>
                     <div class="single-table">
                         <div class="table-responsive">`,

        cardEnd = `</div>
                        </div>
                     </div>
                 </div>`,
        // route table
        routeInfoTable = `<table class="table table-hover text-center">`,
        routeInfoTableEnd = `</table>`;


    // region table

    // table first row
    routeInfoTable += `<thead >
                          <tr>
                              <th scope="col">Info</th>
                          </tr>
                   </thead>`;
                   routeInfoTable+=`<tbody>
                    <tr>
                        <th scope="row">${row.info}</th>
                    </tr>
                </tbody>`;
                routeInfoTable += routeInfoTableEnd;
    //#endregion DocDirection and DocDirectionDetails
    card += routeInfoTable;
    card += cardEnd;
    return card;
}
//#endregion
function readSelectData(row) {
    let selectStart = "<select disabled style='color:black' class='select2DropDown formField routeSelect text-center'>"
    let selectEnd = "</select>";
    Array.prototype.forEach.call(row,
        function (item) {
            selectStart += `<option value="${item.id}">${item.name}</option>`;
        });
    selectStart += selectEnd;
    return selectStart;
}

