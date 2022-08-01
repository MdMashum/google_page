import React,{useState} from 'react'
import logo from '../logo.svg';
import '../App.css';

import { Link } from "react-router-dom";

function AssigmentTwo() {

    const[text,setText]=useState('');


    const handleInput=(event)=>{
        event.preventDefault();
        setText(event.target.value);
          
    }
    const changeCase=(event)=>{
        event.preventDefault();
        setText(event.target.value.toUpperCase());
    }
  return (
    <>
    <Link to="/">Go to Home</Link>

    <div className="App">
    
    <img src={logo} className="App-logo" alt="logo" />
    <div className="row d-flex justify-content-center">
      <div className="col-md-6 mb-6">
        <input className="form-control" type="text" placeholder="Search" 
        onChange={handleInput}  value={text} aria-label="Search"/>
        
        <button type="button"   onClick={changeCase} value={text} className="btn btn-warning mt-3 ">
      Change to Upper-case
    </button>
      </div>
    </div>
   </div>
   </>
  )
}

export default AssigmentTwo