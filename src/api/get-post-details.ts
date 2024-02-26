import { api } from '../lib/axios'

export interface GetPostDetailsParams {
  postId: string
}

interface Author {
  name: string
  mail: string
}

export interface GetPostDetailsResponse {
  id: number
  author: Author
  title: string
  content: string
  image: string
  createdAt: string
}

export async function getPostDetails({ postId }: GetPostDetailsParams) {
  const response = await api.get<GetPostDetailsResponse>(`/posts/${postId}`)
  return response.data
}
