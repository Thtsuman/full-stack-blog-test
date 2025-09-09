import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Homepage, LoginPage, PostListPage, RegisterPage, SinglePostPage, WritePage } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layout/mainLayout';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/posts", element: <PostListPage /> },
      { path: "/:slug", element: <SinglePostPage /> },
      { path: "/write", element: <WritePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
