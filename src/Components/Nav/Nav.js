import React, {Fragment} from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Nav.module.css';
const Navigation = (props) => {
  return (
    <Fragment>
      <Navbar className={classes.navigation} dark expand="md">
        <Container>
          <NavbarBrand href="/">Recipe App</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <FontAwesomeIcon icon="coffee"/> 
                 Breakfast</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Lunch</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Dinner</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

    </Fragment>

  );

};

export default Navigation;