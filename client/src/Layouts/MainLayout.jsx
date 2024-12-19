
import { Outlet } from 'react-router-dom'
import { Footer } from '../Shared/Footer'
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
