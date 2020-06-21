import React from 'react'
import { Table } from 'antd'

import './index.css'
import QueryForm from './QueryForm'

import employeeColumns from './columns'
import { EmployeeResponse, EmployeeRequest } from '../../interface/employee'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { getEmployee } from '../../redux/employee'

interface Props {
  onGetEmployee(param: EmployeeRequest): void
  employeeList: EmployeeResponse
}

class Employee extends React.Component<Props> {
  render() {
    const { employeeList, onGetEmployee } = this.props
    return (
      <>
        <QueryForm getData={onGetEmployee} />
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
