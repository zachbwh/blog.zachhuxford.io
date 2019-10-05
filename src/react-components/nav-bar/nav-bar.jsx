import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBars } from '@fortawesome/free-solid-svg-icons';

import './nav-bar.css'

library.add(faHome, faSearch, faGlobe, faBars);

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMobileNav: false
        }
    }

    render() {
        var mobileNav;
        if (this.state.showMobileNav) {
            mobileNav = (
                <div className="mobileNavBar">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="https://zachhuxford.io">zachhuxford.io</a></li>

                    </ul>
                </div>
            )
        } else {
            mobileNav = <div></div>
        }
        return (
            <div>
                <div className="navBar">
                    <button className="navBarItemLeft mobile" onClick={ this.showMobileNav.bind(this) }><FontAwesomeIcon icon="bars" /></button>
                    <a className="navBarItemLeft desktop" href="/"><FontAwesomeIcon icon="home" /> Home</a>
                    <a className="navBarItemLeft desktop" href="/about">About</a>
                    <a className="navBarItemRight desktop" href="https://zachhuxford.io">zachhuxford.io <FontAwesomeIcon icon="globe" /></a>
                    <input className="navBarItemRight search" placeholder="Search..." href="/" onKeyPress={this.onSearch}></input>
                </div>
                { mobileNav }
            </div>
        )
    }

    showMobileNav(event) {
        this.setState({
            showMobileNav: !this.state.showMobileNav
        });
    }

    onSearch(event) {
        if (event.key === 'Enter') {
            window.location.pathname = "/search/tags/" + event.target.value;
        }
    }
}

export default NavBar;