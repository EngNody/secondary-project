import React from 'react';
import Footer from "../comp/Footer";
import Header from '../comp/header';
import MainContentReusableComponent from '../comp/MainContentReusableComponent'
import { Helmet } from 'react-helmet-async';


const Homepage = () => {
  return (
    <div id='Homepage'>
      <Helmet>
        <title>Hello Egypt</title>
        <meta name="description" content="React Full Course for beginners"/>  
            </Helmet>
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






