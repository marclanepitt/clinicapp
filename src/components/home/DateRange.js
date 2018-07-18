import React, { Component } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import "./css/date-range.css"

export default class DateRange extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showStartDatePicker:false,
      showEndDatePicker:false,
      startDate: "From",
      endDate: "To"
    }

    this.handleStartSelect = this.handleStartSelect.bind(this);
    this.handleEndSelect = this.handleEndSelect.bind(this);
  }

    handleStartSelect(date){
      this.setState({
        showStartDatePicker:false,
        startDate: date.toISOString(),
      });

    }

    handleEndSelect(date){
      this.setState({
        showEndDatePicker:false,
        endDate: date.toISOString(),
      });

    }
    
  render() {
    return (
      <div className="inline-block c-margin-left-1" style={{width: "15vw"}}>
          <input type="text" className="c-date-range-input c-margin-right-1" style={{color:this.state.startDate === "From"? "lightgrey":"black"}} value={this.state.startDate} onClick={()=>{this.setState({showStartDatePicker:true})}}/>
            -
          <input type="text" className="c-date-range-input c-margin-left-1"  style={{color:this.state.endDate === "To"? "lightgrey":"black"}} value={this.state.endDate} onClick={()=>{this.setState({showEndDatePicker:true})}} />

          {this.state.showStartDatePicker &&
            <div onBlur={()=>{this.setState({showStartDatePicker:false})}}>
              <Calendar
                  className="absolute-position c-margin-right-5"
                  onChange={this.handleStartSelect}
              />
            </div>
          }
          {this.state.showEndDatePicker &&
            <div onBlur={()=>{this.setState({showEndDatePicker:false})}}>
              <Calendar
                  className="absolute-position c-margin-right-5"
                  onChange={this.handleEndSelect}
              />
            </div>
          }
      </div>
    )
  }
}
