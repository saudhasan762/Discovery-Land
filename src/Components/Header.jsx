import React , { Component } from "react";
import '../Css/dashboard.css'
import head_logo from '../Asset/logo.svg'
import { withRouter } from "react-router";

class Header extends Component{
    render(){
        return(
            <div>
                <div className="c-site-head__logo | js-logo-link" aria-label="Home" >
                    <img src={head_logo} alt=""></img>
                    <div className="navbar" id="header-navbar">
                        <ul className="ulist">
                            <li className="list-items" id="aboutus" onClick={()=>this.props.history.push('./AboutDLC')}>About DLC</li>
                            <li className="list-items" id="ourworlds">Our World</li>
                            <li className="list-items" id="exp">Experiences</li>
                            <li className="list-items" id="gallery">Gallery</li>
                            <li className="list-items" id="press">Press</li>
                        </ul>
                    </div>
                    <button type="button" className="c-site-head__toggle | js-menu-toggle js-menu-toggle--normal" data-stick="topMenu" data-stick-scroll="" aria-label="Toggle menu">
                        <div className="c-burger">
                            <div className="c-burger__line | js-burger__line"></div>
                            <div className="c-burger__line | js-burger__line" ></div>
                            <div className="c-burger__line | js-burger__line" ></div>

                            <div className="c-burger-close">
                                <div className="c-burger-close__line | js-burger-close__line--1" ></div>
                                <div className="c-burger-close__line | js-burger-close__line--2" ></div>
                            </div>
                        </div>
                    </button>
                    <h1 class="c-hero-slider__title o-h0">
                        <div class="c-line c-line--1 | js-transition-line" >
                            <div className="dis-main">
                                <div className="dis-sub">Discover
                                </div>
                                <div className="dis-subb">your world</div>
                            </div>
                        </div>
                    </h1>
                </div>
            </div>
        )
    }
}
export default withRouter (Header)