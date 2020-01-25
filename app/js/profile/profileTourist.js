$(document).ready(function () {
    $('a[href="#finish"]').click(function () {
        $(".driverRegister").submit();
    });
    $('.select2MultipleDropDown').select2();
    $('.select2DropDown').select2();

    var rideLoadData = $('#rideLoadData').DataTable({
        "processing": true, // for show progress bar
        "serverSide": true, // for process server side
        "filter": true, // this is for disable filter (search box)
        "orderMulti": false, // for disable multiple column at once
        "ordering": false,
        "ajax": "objects.txt",

        "columns": [
            { "data": "country" },
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "fromDate" },
            { "data": "toDate" },
            { "data": "price" }
        ],
        "order": [[1, 'asc']]
    });

    // var routeTable = $('#testDataLoad').DataTable({
    //     "processing": true, // for show progress bar
    //     "serverSide": true, // for process server side
    //     "filter": true, // this is for disable filter (search box)
    //     "orderMulti": false, // for disable multiple column at once
    //     "ordering": false,
    //     "ajax": "objects.txt",

    //     "columns": [
    //         { "data": "country" },
    //         {
    //             "className": 'details-control',
    //             "orderable": false,
    //             "data": null,
    //             "defaultContent": ''
    //         },
    //         { "data": "fromDate" },
    //         { "data": "toDate" },
    //         { "data": "price" }
    //     ],
    //     "order": [[1, 'asc']]
    // });
    //#region row Details
    var detailRows = [];

    $('#rideLoadData tbody').on('click',
        'tr td.details-control',
        function () {

            var tr = $(this).closest('tr');
            var row = rideLoadData.row(tr);
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
            rideLoadData.rows().every(function () {
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
            rideLoadData.rows().every(function () {
                // If row has details expanded
                if (this.child.isShown()) {
                    // Collapse row details
                    this.child.hide();
                    $(this.node()).removeClass('shown');
                }
            });
        });

        rideLoadData.on('draw',
        function () {
            $.each(detailRows,
                function (i, id) {
                    $('#' + id + ' td.details-control').trigger('click');
                });
        });
    //#endregion

});
function format(row) {
    // variables
    var card = 
        `<tr style="width: 100%">
            <td>Baku</td>
            <td>1</td>
            <td>Ganja</td>
            <td>3</td>
            <td>Baku-Ganja</td>
            <td>12</td>
            <td>$20</td>
            <td>That was good.</td>
        </tr>`,
        // loop item
        cardEnd = `   </div>
                    </div>
                </div>`;
    //
    card += `<div class="col-lg-4">
        <div class="card e-co-product">
            <a href="">
                <img id="" src="" alt="" class="img-fluid">
            </a>
        </div><!--end card-->
    </div><!--end col-->`;
    card += cardEnd;
    return card;
}