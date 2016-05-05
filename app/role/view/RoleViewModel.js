Ext.define('onlineOperation.role.view.RoleViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.role',

    requires: [
      'Ext.data.Store'
    ],

    stores:{
      //主服务信息
      role:{
        // autoLoad: true,
        pageSize:20,
        proxy:{
          type:'rest',
          // url:URL_PREFIX+ORDER_PORT+'/order/page',
          reader:{
            type:'json',
            rootProperty:'data.content',
            totalProperty:'data.totalElements',
            successProperty:'returnMsg'
          },
            limitParam:'size',
            startParam:'page'
        },
        params:{
          page: 0,size:20
        }
      }
    }

});
