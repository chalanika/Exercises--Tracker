import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';

class Test extends Component {
    state = {  
        arr:[1,2,3,4,5],
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() { 
        return ( 
            <div className="m-5"><Button color="danger" >Danger!</Button>
            <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect" >
          <option>Select</option>
          {this.state.arr.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
        </Input>
      </FormGroup>
      <FormGroup>
      <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </FormGroup>
      
      <Button>Submit</Button>
    </Form>
    </div>
         );
    }
}
 
export default Test;