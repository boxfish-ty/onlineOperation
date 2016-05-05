Ext.define('onlineOperation.role.view.Role', {
    extend: 'Ext.container.Container',
    xtype: 'Role',
    requires: [
        'Ext.grid.*',
        'Ext.toolbar.Paging',
        'Ext.layout.container.HBox',
        'Ext.grid.column.Date',
        'Ext.form.*'

    ],
    controller:'role',
    viewModel: {type: 'role'},

    layout: {
        type: 'hbox',
        align: 'stretchmax',
        animate: true,
        animatePolicy: {
            x: true,
            width: true
        }
    },

    cls:'shadow-panel',
    margin:10,
    flex: 1,

    items:[
      {
        xtype:'gridpanel',
        // reference:'orderCenterGrid',
        // itemId:'orderCenterGrid',
        flex: 1,
        height:800,
        style: {
          border:'2px solid #D5D5D5'
        },
        bind:{
          store:'{orderCenter}'
        },
        viewConfig: {
            preserveScrollOnRefresh: true,
            stripeRows: true
        },
        plugins:[{
                  ptype:'clipboard',
                  pluginId:'clipboard',
                  memory:true
                }
              ],
        columns:[
          {
            text:'订单id',
            dataIndex:'id',
            sortable:true,
            width:150,
            hidden:true,
            align : 'center'
          },{
            text:'用户号',
            dataIndex:'userID',
            sortable:true,
            width:120,
            align : 'center'
          },{
            text:'订单号',
            dataIndex:'code',
            sortable:true,
            width:300,
            editor:{
              xtype:'textfield'
            },
            align : 'center'
          },{
            text:'总价格',
            dataIndex:'totalPrice',
            sortable:true,
            width:100,
            align : 'center'
          },{
            text:'生成时间',
            dataIndex:'createTime',
            sortable:true,
            width:200,
            align : 'center'
          },{
            text:'付款时间',
            dataIndex:'pay_time',
            sortable:true,
            hidden:true,
            width:177,
            align : 'center'
          }
          ,{
            text:'订单状态',
            dataIndex:'status',
            sortable:true,
            width:100,
            align : 'center'
          }
          ,{
            text:'备注标题',
            dataIndex:'remark_title',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          },{
            text:'备注描述',
            dataIndex:'remark_description',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          }
          ,{
            text:'付款频道',
            dataIndex:'payChannel',
            sortable:true,
            hidden:true,
            width:150,
            align : 'center'
          },{
            text:'订单频道',
            dataIndex:'orderChannel',
            sortable:true,
            hidden:true,
            width:70,
            align : 'center'
          },{
            text:'更新时间',
            dataIndex:'updateTime',
            sortable:true,
            hidden:true,
            width:70,
            align : 'center'
          }
        ],
          // 工具栏
        tbar: [
                {
              xtype: 'button',
              text : '新增',
              width:80//,
              // reference:'appBatch'
                }
            ],
            // 分页栏
          bbar: [
                {
                    xtype: 'pagingtoolbar',
                    pageSize: 20,
                    displayInfo: true,
                    emptyMsg: '没有数据',
                    displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',
                    beforePageText: '第',
                    afterPageText: '页/共{0}页',
                    bind: {
                        store: '{orderCenter}'
                    }
                },{
                     xtype: 'label',
                     itemId: 'maintableAnyInfoShow',
                     text: '',
                     style:{
                          fontSize:'20px'
                     },
                     margin: '0 0 0 10'
                }
            ],
          listeners:{
              select:'onSelect'
            }
      }
    ]
});
