import React, {Component, Fragment} from 'react';
import axios from "axios";
import Search from './Search';
import SearchBox from './SearchBox';
import {API_KEY} from '../../Config';
import { Row, Col, Spinner, Modal } from 'reactstrap';
import FullRecipe from '../Recipes/FullRecipe';
class SearchResults extends Component {

  state = {
    recipe: [],
    isLoaded: false,
    fullRecipe: false,
    ingredients: [],
    modal: false
  }

  getRecipe = (e) => {
    e.preventDefault();
    const getRes = e.target.elements.username.value;
    this.setState({isLoaded: true})
    axios
      .get(`search?key=${API_KEY}&q=${getRes}`)
      .then((res) => {
        const recipe = res.data.recipes;
        this.setState({recipe, isLoaded: false})
        //console.log(recipe);
      })

  }
  cutString = (str, len) => str.substring(0, (str + ' ').lastIndexOf(' ', len));

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
        <Search getRecipe={this.getRecipe}/> {this.state.isLoaded
          ? <Spinner color="warning"/>
          : null}
        <Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            {this.state.isLoaded
            ? <Spinner color="warning"/>
            : null}
                <FullRecipe
                />
         

            </Modal>
          {this
            .state
            .recipe
            .slice(0, 6)
            .map((name) => {
              return (
                <Fragment >
                  <Col sm="6">
                    <SearchBox
                      newRecipe={() => this.toggle()}
                      getRecipe={() => this.getRecipes(name.recipe_id)}
                      recipeImg={name.image_url}
                      recipeTitle={this.cutString(name.title, 21)}
                    />
                  </Col>
                </Fragment>
              )
            })
}
        </Row>

      </Fragment>
    );
  }
}

export default SearchResults;