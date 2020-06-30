// 约定的字段

export interface EmployeeRequest {
  name: string
  departmentId: number | undefined
}

interface EmployeeInfo {
  id: number
  key: number
  name: string
  department: string
  hiredate: string
  level: string | undefined
}

export interface EmployeeInfoForAdd {
  name: string
  departmentId: number | undefined
  hiredate: string
  levelId: number | undefined
}

export type EmployeeResponse = EmployeeInfo[] | undefined
