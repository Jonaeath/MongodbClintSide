import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState('');
  const namegate = useNavigate();

  const handelRegister = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const PhotoURL = form.PhotoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name,PhotoURL,email,password)

      createUser(email, password)
      .then(result =>{
        const user = result.user;
        setError('');
        namegate('/login')
        console.log(user);
      } )
      .catch(error => {
        console.error(error)
        setError(error.message)
      });

  }
  return (
    <div>
      <Form onSubmit={handelRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Enter your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="PhotoURL" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-muted">
          {error}
          </Form.Text>
      </Form>
    </div>
  );
};

export default Register;
