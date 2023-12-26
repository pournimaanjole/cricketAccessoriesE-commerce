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
import CricketBats from './views/CricketBats/CricketBats';
import EnglishWillow from './views/EnglishWillow/EnglishWillow';
import NewBlance from './views/NewBlance/NewBlance';
import RubberSole from './views/RubblerSole/RubberSole';
import BattingPads from './views/BattingPads/BattingPads';
import WicketkeepingGloves from './views/WicketkeepingGloves/WicketkeepingGloves';
import WicketkeepingPads from './views/WicketkeepingPads/WicketkeepingPads';
import BattingGloves from './views/BattingGloves/BattingGloves';
import Spikes from './views/Spikes/Spikes';
import Willeingbags from './views/Willeinbags/Willeingbags';
import Backpacks from './views/Backpacks/Backpacks';
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
  },
  {
    path:'/cricketbats/kashmir',
    element:<CricketBats/>
  },
  {
    path:'/cricketbats/english',
    element:<EnglishWillow/>
  },
  {
    path:'/newblance',
    element:<NewBlance/>
  },{
    path:'/rubberSoles',
    element:<RubberSole/>
  },
  {
    path:"/spkies",
    element:<Spikes/>
  },
  {
    path:'/battingGloves',
    element:<BattingGloves/>
  },
  {
    path:'/battingPads',
    element:<BattingPads/>
  },
  {
    path:'/wicketkeepingGloves',
    element:<WicketkeepingGloves/>
  },
  {
    path:'/wicketkeepingPads',
    element:<WicketkeepingPads/>
  },
  {
    path:'/packs',
    element:<Backpacks/>
  },
  {
    path:'/bags',
    element:<Willeingbags/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router} />
);


