import React from 'react';
// import Home from '../Components/home/Home';
import Home from '../Components/Hheader';
import Values from '../Components/Values';
import Whynow from '../Components/Whynow';
import Problems from '../Components/Problems';
import Works from '../Components/Howitworks';
import Footer from '../Components/Footer';
// import Companies from '../Components/companies/Companies';
// import Articles from '../Components/articles/Articles';

export default function Homefull() {
  return (
    <div>
      <Home />
      <Values />
      <Whynow />
      <Problems />
      <Works />
      <Footer />
      {/* <Companies />
      <Articles /> */}
    </div>
  );
}
