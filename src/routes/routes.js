import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/main-page/MainPage";
import {TodosPage} from "../pages/todos-page/TodosPage";
import {AlbumsPage} from "../pages/albums-page/AlbumsPage";
import {CommentsPage} from "../pages/comments-page/CommentsPage";
import {PostDetailsPage} from "../pages/post-details-page/PostDetailsPage";
import React from "react";

export const routes = createBrowserRouter([
    {path:'/',
        element: <MainPage/>,
        errorElement:'error',
        children:[
            {path:'todos', element: <TodosPage/>},
            {path:'albums', element: <AlbumsPage/>},
            {path:'comments', element: <CommentsPage/>},
            {path:'posts', element: <PostDetailsPage/>}
        ]
    }
])