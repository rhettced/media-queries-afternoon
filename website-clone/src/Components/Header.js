import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    constructor() {
        super();
        this.state = {
            menu: false
        }

    }

    slide = () => {
        this.setState( {menu: !this.state.menu} );
    }

    render() {
        return (
            <header>
                <div className='site-header'>
                    <h1 className='site-title'>Bootstrap</h1>
                    <div className='navbar-icon' onClick={this.slide}>
                        Menu &#9776;
                    </div>
                    <nav className='menu'>
                        <a href='#' className='menu-option'>Services</a>
                        <a href='#' className='menu-option'>Portfolio</a>
                        <a href='#' className='menu-option'>About</a>
                        <a href='#' className='menu-option'>Team</a>
                        <a href='#' className='menu-option'>Contact</a>
                    </nav>
                </div>
                {/* slide out menu */}

                <nav className={this.state.menu ? 'menu2 slide' : 'menu2'}>
                    <a href='#' className='menu-option'>Services</a>
                    <a href='#' className='menu-option'>Portfolio</a>
                    <a href='#' className='menu-option'>About</a>
                    <a href='#' className='menu-option'>Team</a>
                    <a href='#' className='menu-option'>Contact</a>
                </nav>



            </header>
        );
    }
}

export default Header;