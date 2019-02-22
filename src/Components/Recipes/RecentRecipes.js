import React, {Component, Fragment} from 'react';
import axios from "axios";
import RecipeCard from './RecentRecipesBox';
import {API_KEY} from '../../Config';
import {Container, Row, Col, Spinner, Modal} from 'reactstrap';
import FullRecipe from './FullRecipe';
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
    fullRecipe: false,
    ingredients: [],
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

  getRecipes = (id) => {

    axios
      .get(`get`, {
      params: {
        key: `${API_KEY}`,
        rId: id
      }
    })
      .then((res) => {
        const ingredients = res.data.recipe.ingredients;
        const fullRecipe = res.data.recipe
        this.setState({fullRecipe, ingredients, isLoaded: false})
        console.log(fullRecipe);

      })
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <Fragment>
        <Container>
          <div style={{
            display: "flex"
          }}>
            <p>Our Suggestions</p>
          </div>

          {this.state.isLoaded
            ? <Spinner color="warning"/>
            : null}
          <Row>
            <Container></Container>

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            {this.state.isLoaded
            ? <Spinner color="warning"/>
            : null}
                <FullRecipe
                recipeName={this.state.fullRecipe.title}
                recipeImgFull={this.state.fullRecipe.image_url}
                recipeAuthor={this.state.publisher}
                socialRank={this.state.fullRecipe.social_rank}
                ingredients={this
                .state
                .ingredients
                .map((name) => {
                  return <li>{name}</li>
                })} />
         

            </Modal>
            {this
              .state
              .recipe
              .slice(0, 8)
              .map((name) => {
                return (
                  <Col key={name.recipe_id} sm="3">
                    <div>
                      <RecipeCard
                        newRecipe={() => this.toggle()}
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