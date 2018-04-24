$(document).ready(() => {
	let vehicleTable = $('#vehicletable')
	.DataTable({
		"ajax": {
			"url": "/vehicles/api",
			"type": "GET",
			"dataSrc": "",
			"cache": true
		},
		"columns": [
			{"data": "id"},
			{"data": "vin"},
			{"data": "license_plate"},
			{"data": "brand"},
			{"data": "model"},
			{"data": "model_year"},
			{
				data: null,
				className: "center",
				defaultContent: '<button type="button" rel="tooltip" title="Mesaj Gönder" class="btn btn-primary btn-just-icon btn-xs">' +
				'<i class="fa fa-comment"></i></button>'
			},
			{
				data: null,
				className: "center",
				defaultContent: '<button type="button" rel="tooltip" title="Araç Detaylarını Gör" class="btn btn-info btn-just-icon btn-xs">' +
				'<i class="fa fa-info-circle"></i></button>'
			},
		],
		"columnDefs":
			[{
				className: "ID",
				"targets": [0],
				"visible": false,
				"searchable": false
			}]
	});

	$('#vehicletable tbody').on('click', 'td', function () {
		let vehicleID = (vehicleTable.row(this).data()["id"]);
		if (vehicleTable.cell(this).index().columnVisible === 6) {
			window.location.href = '/vehicles/details/' + vehicleID;
		}
		if (vehicleTable.cell(this).index().columnVisible === 5) {
			alert("Message to vehicles feature is under development. -AE")
		}
	});
});