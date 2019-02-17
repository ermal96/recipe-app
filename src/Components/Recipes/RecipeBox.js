import React from 'react';
import {Card, CardTitle, CardText, CardImg, CardBody} from 'reactstrap';

const RecipeCard = (props) => {
  return (
    <div>

      <Card>
        <CardImg top width="100%" src={props.recipeImg} alt="Recipe Img"/>
        <CardBody>
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