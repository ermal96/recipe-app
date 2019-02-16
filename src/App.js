import React, {Component, Fragment} from 'react';
import Recipes from "./Components/Recipes/Recipes";
//import Navigation from "./Components/Nav/Nav";
//import Search from './Components/Search/Search'
import {Container, Row, Col} from 'reactstrap';
class App extends Component {

  state = {
    name: "Home"
  }

  render() {
    return (
      <Fragment>
        <Container className="recipe-content">
          <Row>
            <Col xs="2">
              <Recipes/>
            </Col>
            <Col xs="10"></Col>

          </Row>
        </Container>
        </Fragment>
    );
  }
}

export default App;
