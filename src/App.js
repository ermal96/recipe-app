import React, {Component, Fragment} from 'react';
import Recipes from "./Components/Recipes/Recipes";
import Navigation from "./Components/Nav/Nav";
//import Search from './Components/Search/Search'
import Slide from "./Components/Slide/Slide";
import RecentRecipes from "./Components/Recipes/RecentRecipes";
import {Container, Row, Col} from 'reactstrap';
class App extends Component {

  state = {
    name: "Home"
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <Slide/>
        <div className="recipe-content">
          <Container >

            <Row>
            <Col xs="2">
              <Recipes/>
              </Col>
             
              <RecentRecipes />
              
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default App;
