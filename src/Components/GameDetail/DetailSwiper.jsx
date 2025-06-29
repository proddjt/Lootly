import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../lib/fetchToUrl';

import Loader from '../Loader';

import 'swiper/css';
import 'swiper/css/pagination';


function DetailSwiper({id}) {
    const url = `https://api.rawg.io/api/games/${id}/screenshots?key=944825bd001f426384c5e9139fa3f0ef`
    const { status, data: images } = useQuery({
        queryKey: ['game images', url],
        queryFn: () => getData(url)
    });
    if (status === 'pending') return (<div className="flex justify-center items-center"><Loader/></div>);
    return (
        <div className='mb-20'>
            <p className='text-normal text-center text-3xl font-bold highlight uppercase mb-5'>Immagini del gioco</p>
            <Swiper
                pagination={{
                type: 'progressbar',
                }}
                autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper select-none rounded-lg"
            >
                {images && Object.keys(images.results).length > 0 ?
                images.results.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.image} alt="Immagine gioco" loading='lazy'/>
                    </SwiperSlide>
                ))
                :
                <SwiperSlide>
                    <img src="../src/assets/media/images/game-img-placeholder.webp" alt="Immagine gioco non presente" loading='lazy'/>
                </SwiperSlide>
                }
            </Swiper>
        </div>
    );
}

export default DetailSwiper