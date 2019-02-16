import React, {Component, Fragment} from 'react';
import axios from "axios";
import RecipeCard from './RecipeBox';
import {Container, Row, Col} from 'reactstrap';

class Recepies extends Component {

  state = {
    recipe: []
  }

  API_KEY = "ea6f30dffccbfc6129e4919746d12417";
  baseUrl = "https://www.food2fork.com/api/search?";

  componentDidMount() {

    axios({url: `${this.baseUrl}key=${this.API_KEY}&q=pizza`, type: 'GET'}).then((res) => {
      const recipe = res.data.recipes;
      this.setState({recipe})
      console.log(recipe);
    })

  }
  cutString = (str, len) => str.substring(0, (str + ' ').lastIndexOf(' ', len));

  render() {
    return (
        <Fragment>
            <Container>
                <Row>
          {this
            .state
            .recipe
            .slice(22)
            .map((name) => {
              return (
                <Col sm="3">
                  <RecipeCard
                    key={name.recipe_id}
                    author={name.publisher}
                    recipeImg={name.image_url}
                    recipeTitle={this.cutString(name.title, 27)}/>

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