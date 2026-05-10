import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout';
import Home from './components/Home/Home';
import AllJobs from './components/AllJobs/AllJobs';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/Register/Register';

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
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
