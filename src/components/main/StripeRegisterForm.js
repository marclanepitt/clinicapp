import React, { Component } from 'react';
import Button from "../elements/Button";
import FormField from "../elements/FormField";
import ContainerSection from "../elements/ContainerSection";

export default class StripeRegisterForm extends Component {
  render() {
    return (
        <form>
            <ContainerSection title="Basic Info">
                <FormField type="text" placeholder="Player Name"/>
                <FormField type="text" placeholder="Player Age"/>
                <FormField type="text" placeholder="Player Name"/>
            </ContainerSection>
            <ContainerSection title="Payment" className="c-margin-top-3">
                <FormField type="text" placeholder="Player Name"/>
                <FormField type="text" placeholder="Player Age"/>
                <FormField type="text" placeholder="Player Name"/>
            </ContainerSection>
            <div className="c-margin-top-3 text-center">
                <Button text="Back" onClick={this.props.stepDecrease} className="c-margin-right-1" type="primary"/>
                <Button onClick={this.props.stepIncrease} text={"Register" + (this.props.selectedPlan !== null ? " ($" + this.props.selectedPlan.price + ")" : "")} type="success" disabled={this.props.selectedPlan === null ? true : false}/>
            </div>
        </form>
    )
  }
}