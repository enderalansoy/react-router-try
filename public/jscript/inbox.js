$(document).ready(() => {
  let $modal = $('.modal');
  $modal.appendTo("body");

  let inboxTable = $('#inboxTable')
	.DataTable({
    responsive: true,
    "ajax": {
      "url": "/messages/inbox?recId=5996d7e424d576880b1ea417",
      "type": "GET",
      "dataSrc": "",
      "cache": true
    },
    "columns": [{
        "data": "id",
        "render": (data, type, row) => {
          return "#modal" + data;
        }
      },
      {
        "data": "createdAt",
        "width": "20%",
        "render": (data, type, row) => {
          moment.locale('tr');
          return moment(data).format('lll');
        }
      },
      {
        "data": "sender",
        "width": "30%",
        "render": (data, type, row) => {
          return data.name + ' ' + data.surname;
        }
      },
      {
        "data": "title"
      },
      {
        "width": "5px",
        data: null,
        className: "center",
        defaultContent: '<button type="button" rel="tooltip" class="btn btn-danger btn-just-icon btn-xs">' +
          '<i class="fa fa-trash"></i></button>'
      }
    ],
    "columnDefs": [{
      className: "ID",
      "targets": [0],
      "visible": false,
      "searchable": false
    }]
  });

  $('#inboxTable tbody').on('click', 'td', function() {
    let inboxId = (inboxTable.row(this).data()["id"]);
    let row = $(this).closest('tr');
    let data = $('#inboxTable').dataTable().fnGetData(row);
    if (inboxTable.cell(this).index().columnVisible === 3) {
      markAsDeleted(inboxId);
    } else {
      let modalName = "#modal" + data.id;
      $(modalName).modal('show');
    }
  });

  let sentTable = $('#sentTable')
	.DataTable({
    responsive: true,
    "ajax": {
      "url": "/messages/inboxSent?senderId=5996d7e424d576880b1ea417",
      "type": "GET",
      "dataSrc": "",
      "cache": true
    },
    "columns": [{
        "data": "id",
        "render": (data, type, row) => {
          return "#modal" + data;
        }
      },
      {
        "data": "createdAt",
        "width": "20%",
        "render": (data, type, row) => {
          moment.locale('tr');
          return moment(data).format('lll');
        }
      },
      {
        "data": "sender",
        "width": "30%",
        "render": (data, type, row) => {
          return data.name + ' ' + data.surname;
        }
      },
      {
        "data": "title"
      },
      {
        "width": "5px",
        data: null,
        className: "center",
        defaultContent: '<button type="button" rel="tooltip" title="Delete" class="btn btn-danger btn-just-icon btn-xs">' +
          '<i class="fa fa-trash"></i></button>'
      }
    ],
    "columnDefs": [{
      className: "ID",
      "targets": [0],
      "visible": false,
      "searchable": false
    }]
  });

  $('#sentTable tbody').on('click', 'td', function() {
    let sentId = (sentTable.row(this).data()["id"]);
    let row = $(this).closest('tr');
    let data = $('#sentTable').dataTable().fnGetData(row);
    if (sentTable.cell(this).index().columnVisible === 3) {
      markAsDeleted(sentId);
    } else {
      let modalName = "#modal" + data.id;
      $(modalName).modal('show');
    }
  });

  let deletedMessagesTable = $('#deletedMessagesTable')
    .DataTable({
      responsive: true,
      "ajax": {
        "url": "/messages/inboxDeleted?recId=5996d7e424d576880b1ea417",
        "type": "GET",
        "dataSrc": "",
        "cache": true
      },
      "columns": [{
          "data": "id",
          "render": (data, type, row) => {
            return "#modal" + data;
          }
        },
        {
          "data": "createdAt",
          "width": "20%",
          "render": (data, type, row) => {
            moment.locale('tr');
            return moment(data).format('lll');
          }
        },
        {
          "data": "sender",
          "width": "30%",
          "render": (data, type, row) => {
            return data.name + ' ' + data.surname;
          }
        },
        {
          "data": "title"
        },
        {
          "width": "5px",
          data: null,
          className: "center",
          defaultContent: '<button type="button" rel="tooltip" title="Delete" class="btn btn-danger btn-just-icon btn-xs">' +
            '<i class="fa fa-trash"></i></button>'
        }
      ],
      "columnDefs": [{
        className: "ID",
        "targets": [0],
        "visible": false,
        "searchable": false
      }]
    });

  $('#deletedMessagesTable tbody').on('click', 'td', function() {
    let deletedMsgId = (deletedMessagesTable.row(this).data()["id"]);
    let row = $(this).closest('tr');
    let data = $('#deletedMessagesTable').dataTable().fnGetData(row);
    if (deletedMessagesTable.cell(this).index().columnVisible === 3) {
      markAsDeleted(deletedMsgId);
    } else {
      let modalName = "#modal" + data.id;
      $(modalName).modal('show');
    }
  });

  function markAsRead(id) {
    $.ajax({
      type: 'GET',
      url: '/messages/read',
      data: {
        'id': id,
      },
      success: () => {}
    });
  }

  function markAsDeleted(id) {
    $.ajax({
      type: 'GET',
      url: '/messages/trash',
      data: {
        'id': id,
      },
      success: () => {
        alert('Message deleted!');
        inboxTable.ajax.reload();
        sentTable.ajax.reload();
        deletedMessagesTable.ajax.reload();
      }
    });
  }
});
