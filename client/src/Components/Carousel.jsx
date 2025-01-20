// Import Swiper styles
import pic3 from '../assets/pic4.jpg';
import pic2 from '../assets/pic5.jpg';
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
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover h-[500px] lg:h-[500px]"
            style={{
              backgroundImage: `url(${pic3})`,
              backgroundSize: 'cover', // Ensures the image covers the slide
              backgroundPosition: 'center 20%', // Adjusts the image to move slightly down
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center px-4">
                <h1 className="text-4xl font-semibold text-white lg:text-5xl">
                  Elevate Your Shopping Experience Today!
                </h1>
                <p className="mt-4 text-lg text-gray-200 lg:text-xl">
                  Discover a wide range of products tailored to meet your every need. Shop now and feel the difference.
                </p>
                <button className="bg-rose600 text-white rounded-lg px-6 py-3 font-bold mt-6 hover:bg-pink800">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="w-full bg-center bg-cover h-[500px] lg:h-[500px]"
            style={{
              backgroundImage: `url(${pic2})`,
              backgroundSize: 'cover', // Ensures the image covers the slide
              backgroundPosition: 'center 20%', // Adjusts the image to move slightly down
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
              <div className="text-center px-4">
                <h1 className="text-4xl font-semibold text-white lg:text-5xl">
                  Find What You Love, Shop With Ease!
                </h1>
                <p className="mt-4 text-lg text-gray-200 lg:text-xl">
                  Join us in redefining your shopping journey. Click below to explore a world of possibilities.
                </p>
                <button className="bg-rose600 text-white rounded-lg px-6 py-3 font-bold mt-6 hover:bg-pink800">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
