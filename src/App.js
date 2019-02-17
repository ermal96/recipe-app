import React, {Component, Fragment} from 'react';
import Recipes from "./Components/Recipes/Recipes";
import Navigation from "./Components/Nav/Nav";
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

        <div className="recipe-content">
          <Navigation/>
          <Container >
            <Row>
              <Col xs="3">
                <Recipes/>
              </Col>

              <Col xs="9">
             
                <div
                  style={{
                  marginTop: "20px",
                  paddingTop: "15px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "5px"
                }}>
                  <RecentRecipes/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default App;
