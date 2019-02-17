import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const SearchBox = (props) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={props.recipeImg} alt="Card image cap" />
        <CardImgOverlay>
                  <CardTitle>{props.recipeTitle}</CardTitle>
          <CardText>
            <small className="text-muted">{props.author}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SearchBox;
