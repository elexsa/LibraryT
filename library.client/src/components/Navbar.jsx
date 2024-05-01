import React, { Component } from 'react';
//import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink }
//import { Link } from 'react-router-dom';
//import './NavbarStyles.css';
import { MenuData } from "./MenuData";
import "./NavbarStyle.css";

class Navbar extends Component { 
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="logo">
                    React <i class="fa-solid fa-book"></i>
                </h1>
                <ul className="nav-menu">
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}>
                                    <i class={item.icon}></i>{item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    } I
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