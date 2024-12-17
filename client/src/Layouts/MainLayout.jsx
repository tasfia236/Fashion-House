
import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer'
import Navbar from '../Shared/Navbar'

export const MainLayout = () => {
  return (
    <div >
       <Navbar></Navbar>
       <div>
        <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}
