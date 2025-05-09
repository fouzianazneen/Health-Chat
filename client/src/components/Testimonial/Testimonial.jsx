//  import React from 'react';
// import { Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import patientAvatar from '../../assets/images/patient-avatar.png';
// import { HiStar } from 'react-icons/hi';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // ✅ Corrected import
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';


const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px] shadow-md border">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Patient Avatar" className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Hadeeqa
                </h4>
                <div className="flex gap-1 text-yellow-500">
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[15px] text-textColor leading-6">
              This platform really helped me book a doctor quickly and easily. Great experience!
            </p>
          </div>
        </SwiperSlide>
        {/* You can add more <SwiperSlide> blocks here */}
      </Swiper>
    </div>
  );
};

export default Testimonial;