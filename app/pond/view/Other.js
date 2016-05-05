Ext.define('onlineOperation.pond.view.Other', {
      extend: 'Ext.container.Container',
      alias:'widget.pondOther',
      controller:'pondOther',
      viewModel: {type:'pondOther'},
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
            itemId:'pond_AddFilter',
            reference: 'pond_AddFilter',
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
                 width:120,
                 loadMask:false,
                 triggerAction:'all',
                 editable: false,
                 displayField: 'value',
                 valueField: 'key',
                 emptyText: '不通过类型',
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
               margin:'0 0 0 89',
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

        //grid+form
        {
          xtype:'container',
          layout:'hbox',
          listeners:{
            beforerender:'onInit'
          },
          items:[
            {
              xtype:'container',
              layout:'vbox',
              items:[
                //grid
                {
                    xtype: 'gridpanel',
                    reference:'pondOtherGrid',
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
                          select:'onSelect'
                        }
                },
                {
                    xtype: 'button',
                    text : '捕捞',
                    width:100,
                    reference:'catch_Btn'
                }
              ]
            },

              //详细
                    {
                      xtype:'container',
                      reference:'pond_Details',
                      // itemId:'verifyContainer',
                      style: {
                        border:'1px solid #D5D5D5'
                      },
                      margin:'5 5 5 0',
                      flex: 1,
                      layout:'vbox',

                      items:[
                        {
                          xtype:'form',
                          // itemId:'otherForm',
                          reference:'pondOtherForm',
                          margin:5,
                          padding:'0 5 0 10',
                          style: {border:'0px solid #D5D5D5','background-color':'#ffffff'},
                          height:180,
                          width:200,
                          layout:{
                            type:'table',
                            columns:2
                          },
                          defaults:{
                            padding:5,
                            minWidth:200,
                            height:30
                          },
                          items: [{
                                  html: '<font color=gray size=2pt>基本信息</font>',
                                  colspan:2
                              },{
                                  itemId:'other_teacherId',
                                  text: '学历:',
                                  html: '学历:'
                              },{
                                  itemId:'other_name',
                                  text: '教师姓名:',
                                  html: '教师姓名:'
                              },{
                                  itemId:'other_nickName',
                                  text: '账号&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '账号&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'other_boxFishId',
                                  text: '毕业学校:',
                                  html: '毕业学校:'
                              },{
                                  itemId:'other_gender',
                                  text: '性别&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '性别&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'other_telephone',
                                  text: '电话&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '电话&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'other_address',
                                  text: '分数:',
                                  html: '分数:'
                              },{
                                  itemId:'other_identificationValue',
                                  text: '测试成绩:',
                                  html: '测试成绩:'
                              },{
                                  itemId:'other_isStarTeacher',
                                  text: '英语等级:',
                                  html: '英语等级:'
                              },{
                                  itemId:'other_accountStatus',
                                  text: '专业:',
                                  html: '专业:'
                              }
                            ]
                        },
                        {
                          html: '<font color=gray size=2pt>留学经验</font>',
                          margin:'0 0 0 20'
                        },
                        {
                                  xtype     : 'textareafield',
                                  reference :'pondAbroad',
                                  grow      : true,
                                  anchor    : '100%',
                                  margin    :'3 0 3 20',
                                  height    : 50
                        },{
                          html: '<font color=gray size=2pt>教学经验</font>',
                          margin:'0 0 0 20'
                        },
                        {
                                  xtype     : 'textareafield',
                                  reference :'pondTeach',
                                  grow      : true,
                                  anchor    : '100%',
                                  margin    :'3 0 3 20',
                                  height    : 50
                        },{
                          html: '<font color=gray size=2pt>其他英语经历</font>',
                          margin:'0 0 0 20'
                        },
                        {
                                  xtype     : 'textareafield',
                                  reference :'pondOtherExperience',
                                  grow      : true,
                                  anchor    : '100%',
                                  margin    :'3 0 3 20',
                                  height    : 50
                        },{
                          html: '<font color=gray size=2pt>口语</font>',
                          margin:'0 0 0 20'
                        },{
                            xtype: 'textfield',
                            reference:'pondSpokenScore',
                            emptyText:'审核人员录入口语成绩',
                            margin    :'3 0 0 20',
                            allowBlank: true
                        },
                        {
                                  xtype     : 'textareafield',
                                  reference :'pondReason',
                                  emptyText :'入池理由',
                                  grow      : true,
                                  anchor    : '100%',
                                  margin    :'10 0 0 20',
                                  height    : 50
                        }
                          ]
                      }]
                  }
      ]

  });
