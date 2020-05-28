import React from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Section7 from './Components/Section7';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section4 from './Components/Section4';
import Section3 from './Components/Section3';
import Section1 from './Components/Section1';
import Teams from './Components/Teams';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <>
    <Header/>
    <Section1/>
    <Section3 />
    <Section4/>
    <Section5/>
    <Section6/>
    <Teams/>
    <Section7/>
    <Footer/>

    </>
  );
}

export default App;
