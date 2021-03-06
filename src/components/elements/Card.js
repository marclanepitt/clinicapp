import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../../scss/elements/card.css";

class Card extends Component {
  render() {
    return (
        <div onClick={this.props.onClick} className="c-card">
            <div className="c-card-content">
                <div className="c-card-category">
                    <div>
                    {this.props.category}
                    </div>
                </div>
                <div className="c-card-title">
                    {this.props.title}
                </div>
                <div className="c-card-subtitle">
                    {this.props.subtitle}
                </div>
                <div className="c-card-body">
                    {this.props.body}
                </div>
            </div>
        </div>
    )
  }
}

Card.propTypes = {
    title: PropTypes.string.isRequired
}
export default Card;
