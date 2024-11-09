import React from 'react';
// import Home from '../Components/home/Home';
import Home from '../Components/Teamheader';
import Footer from '../Components/Footer';
import Team from '../Components/Team';
// import Companies from '../Components/companies/Companies';
// import Articles from '../Components/articles/Articles';

export default function Homefull() {
  return (
    <div>
      <Home />
      <Team />
      <Footer />
      {/* <Companies />
      <Articles /> */}
    </div>
  );
}