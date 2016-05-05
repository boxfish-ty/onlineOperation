Ext.define('onlineOperation.teacher.view.TeacherViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.teacher',
    requires: [
      'Ext.data.Store'
    ],
    stores:{
        teacher:{
          autoLoad:true,
          pageSize:10,
          proxy: {
                type: 'rest',
                url : URL_PREFIX+'/web/teacher/teacherlist?auditType=1',
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
