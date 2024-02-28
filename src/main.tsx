import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'sonner'
import { DefaultLayout } from './layout/defaultLayout'
import { queryClient } from './lib/react-query'
import { Posts } from './pages/Post'
import { PostDetails } from './pages/Post/[id]'

import './index.css'
import { RegisterNewPost } from './pages/Post/RegisterNewPost'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/:id',
        element: <PostDetails />,
      },
      {
        path: '/post/register',
        element: <RegisterNewPost />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
