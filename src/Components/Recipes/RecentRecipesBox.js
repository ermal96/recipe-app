import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';
import classes from './RecentRecipes.module.css';

const RecipeCard = (props) => {
  return (
    <div>

      <Card onClick={props.getRecipe} className={classes.card}>
        <CardImg className={classes.cardImg} top width="100%" src={props.recipeImg} alt="Recipe Img"/>
        <CardBody className={classes.cardBody}>
          <CardTitle>{props.recipeTitle}</CardTitle>
          <CardText>
            <small className="text-muted">{props.author}</small>
          </CardText>
          <Button onClick={props.newRecipe} size="sm" outline color="secondary">See More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;