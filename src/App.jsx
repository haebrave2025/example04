import React from 'react';
import MovieList from "./screens/MovieList.jsx";
import {Outlet} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default App;