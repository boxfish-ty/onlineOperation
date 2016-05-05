Ext.define('onlineOperation.pond.view.OtherViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.pondOther',
    requires: [
      'Ext.data.Store'
    ],
    stores:{
        verify:{
          // autoLoad:true,
          pageSize:10,
          proxy: {
                type: 'rest',
                // url : URL_PREFIX+'/web/teacher/teacherlist?auditType=0',
                reader: {
                    type: 'json',
                    rootProperty: 'data.content',
                    totalProperty: 'data.totalElements',
                    successProperty: 'returnMsg'
                },
                limitParam:'size',
                startParam:'page'
            },
            params:{
          page: 0,size:10
                }
        }
    }

});
