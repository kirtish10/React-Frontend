import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Pages/Header';


function App() {

  return (
    <>
    <Header></Header>
    <Container className='my-2'>
        <Outlet></Outlet>
      </Container>
   
    </>
  )
}

export default App
