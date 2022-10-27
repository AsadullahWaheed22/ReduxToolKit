import react from 'react';
import "./App.css";
import {Route, Routes} from "react-router-dom";

import Home from './components/Home';
import NavBar from './components/Navbar';
// import Counter from './components/Counter';
import CounterRedux from './components/CounterRedux';
import Employee from './components/EmployeeRedux';
import UserList from './components/UserListRedux';




function App() {
  return (
    <react.Fragment>
      <NavBar/>
      <Routes>
        <Route path= {'/'} element = {<Home/>}/>
        <Route path= {'/employees'} element = {<Employee/>}/>
        <Route path= {'/counter'} element = {<CounterRedux/>}/>
        <Route path= {'/users'} element = {<UserList/>}/>
      </Routes>
    </react.Fragment>
  );
}

export default App;
