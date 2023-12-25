import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// https://thegodofsports.com/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './views/Home/Home'
import Badminton from './views/Badminton/Badminton';
import Cricket from './views/Cricket/Cricket';
import Football from './views/Football/Football';
import Tennis from './views/Tennis/Tennis';
import Volleyball from './views/Volleyball/Volleyball';
import Sportopedia from './views/Sportopedia/Sportopedia';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/badminton',
    element:<Badminton/>
  },
  {
    path:'/tennis',
    element:<Tennis/>
  },
  {
    path:'/cricket',
    element:<Cricket/>
  },
  {
    path:'/football',
    element:<Football/>
  },
  {
    path:'/volleyball',
    element:<Volleyball/>
  },
  {
    path:'/sportopedia',
    element:<Sportopedia/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router} />
);


