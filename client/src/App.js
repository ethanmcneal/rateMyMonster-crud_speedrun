import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './components/About'
import StyledComponents from './style_components/StyledComponents';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import Home from './pages/Home';
import MonstersPage from './pages/MonstersPage';


function App() {
  return (
    <>
    <div style={{backgroundColor: '#E4DFE0'}}>
    <NavBar />
    <FetchUser>
   <Switch>
   <ProtectedRoute exact path='/' component={Home} />
     <Route exact path='/about' component={About} />
     <Route exact path='/styled' component={StyledComponents} />
     <Route exact path='/register' component={Register} />
     <Route exact path='/login' component={Login} />
     <Route exact path='/monsters' component={MonstersPage} />

   </Switch>
   </FetchUser>
   </div>
   </>
  )
}

export default App;
