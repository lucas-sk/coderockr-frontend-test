import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../api/get-posts'
import { queryClient } from '../../lib/react-query'

export function Posts() {
  const { data: result } = useQuery(
    {
      queryKey: ['post'],
      queryFn: () => getPosts(),
    },
    queryClient,
  )

  console.log(result)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
