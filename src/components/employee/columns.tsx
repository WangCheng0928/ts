import React from 'react'
import { Popconfirm, Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const employeeColumns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: '入职时间',
    dataIndex: 'hiredate',
    key: 'hiredate',
  },
  {
    title: '职级',
    dataIndex: 'level',
    key: 'level',
  },
  {
    title: '操作',
    dataIndex: 'operations',
    render: () => {
      return (
        <div>
          <Button icon={<EditOutlined />} type="link">
            编辑
          </Button>
          <Popconfirm title="确定删除吗？">
            <Button type="primary" icon={<DeleteOutlined />}>
              删除
            </Button>
          </Popconfirm>
        </div>
      )
    },
  },
]
export default employeeColumns
