
import { Carousel } from '../../Components/Carousel'

// import Products from './Product/Products'
import Categories from '../../Components/Categories'

export default function Home() {
  return (
    <div className=''>

      <Carousel />
      <div className='container mx-auto text-center font-bold text-3xl mt-20 h-full rounded-2xl bg-pink100'>
        <Categories></Categories>
      </div>

      {/* <Products /> */}

    </div>
  )
}
