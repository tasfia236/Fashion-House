// Import Swiper styles
import pic3 from '../assets/pic3.jpg'
import pic2 from '../assets/pic2.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Carousel = () => {
  return (
    <>
  
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
      <div
        className="w-full bg-center bg-cover h-[700px] md:h-[950px] "
        style={{
          backgroundImage:
           `url(${pic3})`,
        }}
      >
         
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40 ">
        
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Elevate Your Shopping
            Experience Today!
            </h1>
            <button className="bg-sky300 rounded-lg text-black border-none p-4 font-bold mt-4">
              Explore More
            </button>
          </div>
        </div>
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div
        className="w-full bg-center bg-cover h-[700px] md:h-[950px]"
        style={{
          backgroundImage:
            `url(${pic2})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Elevate Your Shopping
            Experience Today!
            </h1>
            <button className="bg-sky300 rounded-lg text-black border-none p-4 font-bold mt-4">
              Explore More
            </button>
          </div>
        </div>
      </div>
      </SwiperSlide>
      
     
    </Swiper>
  </>
  )
}
