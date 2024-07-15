import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts, { loader as postLoader} from './routes/Posts.jsx';
import RootLayout from './routes/RootLayout.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NewPost, { action as newPostAction } from './routes/NewPost.jsx';
import PostDetails, { loader as detailsLoader } from './routes/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      { path: "/", 
        element: <Posts />, 
        loader: postLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction},
          { path: "/:id", element: <PostDetails />, loader: detailsLoader}
        ] }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
