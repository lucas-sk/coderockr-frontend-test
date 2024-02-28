import { api } from '../lib/axios'

interface RegisterRestaurantRequest {
  name: string
  email: string
  phone: string
  post: string
}

export async function RegisterContact({
  name,
  email,
  phone,
  post,
}: RegisterRestaurantRequest) {
  await api.post('/contacts', {
    name,
    email,
    phone,
    post,
  })
}
