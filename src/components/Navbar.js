import React, {Component} from "react";
import {Link} from "react-scroll";
import logo from '../logo.png';

class Navbar extends Component{
    state={};
    render() {
        return(
            <div className="navbar">
                <div className="logo"><img src={logo}></img> </div>

                <ul>
                <li><Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >Main</Link>
                </li>

                <li><Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >About</Link>
                </li>

                <li><Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
                >Contact</Link>
                </li>

                    
                    
                </ul>

            </div>
        )

    }
}

export default Navbar;