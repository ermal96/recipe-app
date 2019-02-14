import React, {Fragment} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Search = () => {
  return (
    <Fragment>
     <Form inline>
        <FormGroup>
          <Input size="lg" type="text" name="email" id="exampleEmail" placeholder="Search" />
        </FormGroup>
    
      </Form>
     
    </Fragment>

  );

};

export default Search;