import { useState } from 'react'
import classes from './AddEmployeeForm.module.css'

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

const AddEmployeeForm = ({ toggleEmployeeForm, addEmployee }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [positionError, setPositionError] = useState('')

  const inputNameHandler = event => {
    setName(event.target.value)
  }
  const inputEmailHandler = event => {
    setEmail(event.target.value)
  }
  const inputPositionHandler = event => {
    setPosition(event.target.value)
  }

  const onCancelHandler = () => {
    setName('')
    setEmail('')
    setPosition('')
    toggleEmployeeForm()
  }

  const addEmployeeFormHandler = event => {
    event.preventDefault()

    if(name === '') {
      setNameError('Name cannot be empty')
      return 
    }

    if(!emailRegex.exec(email) || email === '') {
      setEmailError('Invalid Email')
      return false
    }

    if(position === '') {
      setPositionError('Position cannot be empty')
      return 
    }    
    
    addEmployee({name, email, position})
  }

  return (
    <form className={classes.addFrom} onSubmit={addEmployeeFormHandler}>
      <div className={classes['form-group']}>
        <input type='text' value={name} onChange={inputNameHandler} />
        <br />
        <span className={classes.error}>{nameError}</span>
      </div>
      <div className={classes['form-group']}>
        <input type='email' value={email} onChange={inputEmailHandler} />
        <br />
        <span className={classes.error}>{emailError}</span>
      </div>
      <div className={classes['form-group']}>
        <input type='text' value={position} onChange={inputPositionHandler} />
        <br />
        <span className={classes.error}>{positionError}</span>
      </div>
      <button className={classes.btn} type='submit'>
        Add
      </button>
      <button
        className={classes.btn}
        type='button'
        onClick={onCancelHandler}
      >
        Cancel
      </button>
    </form>
  )
}

export default AddEmployeeForm
