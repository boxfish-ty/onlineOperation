Ext.define('onlineOperation.coursePermission.view.Other', {
      extend: 'Ext.container.Container',
      alias:'widget.coursePermissionOther',
      controller:'coursePermissionOther',
      viewModel: {type:'coursePermissionOther'},
      layout: {
          type: 'vbox',
          align: 'stretchmax',
          animate: true
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
            itemId:'coursePermissAddFilter',
            reference: 'coursePermissAddFilter',
            items:[ {
              xtype:'container',
              padding:'12 0 5 10',
              layout:'hbox',
              items:[{
                xtype: 'textfield',
                labelWidth:30,
                width:100,
                emptyText: '账户',
                // itemId:'verifyTextfieldNickName',
                allowBlank: true,
                //回车
                listeners: {
                          specialkey:'onEnter'
                         }
              },{
                xtype: 'textfield',
                padding:'0 0 0 10',
                labelWidth:30,
                width:100,
                emptyText: '姓名',
                // itemId:'verifyTextfieldName',
                allowBlank: true,
                listeners: {
                          specialkey:'onEnter'
                         }
              },
              {
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
                padding:'0 0 0 10',
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
            },
            {
                   xtype: 'textfield',
                   anchor: '100%',
                   padding:'0 0 0 10',
                   width:75,
                   emptyText: '口语成绩'
               },{
                           html: '—',
                           padding:'7 0 0 0'
                   },
               {
                   xtype: 'textfield',
                   anchor: '100%',
                   width:75,
                   emptyText: '口语成绩'
               },{
                  xtype: 'textfield',
                  anchor: '100%',
                  padding:'0 0 0 10',
                  width:75,
                  emptyText: '测试成绩'
              },{
                          html: '—',
                          padding:'7 0 0 0'
                  },
              {
                  xtype: 'textfield',
                  anchor: '100%',
                  width:75,
                  emptyText: '测试成绩'
              },{
                 xtype: 'combobox',
                 padding:'0 0 0 10',
                 labelWidth:30,
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
             },{
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
               margin:'0 0 0 84',
               handler:'onSearchClick'
             }]
              },
             {
               xtype:'container',
               padding:'10 0 0 0',
               layout:'hbox',
               items:[
                 {
                   xtype: 'textfield',
                   padding:'0 0 0 10',
                   labelWidth:30,
                   width:100,
                   emptyText: '学校',
                   // itemId:'verifyTextfieldName',
                   allowBlank: true,
                   listeners: {
                             specialkey:'onEnter'
                            }
                 },
                 {
                     xtype: 'combobox',
                     padding:'0 0 0 10',
                     labelWidth:15,
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
                        xtype: 'datefield',
                        anchor: '100%',
                        padding:'0 0 0 10',
                        labelWidth:60,
                        width:125,
                        emptyText: '报名开始',
                        name: 'from_date',
                        maxValue: new Date()
                    },{
                                html: '—',
                                padding:'7 0 0 0'
                        },
                    {
                        xtype: 'datefield',
                        anchor: '100%',
                        width:125,
                        emptyText: '报名结束',
                        name: 'to_date',
                        maxValue: new Date()
                    }
               ]
             }

            ]
        },
                  //grid
                  {
                      xtype: 'gridpanel',
                      reference:'trainAppOtherGrid',
                      style: {
                        border:'1px solid #D5D5D5'
                      },
                      margin: 5,
                      width:300,
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
                          },   {
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
                            select:'onSelect',
                            beforerender:'onInit'
                          }
                  },
                  {
                    xtype:'container',
                    layout:'hbox',
                    items:[
                      {
                          xtype: 'button',
                          text : '授权课程类型',
                          reference:'authorize_Btn'
                      }
                    ]
                  }
      ]
  });
