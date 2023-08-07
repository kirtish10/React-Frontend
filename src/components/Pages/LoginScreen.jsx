import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setUserId, setEmailId } from '../../slices/authSlice';
import { login } from '../../slices/usersApiSlice'; // Import the axios API functions
import Loader from '../Loader';
import FormContainer from '../FormContainer';

function LoginScreen() {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false)
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {

    if (token) {
      navigate('/home');
    }
  }, [navigate, token]);

  const submitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const res = await login({ email })
        .then((res) => {
          if (res.status === 200) {
            dispatch(setUserId({ ...res.data.payload }));
            dispatch(setEmailId({ ...{ email } }))
            navigate('/verify');
          }
          else {
            console.log("Error Handling")
            console.log(res)
          }
        });

    } catch (err) {
      console.log(err)
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);

    }
  };

  return (
    <FormContainer>
      <h1>LOGIN</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-3' controlId='email'>
          <Form.Label className='my-3'>Email Address</Form.Label>
          <Form.Control
            className='input  my-2'
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>



        <div className='mt-5'><Form.Check
          type='checkbox'
          id={`default-checkbox`}
          label='Remember me'
        /></div>

        <Button className='py-3 mt-5 w-100' disabled={isLoading}
          type='submit'>
          LOGIN
        </Button>
      </Form>


      {isLoading && <Loader />}


      <Row className='mx-auto py-5'>
        <Col>
          <Link to={`/login`}>Forgotten password?</Link>
        </Col>
      </Row>

      <Row className='h3 color-primary mx-auto'>
        <Col>
          Don’t have an account yet?
        </Col>
      </Row>

      <Row className='mx-auto my-3'>
        <Col>
          <Link to={`/register`}>Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen