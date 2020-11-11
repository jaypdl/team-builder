import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import 
const initialFormValues = {
  name:'',
  email:'',
  role:'',
};


function App() {

  const [teamList, setTeamList] = useState([])
  const [from, setForm] = useState(initialFormValues)



  return (
    <form>
      <label>Name </label>
        <input
          type='text'
          placeholder='Enter Name'
        />
      <label>Email </label>
        <input

        />
      <label>Role </label>
        <input

        />
    </form>
  );
}

export default App;
