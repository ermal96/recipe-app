import React, {Fragment} from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navigation = () => {
  return (
    <Fragment>
      <Container>
        <Navbar color="success" dark expand="md">
          <NavbarBrand href="/">Recipe App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Test</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </Container>
    </Fragment>

  );

};

export default Navigation;