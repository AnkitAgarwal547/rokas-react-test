import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} exact to='/'>
              counter
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/employees'>
              Employees
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation