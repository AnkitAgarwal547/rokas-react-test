import { useEffect, useState, useCallback } from 'react'
import Employee from './Employee'
import EmployeeTableHeader from './EmployeeTableHeader'
import EmployeeTableFooter from './EmployeeTableFooter'
import axios from 'axios'
import LoadingSpinner from '../UI/LoadingSpinner'
import Pagination from '../pagination/Pagination'

import classes from './EmployeeList.module.css'
import AddEmployeeForm from './addEmployee/AddEmployeeForm'
import { API_URL } from '../../helpers/const'

const headers = {
  'Content-Type': 'application/json'
}

// using url here for testing task
const apiBaseUrl = API_URL

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false)
  const [totalEmployees, setTotalEmployees] = useState(0)
  const [addEmployeeErrorMessage, setAddEmployeeErrorMessage] = useState('')
  const [successMessageData, setSuccessMessageData] = useState('')
  const perPage = 5

  const getEmployees = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        apiBaseUrl + '/employees',
        {
          params: {
            _page: currentPage,
            _limit: perPage,
            _sort: 'id',
            _order: 'desc'
          }
        },
        { headers }
      )
      setEmployees(response.data)
      setTotalEmployees(response.headers['x-total-count'])
    } catch (error) {
      setIsError(true)
      setErrorMessage('Error fetching employees.')
    }
    setIsLoading(false)
  }, [currentPage])
  useEffect(() => {
    getEmployees()
  }, [getEmployees])

  const addNewEmployee = async employee => {
    setIsLoading(true)
    try {
      // for now assuming api runs all the time and add employee each time request is sent
      const res = await axios.post(apiBaseUrl + '/employees', employee, {
        headers
      })
      console.log(res)
      setShowAddEmployeeForm(false)
      setAddEmployeeErrorMessage('')
      setSuccessMessageData('Employee added successfully')
    } catch (err) {
      // setAddEmployeeErrorMessage('Error adding employee')
    }
    getEmployees()
    setIsLoading(false)
  }

  const toggleAddEmployeeHandler = () => {
    setShowAddEmployeeForm(prevState => !prevState)
  }

  const employeeTable = (
    <>
      <table className={classes.table}>
        <EmployeeTableHeader />
        <tbody>
          {employees.map(employee => (
            <Employee key={employee.id} employee={employee} />
          ))}
        </tbody>
        {!showAddEmployeeForm && (
          <EmployeeTableFooter toggleEmployeeForm={toggleAddEmployeeHandler} />
        )}
      </table>
      {showAddEmployeeForm && (
        <AddEmployeeForm
          addEmployee={addNewEmployee}
          toggleEmployeeForm={toggleAddEmployeeHandler}
        />
      )}
    </>
  )

  const paginate = number => {
    setCurrentPage(number)
  }

  const errorMessageData = isError && <p className='centered'>{errorMessage}</p>

  const paginationWrapper = (
    <Pagination
      currentPage={currentPage}
      totalData={totalEmployees}
      perPage={perPage}
      paginate={paginate}
    />
  )

  return (
    <>
      {isLoading && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div style={{color: 'green'}}>{successMessageData}</div>
      {errorMessageData}
      {!isLoading && !isError && (
        <div className={classes.overflow}>
          {employeeTable}
          <div style={{ color: 'rgb(221, 109, 109)' }}>
            {addEmployeeErrorMessage}
          </div>
          {paginationWrapper}
        </div>
      )}
    </>
  )
}

export default EmployeeList
