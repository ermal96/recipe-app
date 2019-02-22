import React from 'react';
import { Card, CardTitle, CardImg, CardBody, Button } from 'reactstrap';
import classes from './Search.module.css'

const SearchBox = (props) => {
  return (
    <div>
      <Card  className={classes.card}>{props.getRecipe}
        <CardImg className={classes.cardImg} top width="100%" src={props.recipeImg} alt="Recipe Img"/>
        <CardBody className={classes.cardBody}>
          <CardTitle className={classes.cardTitle} >{props.recipeTitle}</CardTitle>
          <Button style={{marginTop: "10px"}} onClick={props.newRecipe} size="sm" outline color="warning">More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchBox;
