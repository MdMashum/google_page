import logo from '../logo.svg';
import { Link } from "react-router-dom";

import '../App.css';
function Home () {
 
  return (
    
    <div className="App">
    <ul className="nav nav-pills">
    <li className="nav-item p-2">
        <Link to ="/changeToUppercase" className="nav-link active">ASSIGMENT_2</Link>
    </li>
    </ul>
    <img src={logo} className="App-logo" alt="logo" />
    <div className="row d-flex justify-content-center">
      <div className="col-md-6 mb-6">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
      </div>
    </div>
    <Link to="/Googlesearch">
    <button type="button" className="btn btn-primary mt-3 me-4">
    Google Search
  </button>
  </Link>
  <Link to="/Feelinggood">
    <button type="button" className="btn btn-info mt-3 ">
      i am feeling lucky
    </button>
    </Link>
    <br/><br/>
    <span>Google.can offer : </span> &nbsp;
    <a className="App-link "
          href="#"
        >English
        </a>
  </div>
  );
}

export default Home;
