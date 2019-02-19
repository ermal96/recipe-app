import React from 'react';
import {Card, CardTitle,  CardImg, CardBody} from 'reactstrap';

const SearchBox = (props) => {
  return (
    <div>

      <Card>
        <CardImg style={{height: "80px"}} top width="100%" src={props.recipeImg} alt="Recipe Img"/>
        <CardBody style={{padding: "13px 17px"}}>
          <CardTitle style={{marginBottom: "0"}}>{props.recipeTitle}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default SearchBox;
