import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import Allbrojects from './bages/Allbrojects';
import Tasks from './bages/tasks';
import Blog from './bages/blog';
import Contactus from './bages/contactus';
import Homepage from './bages/Home page'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement:   
    <div id="error-page">
  <h1>Oops!</h1>
  <p>Sorry, an unexpected error has occurred.</p>
</div>
  },
  {
    path: "/Allbrojects.js",
    element: <Allbrojects />,
  
  },
  {
    path: "/tasks.js",
    element: <Tasks />
  },
  {
    path: "/blog.js",
    element: <Blog />
  },
  {
    path: "/contactus.js",
    element: <Contactus />
  }





]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
