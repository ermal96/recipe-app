import React from 'react';
import { Card, CardTitle, CardImg, CardBody } from 'reactstrap';
import classes from './Search.module.css'

const SearchBox = (props) => {
  return (
    <div>
      <Card className={classes.card}>
        <CardImg className={classes.cardImg} top width="100%" src={props.recipeImg} alt="Recipe Img"/>
        <CardBody className={classes.cardBody}>
          <CardTitle className={classes.cardTitle} >{props.recipeTitle}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchBox;
