import React, {Component, Fragment} from 'react';
import axios from "axios";
import RecipeCard from './RecentRecipesBox';
import {API_KEY} from '../../Config';
import {Container, Row, Col, Spinner} from 'reactstrap';

const ingredints = [
  "Dairy",
  "butter",
  "egg",
  "milk",
  "Vegetables",
  "tomato",
  "Fruits",
  "pasta",
  "Spices",
  "vanilla"
];

const randomItem = ingredints[Math.floor(Math.random() * ingredints.length)];
const cutString = (str, len) => str.substring(0, (str + ' ').lastIndexOf(' ', len));
class Recepies extends Component {

  state = {
    recipe: [],
    isLoaded: true,
    modal: false
  }

  componentDidMount() {

    axios
      .get(`search`, {
      params: {
        key: `${API_KEY}`,
        q: `${randomItem}`
      }
    })
      .then((res) => {
        const recipe = res.data.recipes;
        this.setState({recipe, isLoaded: false})
        console.log(recipe);

      })

  }


toggle = () => {
  this.setState(prevState => ({
    modal: !prevState.modal
  }));
}

  getRecipes = (id) => {
 

    axios
      .get(`get`, {
      params: {
        key: `${API_KEY}`,
        rId: id
      }
    })
      .then((res) => {
        console.log(res.data);
        console.log(id)

      })
  }

  render() {
    return (
      <Fragment>
        <Container>
          <div style={{
            display: "flex"
          }}>
            <p>Sort By</p>
          </div>

          {this.state.isLoaded
            ? <Spinner color="warning"/>
            : null}
          <Row>
            <div>
              <h1></h1>
              <p></p>

            </div>
            {this
              .state
              .recipe
              .slice(0, 8)
              .map((name) => {
                return (
                  <Col key={name.recipe_id} sm="3">
                    <div>
                      <RecipeCard
                        getRecipe={() => this.getRecipes(name.recipe_id)}
                        author={name.publisher}
                        recipeImg={name.image_url}
                        recipeTitle={cutString(name.title, 20)}/>
                    </div>
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