import Image from 'next/image';

import styles from './styles.module.css'
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';


import Banner01 from '../../public/tmp/banner 01.png'
import Banner02 from '../../public/tmp/banner02-2x.png'



export const Banner =  () => {
  return(
    <div className={styles.container}>
      <Swiper
      slidesPerView={1}
      className={styles.swiper}
      loop
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
             1
          </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
          <div className={styles.slideImg}>
             2
          </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}