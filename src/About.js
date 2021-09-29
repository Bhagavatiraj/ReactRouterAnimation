import React from 'react'
import img from './abt.jpg'

class About extends React.Component {  
    render() {  
        return (  
          <div>  
            <h1> This is the about Us Page</h1>  
            <img src={img}></img>
          </div>  
        )  
      }  
}  
export default About  