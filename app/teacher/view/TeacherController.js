Ext.define('onlineOperation.teacher.view.TeacherController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.teacher',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],

    //搜索
    onSearchClick:function(){
      // var itemObj = (Ext.ComponentQuery.query('[itemId='+itemId+']')[0]);

      var searchTextfield = (Ext.ComponentQuery.query('[itemId=teacherManageTextfield]')[0]);
      values=searchTextfield.getValue();

      var grid = this.lookupReference('teacherManageGrid');
      var store=grid.getStore();
      console.log(values);
      store.reload({params:{nickNames:values}});
    },

    //回车指向搜索事件
  onEnter:function(field,e){
       if (e.getKey()==Ext.EventObject.ENTER){
           console.log('回车绑定搜索事件');
           this.onSearchClick();
       }
   },

    // 点击grid显示form和课程权限grid数据
    onSelect:function(grid, record, index, eOpts ){
          //form赋值
      var teacherManageDate = record.data;
      this.assignVal({'teacherManage_teacherId':teacherManageDate.teacherId,'teacherManage_name':teacherManageDate.name,'teacherManage_nickName':teacherManageDate.nickName,
            'teacherManage_boxFishId':teacherManageDate.boxFishId,'teacherManage_gender':teacherManageDate.gender,'teacherManage_birthday':teacherManageDate.birthday,
            'teacherManage_school':teacherManageDate.school,'teacherManage_telephone':teacherManageDate.telephone,'teacherManage_address':teacherManageDate.address,
            'teacherManage_email':teacherManageDate.email,'teacherManage_qq':teacherManageDate.qq,'teacherManage_weiXin':teacherManageDate.weiXin
            ,'teacherManage_identificationValue':teacherManageDate.identificationValue,'teacherManage_isStarTeacher':teacherManageDate.isStarTeacher
            ,'teacherManage_accountStatus':teacherManageDate.accountStatus,'teacherManage_testScore':teacherManageDate.testScore
            ,'teacherManage_spokenScore':teacherManageDate.spokenScore});

    // //  grid加载数据
    //   var orderServiceGrid = this.lookupReference('orderServiceGrid');
    //   var datas=record.data.orderDetails;
    //   var store = Ext.create('Ext.data.Store', {});
    //   store.setData(datas);
    //   orderServiceGrid.setStore(store);
    // //日志记录
    //   var orderServiceLogGrid = this.lookupReference('orderServiceLogGrid');
    //   var logDatas=record.data.orderLogs;
    //   var logStore = Ext.create('Ext.data.Store', {});
    //   logStore.setData(logDatas);
    //   orderServiceLogGrid.setStore(logStore);
    },
    //公共赋值
    assignVal:function(arr)
      {
        for(var itemId in arr)
        {
          var itemObj = (Ext.ComponentQuery.query('[itemId='+itemId+']')[0]);
          if(itemObj){
            if(!arr[itemId]){arr[itemId]='';}
            var content = (itemObj.config.text+' '+arr[itemId]);
            itemObj.update(content);
          }
        }
      },


     //批量冻结或解冻账户
     onClick:function(btn, e, eOpts){
            //判断具体操作
            var operation=btn.getItemId();
            var isActive=((operation=='frozenAccount')?0:1);
            console.log(isActive);

            var grid = this.lookupReference('teacherManageGrid');
            //得到选中数据
						var records=grid.getSelectionModel().getSelection();
						if(records.length>0){
							//封装teacherIds数组
							var teacherId;
							Ext.each(records,function(rec){
								teacherId=rec.data.teacherId;
							});
              console.log(teacherId);
              // 冻结账户请求
              Ext.Ajax.request({
                    method:'POST',
                    url : URL_PREFIX+'/web/teacher/frozenTeacher',
                    params: JSON.stringify({teacherId: teacherId,isActive: isActive}),
                    headers:{'Content-Type': "application/json" },
                    success:function(response){
                        resObj=Ext.decode(response.responseText);
                        if(resObj.returnMsg=='success'){
                            grid.getStore().reload();
                            Ext.toast('操作成功', '', 't');
                        }else{
                                console.warn('请求失败');
                                return;
                        }
                    },
                    failure:function(response){
                      console.error('后台请求数据出错了！！！\n错误信息: \n'+response.responseText);
                    }
                  });
            						}else{
                          Ext.toast('请选择老师', '', 't');
            						}
                  }

});
