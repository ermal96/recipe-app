import React from 'react';
import {Card, CardTitle, CardText, CardImg, CardBody} from 'reactstrap';

const RecipeCard = (props) => {
  return (
    <div>

      <Card>
        {props.key}
        <CardImg top width="100%" src={props.recipeImg} alt="Card image cap"/>
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