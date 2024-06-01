import React from 'react';
import {useEffect } from 'react';
import {useState} from "react";
//import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink }
//import { Link } from 'react-router-dom';
//import './NavbarStyles.css';
import { MenuData } from "./MenuData";
import { SearchBar } from "./SearchBar";
import { Link } from 'react-router-dom';
import "./NavbarStyles.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';

function Navbar()
{
    const [state, setState] = useState(true);
    const handleClick = () => { setState({ clicked: !state.clicked }) }

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [lastScrollY]);


    return (

        <nav className={`NavbarItems navbar ${isVisible ? 'visible' : 'hidden'}`}>
            <a href="/">
                <h1 className="logo">
                    Library <i class="fa-solid fa-book"></i>
                </h1>
            </a>


            <div className="end-wrapper">
                <div className="search-bar-container">
                    <SearchBar />
                </div>


                <div className="menu-icons" onClick={handleClick}>
                    <i className={state.clicked ? "fas fa-xmark" : "fas fa-bars"}></i>
                </div>

                <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i className={item.icon}></i>{item.title}
                                </a>
                            </li>
                        )
                    })}
                    {/*<li>*/}
                    {/*    <button className="nav-links" onClick={() => login()}>*/}
                    {/*        <i className="fa-brands fa-google"></i>*/}
                    {/*        SignIn*/}
                    {/*    </button>*/}
                    {/*</li>*/}
                    {/*<GoogleLogin*/}
                    {/*    onSuccess={(credentialResponse) => {*/}
                    {/*        const credentialResponseDecoded = jwtDecode(credentialResponse.credential)*/}
                    {/*        console.log(credentialResponseDecoded);*/}
                    {/*    }}*/}
                    {/*    onError={() => {*/}
                    {/*        console.log("Login Failed");*/}
                    {/*    }}*/}
                    {/*/>*/}
                </ul>
            </div>
        </nav>

    )
}
    

export default Navbar;
//export class NavMenu extends Component {
//    static displayName = NavMenu.name;
//    constructor(props) {
//        super(props);
//        this.toggleNavbar = this.toggleNavbar.bind(this);
//        this.state = {
//            collapsed: true
//        };
//    }
//    toggleNavbar() {
//        this.setState({
//            collapsed: !this.state.collapsed
//        });
//    }
//    render() {
//        return (
//            <header>
//                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom boxshadow mb-3" collapsed>
//                    <NavbarBrand tag={Link} to="/">RankingApp</NavbarBrand>
//                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
//                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isopen={!this.state.collapsed} navbar>
//                        <ul className="navbar-nav flex-grow">
//                            <NavItem>
//                                <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
//                            </NavItem>
//                            <NavItem>
//                                <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
//                            </NavItem>
//                            <NavItem>
//                                <NavLink tag={Link} className="text-dark" to="/test">Fetch data</NavLink>
//                            </NavItem>
//                        </ul>
//                    </Collapse >
//                </Navbar >
//            </header >
//            );
//    }
//}