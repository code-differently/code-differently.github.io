
import React, { useState } from 'react';
import { Collapse, NavbarBrand, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";


const NavigationBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavbarBrand href="/">Code Differently</NavbarBrand>
              <NavItem>
                <NavLink>
                  <Link to="/schedule">Schedule</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/resources">Resources</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default NavigationBar;
  