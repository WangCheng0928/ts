import React from 'react'
import { Form, Modal, Input, Select, DatePicker } from 'antd'
import { FormInstance } from 'antd/lib/form'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { addEmployee } from '../../redux/employee/index'
import { EmployeeInfoForAdd, EmployeeResponse } from '../../interface/employee'

interface ModalFormProps {
  visible: boolean
  onCancel: () => void
  onAddEmployee(param: EmployeeInfoForAdd): void
  employeeList: EmployeeResponse
}
// interface ModalState {
//   departmentId: number | undefined
//   level: string | undefined
//   dateString: any | null
// }

const { Option } = Select

class ModalForm extends React.Component<ModalFormProps, EmployeeInfoForAdd> {
  formRef = React.createRef<FormInstance>()

  state: EmployeeInfoForAdd = {
    name: '',
    departmentId: undefined,
    levelId: undefined,
    hiredate: '',
  }

  onOk = () => {
    console.log('点击确定按钮')
    this.props.onAddEmployee(this.state)
    console.log('onOk', this.props.employeeList)
    this.props.onCancel()
  }

  handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(111, e.currentTarget.value)
    this.setState({
      name: e.currentTarget.value,
    })
  }

  handleDepartmentChange = (value: number) => {
    console.log('部门change 了')
    this.setState({
      departmentId: value,
    })
  }

  handleLevelChange = (value: number) => {
    console.log('职级change 了')
    this.setState({
      levelId: value,
    })
  }

  onChange = (date: any | null, dateString: string) => {
    console.log('日期change了', date, dateString)
    this.setState({
      hiredate: dateString,
    })
  }

  afterClose = () => {
    console.log('afterClose', this.formRef.current)
    if (this.formRef.current !== null) {
      this.formRef.current.resetFields()
      // this.setState({
      //   departmentId: undefined,
      //   level: undefined,
      //   dateString: null,
      // })
    }
  }

  render() {
    return (
      <Modal
        title="添加新员工"
        visible={this.props.visible}
        onOk={this.onOk}
        onCancel={this.props.onCancel}
        cancelText="取消"
        okText="确认"
        afterClose={this.afterClose}
      >
        <Form layout="vertical" name="control-ref" ref={this.formRef}>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input
              placeholder="姓名"
              style={{ width: 250 }}
              allowClear
              onChange={this.handleNameChange}
            />
          </Form.Item>
          <Form.Item>
            <Select
              placeholder="部门"
              style={{ width: 250 }}
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
            <DatePicker
              onChange={this.onChange}
              placeholder="请选择日期"
              allowClear
              style={{ width: 250 }}
            />
          </Form.Item>
          <Form.Item>
            <Select
              placeholder="职级"
              style={{ width: 250 }}
              allowClear
              value={this.state.levelId}
              onChange={this.handleLevelChange}
            >
              <Option value={1}>1级</Option>
              <Option value={2}>2级</Option>
              <Option value={3}>3级</Option>
              <Option value={4}>4级</Option>
              <Option value={5}>5级</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = (state: any) => ({
  employeeList: state.employee.employeeList,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      onAddEmployee: addEmployee,
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalForm)
