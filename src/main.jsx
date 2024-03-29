import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Error from './components/Error/Error';
import JobDetails from './components/JobDetails/JobDetails';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [{
      path: "/",
      element: <Home></Home>
    },
  {
    path: "/applied",
    element: <AppliedJobs></AppliedJobs>,
    loader: () => fetch('../jobs.json')
  },
{
  path: "/job/:id",
  element: <JobDetails></JobDetails>,
  loader: () => fetch('../jobs.json') // do not load all data, load only what you need.
}],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>

  </React.StrictMode>,
)
