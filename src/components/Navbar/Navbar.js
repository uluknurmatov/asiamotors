import React from 'react';
import './Navbar.css';
import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap";
import Menu from '../../assets/img/menu.png'
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
      <div className='navbar_items'>
        <div className='container'>
            {/* <div className='navbar_filter'>
                <ul className='nav_items'>
                    <li><img className='menu_img' src={Menu}/>Find Items</li>
                    <li>How to Buy
                        <ul>
                            <li>Save</li>
                            <li>Save</li>
                            <li>Save</li>
                        </ul>
                    </li>
                    <li>Shipping</li>
                    <li>Community</li>
                </ul>
            </div> */}
            <Navbar bg="light" expand="lg">
  <Container>
      <Nav.Link href="/cars">
        <img className='menu_img' src={Menu} />
        Find Items
      </Nav.Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="How to Buy" id="basic-nav-dropdown">
          <div className='nav_wrapper'>
            <div className='nav_items'>
              <Link to={'/what-is-bis'}>
          <NavDropdown.Item className="nav_title" href="#action/3.1">Purchase guide</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className='nav_item' href="#action/3.2">Buy it safely!</NavDropdown.Item>
          </Link>
          <Link to={'/steps'}>
          <NavDropdown.Item className='nav_item' href="#action/3.3">Steps</NavDropdown.Item>
          </Link>
          <Link to={'/how-to-pay'}>
          <NavDropdown.Item className='nav_item' href="#action/3.4">How to Pay</NavDropdown.Item>
          </Link>
          <Link to={'/buyers'}>
          <NavDropdown.Item className='nav_item' href="#action/3.4">Must-know for buyers</NavDropdown.Item>
          </Link>
          <Link to={'/contacts'} >
          <NavDropdown.Item className='nav_item' href="#action/3.4">Contact our staff</NavDropdown.Item>
          </Link>
          </div>
          <div className='nav_items'>
          <NavDropdown.Item className="nav_title" href="#action/3.1">Services</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className='nav_item' href="#action/3.2">Self Booking</NavDropdown.Item>
          <NavDropdown.Item className='nav_item' href="#action/3.3">Inspection</NavDropdown.Item>
          <NavDropdown.Item className='nav_item' href="#action/3.4">Dociment Fee</NavDropdown.Item>
          <NavDropdown.Item className='nav_item'  href="#action/3.4">Container Shipping</NavDropdown.Item>
          <NavDropdown.Item className='nav_item' href="#action/3.4">Contact our staff</NavDropdown.Item>
          </div>
          <div className='nav_items'>
          <NavDropdown.Item className="nav_title" href="#action/3.1">FAQ</NavDropdown.Item>
          <NavDropdown.Divider />
          </div>
        </div>
        </NavDropdown>
        <NavDropdown title="Shipping" id="basic-nav-dropdown">
        <NavDropdown.Item className="nav_title" href="#action/3.1">Shipping Schedule</NavDropdown.Item>
        <NavDropdown.Item className="nav_title" href="#action/3.1">Shipping Photos</NavDropdown.Item>
        <NavDropdown.Item className="nav_title" href="#action/3.1">Type of Shipping</NavDropdown.Item>
        <NavDropdown.Item className='nav_item' href="#action/3.4">Ro-Ro vessel</NavDropdown.Item>
        <NavDropdown.Item className='nav_item' href="#action/3.4">Container vessel</NavDropdown.Item>
        <NavDropdown.Item className='nav_item' href="#action/3.4">Consolidation</NavDropdown.Item>
        
        
        </NavDropdown>
        <NavDropdown title="Community" id="basic-nav-dropdown">
        <NavDropdown.Item className="nav_title" href="#action/3.1">Customer`s Reviews</NavDropdown.Item>
        <NavDropdown.Item className="nav_title" href="#action/3.1">Local Trade Information</NavDropdown.Item>
        <NavDropdown.Item className="nav_title" href="#action/3.1">AsiaMotor Magazine</NavDropdown.Item>
        <NavDropdown.Item className='nav_item' href="#action/3.4">Introduction of Korean Cars</NavDropdown.Item>
        <NavDropdown.Item className='nav_item' href="#action/3.4">Asiamotor Stories</NavDropdown.Item>
        
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
        </div>
    );
};

export default Navbars;