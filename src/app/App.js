import React from 'react';
import './App.css';
import {LandingPageHeader} from './components/LandingPageHeader';
import { Banner } from './components/LandingPageHeader';

function App() {
  return (
    <div>
      <LandingPageHeader/>
      <Banner/>
   </div>
  );
}

// returns JSX, and the naming is PascalCase

//Component name must be PascalCase
//NavigationBar
//not navigationBar, navigation-Bar, navigation_bar


export default App;