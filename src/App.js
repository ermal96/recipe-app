import React, {Component, Fragment} from 'react';
import Recipes from "./Components/Recipes/Recipes";
import Navigation from "./Components/Nav/Nav";
import Search from './Components/Search/Search'
import {Container, Row, Col} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="main-content">
        <Navigation/>
        <Container className="recipe-content">
        <Row>
          <Col xs="4">
           <Search />
          </Col>
          <Col xs="8">
            <Recipes/>
            <Recipes/>
          </Col>

        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
