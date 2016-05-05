Ext.define('onlineOperation.workorder.model.WorkOrderModel', {
    extend: 'Ext.data.Model',
    fields: [
      {
            name: 'workOrderid',
            type: 'string'
        }, {
            name: 'student',
            type: 'string'
        }, {
            name: 'teacher',
            type: 'string'
        }

    ]
});
