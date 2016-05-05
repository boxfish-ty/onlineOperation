Ext.define('onlineOperation.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [{
            text: '系统管理',
            iconCls: 'x-fa fa-home',
            expanded:true,
            children:[
              {
                text: '角色管理',
                iconCls: 'x-fa fa-filter',
                viewType: 'Role',
                leaf: true
              },
              {
                text: '用户管理',
                iconCls: 'x-fa fa-filter',
                viewType: 'User',
                leaf: true
              }
            ]
        },{
            text: '教学与服务中心',
            iconCls: 'x-fa fa-home',
            expanded:true,
            children:[
              {
                  text: '订单中心',
                  iconCls: 'x-fa fa-th-list',
                  viewType: 'OrderCenter',
                  leaf: true
              },{
                  text: '产品服务',
                  iconCls: 'x-fa fa-home',
                  viewType: 'Service',
                  leaf: true
              },{
                  text: '课程查看',
                  iconCls: 'x-fa fa-th-list',
                  viewType: 'Course',
                  leaf: true
              },{
                  text: '鱼卡中心',
                  iconCls: 'x-fa fa-th-list',
                  viewType: 'WorkOrder',
                  leaf: true
                }
            ]
        },{
            text: '用户管理',
            iconCls: 'x-fa fa-home',
            expanded:true,
            children:[
              {
                  text: '学生管理',
                  iconCls: 'x-fa fa-th-list',
                  viewType: 'Student',
                  leaf: true
              },{
                  text: '教师管理',
                  iconCls: 'x-fa fa-user',
                  viewType: 'Teacher',
                  leaf: true
              }
            ]
        },{
            text: '中教报名',
            iconCls: 'x-fa fa-home',
            expanded:true,
            children:[
              {
                  text: '审核老师',
                  iconCls: 'x-fa fa-filter',
                  viewType: 'Verify',
                  leaf: true
              },{
                  text: '培训教师',
                  iconCls: 'x-fa fa-home',
                  expanded:true,
                  children:[
                    {
                      text: '了解APP',
                      iconCls: 'x-fa fa-filter',
                      viewType: 'TrainApp',
                      leaf: true
                    },
                    {
                      text: '课程培训',
                      iconCls: 'x-fa fa-filter',
                      viewType: 'TrainCourse',
                      leaf: true
                    }
                  ]
              },{
                  text: '课程权限',
                  iconCls: 'x-fa fa-key',
                  viewType: 'CoursePermission',
                  leaf: true
              },{
                  text: '池子',
                  iconCls: 'x-fa fa-columns',
                  viewType: 'Pond',
                  leaf: true
              }
            ]
        }

      ]
    }

});
