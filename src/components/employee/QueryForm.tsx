import React from 'react'
import { Form, Input, Select, Button } from 'antd'
import { EmployeeRequest } from '../../interface/employee'
import { FormInstance } from 'antd/lib/form'
import { SearchOutlined } from '@ant-design/icons'

const { Option } = Select

interface Props {
  getData(data: EmployeeRequest): void
}

class QueryForm extends React.Component<Props, EmployeeRequest> {
  formRef = React.createRef<FormInstance>()

  // 设置state
  state: EmployeeRequest = {
    name: '',
    departmentId: undefined,
  }

  onReset = () => {
    if (this.formRef.current !== null) {
      this.setState({
        name: '',
        departmentId: undefined,
      })
      this.formRef.current.resetFields()
    }
  }

  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value })
  }

  handleDepartmentChange = (value: number) => {
    this.setState({
      departmentId: value,
    })
  }

  handleSubmit = () => {
    this.queryEmployee(this.state)
  }

  queryEmployee(params: EmployeeRequest) {
    console.log(params)
    this.props.getData(params)
  }

  componentDidMount() {
    this.queryEmployee(this.state)
  }

  render() {
    return (
      <div>
        <Form layout="inline" ref={this.formRef}>
          <Form.Item>
            <Input
              placeholder="姓名"
              style={{ width: 120 }}
              allowClear
              value={this.state.name}
              onChange={this.handleNameChange}
            ></Input>
          </Form.Item>
          <Form.Item>
            <Select
              placeholder="部门"
              style={{ width: 120 }}
              allowClear
              value={this.state.departmentId}
              onChange={this.handleDepartmentChange}
            >
              <Option value={1}>技术部</Option>
              <Option value={2}>产品部</Option>
              <Option value={3}>市场部</Option>
              <Option value={4}>运营部</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={this.handleSubmit}
            >
              查询
            </Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="button" onClick={this.onReset}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default QueryForm
