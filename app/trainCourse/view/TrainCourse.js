Ext.define('onlineOperation.trainCourse.view.TrainCourse', {
      extend: 'Ext.tab.Panel',
      requires: [
          'Ext.layout.container.Card',
          'Ext.grid.*',
          'Ext.toolbar.Paging'
      ],
      xtype: 'TrainCourse',
      items:[
        //公立|民办
          {
              title: '<font size=3pt>公立/民办</font>',
              xtype:'trainCoursePublic'
          },
          //非公立|民办
          {
              title: '<font size=3pt>非公立/民办</font>',
              xtype: 'trainCourseOther'
          }
      ]

  });
