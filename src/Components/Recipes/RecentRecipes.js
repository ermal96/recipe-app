import React, {Component, Fragment} from 'react';
import axios from "axios";
import RecipeCard from './RecentRecipesBox';
import { API_KEY} from '../../Config';
import {Container, Row, Col, Spinner} from 'reactstrap';
class Recepies extends Component {

  state = {
    recipe: [],
    isLoaded: true
  }

  componentDidMount() {

    axios.get(`search?key=${API_KEY}&q=pizza`
    )
    .then((res) => {
      const recipe = res.data.recipes;
      this.setState({recipe, isLoaded: false})
      console.log(recipe);

    })

  }

  cutString = (str, len) => str.substring(0, (str + ' ').lastIndexOf(' ', len));

  render() {
    return (
      <Fragment>
        <Container>
          {this.state.isLoaded
            ? <Spinner color="warning" />
            : null}
          <Row>
            {this
              .state
              .recipe
              .slice(0, 8)
              .map((name) => {
                return (
                  <Col key={name.recipe_id} sm="3">
                    <RecipeCard
                      author={name.publisher}
                      recipeImg={name.image_url}
                      recipeTitle={this.cutString(name.title, 22)}/>
                  </Col>
                )
              })
}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Recepies;