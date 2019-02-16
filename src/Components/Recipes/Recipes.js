import React, {Component, Fragment} from 'react';
import axios from "axios";
import classes from './Recipes.module.css';
import Search from '../Search/Search';
import RecipeCard from './RecipeBox';
import { Row, Col } from 'reactstrap';
class Recepies extends Component {

  state = {
    recipe: []
  }

  API_KEY = "d3493c543de62d5fa1ed6502ec2373ae";
  baseUrl = "https://www.food2fork.com/api/search?";

  getRecipe = (e) => {
    e.preventDefault();
    const getRes = e.target.elements.username.value;

    axios({url: `${this.baseUrl}key=${this.API_KEY}&q=${getRes}`, type: 'GET'}).then((res) => {
      const recipe = res.data.recipes;
      this.setState({recipe})
      console.log(recipe);
    })

  }
  cutString = (str, len) => str.substring(0, (str + ' ').lastIndexOf(' ', len));

  render() {
    return (
      <Fragment>
        <div className={classes.search}>
          <Search getRecipe={this.getRecipe}/>
        </div>
        {this
          .state
          .recipe
          .slice(22)
          .map((name) => {
            return (
              <Fragment >
                <Row>
                  <Col xs="4">
                    <RecipeCard
                      id={name.recipe_id}
                      author={name.publisher}
                      recipeImg={name.image_url}
                      recipeTitle={name.title}/>

                  </Col>
                </Row>
              </Fragment>
            )
          })
}

      </Fragment>
    );
  }
}

export default Recepies;