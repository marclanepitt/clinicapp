import React, { Component } from 'react';
import "../../scss/elements/itemselectwheel.css";

export default class ItemSelectWheel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: {},
        }
    }


    handleItemSelect(item) {
        this.setState({
            selectedItem: item
        });
        this.props.onChange(item);
    }

  render() {
    return (
      <div>
        <div className="c-select-wheel-content">
            {this.props.items.map( item => 
                <div key={item.id} onClick={()=>this.handleItemSelect(item)} className={"c-select-wheel-item " + (this.state.selectedItem.id === item.id ? "c-select-wheel-item--selected" : "")}>
                    {item.name}
                    <br/>
                    <div className="c-select-wheel-item-price">${item.price}</div>
                </div>
            )}

        </div>
      </div>
    )
  }
}