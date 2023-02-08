import React, { Component } from 'react'
import ProgressBar from './ProgressBar';
export default class Languages extends Component {

  state = {
    languages: [
        {id: 1, value: "Javascript", xp:1.8},
        {id: 2, value: "CSS", xp:1.5}, 
        {id: 2, value: "php", xp:0.7}, 
        {id: 2, value: "Python", xp:2}, 
        {id: 2, value: "C++", xp:1.2},
        {id: 2, value: "JAVA", xp:1.5},
         
    ],

    frameworks: [
        {id: 1, value: "React", xp:1.4},
        {id: 1, value: "Angular", xp:1.5},
        {id: 1, value: "Material UI", xp:1.2},
        {id: 1, value: "Bootstrap", xp:1.1},
        {id: 1, value: "Sprinboot", xp:1.1},

    ]
  }  
  render() {
    let{languages, frameworks} = this.state;
    return (
      <div className='languagesFrameworks'>
        <ProgressBar 
            languages={languages}
            className="languagesDisplay"
            title="languages"/>
            


        <ProgressBar
            languages={frameworks}
            title="frameworks & bibliothèques"
            className="frameworksDisplay" />



      </div>
    )
  }
}
