Ext.define('onlineOperation.verify.view.Verify', {
      extend: 'Ext.tab.Panel',
      requires: [
          'Ext.layout.container.Card',
          'Ext.grid.*',
          'Ext.toolbar.Paging'
      ],
      xtype: 'Verify',
      items:[
        //公立|民办
          {
              title: '<font size=3pt>公立/民办</font>',
              xtype:'verifyPublic'
          },
          //非公立|民办
          {
              title: '<font size=3pt>非公立/民办</font>',
              xtype: 'verifyOther'
          }
      ]

  });
