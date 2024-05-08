import React from 'react';
import './App.css';
import {LandingPageHeader} from '../components/LandingPageHeader';
import { Banner } from '../components/LandingPageHeader';
import {Icons} from '../components/Icons';
import Card from '../components/PickPremium';
// import Login from '../components/Login';

function App() {
  return (
    <div>
      <LandingPageHeader/>
      <Banner/>
      <Icons/>
      <Card/>
      {/* <Login/> */}
   </div>
  );
}

// returns JSX, and the naming is PascalCase

//Component name must be PascalCase
//NavigationBar
//not navigationBar, navigation-Bar, navigation_bar


export default App;