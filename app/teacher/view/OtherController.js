Ext.define('onlineOperation.teacher.view.OtherController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.teacherOther',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],


    //初始化宽高
    onInit:function(container, eOpts){

      var scrollWidth = document.body.scrollWidth;
      var scrollHeight= document.body.scrollHeight;

      var w=((scrollWidth*0.060)*10),
          h=((scrollHeight*0.075)*10),
          d_w=scrollWidth-(w+120);

        var me = this,
                  refs = me.getReferences(),
                  grid=refs.otherGrid,
                  otherDetail=refs.otherDetails,
                  otherForm=refs.otherForm,
                  abroadExperience=refs.abroadExperience,
                  teachExperience=refs.teachExperience,
                  otherExperience=refs.otherExperience;

        grid.setWidth(w);
        grid.setHeight(h);
        otherDetail.setHeight(h);
        otherForm.setWidth( document.body.scrollWidth-(w+90));
        abroadExperience.setWidth(d_w);
        teachExperience.setWidth(d_w);
        otherExperience.setWidth(d_w);

    }

});
