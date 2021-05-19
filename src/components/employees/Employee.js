const Employee = ({employee}) => {
  return (
    <tbody>
      <tr>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.position}</td>
      </tr>
    </tbody>
  )
}

export default Employee
