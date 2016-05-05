Ext.define('onlineOperation.service.view.WorkOrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.workOrder',
    require:[
      'Ext.grid.*','Ext.data.Model'
    ],

    //初始化加载
    initService:function(){
     this.disableWorkOrderInfo();
    },

    //有效工单详情信息
    enableWorkOrderInfo:function(){
      (Ext.ComponentQuery.query('[itemId=workOrderForm]')[0]).show();
    },

    //失效工单详情信息
    disableWorkOrderInfo:function(){
      (Ext.ComponentQuery.query('[itemId=workOrderForm]')[0]).hide(10);
    },

    //点击menu节点，加载不同grid数据
    onSelectionchange:function( tree, node,eOpts){
        this.disableWorkOrderInfo();
        this.initGridInfo(node.get("nodeid"));

    },

    //加载grid信息
    initGridInfo:function(status){
      var workOrderGrid = (Ext.ComponentQuery.query('[itemId=workOrderGrid]')[0]);
      var radioWeek = (Ext.ComponentQuery.query('[itemId=radioWeek]')[0]);
      var gridstroe     = workOrderGrid.getStore();
      var proxy = gridstroe.getProxy();
      proxy.setUrl(URL_WORKORDER_PREFIX+WORK_ORDER_PORT+'/workorder/page/88/status/'+status);
      gridstroe.reload({params: {page: 0,size:20,dateFlag:(radioWeek.getValue()?'thisWeek':'today')}});

    },



    //week被选中事件，改变grid家族的数据
    onTimeChange:function(radio, newValue, oldValue, eOpts ){
      this.disableWorkOrderInfo();
      var workOrderTreeList = (Ext.ComponentQuery.query('[itemId=workOrderTreeList]')[0]);
      var itemId=workOrderTreeList.getSelection().get('nodeid');
      this.initGridInfo(itemId);
      this.loadStatusTree(newValue?'thisWeek':'today',this.setStatusCounts);

    },

    //处理today和week切换时数据加载控制
    setStatusCounts:function(arr){
      var workOrderTreeList = (Ext.ComponentQuery.query('[itemId=workOrderTreeList]')[0]);
      for (var i=0;i<arr.length;i++) {
      workOrderTreeList.getStore().getNodeById(i).set('text',arr[i].content);
      }
    },

    // 处理iconCls赋值
    getStatusCssVal:function(cssKey){
        var cssObj = {'exception':' fa-exclamation-circle','normal':' fa-check-circle','all':' fa-inbox'};
        for (var key in cssObj) {
            if(key==cssKey){
              return cssObj[key];
            }
        }
    },
    //选定treelist节点
    initTreeListInfo:function(){
      var me = this;
      this.loadStatusTree('today',function(arr){
        var workOrderTreeList = (Ext.ComponentQuery.query('[itemId=workOrderTreeList]')[0]);
        var data   = Array();
        for (var i=0;i<arr.length;i++) {
          data.push({'text':arr[i].content,'id':i,'nodeid':arr[i].status,'leaf':true,'visible':true,'iconCls':('x-fa'+me.getStatusCssVal(arr[i].status))});
        }
        var treeStore = Ext.create('Ext.data.TreeStore',{data:data});
        workOrderTreeList.setStore(treeStore);
        var node = workOrderTreeList.getStore().getData().items[0];
        workOrderTreeList.setSelection(node);
      });
      this.disableWorkOrderInfo();
    },

    //公共加载ListTree方法
    loadStatusTree:function(time,func){
      Ext.Ajax.request({
        method:'GET',
        url:URL_WORKORDER_PREFIX+WORK_ORDER_PORT+'/workorder/listStatus/88/'+time,
        success:function(response){
            resObj=Ext.decode(response.responseText);
            if(resObj.returnMsg=='success'){
                      var datas  =Ext.decode(resObj.data);
                      var statusArr = Array();
                      for(var i=0;i<datas.length;i++){
                        var status = datas[i].status;
                          switch (status) {
                            case 'exception':
                              statusArr.push({status:status,'id':i,content:('紧急'+'<font color=red>（'+datas[i].amount+'）</font>')});
                              break;
                            case 'normal':
                            statusArr.push({status:status,'id':i,content:('正常'+'（'+datas[i].amount+'）')});
                              break;
                            case 'all':
                            statusArr.push({status:status,'id':i,content:('所有'+'（'+datas[i].amount+'）')});
                              break;
                            default:
                            }
                          }
                      func(statusArr);
            }else{
                    console.warn('请求失败');
                    return;
            }
        },
        failure:function(response){
          console.error('后台请求数据出错了！！！\n错误信息: \n'+response.responseText);
        }
      });
    },

    // 点击表格行记录
    onGridRowClick:function(gridObj, record, tr, rowIndex, e, eOpts){
      this.enableWorkOrderInfo();
    },

    // 点击grid更新form数据
    onSelect:function(grid, record, index, eOpts ){
        this.enableWorkOrderInfo();
        var me=this;
        var workOrderform = this.lookupReference('workOrderForm');
        //得到选中数据
        var workOrderData      = record.data;
        var studentId =workOrderData.studentId;
        var teacherId =workOrderData.teacherId;
        me.initStudentInfoAjax(studentId,workOrderData);
        me.initTeacherInfoAjax(teacherId,workOrderData);
    },

    //form加载学生信息
    initStudentInfoAjax:function(studentId,workOrderData){
      var me=this;
      Ext.Ajax.request({
        method:'GET',
        url: URL_PREFIX+STUDENT_PORT+'/student/'+studentId,
        success:function(response){
          resObj=Ext.decode(response.responseText);
          if(resObj.returnMsg=='success'){
                  var studentData  =resObj.data;
                  me.assignVal({'w_studentName':studentData.name,'w_studentBirthday':studentData.birthday,'w_studentSchool':studentData.school
                  ,'w_studentPhone':studentData.telephone,'w_studentGender':studentData.gender,'w_status':'<font color=red>'+workOrderData.statusName+'</font>',
                  'w_courseName':workOrderData.courseName,'w_startTime':workOrderData.startTime,'w_teacherName1':workOrderData.teacherName});

          }else{
                  console.warn('请求失败');
                  return;
          }
        },
        failure:function(response){
          console.error('请求数据出错了！！！\n错误信息: \n'+response.responseText);
        }
      });
    },

    //form加载老师信息
    initTeacherInfoAjax:function(teacherId,workOrderData){
      var me=this;
      Ext.Ajax.request({
        method:'GET',
        url: URL_PREFIX+TEACHER_PORT+'/teacher/'+teacherId,
        success:function(response){
          resObj=Ext.decode(response.responseText);
          if(resObj.returnMsg=='success'){
                  var teacherData  =resObj.data;
                  me.assignVal({'w_teacherName':teacherData.name,'w_teacherBirthday':teacherData.birthday,'w_teacherSchool':teacherData.school
                                ,'w_teacherPhone':teacherData.telephone1,'w_teacherGender':teacherData.gender});

          }else{
                  console.warn('请求失败');
                  return;
          }
        },
        failure:function(response){
          console.error('请求数据出错了！！！\n错误信息: \n'+response.responseText);
        }
      });
    },

    //公共赋值
    assignVal:function(arr)
    {
      for(var itemId in arr)
      {
        var itemObj = (Ext.ComponentQuery.query('[itemId='+itemId+']')[0]);
        if(itemObj &&　arr[itemId]){
          var content = (itemObj.config.text+' '+arr[itemId]);
          itemObj.update(content);
        }
      }
    },

    //更换老师
    onChoiceTeacher:function()
    {
      me = this;
      var grid = (Ext.ComponentQuery.query('[itemId=workOrderGrid]')[0]);
      var select  = grid.getSelectionModel().getSelection()[0];

      var teacher = Ext.create('onlinePlan.service.view.Teacher');
      var teacherGridpanel=teacher.queryById('teacherGridpanel');
      teacher.items.items[0].workorder_id=select.data.id;
      teacher.items.items[0].isWorkOrderCenter=true;
      new Ext.Window({
                  title: '工单:'+select.data.id+'  上课时间:'+select.data.startTime,
                  height:400,
                  width: 800,
                  modal:true,
                  itemId:'choiceTeacherWin',
                  items:[teacher]
              }).show();
    },

    //重新推荐课
    onGenerateChineseTeacherRecommendCourse:function(){
      var grid    = (Ext.ComponentQuery.query('[itemId=workOrderGrid]')[0]);
      var select  = grid.getSelectionModel().getSelection()[0];
      var w_courseName = (Ext.ComponentQuery.query('[itemId=w_courseName]')[0]);

      Ext.Ajax.request({
         url: URL_PREFIX+WORK_ORDER_PORT+'/workorder/'+select.data.id+'/courses',
         method:'PUT',
         success: function(response, opts) {
           var obj = eval ("(" + response.responseText + ")");
           if(obj.returnMsg=='success')
           {
              Ext.toast('推荐成功!', '', 't');
              select.set('courseName',obj.data[0].name);
              var content = (w_courseName.config.text+' '+obj.data[0].name);
              w_courseName.update(content);
           }else{
              Ext.toast('推荐失败!', '', 't');
           }
        }
      });
    }

});
