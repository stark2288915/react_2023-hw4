import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "./pages/main-page/MainPage";
import {AlbumsPage} from "./pages/albums-page/AlbumsPage";
import {TodosPage} from "./pages/todos-page/TodosPage";
import {CommentsPage} from "./pages/comments-page/CommentsPage";
import {PostDetailsPage} from "./pages/post-details-page/PostDetailsPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {path:'/',
        element: <MainPage/>,
        errorElement:'error',
        children:[
            {path:'todos', element: <TodosPage/>},
            {path:'albums', element: <AlbumsPage/>},
            {path:'comments', element: <CommentsPage/>},
            {path:'comments/post', element: <PostDetailsPage/>}
        ]
    }
])

root.render(
  <RouterProvider router={routes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
