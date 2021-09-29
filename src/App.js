import React from 'react'  
import './App.css';  
import img from './img.jpg'

class App extends React.Component {  
  render() {  
    return (  
      <div>  
        <h1> This is the Home Page</h1>  
        <img src={img}></img>
      </div>  
    )  
  }  
}  
export default App  