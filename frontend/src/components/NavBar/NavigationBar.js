import React, {useContext} from 'react';
import { Navbar, Nav, Dropdown, Icon, Button } from 'rsuite';
// import UserContext from '../../UserContext';
import logo from '../../assets/dbs.png';
import './NavigationBar.css';
import { useHistory } from "react-router-dom";


export const NavigationBar = () => {

    // const {userData} = useContext(UserContext);

    // const history = useHistory();

    // const test = () => {
    //     console.log(userData);
    //     history.push("/");
    // }

    return(
        <div>
            <Navbar>
                <Navbar.Header>
                <div>
                    <img className="dbslogo" alt="logo" src={logo}/>
                </div>
                </Navbar.Header>
                <Navbar.Body>
                <Nav>
                    <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
                    <Nav.Item>Dashboard</Nav.Item>
                    <Nav.Item>Buy/Sell</Nav.Item>
                    <Nav.Item>Account</Nav.Item>
                    <Nav.Item>History</Nav.Item>
                </Nav>
                <Nav pullRight >
                    <Button className="buttonNav">Log out</Button>
                </Nav>
                </Navbar.Body>
            </Navbar>
        </div>
    )
}