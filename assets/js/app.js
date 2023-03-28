import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Hello from "../controllers/Hello";
import List from "../controllers/List";
import Header from "../controllers/Header";
import About from "../controllers/About";

const ar = [
    {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в документацию React!'},
    {id: 2, title: 'Установка', content: 'React можно установить из npm.'}
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <List value={ar}></List>,
    },
    {
        path: "/about",
        element: <About/>
    }
]);
class App extends React.Component {


    render() {
        return (
            <div className='container'>
                <Header></Header>
                <RouterProvider router={router}>

                </RouterProvider>
            </div>

        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))