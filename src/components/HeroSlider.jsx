import { Swiper, SwiperSlide, } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import Img1 from '../assets/img/heroSlider/1.jpg';
import Img2 from '../assets/img/heroSlider/2.jpg';
import Img3 from '../assets/img/heroSlider/3.jpg';

const slides = [
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: Img1,
        btnText: 'Check Out Our Rooms!',
    },
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: Img2,
        btnText: 'Check Out Our Rooms!',
    },
    {
        title: 'Your Luxury Hotel For Vacation',
        bg: Img3,
        btnText: 'Check Out Our Rooms!',
    },
];

function HeroSlider() {
    return (
        <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} className='heroSlider h-[600px] lg:h-[860px]'>
            {slides.map((slide, index) => {
                const { title, bg, btnText } = slide;
                return (
                    <SwiperSlide className='h-full relative flex justify-center items-center' key={index}>
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center z-20 text-center text-white' id="header-section">
                            <div className='uppercase font-tertiary tracking-[6px] mb-5'>Just Enjoy and Relax</div>
                            <h1 className='text-[32px] font-primary uppercase tracking-[2px] lg:text-[68px] leading-tight mb-6 max-w-[920px]'>{title}</h1>
                            <button className='btn-primary btn-lg px-6 py-2 '>{btnText}</button>
                        </div>
                        <div className='absolute top-0 w-full h-full'>
                            <img className='object-cover h-full w-full' src={bg} alt="" />
                        </div>
                        <div className='absolute h-full w-full bg-black/70'></div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}

export default HeroSlider;