import React, { Component } from 'react';
import ApiInstance from "../../js/Api.js";
import BigContainer from "../elements/BigContainer";
import ContainerSection from "../elements/ContainerSection";
import CalendarBanner from "../elements/CalendarBanner";
import ReactHtmlParser from 'react-html-parser';
import RegistrationContainer from "./RegistrationContainer";
import RatingStars from "../elements/RatingStars";
import Review from "../elements/Review";

const Api = ApiInstance.instance;


export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        clinic: {},
        reviews: [],
    };
  }

  componentDidMount() {
    Api.getClinic(this.props.match.params.id).then((response)=> {
        this.setState({
            clinic: response,
        });

        Api.getReviews(this.props.match.params.id).then((response)=> {
            this.setState({
                reviews:response,
                loading: false
            });
        });

    });
  }

  render() {
    let date = new Date(this.state.clinic.datetime),
    locale = "en-us",
    month = date.toLocaleString(locale, { month: "short" }),
    day = date.getDate(),
    year = date.getFullYear().toString().substr(-2);
    return (
        <div>
        { this.state.loading ?
            <div/>
        :
            <div className="c-page-padding">
                <BigContainer header={<div><span className="fas primary-blue">&#xf05a;</span> Info </div>}>
                    <CalendarBanner day={day} month={month} year={year} ypos={-20} xpos={700}/>
                    <div className="graduate primary-blue bold font-large">
                    {this.state.clinic.name}
                    </div>
                     <div className="graduate primary-blue font-med c-margin-top-05">
                     {this.state.clinic.clinic.organizer.userprofile.user.first_name} {this.state.clinic.clinic.organizer.userprofile.user.last_name}
                     </div>
                     <RatingStars rating={2} className="c-margin-bottom-5 c-margin-top-05" />
                     <div className="font-med graduate c-margin-bottom-3">
                        { ReactHtmlParser(this.state.clinic.description) }
                     </div>
                    <ContainerSection title="Registration">
                        <RegistrationContainer history={this.props.history} clinic={this.state.clinic}/>
                    </ContainerSection>
                </BigContainer>
                
                <BigContainer className="c-margin-top-5" header={<div><span className="fas primary-blue">&#xf022;</span> Reviews </div>}>
                    {this.state.reviews.map((review) => {
                       return <Review review={review} />
                    })
                    }
                </BigContainer>
            </div>
        }
        </div>
    )
  }
}
