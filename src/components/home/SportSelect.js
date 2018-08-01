import React, { Component } from 'react'
import "../../scss/home/sport-select.css";

export default class SportSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      filteredData: this.mapSportsToIcon(this.props.sports),
      value: "",
      selectedOptionIndex:0,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.basicSearch = this.basicSearch.bind(this);
  }

  mapSportsToIcon(sports) {
    let list = [];
    for(let i = 0; i < sports.length; i++) {
      let temp = {};
      temp['value'] = sports[i];
      temp['label'] = <div className="graduate" style={{cursor:"pointer", fontSize:"2.3vh"}}> {sports[i]}  <span style={{float:"right"}} className={"icon-"+sports[i].replace(/\s+/g, '-').toLowerCase()}/></div>;
      list.push(temp);
    }
    return list;
  }

  basicSearch(text) {
    let list = [];
    for(let i = 0; i < this.state.filteredData.length; i++) {
      if((this.state.filteredData[i].value.toLowerCase()).search(text.toLowerCase()) !== -1) {
        list.push(this.state.filteredData[i]);
      }
    }
    this.setState({
      filteredData:list,
      showDropdown:true
    })
  }


  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });

    if(e.target.value.length > 0) {
      this.basicSearch(e.target.value);

    } else {

      this.setState({
        showDropdown:false,
        filteredData:this.mapSportsToIcon(this.props.sports),
        selectedOptionIndex:0,
      })
    }
  }

  handleOptionSelect(option) {
    let hack = {target:{value:option.value}};
    this.handleInputChange(hack);
    this.setState({
      showDropdown:false,
      selectedOptionIndex:0,
    })
  }

  onKeyPressed(e) {
    if(e.keyCode === 38) { //up
      if(this.state.selectedOptionIndex - 1 > 0) {
        this.setState({
          selectedOptionIndex: this.state.selectedOptionIndex - 1,
        })
      }
    } else if(e.keyCode === 40) { //down
      if(this.state.selectedOptionIndex < this.state.filteredData.length) {
        this.setState({
          selectedOptionIndex: this.state.selectedOptionIndex + 1,
        })
      }
    } else if(e.keyCode === 13) { //enter
      if(this.state.selectedOptionIndex > 0 && this.state.selectedOptionIndex < this.state.filteredData.length + 1) {
        let hack = {target:{value:this.state.filteredData[this.state.selectedOptionIndex-1].value}};
        this.handleInputChange(hack);
        this.setState({
          showDropdown:false,
          selectedOptionIndex:0,
        });
      }
    } else if(e.keyCode === 27) { //esc
      this.setState({
        showDropdown:false,
        selectedOptionIndex:0,
      });
    }
  }

  render() {

    return (
      <div className="sport-select-outer">
        <input
          onKeyDown={(e) => this.onKeyPressed(e)}
          tabIndex="0"
          className="sport-select-input"
          value = {this.state.value}
          placeholder={this.props.placeholder}
          onChange={(e)=>this.handleInputChange(e)}
        />
        {this.state.showDropdown &&
          <div className="sport-select-dropdown-wrap">
            {this.state.filteredData.map((option, index) => {
              return <div key={"option"+index} onClick={ ()=>this.handleOptionSelect(option)} value={option.value} style={{backgroundColor:this.state.selectedOptionIndex-1 === index ? "#dcdcdc" : "white"}} className="sport-select-option ">{option.label}</div>
            })}
          </div>
        }
      </div>
    )
  }
}


