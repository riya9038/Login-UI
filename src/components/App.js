
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from '../pages/Home';
import Student_Login from '../pages/Login1';
import Admin_Login from '../pages/Login2'
import Profile from '../pages/Profile';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar  />
        <Switch>
          <Route path='/' component ={Home} exact />
          <Route path='/student' component={Student_Login} exact/>
          <Route path='/admin' component={Admin_Login} exact />
          <Route path='/profile' component={Profile} exact />
        </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
