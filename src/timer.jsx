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
        return(<div className="flex flex-col w-full items-center">
        {this.state.startTimer ?<ClockTimer {...this.state}/>: null }
        <div className="flex flex-col justify-center bg-white w-full md:w-1/2 items-center m-2 p-4 shadow-xl">
            <input type="text" className="outline-none text-xl w-full text-center" onChange={(e)=>{this.setState({minutes:e.target.value, startTimer:false})}} value={this.state.minutes} placeholder="Enter Minutes"/>
            {this.state.minutes?
            <div className="flex w-full justify-between">
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 sm:px:4  border-b-2 md:border-b-4 border-blue-700 hover:border-blue-500 rounded text-sm sm:text-lg" onClick={this.startTimer}>
                    Start timer
                </button>
                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-2 sm:px:4  border-b-2 md:border-b-4 border-red-700 hover:border-red-500 rounded  text-sm sm:text-lg" onClick={this.resetTimer}>
                    Reset timer
                </button>
            </div>
            :null}
        </div>
        </div>
        )
    }
  }