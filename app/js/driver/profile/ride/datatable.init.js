var rideDataTable = $('#rideDataTable').DataTable({
    "processing": true, // for show progress bar
    "serverSide": true, // for process server side
    "filter": true, // this is for disable filter (search box)
    "orderMulti": false, // for disable multiple column at once
    "ordering": false,
    "ajax": "rides.txt",

    "columns": [{
            "data": "country"
        },
        {
            "data": null,
            "className": 'details-control',
            "orderable": false,
            "defaultContent": ''
        },
        {
            "data": "fromDate"
        },
        {
            "data": "toDate"
        },
        {
            "data": "price"
        }
    ],
    "order": [
        [1, 'asc']
    ]
});

//#region row Details
var detailRows = [];

$('#rideDataTable tbody').on('click',
    'tr td.details-control',
    function () {

        var tr = $(this).closest('tr');
        var row = rideDataTable.row(tr);
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
        rideDataTable.rows().every(function () {
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
        rideDataTable.rows().every(function () {
            // If row has details expanded
            if (this.child.isShown()) {
                // Collapse row details
                this.child.hide();
                $(this.node()).removeClass('shown');
            }
        });
    });

rideDataTable.on('draw',
    function () {
        $.each(detailRows,
            function (i, id) {
                $('#' + id + ' td.details-control').trigger('click');
            });
    });
//#endregion

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
        routeTable = `<table class="table table-hover text-center">`,
        routeTableEnd = `</table>`;


    // region table

    // table first row
    routeTable += `<thead >
                          <tr>
                              <th scope="col">From City</th>
                              <th scope="col">To City</th>
                              <th scope="col">Price</th>
                              <th scope="col">Info</th>
                          </tr>
                   </thead>`;
    // let routes = [{
    //         "fromRoute": "Baki",
    //         "toRoute": "Ganja",
    //         "price": "50$",
    //         "info": "baki-gence",
    //     },
    //     {
    //         "fromRoute": "Baki",
    //         "toRoute": "Ganja",
    //         "price": "50$",
    //         "info": "baki-gence",
    //     },
    //     {
    //         "fromRoute": "Baki",
    //         "toRoute": "Ganja",
    //         "price": "50$",
    //         "info": "baki-gence",
    //     }
    // ]
    Array.prototype.forEach.call(row.route,
        function (item) {

            routeTable += `<tbody>
                                <tr>
                                    <th scope="row">${item.fromCity}</th>
                                    <td class="class="alert-link"">${item.toCity}</td>
                                    <td>${item.price}</td>
                                    <td class="alert alert-primary">${item.info}</td>
                                </tr>
                            </tbody>`;

        });
    routeTable += routeTableEnd;
    //#endregion DocDirection and DocDirectionDetails
    card += routeTable;
    card += cardEnd;
    return card;
}
//#endregion

// function format(row) {
//     // variables
//     var card =
//         `<tr style="width: 100%">
//             <td>Baku</td>
//             <td>1</td>
//             <td>Ganja</td>
//             <td>3</td>
//             <td>Baku-Ganja</td>
//             <td>12</td>
//             <td>$20</td>
//             <td>That was good.</td>
//         </tr>`,
//         // loop item
//         cardEnd = `   </div>
//                     </div>
//                 </div>`;
//     //
//     card += `<div class="col-lg-4">
//         <div class="card e-co-product">
//             <a href="">
//                 <img id="" src="" alt="" class="img-fluid">
//             </a>
//         </div><!--end card-->
//     </div><!--end col-->`;
//     card += cardEnd;
//     return card;
// }