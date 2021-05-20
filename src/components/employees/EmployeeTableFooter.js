import { IoAdd } from 'react-icons/io5'
const EmployeeTableFooter = ({ toggleEmployeeForm }) => {
  return (
    <tfoot>
      <tr>
        <th colSpan={3}>
          <span style={{ cursor: 'pointer' }} onClick={toggleEmployeeForm}>
            <IoAdd /> New
          </span>
        </th>
      </tr>
    </tfoot>
  )
}

export default EmployeeTableFooter
