import React, {useContext} from 'react';
import { Navbar, Nav, Dropdown, Icon, Button } from 'rsuite';
import logo from '../../assets/dbs.png';
import './NavigationBar.css';
import { useHistory } from "react-router-dom";
import * as actions from '../../actions';


export const NavigationBar = () => {


    const history = useHistory();

     const test = () => {
         actions.logout();
         history.push("/");
     }

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
                    <Nav.Item onClick={()=>history.push('/home')} icon={<Icon icon="home" />} >Home</Nav.Item>
                    <Nav.Item onClick={()=>history.push('/orderhistory')}>Order History</Nav.Item>
                    <Nav.Item onClick={()=>history.push('/currentpricing')}>Current Pricing</Nav.Item>
                    <Nav.Item onClick={()=>history.push('/buy')}>Buy</Nav.Item>
                    <Nav.Item onClick={()=>history.push('/sell')}>Sell</Nav.Item>
                    <Nav.Item>Products</Nav.Item>
                    {/* <Dropdown title="About">
                    <Dropdown.Item onSelect={()=>console.log('hi')}>Company</Dropdown.Item>
                    <Dropdown.Item>Team</Dropdown.Item>
                    <Dropdown.Item>Contact</Dropdown.Item>
                    </Dropdown> */}
                </Nav>
                <Nav pullRight >
                    <Button className="buttonNav" onClick={()=>test()}>Log out</Button>
                </Nav>
                </Navbar.Body>
            </Navbar>
        </div>
    )
}