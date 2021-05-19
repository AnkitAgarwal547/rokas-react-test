import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import NotFound from './pages/NotFound'
import Counter from './pages/counter/Counter'
import Employees from './pages/employees/Employees'
import './App.css'

function App() {
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

export default App
