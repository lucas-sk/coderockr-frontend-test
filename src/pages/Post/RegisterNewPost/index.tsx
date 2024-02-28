import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { RegisterPost } from '../../../api/register-post'
import imgUrl from '../../../assets/photo-new-post.png'
import { SendIcon } from '../../../components/icons/sendIcon'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { queryClient } from '../../../lib/react-query'

const registerPostSchema = z.object({
  title: z.string().min(3, 'Title too short'),
  author: z.string().min(3, 'Author too short'),
  imageUrl: z.string().url('Invalid URL'),
  content: z.string().min(5, 'Content too short'),
})

type RegisterPostSchema = z.infer<typeof registerPostSchema>

export function RegisterNewPost() {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<RegisterPostSchema>({
    resolver: zodResolver(registerPostSchema),
  })

  const { mutateAsync: registerPost } = useMutation(
    {
      mutationFn: RegisterPost,

      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['posts'] })
      },
    },
    queryClient,
  )

  function handleRegisterPost({
    author,
    content,
    imageUrl,
    title,
  }: RegisterPostSchema) {
    const newPost = {
      author,
      content,
      title,
      image: imageUrl,
      createdAt: new Date().toISOString(),
    }
    registerPost(newPost)
    toast.success('Post registered')
    reset()
  }

  return (
    <div className="mt-[100px] max-w-7xl mx-auto bg-white">
      <div className="flex py-28 justify-center flex-col items-center max-w-[565px] mx-auto space-y-[78px]">
        <img src={imgUrl} alt="" />
        <form
          className="w-full space-y-12"
          onSubmit={handleSubmit(handleRegisterPost)}
        >
          <h3 className="text-[36px] font-bold leading-[42.66px] text-center text-gamboge-500">
            New Post
          </h3>
          <div className="flex flex-col items-center gap-12">
            <label
              htmlFor="title"
              className="flex flex-col gap-1 w-full text-[24px]"
            >
              Title
              <Input
                type="text"
                id="title"
                placeholder="Fill the title"
                {...register('title')}
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </label>
            <label
              htmlFor="author"
              className="flex flex-col gap-1 w-full text-[24px]"
            >
              Author
              <Input
                type="text"
                id="author"
                placeholder="Fill the author name"
                {...register('author')}
              />
              {errors.author && (
                <span className="text-red-500 text-sm w-full">
                  {errors.author.message}
                </span>
              )}
            </label>
            <label
              htmlFor="imageUrl"
              className="flex flex-col gap-1 w-full text-[24px]"
            >
              Image Url
              <Input
                type="text"
                id="imageUrl"
                placeholder="Fill the image URL"
                {...register('imageUrl')}
              />
              {errors.imageUrl && (
                <span className="text-red-500 text-sm">
                  {errors.imageUrl.message}
                </span>
              )}
            </label>
            <label
              htmlFor="content"
              className="flex flex-col gap-1 w-full text-[24px]"
            >
              Post
              <Textarea
                placeholder="Post..."
                id="content"
                {...register('content')}
              />
              {errors.content && (
                <span className="text-red-500 text-sm">
                  {errors.content.message}
                </span>
              )}
            </label>
            <button
              type="submit"
              className="inline-flex gap-9 bg-shaft-950 text-white py-3 px-10 max-w-[230px] items-center self-center hover:bg-shaft-950/90"
            >
              <SendIcon />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
