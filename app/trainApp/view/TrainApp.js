Ext.define('onlineOperation.trainApp.view.TrainApp', {
      extend: 'Ext.tab.Panel',
      requires: [
          'Ext.layout.container.Card',
          'Ext.grid.*',
          'Ext.toolbar.Paging'
      ],
      xtype: 'TrainApp',
      items:[
        //公立|民办
          {
              title: '<font size=3pt>公立/民办</font>',
              xtype:'trainAppPublic'
          },
          //非公立|民办
          {
              title: '<font size=3pt>非公立/民办</font>',
              xtype: 'trainAppOther'
          }
      ]

  });
