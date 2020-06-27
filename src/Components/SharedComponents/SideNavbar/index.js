import React from 'react';
import { Link } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

/**
 * Internal CSS components
 */
import './SideNavbar.scss';


const SideNavbar = () => {
    return (
        <SideNav className= "side-nav">
            <Link  to= "/">
                <h4 className= "logo" >MY <br />HOME</h4>
            </Link>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <img src= "/assets/icons/icon-home.svg" alt= "home-icon" />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="users">
                    <NavIcon>
                    <img src= "/assets/icons/icon-users.svg" alt= "users-icon" />
                    </NavIcon>
                    <NavText>
                        Users
                    </NavText>
                </NavItem>
                <NavItem eventKey="list">
                    <NavIcon>
                    <img src= "/assets/icons/icon-list.svg" alt= "list-icon" />
                    </NavIcon>
                    <NavText>
                        List
                    </NavText>
                </NavItem>
                <NavItem eventKey="settings">
                    <NavIcon>
                    <img src= "/assets/icons/icon-settings.svg" alt= "settings-icon" />
                    </NavIcon>
                    <NavText>
                        List
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

export default SideNavbar;