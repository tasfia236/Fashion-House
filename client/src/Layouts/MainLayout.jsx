
import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/Footer'
import Navbar from '../shared/Navbar'



export const MainLayout = () => {
  return (
    <div >
      <Navbar></Navbar>
       <div>
        <div>
         
        </div>
        <Outlet></Outlet>
       </div>
       <Footer></Footer>
    </div>
  )
}
