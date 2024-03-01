import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/get-posts'
import { LoaderIcon } from '../../components/icons/loaderIcon'
import { ReadMoreIcon } from '../../components/icons/readMoreIcon'
import { queryClient } from '../../lib/react-query'
import { formatText } from '../../utils/formatText'
import { mergeArrays } from '../../utils/mergeArrays'

export function Posts() {
  const { data: posts, isLoading } = useQuery(
    {
      queryKey: ['posts'],
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

  const postIds = posts?.map((post) => post.id)

  if (!postIds) {
    return null
  }

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
    <>
      <Helmet title="Posts" />
      <div className="max-w-[1920px] mx-auto mt-[60px] space-y-32 pb-40">
        <div className="flex flex-col gap-40 2xl:grid 2xl:grid-cols-2 2xl:gap-y-80 2xl:gap-x-0">
          {posts?.map((post) => {
            if (postsBig.includes(post.id)) {
              return (
                <div
                  key={post.id}
                  className="bg-white 2xl:col-span-2 justify-self-end self-end w-full lg:max-w-7xl flex flex-col min-h-[640px] lg:flex-row gap-4 md:gap-20 "
                >
                  <img src={post.image} alt="" className="lg:max-w-[640px]" />
                  <div className="self-center xl:max-w-[480px] px-4">
                    <p className="text-2xl leading-[34.13px]">
                      {post.author.name}
                    </p>
                    <h3 className="text-gamboge-500 text-[36px] leading-[42.66px] mt-6 mb-[10px]">
                      {post.title}
                    </h3>
                    <p className="text-2xl leading-[34.13px]">
                      {formatText(post.content, 20)}
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
                  className="bg-white 2xl:col-span-2 w-full lg:max-w-7xl flex flex-col min-h-[640px] lg:flex-row gap-4 md:gap-20 "
                >
                  <img src={post.image} alt="" className=" object-cover " />
                  <div className="self-center xl:max-w-[480px] px-3">
                    <p className="text-2xl leading-[34.13px]">
                      {post.author.name}
                    </p>
                    <h3 className="text-gamboge-500 text-[36px] leading-[42.66px] mt-6 mb-[10px]">
                      {post.title}
                    </h3>
                    <p className="text-2xl leading-[34.13px]">
                      {formatText(post.content, 20)}
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
                  className="bg-white flex flex-col lg:flex-row min-h-[320px] 2xl:pl-20"
                >
                  <img src={post.image} alt="" className="xl:size-80" />
                  <div className="self-center flex flex-col gap-4 px-4 lg:mr-10">
                    <p className="text-2xl leading-[34.13px]">
                      {post.author.name}
                    </p>
                    <h3 className="text-gamboge-500 text-[36px] leading-[42.66px]">
                      {post.title}
                    </h3>
                    <p className="text-2xl leading-[34.13px]">
                      {formatText(post.content, 20)}
                    </p>
                  </div>
                  <Link
                    className="self-end mr-4 md:mr-10 mb-10"
                    to={`${post.id}`}
                  >
                    <ReadMoreIcon />
                  </Link>
                </div>
              )
            }

            return (
              <div
                key={post.id}
                className="bg-white flex flex-col lg:flex-row min-h-[320px]"
              >
                <img src={post.image} alt="" className="lg:size-80" />
                <div className="self-center flex flex-col gap-4 px-4 ">
                  <p className="text-2xl leading-[34.13px]">
                    {post.author.name}
                  </p>
                  <h3 className="text-gamboge-500 text-2xl font-semibold md:text-[36px] leading-[42.66px]">
                    {post.title}
                  </h3>
                  <p className="text-2xl leading-[34.13px]">
                    {formatText(post.content, 20)}
                  </p>
                </div>
                <Link
                  className="self-end mr-4 md:mr-10 mb-10"
                  to={`${post.id}`}
                >
                  <ReadMoreIcon />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
