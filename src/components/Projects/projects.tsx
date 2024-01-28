// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Project1 from './project1/flippable-card';
import Project2 from './project2/flippable-card';
import Project3 from './project3/flippable-card';
import Project4 from './project4/flippable-card';
import Project5 from './project5/flippable-card';
import Project6 from './project6/flippable-card';

import './styles.css';

import { Navigation, HashNavigation } from 'swiper/modules';

export default function App() {
  return (
    <div className="swiper-container" style={{ width: '20%', height: '30%' }}>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        navigation={true}
        modules={[Navigation, HashNavigation]}
        className="mySwiper"
        pagination={false} 
      >
        <SwiperSlide data-hash="slide1"><Project1/></SwiperSlide>
        <SwiperSlide data-hash="slide2"><Project2/></SwiperSlide>
        <SwiperSlide data-hash="slide3"><Project3/></SwiperSlide>
        <SwiperSlide data-hash="slide4"><Project4/></SwiperSlide>
        <SwiperSlide data-hash="slide5"><Project5/></SwiperSlide>
        <SwiperSlide data-hash="slide6"><Project6/></SwiperSlide>
        <SwiperSlide data-hash="slide7">Slide 7</SwiperSlide>
        <SwiperSlide data-hash="slide8">Slide 8</SwiperSlide>
        <SwiperSlide data-hash="slide9">Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
