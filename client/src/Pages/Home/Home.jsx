import React from 'react'
import { Carousel } from '../../Components/Carousel'
import Categories from '../../Components/Categories'
import { AllProducts } from '../../Components/AllProducts'


export default function Home() {
  return (
    <div className=''>

<Carousel className=""></Carousel>
<div className='container mx-auto text-center font-bold text-3xl mt-20 h-full rounded-2xl bg-pink100'>
<Categories></Categories>
</div>
<div >
  <AllProducts/>
</div>
    </div>
  )
}
