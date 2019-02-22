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
import Logo from '../../Assets/logo.svg';
import Home from '../../Assets/home.svg';
import Breakfast from '../../Assets/breakfast.svg';
import Lunch from '../../Assets/lunch.svg';
import Dinner from '../../Assets/dinner.svg';
import Contact from '../../Assets/contact.svg';

const Navigation = () => {
  return (
    <Fragment>
      <Navbar  className={classes.navigation} dark expand="md">
        <Container>
          <NavbarBrand href="/"><img className="logo" alt="logo" src={Logo} />Recipe Finder</NavbarBrand>

          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink>
              <img className="nav_icon" alt="Home" src={Home} />Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <img className="nav_icon" alt="Breakfast" src={Breakfast} />Breakfast</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <img className="nav_icon" alt="Lunch" src={Lunch} />Lunch</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <img className="nav_icon" alt="Dinner" src={Dinner} />  Dinner</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <img className="nav_icon" alt="Dinner" src={Contact} /> Contact</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>

    </Fragment>

  );

};

export default Navigation;