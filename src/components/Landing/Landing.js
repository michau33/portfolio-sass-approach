import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Landing extends Component {
    render() {
        return(
            <div className="landing">
                <h1 className="landing__title">michal<strong>dev</strong></h1>
                <MediaQuery className="centered" query='(max-width: 798px)'>
                    <span className="landing__subtitle">Learn more</span>
                    <div className="landing__arrow" />
                </MediaQuery>
                <MediaQuery query='(min-width: 799px)'>
                    <div className="landing__button landing__button--close">More</div>
                </MediaQuery>
            </div>
        );
    }   
}

export default Landing;