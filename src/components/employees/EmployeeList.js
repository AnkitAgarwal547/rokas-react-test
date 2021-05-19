import classes from './EmployeeList.module.css'
import Employee from './Employee'
import { useEffect, useState } from 'react'
import EmployeeTableHeader from './EmployeeTableHeader'
import EmployeeTableFooter from './EmployeeTableFooter'
import axios from 'axios'
import LoadingSpinner from '../UI/LoadingSpinner'

// using url here for testing task
// this can be managed via context api

const EmployeeList = () => {
  const [employees, setEmployees] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [page, setPage] = useState(1)
  
  const apiBaseUrl = `http://localhost:8080/employees?_page=${page}&_limit=5`

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const response = await axios.get(apiBaseUrl)
        const data = response.data
        setEmployees(data)
        console.log(data)
      } catch (error) {
        console.log(error)
        setIsError(true)
        setErrorMessage('Error fetching employees.')
      }
      setIsLoading(false)
    }
    getEmployees()
  }, [])

  const employeesTable = employees.map(employee => <Employee key={employee.id} employee={employee} />)

  const errorMessageData = isError && <p className='centered'>{errorMessage}</p>

  return (
    <>
      {isLoading && <div className='centered'><LoadingSpinner /></div>}
      {errorMessageData}
      {!isLoading && !isError && (
        <div className={classes.overflow}>
          <table className={classes.table}>
            <EmployeeTableHeader />
            {employeesTable}
            <EmployeeTableFooter />
          </table>
        </div>
      )}
    </>
  )
}

export default EmployeeList
