import React, {Component} from 'react';
import SearchResults from "./Components/Search/SearchResults";
import Navigation from "./Components/Nav/Nav";
import RecentRecipes from "./Components/Recipes/RecentRecipes";
import {Container, Row, Col} from 'reactstrap';
class App extends Component {
  render() {
    return (
        <div className="recipe-content">
          <Navigation/>

          <Container >
            <Row className="main_row">
              <Col className="search_col" xs="3">
                <SearchResults/>
              </Col>

              <Col  xs="9">
                <div className="recent_recipes">
                  <RecentRecipes/>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
    );
  }
}

export default App;
