import React, {useContext} from 'react';
import { Navbar, Nav, Dropdown, Icon, Button } from 'rsuite';
import logo from '../../assets/dbs.png';
import './NavigationBar.css';
import { useHistory } from "react-router-dom";


export const NavigationBar = () => {

    // const {userData} = useContext(UserContext);

    const history = useHistory();

    // const test = () => {
    //     console.log(userData);
    //     history.push("/");
    // }

    return(
        <div style={{width: "100%", height: "20%"}}>
            <Navbar>
                <Navbar.Header>
                <div>
                    <img className="dbslogo" alt="logo" src={logo} width="150px" height="50px"/>
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
                    <Button style={{alignSelf:"center"}} appearance="default">Log out</Button>
                </Nav>
                </Navbar.Body>
            </Navbar>
        </div>
    )
}