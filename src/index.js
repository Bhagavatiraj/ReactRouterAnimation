import React from 'react';  
import ReactDOM from 'react-dom';  
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'  
import './index.css';  
import App from './App';  
import About from './about'  
import Animation from './animation'  
import Counter from './counter'  

  
const routing = (  
  <Router>  
    <div> 
       
      <h1  >React Routes</h1>  
      <ul>
        <li>  
          <NavLink to="/" exact activeStyle={  
             {color:'red'}  
          }>Home</NavLink>  
        </li>  
        <li>  
          <NavLink to="/about" exact activeStyle={  
             {color:'green'}  
          }>About</NavLink>  
        </li>
        <li>  
          <NavLink to="/counter" exact activeStyle={  
             {color:'magenta'}  
          }>Counter</NavLink>  
        </li>
        <li>  
          <NavLink to="/animation" exact activeStyle={  
             {color:'magenta'}  
          }>Animation</NavLink>  
        </li>  
      </ul>   
      
      <Route exact path="/" component={App} />  
      <Route path="/about" component={About} />  
      <Route path="/animation" component={Animation} />  
      <Route path="/counter" component={Counter} />  
    </div>  
  </Router>  
)  
ReactDOM.render(routing, document.getElementById('root'));  