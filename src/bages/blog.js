import React from 'react';
import Footer from "../comp/Footer";
import Header from '../comp/header';
// import { NavLink } from "react-router-dom";


const Blog = () => {
  return (
    <>
      <Header/>

    <div>
    <h1>Blog</h1>
<div className="thelist">
  <h1 className="title">To do list</h1>
  <div className="mytasks">
    <div className="task">
      <span className="icon-star-full icon" />
      <p className="ptext">Task 1 : Complete js</p>
      <div className="myspans">
        <span className="icon-bin icon" />
        <span className="icon-angry2 icon" />
      </div>
    </div>
    <div className="task">
      <span className="icon-star-full icon" />
      <p className="ptext">Task 2 : components w3</p>
      <div className="myspans">
        <span className="icon-bin icon" />
        <span className="icon-angry2 icon" />
      </div>
    </div>
    <div className="task">
      <span className="icon-star-full icon" />
      <p className="ptext">Task 3 : React</p>
      <div className="myspans">
        <span className="icon-bin icon" />
        <span className="icon-angry2 icon" />
      </div>
    </div>
    <div className="task">
      <span className="icon-star-full icon" />
      <p className="ptext">Task 4 : Mysql</p>
      <div className="myspans">
        <span className="icon-bin icon" />
        <span className="icon-angry2 icon" />
      </div>
    </div>
    <div className="task">
      <span className="icon-star-full icon" />
      <p className="ptext">Task 5 : Jquery</p>
      <div className="myspans">
        <span className="icon-bin icon" />
        <span className="icon-angry2 icon" />
      </div>
    </div>
    <div className="task">
      <span className="icon-star-full icon" />
      <p className="ptext">Task 6 : E </p>
      <div className="myspans">
        <span className="icon-bin icon" />
        <span className="icon-angry2 icon" />
      </div>
    </div>
  </div>
  <div className="another">
    <h2>Another Task ?</h2>
    <div className="newtask">
      <input
        id="myinput"
        type="text"
        name="name"
        required=""
        placeholder="insert task"
        maxLength={40}
      />
      {/* minlength="4"  size="10" */}
      <button title="upload" className="icon-upload2" />
    </div>
  </div>
</div>

    </div>
    <Footer/>

    </>
  );
}


export default Blog;
