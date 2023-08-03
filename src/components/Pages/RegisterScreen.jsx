import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../css/theme.css';
import FormContainer from '../FormContainer';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <FormContainer>
      <h1>Register</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-3' controlId='name'>
          <Form.Label className='my-3'>Name</Form.Label>
          <Form.Control
           className='input  my-2'
            type='name'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-3' controlId='email'>
          <Form.Label className='my-3'>Your Email</Form.Label>
          <Form.Control
           className='input  my-2'
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-3' controlId='password'>
          <Form.Label className='my-3'>Password</Form.Label>
          <Form.Control
           className='input  my-2'
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='my-3' controlId='confirmPassword'>
          <Form.Label className='my-3'>Confirm Password</Form.Label>
          <Form.Control
           className='input  my-2'
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='outline-primary' className='w-100 mt-3 py-3'>
          Register
        </Button>
      </Form>

      <Row className='mx-auto py-5'>
        <Col>
        <Link to={`/login`}>or log in to your account</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;