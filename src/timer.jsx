import React from 'react';

import ClockTimer from './components/clocktimer';

export default class Timer extends React.Component {
    constructor(props) {
      super(props)
       this.state = {
           startTimer:false,
           minutes:""
       }
    }

    startTimer=()=>{
        let hour = Math.floor(this.state.minutes / 60)
        let minute = Math.floor(this.state.minutes % 60)
        let seconds = 60
        if(minute === 0){
            hour= hour-1
            minute = 59
        }
        else{
            minute = minute-1
        }
        this.setState({startTimer:true, hour:hour, minute:minute, seconds:seconds})
    }

      
    resetTimer=()=>{
        this.setState({startTimer:false, minutes:""})
    }
    render(){
        return(<>
            <div>
                <input type="text" onChange={(e)=>{this.setState({minutes:e.target.value, startTimer:false})}} value={this.state.minutes} placeholder="Enter Minutes"/>
            </div>
            {this.state.minutes?<div>
                <button onClick={this.startTimer}>
                    Start timer
                </button>
                
                <button onClick={this.resetTimer}>
                    Reset timer
                </button>
            </div>:null}
            {this.state.startTimer ?<ClockTimer {...this.state}/>: null }
            </>
        )
    }
  }