import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLogin from './components/AdminLogin'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/admin" component={AdminLogin} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
