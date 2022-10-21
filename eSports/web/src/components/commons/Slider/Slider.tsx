import { ReactNode } from 'react';
import { A11y, Navigation, Pagination} from 'swiper';

import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './Slider.css'


interface SliderProps {
  settings: SwiperProps
  children: ReactNode
}

const Slider = ({settings, children}: SliderProps) => {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings} >
    {children}
    </Swiper>
  )
}

export default Slider