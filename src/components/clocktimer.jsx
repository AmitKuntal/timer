import React from 'react';

export default class ClockTimer extends React.Component {
    constructor(props) {
      super(props)
       this.state = {
           ...props,
           stopTimer:false
       }
    }

    componentDidMount(){
       this.clockInterval = setInterval(()=>{
           this.reduceTime()
        },1000)
    }


    reduceTime=()=>{
        if(this.state.seconds <= 1){
            if(this.state.minute > 0){
                this.setState({minute: this.state.minute-1, seconds:60})
            }
            else{
                if(this.state.hour > 0){
                    this.setState({hour: this.state.hour - 1, minute: 59, seconds:59})
                }
                else{
                    this.setState({stopTimer:true, seconds:this.state.seconds-1},this.stopTimer)
                }
            }
        }
        else{
            this.setState({seconds:this.state.seconds - 1})
        }
    }

    getProgressBar(){
        let totalSeconds = parseInt(this.state.minutes) * 60
        let remainingSeconds = (((this.state.hour * 60) + this.state.minute) * 60 ) + this.state.seconds
        
        return    <div style={{ width: ((totalSeconds - remainingSeconds)/ totalSeconds)*100 +"%" }} className="shadow-none flex text-center whitespace-nowrap text-black justify-center bg-green-500 h-10">
                        </div>
    }

      
    stopTimer=()=>{
        this.setState({minute:0, hour:0, seconds:0, stopTimer:true},clearInterval(this.clockInterval))
    }

    render(){
        return(
        <div className="flex flex-col justify-center bg-white w-full md:w-1/2 items-center m-2 p-4 shadow-xl">
            {this.state.stopTimer?alert("Timer stopped"):null}
            <div className="relative pt-1 w-full">
                    <div className="overflow-hidden text-4xl flex flex-col rounded justify-center bg-green-200 w-full">
                        {this.state.stopTimer?
                            <div style={{ width: "100%" }} className="shadow-none flex text-center whitespace-nowrap text-black justify-center bg-green-500 h-10">
                            </div>
                        :this.getProgressBar()
                        }

                        <span className="absolute w-full text-center">{this.state.hour} H : {this.state.minute} M :{this.state.seconds} S</span>
                    </div>
            </div>
            <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-2 sm:px:4  border-b-2 md:border-b-4 border-red-700 hover:border-red-500 rounded  text-sm sm:text-lg mt-4" onClick={this.stopTimer}>
                Stop timer
            </button>
        </div>
        )
    }
  }