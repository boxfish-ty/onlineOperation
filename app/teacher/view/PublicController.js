Ext.define('onlineOperation.teacher.view.PublicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.teacherPublic',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],

    onAddFilter:function(){
        var teacherAddFilter = (Ext.ComponentQuery.query('[itemId=teacherAddFilter]')[0]);
        var addFilterBtn     = (Ext.ComponentQuery.query('[itemId=addFilterBtn]')[0]);
        var collapsing       = teacherAddFilter.micro;

        teacherAddFilter.animate({dynamic: true,to: {height:collapsing?100:50}});
        teacherAddFilter.micro=(collapsing?false:true);
        addFilterBtn.setText(collapsing?'-':'+');
    },

  //初始化宽高
  onInit:function(container, eOpts){

      var scrollWidth  = document.body.scrollWidth;
      var scrollHeight = document.body.scrollHeight;
      var w  = ((scrollWidth*0.060)*10);
      var h  = ((scrollHeight*0.075)*10);

      var grid            = this.lookupReference('verifyGrid');
      var teacherDetails  = this.lookupReference('teacherDetails');
      var teacherForm     = this.lookupReference('teacherForm');

      grid.setWidth(w);
      grid.setHeight(h);
      teacherForm.setWidth(scrollWidth-(w+70));
      teacherDetails.setWidth(scrollWidth-(w+80));
      teacherDetails.setHeight(h);
  }

});
