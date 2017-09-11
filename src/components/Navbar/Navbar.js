import React, { Component } from 'react';

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
            <div className="nav">
                <div className="nav__toggle">
                    <div className={ this.state.toggleMenu ? "toggle__hamburger toggle__hamburger--toggled": "toggle__hamburger"} onClick={ this.toggleMenu.bind( this ) }>
                    </div>
                </div>
                <ul className={ this.state.toggleMenu ? "nav__menu nav__menu--open" : "nav__menu nav__menu--closed"}>
                    <li className="menu__item fa fa-home"/>
                    <li className="menu__item fa fa-github"/>
                    <li className="menu__item fa fa-codepen"/>
                    <li className="menu__item fa fa-gamepad"/>
                    <li className="menu__item fa fa-linkedin"/>
                </ul>
            </div>
        );
    }
}