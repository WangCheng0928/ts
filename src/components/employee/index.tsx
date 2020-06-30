import React from 'react'
import { Table } from 'antd'

import './index.css'
import QueryForm from './QueryForm'

import employeeColumns from './columns'
import { EmployeeResponse, EmployeeRequest } from '../../interface/employee'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { getEmployee } from '../../redux/employee'
import ModalForm from './modalForm'
import { Button } from 'antd'
import { DownloadOutlined, PlusOutlined } from '@ant-design/icons'
import { DOWNLAOD_EMPLOYEE_URL } from '../../constants/urls'

interface Props {
  onGetEmployee(param: EmployeeRequest): void
  employeeList: EmployeeResponse
}

class Employee extends React.Component<Props> {
  state = {
    visible: false,
  }

  showUserModal = () => {
    console.log('点击新增')
    this.setState({
      visible: true,
    })
  }

  handleCancel = () => {
    console.log('点击取消')
    this.setState({
      visible: false,
    })
  }

  handleDownload = () => {
    window.open(DOWNLAOD_EMPLOYEE_URL)
  }

  render() {
    const { employeeList, onGetEmployee } = this.props
    return (
      <>
        <QueryForm getData={onGetEmployee} />
        <div className="operations">
          <Button
            type="primary"
            style={{ margin: '0 8px' }}
            onClick={this.showUserModal}
            icon={<PlusOutlined />}
          >
            新增员工
          </Button>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={this.handleDownload}
          >
            导出
          </Button>
          <ModalForm
            visible={this.state.visible}
            onCancel={this.handleCancel}
          ></ModalForm>
        </div>
        <Table
          columns={employeeColumns}
          dataSource={employeeList}
          className="table"
        ></Table>
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({
  employeeList: state.employee.employeeList,
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onGetEmployee: getEmployee,
    },
    dispatch
  )
export default connect(mapStateToProps, mapDispatchToProps)(Employee)
