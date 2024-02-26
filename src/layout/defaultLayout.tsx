import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function DefaultLayout() {
  return (
    <div className="max-w-screen min-h-screen space-y-24 pb-28">
      <Header />
      <Outlet />
    </div>
  )
}
