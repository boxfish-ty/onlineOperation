Ext.define('onlineOperation.workorder.view.WorkOrder', {
    extend: 'Ext.container.Container',
    xtype: 'WorkOrder',
    requires: [
        'Ext.grid.*',
        'Ext.toolbar.Paging',
        'Ext.layout.container.HBox',
        'Ext.menu.Menu',
        'Ext.list.Tree',
        'Ext.form.*'

    ],
    controller:'workOrder',
    viewModel: {type: 'workOrder'},

    layout: {
        type: 'hbox',
        align: 'stretchmax',
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },
    reference: 'workOrder',
    flex: 1,
    margin: 5,
    height:900,
    listeners: {
        beforerender: 'initTreeListInfo'
    },
    items: [
      //左侧treelist
      {
          xtype: 'treelist',
          reference: 'workOrderTreeList',
          itemId: 'workOrderTreeList',
          border:true,
          style: {
              background: '#FFFFFF',
              'border': '1px solid #D5D5D5',
              margin:'5px'
          },
          width: 150,
          expanderFirst: false,
          expanderOnly: false,

          listeners: {
              selectionchange: 'onSelectionchange'
          }
      },
      // grid
      {
        flex: 1.4,
        xtype: 'gridpanel',
        reference:'workOrderGrid',
        itemId:'workOrderGrid',
        style: {
          border:'1px solid #D5D5D5'
        },
        height: 800,
        margin: 5,
        bind: {
            store: '{workOrderGridStore}'
        },
        viewConfig: {
            preserveScrollOnRefresh: true,
            stripeRows: true
        },
        columns: [
            {
                text: '鱼卡号',
                dataIndex: 'orderId',
                sortable: true,
                width: 160,
                align : 'center'
            }
            ,{
                text: '学员',
                dataIndex: 'studentName',
                sortable: true,
                width: 160,
                align : 'center'
            } , {
                text: '老师',
                dataIndex: 'teacherName',
                sortable: true,
                width: 160,
                align : 'center'
            }, {
                text: '课程名',
                dataIndex: 'courseName',
                sortable: true,
                width: 160,
                align : 'center'
            }, {
                text: '状态',
                dataIndex: 'statusName',
                sortable: true,
                width: 200,
                align : 'center'
            }, {
                text: '上课时间',
                dataIndex: 'startTime',
                sortable: true,
                width: 200,
                align : 'center'
            }
        ],
      // 工具栏
      tbar: [
        {
            xtype      : 'fieldcontainer',
            fieldLabel : '',
            defaultType: 'radiofield',
            defaults: {
                flex: 1,margin:'0 10',width :100
            },
            contentEl:'',
            layout: 'checkboxgroup',
            items: [
                {
                    boxLabel  : '当天',
                    name      : 'workOrderList',
                    inputValue: 'today',
                    checked:true
                }, {
                    boxLabel  : '一周以内',
                    name      : 'workOrderList',
                    inputValue: 'week',
                    itemId:'radioWeek',
                    listeners:{
                      change:'onTimeChange'
                      }
                    }
            ]
        }
      ],
        // 分页栏
        dockedItems: [
        {
            xtype: 'pagingtoolbar',
            reference:'pagingToolBar',
            emptyMsg: '没有数据',
            displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
            beforePageText: '第',
            afterPageText: '页/共{0}页',
            pageSize: 100,
            bind:{
                store: '{workOrderGridStore}'
            },
            dock: 'bottom',
            displayInfo: true
            }],
            listeners:{
              select:'onSelect',
              rowclick:'onGridRowClick'
        }
      },
//form
      {
        xtype:'form',
        flex: 0.6,
        margin: 5,
        itemId:'workOrderForm',
        reference:'workOrderForm',
        padding:'5 0 0 20',
        style: {border:'1px solid #D5D5D5','background-color':'#ffffff'},
        height:500,
        layout:{
          type:'table',
          columns:2
        },
        defaults:{padding:5,minWidth:150,height:37},
        Width:330,
        items: [{
                html: '<font color=\'gray\' size=3pt>成员信息</font>',
                colspan:2
            },{
                itemId:'w_studentName',
                text: '学员:',
                html: '学员:'
            },{
                itemId:'w_studentBirthday',
                text: '生日:',
                html: '生日:'
            },{
                itemId:'w_studentSchool',
                text: '学校:',
                html: '学校:'
            },{
                itemId:'w_studentPhone',
                text: '电话:',
                html: '电话:'
            },{
                itemId:'w_studentGender',
                text: '性别:',
                html: '性别:'
            },{
                html: '',
                colspan:2
            },{
                html: '',
                colspan:2
            },{
                itemId:'w_teacherName',
                text: '老师:',
                html: '老师:'
            },{
                itemId:'w_teacherBirthday',
                text: '生日:',
                html: '生日:'
            },{
                itemId:'w_teacherSchool',
                text: '学校:',
                html: '学校:'
            },{
                itemId:'w_teacherPhone',
                text: '电话:',
                html: '电话:'
            },{
                itemId:'w_teacherGender',
                text: '性别:',
                html: '性别:'
            },{
                html: '',
                colspan:2
            },{
                html: '',
                colspan:2
            },{
                html: '<font color=\'gray\' size=3pt>课程状态</font>',
                colspan:2
            },{
                width:300,
                itemId:'w_status',
                text: '',
                html: '',
                colspan:2
            },{
                html: '',
                colspan:2
            },{
                html: '<font color=\'gray\' size=3pt>课程信息</font>',
                colspan:2
            },
            {
                xtype:'textfield',
                itemId:'teacherId',
                hidden:true
            },
            {
                width:260,
                itemId:'w_courseName',
                text: '课名:',
                html: '课名:'
            },{
                height:30,
                xtype:'button',
                text: '重新推荐课',
                handler:'onGenerateChineseTeacherRecommendCourse'
            }
            ,{
                width:260,
                itemId:'w_startTime',
                text: '上课时间:',
                html: '上课时间:',
                colspan:2
            }
            ,{
                itemId:'w_teacherName1',
                text: '老师:',
                html: '老师:'
            },{
                height:30,
                xtype:'button',
                itemId:'button3',
                text: '更换老师',
                handler:'onChoiceTeacher'
            }
          ]
        }

    ]
});
