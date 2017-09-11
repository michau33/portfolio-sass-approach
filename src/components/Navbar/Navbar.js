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
        );
    }
}