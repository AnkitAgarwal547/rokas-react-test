import { Route, Switch } from 'react-router-dom'
import Layout from './layout/Layout'
import NotFound from '../pages/NotFound'
import Counter from '../pages/counter/Counter'
import Employees from '../pages/employees/Employees'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Counter />
        </Route>
        <Route path='/employees'>
          <Employees />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default Routes
