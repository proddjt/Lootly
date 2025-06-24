import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function GameCardSwiper({images}){
    return (
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {images && Object.keys(images).length > 0 ?
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.image} alt="Immagine gioco" />
            </SwiperSlide>
          ))
          :
          <SwiperSlide>
            <img src="../src/assets/media/images/game-img-placeholder.webp" alt="Immagine gioco non presente" />
          </SwiperSlide>
        }
      </Swiper>
    )
}

export default GameCardSwiper