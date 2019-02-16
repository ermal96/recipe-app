import React, {Component, Fragment} from 'react';
import axios from "axios";
import classes from './Recipes.module.css';
import Search from '../Search/Search';
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
        <Search getRecipe={this.getRecipe}/> {this
          .state
          .recipe
          .slice(27)
          .map((name) => {
            return (
              <div className={classes.recipe_col} key={name.recipe_id}>
                <img alt="Recipe Img" className={classes.recipe_img} src={name.image_url}/>
                <div className={classes.recipe_info}>
                  <p className={classes.title}>
                    {this.cutString(name.title, 20)
                    }
                  </p>

                </div>
              </div>

            )
          })
}

      </Fragment>
    );
  }
}

export default Recepies;