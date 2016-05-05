Ext.define('onlineOperation.trainApp.view.PublicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trainAppPublic',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],

    //搜索
    onSearchClick:function(){
      // var itemObj = (Ext.ComponentQuery.query('[itemId='+itemId+']')[0]);

      var searchTextfield = (Ext.ComponentQuery.query('[itemId=verifyTextfield]')[0]);
      values=searchTextfield.getValue();

      var grid = this.lookupReference('verifyGrid');
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
      console.log('加载简历信息');
      this.assignVal({'verify_teacherId':teacherManageDate.teacherId,'verify_name':teacherManageDate.name,'verify_nickName':teacherManageDate.nickName,
            'verify_boxFishId':teacherManageDate.boxFishId,'verify_gender':teacherManageDate.gender,'verify_birthday':teacherManageDate.birthday,
            'verify_school':teacherManageDate.school,'verify_telephone':teacherManageDate.telephone,'verify_address':teacherManageDate.address,
            'verify_email':teacherManageDate.email,'verify_qq':teacherManageDate.qq,'verify_weiXin':teacherManageDate.weiXin
            ,'verify_identificationValue':teacherManageDate.identificationValue,'verify_isStarTeacher':teacherManageDate.isStarTeacher
            ,'verify_accountStatus':teacherManageDate.accountStatus,'verify_testScore':teacherManageDate.testScore});

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

      //star被选中事件，改变grid加载的数据
    // onTeacherLevelChange:function(radio, newValue, oldValue, eOpts ){
    //   var isStarTeacher=(newValue?0:1);
    //   console.log(isStarTeacher);
    //   var grid = this.lookupReference('verifyGrid');
    //   var store=grid.getStore();
    //   store.reload({params:{isStarTeacher:isStarTeacher}});
    //
    // },

    //通过
    onIsPass:function(btn, e, eOpts){
      //判断具体操作
      var operation=btn.getItemId();
      var auditType=((operation=='spokenEnglishPass')?1:2);
      console.log(auditType);

      var grid = this.lookupReference('verifyGrid');
      //得到选中数据
      var records=grid.getSelectionModel().getSelection();
      if(records.length>0){
        var spokenEnglishScore = (Ext.ComponentQuery.query('[itemId=verify_SpokenScore]')[0]).getValue();
        //判断输入格式是否正确
        if(!(/^\d+$/.test(spokenEnglishScore))){
          Ext.toast('请输入正确格式', '口语分数', 't');
          return;
        }
        console.log(spokenEnglishScore);

        //封装teacherIds数组
        var teacherId;
        Ext.each(records,function(rec){
          teacherId=rec.data.teacherId;
        });
        console.log(teacherId);

      // 保存英语成绩--通过或不通过
      Ext.Ajax.request({
            method:'POST',
            url : URL_PREFIX+'/web/teacher/auditTeacher',
            params: JSON.stringify({teacherId: teacherId,auditType: auditType,spokenScore:spokenEnglishScore}),
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
  },

  //初始化宽高
  onInit:function(container, eOpts){
      var w        =((document.body.scrollWidth*0.093)*10);
      var h        =((document.body.scrollHeight*0.072)*10);

      var grid     = this.lookupReference('trainAppPublicGrid');
      var appBatch = this.lookupReference('appBatch');

      grid.setWidth(w);
      grid.setHeight(h);
      appBatch.setMargin( '0 0 0 '+(w-180)+'' );
  }

});
