Ext.define('onlineOperation.coursePermission.view.CoursePermission', {
      extend: 'Ext.tab.Panel',
      requires: [
          'Ext.layout.container.Card',
          'Ext.grid.*',
          'Ext.toolbar.Paging'
      ],
      xtype: 'CoursePermission',
      items:[
        //公立|民办
          {
              title: '<font size=3pt>公立/民办</font>',
              xtype:'coursePermissionPublic'
          },
          //非公立|民办
          {
              title: '<font size=3pt>非公立/民办</font>',
              xtype: 'coursePermissionOther'
          }
      ]

  });
