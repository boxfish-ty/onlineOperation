Ext.define('onlineOperation.pond.view.PublicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.pondPublic',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],

    //搜索栏 拉伸
    onAddFilter:function(){
        var pondAddFilter  = (Ext.ComponentQuery.query('[itemId=pondAddFilter]')[0]);
        var addFilterBtn   = (Ext.ComponentQuery.query('[itemId=addFilterBtn]')[0]);
        var collapsing     = pondAddFilter.micro;

        pondAddFilter.animate({dynamic: true,to: {height:collapsing?100:50}});
        pondAddFilter.micro=(collapsing?false:true);
        addFilterBtn.setText(collapsing?'-':'+');
    },

  //初始化宽高
  onInit:function(container, eOpts){
      var w               =((document.body.scrollWidth*0.060)*10);
      var h               =((document.body.scrollHeight*0.072)*10);

      var grid            = this.lookupReference('pondGrid');
      var pondDetails     = this.lookupReference('pondDetails');
      var verifyForm      = this.lookupReference('pondForm');
      var catchBtn        = this.lookupReference('catchBtn');
      var pond_reasonArea = this.lookupReference('pond_reasonArea');

      grid.setWidth(w);
      grid.setHeight(h);
      pondDetails.setWidth((document.body.scrollWidth-w-80));
      pondDetails.setHeight((h));
      verifyForm.setWidth( document.body.scrollWidth-w-90);
      catchBtn.setMargin( '0 0 0 '+(w-100));
      pond_reasonArea.setWidth(document.body.scrollWidth-w-90);
  }

});
