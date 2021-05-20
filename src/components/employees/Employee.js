const Employee = ({employee}) => {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.position}</td>
    </tr>
  )
}

export default Employee
