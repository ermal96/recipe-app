import React, {Component} from 'react';
import Recipes from "./Components/Recipes/Recipes";
import Navigation from "./Components/Nav/Nav";
import Search from './Components/Search/Search'
import {Container, Row, Col} from 'reactstrap';
class App extends Component {

state = {
  name: "Home"
}

  render() {
    return (
      <div className="main-content">
        <Navigation name={this.state.name}/>
        <Container className="recipe-content">
        
        <Row>
          <Col xs="3" >
           <Search />
           <Recipes/>
          </Col>
          <Col xs="9">
            <Recipes/>
          </Col>

        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
