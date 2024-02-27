import * as Dialog from '@radix-ui/react-dialog'
import { Link } from 'react-router-dom'
import { CrossIcon } from './icons/crossIcon'
import { SendIcon } from './icons/sendIcon'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export function Header() {
  return (
    <header className="w-full p-7 bg-shaft-950 text-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <h1 className="text-4xl leading-[42.66px] font-bold">Rockr Blog</h1>
        <nav className="space-x-32">
          <Link className="text-2xl leading-[37.92px]" to={'/'}>
            Posts
          </Link>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="text-2xl leading-[37.92px]">Contact</button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow  fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-6 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-2xl text-gamboge-500 font-bold text-center mb-4">
                  Contact
                </Dialog.Title>
                <form action="" className="flex flex-col gap-8">
                  <label htmlFor="name" className="flex flex-col gap-1">
                    Name
                    <Input
                      type="text"
                      id="name"
                      placeholder="Fill your full name"
                      className="placeholder:text-black/50 border rounded-sm border-shaft-950 p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-shaft-950/50"
                    />
                  </label>
                  <label htmlFor="email" className="flex flex-col gap-1">
                    E-mail
                    <Input
                      type="text"
                      id="email"
                      placeholder="Fill a valid e-mail"
                      className=""
                    />
                  </label>
                  <label htmlFor="phone" className="flex flex-col gap-1">
                    Phone
                    <input
                      type="text"
                      id="phone"
                      placeholder="Fill your phone"
                      className="placeholder:text-black/50 border rounded-sm border-shaft-950 p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-shaft-950/50"
                    />
                  </label>
                  <label htmlFor="post" className="flex flex-col gap-1">
                    Post
                    <Textarea
                      placeholder="hello"
                      id="post"
                      className="placeholder:text-black/50 border h-[200px] rounded-sm border-shaft-950 p-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-shaft-950/50 resize-none"
                    />
                  </label>
                  <Dialog.Close asChild>
                    <button className="inline-flex gap-9 bg-shaft-950 text-white py-3 px-10 max-w-[230px] items-center self-center hover:bg-shaft-950/90">
                      <SendIcon />
                      Submit
                    </button>
                  </Dialog.Close>
                </form>
                <Dialog.Close asChild>
                  <button
                    className="text-shaft-950 hover:text-shaft-950/60 focus:shadow-shaft-950  absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none focus-within:ring-2 focus-within:ring-shaft-950/10 transition-colors duration-200 ease-in-out focus-within:ring-offset-2 focus-within:ring-offset-shaft-950/50"
                    aria-label="Close"
                  >
                    <CrossIcon className="size-4" />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </div>
    </header>
  )
}
