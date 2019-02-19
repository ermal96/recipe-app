import React, {Component, Fragment} from 'react';
import axios from "axios";
import Search from './Search';
import SearchBox from './SearchBox';
import {API_KEY} from '../../Config';
import {Row, Col, Spinner} from 'reactstrap';
class SearchResults extends Component {

  state = {
    recipe: [],
    isLoaded: false
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

  render() {
    return (
      <Fragment>
        <Search getRecipe={this.getRecipe} />
        {this.state.isLoaded
            ? <Spinner color="warning" />
            : null}
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

export default SearchResults;