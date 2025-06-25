import { useQuery } from '@tanstack/react-query';
import { getData } from '../../lib/fetchToUrl';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Loader from '../Loader';
function DetailVideo({id}){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const url = `https://api.rawg.io/api/games/${id}/movies?key=944825bd001f426384c5e9139fa3f0ef`
    const { status, data: trailers } = useQuery({
        queryKey: ['game trailer', url],
        queryFn: () => getData(url)
    });
    
    if (status === 'pending') return (<div className="flex justify-center items-center"><Loader/></div>);
    return (
        <>
            {
                trailers && trailers.count > 0 ?
                <>
                    <p className="text-normal text-center text-3xl font-black highlight uppercase">Trailer del gioco</p>
                    <Swiper
                        style={{
                        '--swiper-navigation-color': '#ffff00',
                        '--swiper-pagination-color': '#ffff00',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        
                    >
                    {trailers.results.map((trailer, index) => (
                        <SwiperSlide key={index}>
                            <video src={trailer.data.max ? trailer.data.max : trailer.data['480'] } autoPlay loop muted controls={true}></video>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        
                    >
                    {trailers.results.map((trailer, index) => (
                        <SwiperSlide key={index} className='border-1 border-[yellow] rounded-sm'>
                            <img src={trailer.preview} alt={trailer.name}></img>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </>
                :
                ""
            }
        </>
    )
}
export default DetailVideo