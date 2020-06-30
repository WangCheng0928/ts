import { Dispatch } from 'redux'
import { get, post } from '../../utils/request'
import { GET_EMPLOYEE_URL, ADD_EMPLOYEE_URL } from '../../constants/urls'
import { GET_EMPLOYEE, ADD_EMPLOYEE } from '../../constants/actions'
import {
  EmployeeRequest,
  EmployeeResponse,
  EmployeeInfoForAdd,
} from '../../interface/employee'

type State = Readonly<{
  employeeList: EmployeeResponse
}>

type Action = {
  type: string
  payload: EmployeeResponse
}

const initialState: State = {
  employeeList: undefined,
}

export function getEmployee(param: EmployeeRequest) {
  console.log('redux get', param)
  return (dispatch: Dispatch) => {
    get(GET_EMPLOYEE_URL, param).then((res) => {
      console.log('getEmployee', res)
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data,
      })
    })
  }
}

export function addEmployee(param: EmployeeInfoForAdd) {
  console.log('redux post', param)
  return (dispatch: Dispatch) => {
    post(ADD_EMPLOYEE_URL, param).then((res) => {
      dispatch({
        type: ADD_EMPLOYEE,
        payload: { ...param, ...res.data },
      })
    })
  }
}

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employeeList: action.payload,
      }
    case ADD_EMPLOYEE:
      return {
        ...state,
        employeeList:
          state.employeeList !== undefined && action.payload !== undefined
            ? state.employeeList.concat(action.payload)
            : action.payload,
      }
    default:
      return state
  }
}
