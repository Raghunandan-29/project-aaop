import React,{useState,createContext} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Events from './components/home_components/Events';
import Event from './components/home_components/Event';
import Clubs from './components/home_components/Clubs';
import Admin from './components/Admin';
import Adminlogin from './components/Adminlogin';
import Addstudent from './components/admin_components/Addstudent';
import Addevent from './components/admin_components/Addevent'
import Profile from './components/Profile'

export const store = createContext();

const App = () => {
  const [token,setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path='/register' element={<Register />}/>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/home/event/:id' element={<Event />} />
          <Route path='/events/event/:id' element={<Event />} />
          <Route path='/clubs' element={<Clubs />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/addstudent' element={<Addstudent />} />
          <Route path='/addevent' element={<Addevent />} />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  )
}

export default App
