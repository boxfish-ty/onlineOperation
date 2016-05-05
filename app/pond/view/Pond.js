Ext.define('onlineOperation.pond.view.Pond', {
      extend: 'Ext.tab.Panel',
      requires: [
          'Ext.layout.container.Card',
          'Ext.grid.*',
          'Ext.toolbar.Paging'
      ],
      xtype: 'Pond',
      items:[
        //公立|民办
          {
              title: '<font size=3pt>公立/民办</font>',
              xtype:'pondPublic'
          },
          //非公立|民办
          {
              title: '<font size=3pt>非公立/民办</font>',
              xtype: 'pondOther'
          }
      ]

  });
