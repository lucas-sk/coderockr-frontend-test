import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { Posts } from './pages/Post'
import { PostDetails } from './pages/Post/[id]'

export const router = createBrowserRouter([
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
