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

    calculatePercentaage(){
        let totalSeconds = parseInt(this.state.minutes) * 60
        let remainingSeconds = (((this.state.hour * 60) + this.state.minute) * 60 ) + this.state.seconds
        return <span>{((totalSeconds - remainingSeconds)/ totalSeconds)*100}</span>
    }

      
    stopTimer=()=>{
        this.setState({minute:0, hour:0, seconds:0, stopTimer:true},clearInterval(this.clockInterval))
    }

    render(){
        return(<>
        {this.state.stopTimer?alert("Timer stopped"):null}
            <div>
                <span>{this.state.hours} H : {this.state.minute} MM :{this.state.seconds} S</span>
            </div>
            {this.stopTimer?100:this.calculatePercentaage()}

                <button onClick={this.stopTimer}>
                    Stop timer
                </button>
            </>
        )
    }
  }