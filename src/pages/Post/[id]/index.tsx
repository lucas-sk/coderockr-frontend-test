import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostDetails } from '../../../api/get-post-details'
import { queryClient } from '../../../lib/react-query'

export function PostDetails() {
  const { id: postId } = useParams()
  const navigate = useNavigate()

  if (!postId) {
    navigate('/')
  }

  const { data: post } = useQuery(
    {
      queryKey: ['post', postId],
      queryFn: () => {
        if (!postId) return
        return getPostDetails({ postId })
      },
    },
    queryClient,
  )

  const createdAtPostFormatted = dayjs(
    new Date(post.createdAt.slice(0, -1)), // para remover o z minusculo que está vindo da api
  ).format('MMM D, YYYY')

  return (
    <div className="max-w-screen-xl mx-auto bg-white space-y-32 pb-40">
      <header className="grid grid-cols-2">
        <img src={post?.image} alt="post" className="w-full object-cover" />
        <div className="self-center justify-self-center flex flex-col gap-4 max-w-[400px]">
          <p className="text-[18px] leading-[25.6px]">
            {createdAtPostFormatted}
          </p>
          <p className="text-2xl leading-[34.13px]">{post?.author.name}</p>
          <h2 className="text-gamboge-500 text-[36px] leading-[42.66px] font-bold">
            {post?.title}
          </h2>
        </div>
      </header>
      <main className="px-[250px] max-w-780">
        <p className="text-[24px] leading-[34.13px]">{post?.content}</p>
      </main>
    </div>
  )
}
