import React, { Component } from 'react';
import ItemSelectWheel from "../elements/ItemSelectWheel";
import Button from "../elements/Button";
import StripeRegisterForm from "./StripeRegisterForm";
import { ClipLoader } from "react-spinners";


export default class RegistrationContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPlan:null,
            loading:false,
            step: 0,
        }
        this.handlePlanSelect = this.handlePlanSelect.bind(this);
        this.stepIncrease = this.stepIncrease.bind(this);
        this.stepDecrease = this.stepDecrease.bind(this);
    }

    handlePlanSelect(plan) {
        this.setState({
            selectedPlan:plan,
        });
    }

    stepIncrease() {
        this.setState({
            loading:true,
        })
        setTimeout(()=>{this.setState({loading:false,step:this.state.step+1})}, 2000)
    }

    stepDecrease() {
        this.setState({
            loading:true,
        })
        setTimeout(()=>{this.setState({loading:false,step:this.state.step-1, selectedPlan:null})}, 1000)
    }

    renderSteps(step) {
        const steps = [

            <div>
                <ItemSelectWheel onChange={this.handlePlanSelect} items={this.props.clinic.plans}/>
                <div className="c-margin-top-3 text-center">
                    <Button onClick={this.stepIncrease} text={"Register" + (this.state.selectedPlan !== null ? " ($" + this.state.selectedPlan.price + ")" : "")} type="success" disabled={this.state.selectedPlan === null ? true : false}/>
                </div>
            </div>,

            <StripeRegisterForm stepIncrease={this.stepIncrease} stepDecrease={this.stepDecrease} selectedPlan={this.state.selectedPlan}/>

        ]
        return steps[step];
    }

  render() {
    return (
      <div>
          {this.state.loading ?
             <div className="text-center"> 
                <ClipLoader/>
             </div>
            :
            <div>
            {this.renderSteps(this.state.step)}
            </div>
          }
      </div>
    )
  }
}

