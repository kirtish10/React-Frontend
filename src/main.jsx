import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomeScreen from './components/Pages/HomeScreen.jsx';
import LoginScreen from './components/Pages/LoginScreen.jsx';
import RegisterScreen from './components/Pages/RegisterScreen.jsx';
import './index.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen/>} /> {/* Add this line */}
      <Route path='/register' element={<RegisterScreen />} /> {/* Add this line */}

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
