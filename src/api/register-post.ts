import { api } from '../lib/axios'

interface RegisterRestaurantRequest {
  title: string
  content: string
  author: string
  image: string
  createdAt: string
}

export async function RegisterPost({
  author,
  content,
  createdAt,
  image,
  title,
}: RegisterRestaurantRequest) {
  await api.post('/posts', {
    title,
    content,
    author,
    image,
    createdAt,
  })
}
