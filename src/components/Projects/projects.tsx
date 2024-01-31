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
import Project7 from './project7/flippable-card';
import Project8 from './project8/flippable-card';
import Project9 from './project9/flippable-card';
import Project10 from './project10/flippable-card';
import Project11 from './project11/flippable-card';
import Project12 from './project12/flippable-card';
import Project13 from './project13/flippable-card';
import Project14 from './project14/flippable-card';
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
        <SwiperSlide data-hash="slide1"><Project12/></SwiperSlide>
        <SwiperSlide data-hash="slide2"><Project13/></SwiperSlide>
        <SwiperSlide data-hash="slide3"><Project7/></SwiperSlide>
        <SwiperSlide data-hash="slide4"><Project8/></SwiperSlide>
        <SwiperSlide data-hash="slide5"><Project9/></SwiperSlide>
        <SwiperSlide data-hash="slide6"><Project11/></SwiperSlide>
        <SwiperSlide data-hash="slide7"><Project10/></SwiperSlide>
        <SwiperSlide data-hash="slide8"><Project14/></SwiperSlide>
        <SwiperSlide data-hash="slide9"><Project1/></SwiperSlide>
        <SwiperSlide data-hash="slide10"><Project2/></SwiperSlide>
        <SwiperSlide data-hash="slide11"><Project3/></SwiperSlide>
        <SwiperSlide data-hash="slide12"><Project4/></SwiperSlide>
        <SwiperSlide data-hash="slide13"><Project5/></SwiperSlide>
        <SwiperSlide data-hash="slide14"><Project6/></SwiperSlide>
      </Swiper>
    </div>
  );
}
