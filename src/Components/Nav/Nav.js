import React, {Fragment} from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import classes from './Nav.module.css';

const Navigation = () => {
  return (
    <Fragment>
      
        <Navbar className={classes.navigation}  dark expand="md">
        <Container>
          <NavbarBrand href="/">Recipe App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Test</NavLink>
            </NavItem>
          </Nav>
          </Container>
        </Navbar>
     
    </Fragment>

  );

};

export default Navigation;