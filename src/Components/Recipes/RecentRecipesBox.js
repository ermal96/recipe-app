import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';
import classes from './RecentRecipes.module.css';

const RecipeCard = (props) => {
  return (
    <div>

      <Card className={classes.card}>
        <CardImg className={classes.cardImg} top width="100%" src={props.recipeImg} alt="Recipe Img"/>
        <CardBody className={classes.cardBody}>
          <CardTitle>{props.recipeTitle}</CardTitle>
          <CardText>
            <small className="text-muted">{props.author}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeCard;