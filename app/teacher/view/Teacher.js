Ext.define('onlineOperation.teacher.view.Teacher', {
    extend: 'Ext.tab.Panel',
    xtype: 'Teacher',
    requires: [
        'Ext.layout.container.Card',
        'Ext.grid.*',
        'Ext.toolbar.Paging'
    ],
    items:[
      //公立|民办
        {
            title: '<font size=3pt>公立/民办</font>',
            xtype:'teacherPublic'
        },
        //非公立|民办
        {
            title: '<font size=3pt>非公立/民办</font>',
            xtype: 'teacherOther'
        }
    ]
});
