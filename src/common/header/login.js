import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

function Login() {
  const history = useHistory();
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput1Change = (event) => {
    setInputValue1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInputValue2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://troubled-teal-uniform.cyclic.app/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: inputValue1,
        password: inputValue2,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        Cookies.set('username', data[0].username, { expires: 7 });
        console.log(data);
        setErrorMessage('');
        history.push("/"); // แก้ไข "/other-page" เป็นเส้นทางที่คุณต้องการเด้งไป
      })
      .catch((error) => {
        console.error('There was an error!', error);
        setErrorMessage('Username or password is incorrect');
      });
  };

  return (
    <Container
      style={{
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px",
        width: "40%",
        margin: "auto",
        padding: "10%",
        marginTop: "10px",
        borderRadius: "10%"
      }}
    >
      <Row>
        <h1>Login</h1>
        <Form>
          <Form.Group controlId="usernameId">
            <Form.Label>User name</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter user name"
              value={inputValue1}
              style={{ marginBottom: "20px" }}
              onChange={handleInput1Change}
            />
            <FormControl.Feedback type="invalid"></FormControl.Feedback>
          </Form.Group>

          <Form.Group controlId="passwordId">
            <Form.Label>Your password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={inputValue2}
              style={{ marginBottom: "20px" }}
              onChange={handleInput2Change}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
          </Form.Group>
        </Form>
        <Button
          color="primary"
          username={inputValue1}
          password={inputValue2}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Row>
    </Container>
  );
}

export default Login;
