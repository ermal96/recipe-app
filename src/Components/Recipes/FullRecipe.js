import React, {Fragment} from 'react';
import classes from './FullRecipe.module.css';

const FullRecipe = (props) => {
  return (
    <Fragment>

      <div className={classes.full_recipe}>

        <div>
          <img className={classes.full_img} src={props.recipeImgFull} alt="Recipe"/>
          
        </div>

        <div className={classes.ingredients}>
          <h4>{props.recipeName}</h4>

          <ul>
            {props.ingredients}

          </ul>

        </div>

      </div>
    </Fragment>
  );
}

export default FullRecipe;