import { QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { queryClient } from './lib/react-query'
import { Posts } from './pages/Post'
import { PostDetails } from './pages/Post/[id]'

import './index.css'

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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
