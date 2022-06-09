import React from 'react'
import SearchNDisplay from './SearchNDisplay'
import Nav from './Nav'
import Signup from './Signup'
import Footer from './Footer'
import './App.css'


function Landing() {
  return (
    <div>
      <>
      <Nav/>
      <Signup />
      <SearchNDisplay />
      <Footer />
      </>

      </div>
    
  );
}

export default Landing;

