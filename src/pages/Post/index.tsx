import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/get-posts'
import { LoaderIcon } from '../../components/icons/loaderIcon'
import { ReadMoreIcon } from '../../components/icons/readMoreIcon'
import { queryClient } from '../../lib/react-query'
import { mergeArrays } from '../../utils/mergeArrays'

export function Posts() {
  const { data: posts, isLoading } = useQuery(
    {
      queryKey: ['post'],
      queryFn: () => getPosts(),
    },
    queryClient,
  )

  if (isLoading) {
    return (
      <div className="mx-auto mt-[60px] flex items-center justify-center">
        <LoaderIcon className="animate-spin size-12" />
      </div>
    )
  }

  const postIds = posts.map((post) => post.id)

  function sortPosts(postsIds: number[]) {
    const postsBig: number[] = []
    const firstPartPostInvert: number[] = []
    const secondPartPostsInvert: number[] = []
    const postsBigInvert: number[] = []

    for (let i = 2; i < postsIds.length; i += 6) {
      postsBig.push(postsIds[i])
    }
    for (let i = 3; i < postsIds.length; i += 6) {
      firstPartPostInvert.push(postsIds[i])
    }
    for (let i = 4; i < postsIds.length; i += 6) {
      secondPartPostsInvert.push(postsIds[i])
    }
    for (let i = 5; i < postsIds.length; i += 6) {
      postsBigInvert.push(postsIds[i])
    }

    return {
      postsBig,
      postsBigInvert,
      postsInvert: mergeArrays(firstPartPostInvert, secondPartPostsInvert),
    }
  }

  const { postsBig, postsInvert, postsBigInvert } = sortPosts(postIds)

  return (
    <div className="max-w-[1920px] mx-auto mt-[60px] space-y-32 pb-40">
      <div className="grid grid-cols-2 gap-y-80">
        {posts.map((post) => {
          if (postsBig.includes(post.id)) {
            return (
              <div
                key={post.id}
                className="bg-white col-span-2 justify-self-end  max-w-7xl h-[640px] flex gap-20"
              >
                <img src={post.image} alt="" className="max-w-[640px]" />
                <div className="self-center max-w-[480px]">
                  <p className="text-2xl leading-[34.13px]">
                    {post.author.name}
                  </p>
                  <h3 className="text-gamboge-500 text-[36px] leading-[42.66px] mt-6 mb-[10px]">
                    {post.title}
                  </h3>
                  <p className="text-2xl leading-[34.13px]">
                    {post.content.slice(0, 100)}
                  </p>
                </div>
                <Link className="self-end mr-10 mb-10" to={`${post.id}`}>
                  <ReadMoreIcon />
                </Link>
              </div>
            )
          }
          if (postsBigInvert.includes(post.id)) {
            return (
              <div
                key={post.id}
                className="bg-white col-span-2 max-w-7xl h-[640px] flex gap-20"
              >
                <img src={post.image} alt="" className="max-w-[640px]" />
                <div className="self-center max-w-[480px]">
                  <p className="text-2xl leading-[34.13px]">
                    {post.author.name}
                  </p>
                  <h3 className="text-gamboge-500 text-[36px] leading-[42.66px] mt-6 mb-[10px]">
                    {post.title}
                  </h3>
                  <p className="text-2xl leading-[34.13px]">
                    {post.content.slice(0, 100)}
                  </p>
                </div>
                <Link className="self-end mr-10 mb-10" to={`${post.id}`}>
                  <ReadMoreIcon />
                </Link>
              </div>
            )
          }

          if (postsInvert.includes(post.id)) {
            return (
              <div
                key={post.id}
                className="bg-white grid grid-cols-3 auto-rows-[320px] items-start pl-20"
              >
                <img
                  src={post.image}
                  alt=""
                  className="size-80 col-start-3 row-start-1"
                />
                <div className="self-center flex gap-4 col-span-2 col-start-1 row-start-1 mr-10">
                  <div>
                    <p className="text-2xl leading-[34.13px]">
                      {post.author.name}
                    </p>
                    <h3 className="text-gamboge-500 text-[36px] leading-[42.66px]">
                      {post.title}
                    </h3>
                    <p className="text-2xl leading-[34.13px]">
                      {post.content.slice(0, 100)}
                    </p>
                  </div>
                  <Link className="self-end" to={`${post.id}`}>
                    <ReadMoreIcon />
                  </Link>
                </div>
              </div>
            )
          }

          return (
            <div
              key={post.id}
              className="bg-white grid grid-cols-3 h-[320px] items-start pr-20"
            >
              <img src={post.image} alt="" className="size-80 col-span-1" />
              <div className="self-center flex gap-4 col-span-2 ml-20">
                <div>
                  <p className="text-2xl leading-[34.13px]">
                    {post.author.name}
                  </p>
                  <h3 className="text-gamboge-500 text-[36px] leading-[42.66px]">
                    {post.title}
                  </h3>
                  <p className="text-2xl leading-[34.13px]">
                    {post.content.slice(0, 100)}
                  </p>
                </div>
                <Link className="self-end" to={`${post.id}`}>
                  <ReadMoreIcon />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
