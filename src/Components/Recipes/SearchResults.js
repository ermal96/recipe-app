import React, {Component, Fragment} from 'react';
import axios from "axios";
import classes from './Recipes.module.css';
import Search from '../Search/Search';
import SearchBox from '../Search/SearchBox';
import {API_KEY} from '../../Config';
import {Row, Col} from 'reactstrap';
class Recepies extends Component {

  state = {
    recipe: []
  }

  getRecipe = (e) => {
    e.preventDefault();
    const getRes = e.target.elements.username.value;

    axios
      .get(`search?key=${API_KEY}&q=${getRes}`)
      .then((res) => {
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
        <Row>
          {this
            .state
            .recipe
            .slice(0, 6)
            .map((name) => {
              return (
                <Fragment >

                  <Col sm="6">
                    < SearchBox recipeImg={name.image_url} recipeTitle={this.cutString(name.title, 21)}/>

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

export default Recepies;