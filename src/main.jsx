import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout';
import Home from './components/Home/Home';
import AllJobs from './components/AllJobs/AllJobs';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/Register/Register';
import MyJobs from './components/MyJobs/MyJobs';
import Login from './components/Login/Login';
import JobDetails from './components/JobDetails/JobDetails';
import AcceptedTasks from './components/AcceptedTask/AcceptedTasks';

const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children : [
      {
        index : true,
        Component : Home

      },

      {
        path : 'allJobs',
        Component : AllJobs
      },

      {
        path : 'register',
        Component : Register
      },

      {
        path : 'login',
        Component : Login
      },

      {
        path : 'myJobs',
        element : <MyJobs></MyJobs>
      },

      {
        path : 'acceptedTask',
        element : <AcceptedTasks></AcceptedTasks>
      },

      {
        path : 'jobDetails/:id',
        Component : JobDetails

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
      </AuthProvider>
  </StrictMode>,
)
