import { Link } from "react-router-dom";

export function Header(){
  return (
    <header className="w-full p-7 bg-shaft-950 text-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <h1 className="text-4xl font-bold">Rockr  Blog</h1>
        <nav className="space-x-32">
          <Link className='text-3xl' to={'/'}>Posts</Link>
          <button>Contact</button>
        </nav>
      </div>
    </header>
  )
}