import { api } from '../lib/axios'

interface Author {
  name: string
  mail: string
}

interface Post {
  id: string
  author: Author
  title: string
  content: string
  image: string
  createdAt: string
}

export type GetPostResponse = Post[]

export async function getPosts() {
  const response = await api.get<GetPostResponse>('/posts')
  return response.data
}
