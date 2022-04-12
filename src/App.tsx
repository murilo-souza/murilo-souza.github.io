import React from 'react';
import { PrincipalPage } from './Screens/LandingPage';
import { GlobalStyles } from './styles/GlobalStyles';
import { SkillAndProjectProvider } from './hooks/useSkillsAndProjects'; 

export default function App() {
  return (
    <SkillAndProjectProvider>
      <PrincipalPage/>
      <GlobalStyles/>
    </SkillAndProjectProvider>
  );
}