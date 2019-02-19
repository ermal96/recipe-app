import React, {Component, Fragment} from 'react';
import Recipes from "./Components/Recipes/Recipes";
import Navigation from "./Components/Nav/Nav";
//import Slide from "./Components/Slide/Slide";
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
            <Row style={{
              marginTop: "5px"
            }}>
              <Col xs="3" style={{
                paddingLeft: "30px"
              }}>
                <Recipes/>
              </Col>

              <Col xs="9" style={{
                marginTop: "27px"
              }}>
              <Container>
               <p>Sort By</p>
               </Container>
                <div style={{
                marginTop: "20px"
              }}>
                <RecentRecipes />
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
