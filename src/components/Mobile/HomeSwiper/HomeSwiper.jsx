import { Swiper, SwiperSlide } from "swiper/react";
import HomeMobile from "../Home/HomeMobile.jsx";
import Projects from "../Projects/Projects.jsx";
import "swiper/css";
import "../HomeSwiper/HomeSwiper.scss";
import HomeLoader from "../../Common/HomeLoader/HomeLoader.jsx";

export default function HomeSwiper() {
    return (
        <>  
            <HomeLoader />
            <Swiper className="mySwiper">
                <SwiperSlide>{HomeMobile}</SwiperSlide>
                <SwiperSlide>{Projects}</SwiperSlide>
            </Swiper>
        </>
    );
}
