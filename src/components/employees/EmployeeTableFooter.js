import { IoAdd } from 'react-icons/io5'
const EmployeeTableFooter = () => {
  return (
    <tfoot>
      <tr>
        <th colSpan={3}>
          <span><IoAdd /> New</span>
        </th>
      </tr>
    </tfoot>
  )
}

export default EmployeeTableFooter
