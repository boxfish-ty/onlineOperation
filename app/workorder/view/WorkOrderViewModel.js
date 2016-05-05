Ext.define('onlineOperation.workorder.view.WorkOrderViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.workOrder',

    requires: [
      'Ext.data.Store'
    ],
    stores:{
      workOrderGridStore: {
              model: 'onlineOperation.workorder.model.WorkOrderModel',
              autoLoad:false,
              pageSize:100,
              proxy: {
                  type: 'rest',
                  reader: {
                      type: 'json',
                      rootProperty: 'data.content',
                      totalProperty: 'totalCount',
                      successProperty: 'returnMsg'
                  },
                  limitParam:'size',
                  startParam:'page'
              }
          }
    }

});
