import React from 'react';
import {useState} from "react";
//import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink }
//import { Link } from 'react-router-dom';
//import './NavbarStyles.css';
import { MenuData } from "./MenuData";
import { SearchBar } from "./SearchBar";
import "./NavbarStyles.css";


function Navbar()
{
    const [state, setState] = useState(true);
    const handleClick = () => {setState({ clicked: !state.clicked })}


    return (

        <nav className="NavbarItems">
            <h1 className="logo">
                Library <i class="fa-solid fa-book"></i>
            </h1>

            <div className="end-wrapper">
                <div className="search-bar-container">
                    <SearchBar />
                </div>


                <div className="menu-icons" onClick={handleClick}>
                    <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
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