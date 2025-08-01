import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import MovieList from "./screens/MovieList.jsx";
import TvList from "./screens/TvList.jsx";
import ActingList from "./screens/ActingList.jsx";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <MovieList/>
            },
            {
                path: "/tv",
                element: <TvList/>
            },
            {
                path: "/acting",
                element: <ActingList/>
            }
        ]
    }


])


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
    <RouterProvider router={router}/>
)
