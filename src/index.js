import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// import './tab3ToDoList'
// import App from './App';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import Allbrojects from './bages/Allbrojects';
import Tasks from './bages/tasks';
import Blog from './bages/blog';
import Contactus from './bages/contactus';
import Homepage from './bages/Home page'
import { HelmetProvider } from 'react-helmet-async';


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
  <HelmetProvider>

  <React.StrictMode>
    <RouterProvider router={router} />
    <BrowserRouter>
    </BrowserRouter>
  </React.StrictMode>
  </HelmetProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();
