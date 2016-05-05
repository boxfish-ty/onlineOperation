Ext.define('onlineOperation.teacher.view.Public', {
      extend: 'Ext.container.Container',
      alias:'widget.teacherPublic',
      controller:'teacherPublic',
      viewModel: {type:'teacherPublic'},
      layout: {
          type: 'vbox',
          align: 'stretchmax'
      },
      width:200,
      height:800,
      items:[
        //搜索栏
        {
          xtype:'container',
          layout:{
            type: 'vbox',
            align: 'stretchmax',
            animate: true,
            animatePolicy: {
                y: true,
                height: true
            }
          },
          height:50,
          micro:true,
          itemId:'teacherAddFilter',
          reference: 'teacherAddFilter',
          items: [
            {
            xtype:'container',
            layout:'hbox',
            padding:'12 0 5 10',
            items:[
              {
                xtype: 'textfield',
                labelWidth:30,
                width:100,
                emptyText: '账户',
                itemId:'tNickName',
                allowBlank: true,
                listeners: {
                          specialkey:'onEnter'
                         }
              },{
                xtype: 'textfield',
                padding:'0 0 0 7',
                labelWidth:30,
                width:100,
                emptyText: '姓名',
                itemId:'tName',
                allowBlank: true,
                listeners: {
                          specialkey:'onEnter'
                         }
              },{
                xtype: 'textfield',
                padding:'0 0 0 7',
                labelWidth:30,
                width:100,
                emptyText: '电话',
                itemId:'tTelephone',
                allowBlank: true,
                //回车
                listeners: {
                          specialkey:'onEnter'
                         }
              },{
                xtype: 'textfield',
                padding:'0 0 0 7',
                labelWidth:30,
                width:100,
                emptyText: '学校',
                itemId:'tSchool',
                allowBlank: true,
                //回车
                listeners: {
                          specialkey:'onEnter'
                         }
              },
              {
                 xtype: 'combobox',
                 padding:'0 0 0 7',
                 labelWidth:30,
                 value:'all',
                 forceSelection: true,
                 width:100,
                 loadMask:false,
                 triggerAction:'all',
                 editable: false,
                 displayField: 'value',
                 valueField: 'key',
                 emptyText: '省/市',
                 allowBlank: true
             },
             {
                xtype: 'combobox',
                padding:'0 0 0 15',
                labelWidth:15,
                value:'all',
                forceSelection: true,
                width:100,
                loadMask:false,
                triggerAction:'all',
                editable: false,
                displayField: 'value',
                valueField: 'key',
                emptyText: '市',
                allowBlank: true
            },{
                xtype: 'combobox',
                padding:'0 0 0 7',
                labelWidth:15,
                value:'all',
                forceSelection: true,
                width:100,
                loadMask:false,
                triggerAction:'all',
                editable: false,
                displayField: 'value',
                valueField: 'key',
                emptyText: '县/区',
                allowBlank: true
            },{
               xtype: 'combobox',
               padding:'0 0 0 10',
               labelWidth:30,
               value:'all',
               forceSelection: true,
               width:100,
               loadMask:false,
               triggerAction:'all',
               editable: false,
               displayField: 'value',
               valueField: 'key',
               emptyText: '教龄',
               allowBlank: true
           },
           {
              xtype: 'combobox',
              padding:'0 0 0 7',
              labelWidth:15,
              value:'all',
              forceSelection: true,
              width:110,
              loadMask:false,
              triggerAction:'all',
              editable: false,
              displayField: 'value',
              valueField: 'key',
              emptyText: '教师级别',
              allowBlank: true
          },{
              xtype: 'combobox',
              padding:'0 0 0 7',
              labelWidth:15,
              value:'all',
              forceSelection: true,
              width:110,
              loadMask:false,
              triggerAction:'all',
              editable: false,
              displayField: 'value',
              valueField: 'key',
              emptyText: '课程类型',
              allowBlank: true
          },
               {
                xtype:'button',
                text:'+',
                width:30,
                margin:'0 0 0 10',
                itemId:'addFilterBtn',
                handler:'onAddFilter'
              },
              {
               xtype:'button',
               text:'筛选',
               margin:'0 0 0 10',
               handler:'onSearchClick'
             }
            ]
          },
            {
            xtype:'container',
            layout:'hbox',
            padding:'10 0 0 0 ',
            items:[
              {
                xtype: 'combobox',
                padding:'0 0 0 7',
                labelWidth:15,
                value:'all',
                forceSelection: true,
                width:160,
                loadMask:false,
                triggerAction:'all',
                editable: false,
                displayField: 'value',
                valueField: 'key',
                emptyText: '账号状态',
                allowBlank: true
            },{
                   xtype: 'datefield',
                   anchor: '100%',
                   padding:'0 0 0 7',
                   labelWidth:60,
                   width:160,
                   emptyText: '报名开始',
                   name: 'fromDate'
               },{
                     html: '—',
                     padding:'7 0 0 0'
                   },
               {
                   xtype: 'datefield',
                   anchor: '100%',
                   width:160,
                   emptyText: '报名结束',
                   name: 'toDate'
               }
            ]
          }
        ]
      },
        //grid+form
        {
          xtype:'container',
          layout:'hbox',
          listeners:{
            beforerender:'onInit'
          },
          // flex: 5,
          items:[
            {
              xtype:'container',
              layout:'vbox',
              items:[
                //grid
                {
                    xtype: 'gridpanel',
                    reference:'verifyGrid',
                    style: {
                      border:'1px solid #D5D5D5'
                    },
                    margin: 5,
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        stripeRows: true
                    },
                    bind: {store: '{verify}'},
                    selModel :'checkboxmodel',
                    columns: [
                        {
                            text: '账号',
                            dataIndex: 'nickName',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        }
                        ,{
                            text: '姓名',
                            dataIndex: 'name',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        } ,{
                            text: '电话',
                            dataIndex: 'telephone',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        },  {
                            text: '学校',
                            dataIndex: 'gender',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        }, {
                            text: '教龄',
                            dataIndex: 'school',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        }, {
                            text: '省',
                            dataIndex: 'school',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        }, {
                            text: '市',
                            dataIndex: 'school',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        }, {
                            text: '区',
                            dataIndex: 'school',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        }, {
                            text: '报名日期',
                            dataIndex: 'isActive',
                            sortable: true,
                            width: 100,
                            align : 'center'
                        }
                    ],
                    tbar: [
                            {
                                text: '冻结',
                                iconCls: 'x-fa fa-lock',
                                handler: 'onAddClick'
                            },
                            {
                                text: '解冻',
                                iconCls: 'x-fa fa-unlock',
                                handler: 'onAddClick'
                            },
                            {
                                xtype: 'tbspacer',
                                flex: 1
                            },
                            {
                                xtype: 'combobox',
                                fieldLabel:'指定教师级别',
                                padding:'0 0 0 25',
                                labelWidth:100,
                                value:'all',
                                forceSelection: true,
                                width:260,
                                loadMask:false,
                                triggerAction:'all',
                                editable: false,
                                displayField: 'value',
                                valueField: 'key',
                                emptyText: '认证教师',
                                allowBlank: true
                            },
                            {
                                text: '确定',
                                iconCls: 'x-fa fa-map-pin',
                                handler: 'onAddClick'
                            }
                    ],
                    // 分页栏
                    dockedItems: [
                    {
                        xtype: 'pagingtoolbar',
                        emptyMsg: '没有数据',
                        displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
                        beforePageText: '第',
                        afterPageText: '页/共{0}页',
                        pageSize: 10,
                        dock: 'bottom',
                        displayInfo: true,
                        bind: {store: '{verify}'}
                      }
                    ],
                    listeners:{
                        // select:'onSelect'
                    }
                }
              ]
            },

              //详细
            {
              xtype:'container',
              reference:'teacherDetails',
              style: {
                border:'1px solid #D5D5D5'
              },
              margin:'5 5 5 0',
              flex: 1,
              layout:'vbox',

              items:[
                {
                  xtype:'form',
                  itemId:'teacherForm',
                  reference:'teacherForm',
                  margin:5,
                  padding:'10 5 0 20',
                  style: {border:'0px solid #D5D5D5','background-color':'#ffffff'},
                  height:366,
                  width:200,
                  layout:{
                    type:'table',
                    columns:2
                  },
                  defaults:{
                    padding:5,
                    minWidth:200,
                    height:40
                  },
                  items: [{
                            html: '<font color=gray size=3pt>教师资格证</font>',
                            colspan:2
                          },
                          {
                            xtype:'image',
                            minWdith:200
                          }
                    ]
                }
               ]
              }
            ]
        }
      ]

  });
