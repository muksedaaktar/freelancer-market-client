import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './components/Home/Home';
import AllJobs from './components/AllJobs/AllJobs';
import JobDetails from './components/JobDetails/JobDetails';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import MyJobs from './components/MyJobs/MyJobs';
import AddJob from './components/AddJob/AddJob';
import UpdateJob from './components/UpdateJob/UpdateJob';
import AcceptedTasks from './components/AcceptedTask/AcceptedTasks';

// Private Route
import PrivateRoute from './routes/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [

      // PUBLIC ROUTES
      {
        index: true,
        element: <Home />
      },
      {
        path: "allJobs",
        element: <AllJobs />
      },
      {
        path: "allJobs/:id",
        element: <JobDetails />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "login",
        element: <Login />
      },

      {
        path : '*',
        element : <NotFound/>
      },

      // PRIVATE ROUTES
      {
        path: "addjob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        )
      },
      {
        path: "myJobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        )
      },
      {
        path: "acceptedTask",
        element: (
          <PrivateRoute>
            <AcceptedTasks />
          </PrivateRoute>
        )
      },
      {
        path: "updateJob/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        )
      }

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>

  </StrictMode>
);