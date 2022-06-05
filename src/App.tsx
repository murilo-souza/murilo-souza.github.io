import React from 'react';
import { Navbar } from './components/Navbar';
import { PrincipalPage } from './Screens/LandingPage';
import { GlobalStyles } from './styles/GlobalStyles'; 

export default function App() {
  
  return (
    <>
      <Navbar/>
      <PrincipalPage/>
      <GlobalStyles/>
    </>
    
  );
}