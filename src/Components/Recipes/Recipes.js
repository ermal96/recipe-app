import React, {Component, Fragment} from 'react';
import axios from "axios";
import classes from './Recipes.module.css';
import Search from '../Search/Search';
import RecipeCard from './RecipeBox';
import SearchBox from '../Search/SearchBox';
import {API_KEY, baseUrl} from '../../Config';
import {Row, Col, Container} from 'reactstrap';
class Recepies extends Component {

  state = {
    recipe: []
  }

  getRecipe = (e) => {
    e.preventDefault();
    const getRes = e.target.elements.username.value;

    axios({url: `${baseUrl}key=${API_KEY}&q=${getRes}`, type: 'GET'}).then((res) => {
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
            .slice(26)
            .map((name) => {
              return (
                <Fragment >

                  <Col sm="12">
                    <SearchBox
                      author={name.publisher}
                      recipeImg={name.image_url}
                      recipeTitle={this.cutString(name.title, 27)}/>

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