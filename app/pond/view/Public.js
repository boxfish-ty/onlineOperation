Ext.define('onlineOperation.pond.view.Public', {
      extend: 'Ext.container.Container',
      alias:'widget.pondPublic',
      controller:'pondPublic',
      viewModel: {type:'pondPublic'},
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
            itemId:'pondAddFilter',
            reference: 'pondAddFilter',
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
              },{
                xtype: 'textfield',
                padding:'0 0 0 10',
                labelWidth:30,
                width:100,
                emptyText: '电话',
                // itemId:'verifyTextfieldTelephone',
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
                emptyText: '学校',
                // itemId:'verifyTextfieldSchool',
                allowBlank: true,
                //回车
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
                emptyText: '教龄',
                allowBlank: true
            },{
                xtype: 'combobox',
                padding:'0 0 0 10',
                labelWidth:15,
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
               margin:'0 0 0 105',
               handler:'onSearchClick'
             }]
              },
             {
               xtype:'container',
               padding:'10 0 0 0',
               layout:'hbox',
               items:[
                 {
                        xtype: 'datefield',
                        anchor: '100%',
                        padding:'0 0 0 10',
                        labelWidth:60,
                        width:110,
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
                        width:110,
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
                    reference:'pondGrid',
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
                    reference:'catchBtn'
                }
              ]
            },

              //详细
                    {
                      xtype:'container',
                      reference:'pondDetails',
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
                          // itemId:'verifyForm',
                          reference:'pondForm',
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
                                  html: '<font color=gray size=3pt>简历信息</font>',
                                  colspan:2
                              },{
                                  itemId:'verify_teacherId',
                                  text: '教师编号:',
                                  html: '教师编号:'
                              },{
                                  itemId:'verify_name',
                                  text: '教师姓名:',
                                  html: '教师姓名:'
                              },{
                                  itemId:'verify_nickName',
                                  text: '账号&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '账号&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'verify_boxFishId',
                                  text: '盒子鱼号:',
                                  html: '盒子鱼号:'
                              },{
                                  itemId:'verify_gender',
                                  text: '性别&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '性别&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'verify_birthday',
                                  text: '生日&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '生日&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'verify_school',
                                  text: '学校&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '学校&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'verify_telephone',
                                  text: '电话&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '电话&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'verify_address',
                                  text: '所在地区:',
                                  html: '所在地区:'
                              },{
                                  itemId:'verify_email',
                                  text: '邮箱&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '邮箱&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'verify_qq',
                                  text: 'QQ号&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: 'QQ号&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'verify_weiXin',
                                  text: '微信&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:',
                                  html: '微信&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:'
                              },{
                                  itemId:'verify_identificationValue',
                                  text: '身份证号:',
                                  html: '身份证号:'
                              },{
                                  itemId:'verify_isStarTeacher',
                                  text: '是否名师:',
                                  html: '是否名师:'
                              },{
                                  itemId:'verify_accountStatus',
                                  text: '账户状态:',
                                  html: '账户状态:'
                              }
                            ]
                        },
                        {
                          html: '<font color=gray size=3pt>入池理由</font>',
                          margin:'0 0 0 30'
                        },
                        {
                                  xtype     : 'textareafield',
                                  reference :'pond_reasonArea',
                                  grow      : true,
                                  anchor    : '100%',
                                  margin    :'0 0 0 5',
                                  height    : 125
                        }
                        ]
                      }]
                  }
      ]

  });
