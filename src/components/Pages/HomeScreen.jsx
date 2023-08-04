import Hero from './Hero';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
const HomeScreen = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [auth, setAuth] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      if (!localStorage.getItem('userInfo')) {
        navigate('/login');
      }
      else{
        setAuth(true)
      }
    }, [navigate, userInfo]);

    
  return (
    <>
    {auth &&  <Hero />}
    </>
  );
};

export default HomeScreen;