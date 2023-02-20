import React from 'react';
import Footer from "../comp/Footer";
import Header from '../comp/header';
import MainContentReusableComponent from '../comp/MainContentReusableComponent'


const Homepage = () => {
  return (
    <div id='Homepage'>
      <Header/>

{/* fixed component */}
    {/* <h1>Home page</h1> */}

    {/* reusable component */}
    <MainContentReusableComponent country="Egypt"/>


    <Footer/>

    </div>
  );
}


export default Homepage;






