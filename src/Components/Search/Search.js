import React, { Fragment} from 'react';

import { Form, FormGroup, Input} from 'reactstrap';

const Search = (props) => {
  return (
    <Fragment>

      <Form inline onSubmit={props.getRecipe}>
        <FormGroup style={{width: "100%"}}>
          <Input style={{width: "100%"}}  name="username" type="text" placeholder="Search for Recipe"/>
        </FormGroup>
      </Form>
       
    </Fragment>

  );

};

export default Search;
