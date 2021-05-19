import { IoText } from 'react-icons/io5'
import { HiAtSymbol } from 'react-icons/hi'
import { VscListSelection } from 'react-icons/vsc'

const EmployeeTableHeader = () => {
  return (
    <thead>
      <tr>
        <th>
          <span><IoText /> Name</span>
        </th>
        <th>
          <span><HiAtSymbol /> Email</span>
        </th>
        <th>
          <span><VscListSelection /> Position</span>
        </th>
      </tr>
    </thead>
  )
}

export default EmployeeTableHeader
