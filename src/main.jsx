import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Queries from './components/Queries/Queries.jsx';
import AllRecommendation from './components/AllRecommendations/AllRecommendation.jsx';
import Register from './components/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/queries',
        element: <Queries></Queries>,
      },
      {
        path: '/recommendations',
        element: <AllRecommendation></AllRecommendation>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
