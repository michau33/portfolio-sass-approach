import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

export default class Navbar extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            toggleMenu: false
        }
    }

    toggleMenu() {
        this.setState({
            toggleMenu: !this.state.toggleMenu
        })
    }

    render() {
        return(
            <div className="navbar">
                <MediaQuery query='( max-width: 769px )'>
                    <div className="nav">
                        <div className="nav__toggle" onClick={ this.toggleMenu.bind( this ) }>
                            <div className={ this.state.toggleMenu ? "toggle__hamburger toggle__hamburger--toggled": "toggle__hamburger"}>
                            </div>
                        </div>
                        <ul className={ this.state.toggleMenu ? "nav__menu nav__menu--open" : "nav__menu nav__menu--closed"}>
                            <li className="menu__item">
                                <span className="fa fa-home" />
                            </li>
                            <li className="menu__item">
                                <span className="fa fa-github" />
                            </li>
                            <li className="menu__item">
                                <span className="fa fa-codepen" />
                            </li>
                            <li className="menu__item">
                                <span className="fa fa-gamepad" />
                            </li>
                            <li className="menu__item">
                                <span className="fa fa-linkedin" />
                            </li>
                        </ul>
                    </div>
                </MediaQuery>
                <MediaQuery query='( min-width: 770px )'>
                        <div className="nav--desktop">
                            <div className="nav__home--desktop">
                                <i className="fa fa-home" />
                            </div>
                            <div className="nav__logo--desktop">
                                <h1> MichalDev </h1>
                            </div>
                            <div className="nav__menu--desktop">
                                <div className="menu__icons--desktop">
                                    <li className="menu__item--desktop">
                                        <i className="fa fa-github" />
                                    </li>
                                    <li className="menu__item--desktop">
                                        <i className="fa fa-codepen" />
                                    </li>
                                    <li className="menu__item--desktop">
                                        <i className="fa fa-gamepad" />
                                    </li>
                                    <li className="menu__item--desktop">
                                        <i className="fa fa-linkedin" />
                                    </li>
                                </div>
                            </div>
                        </div>
                </MediaQuery>
            </div>
        );
    }
}