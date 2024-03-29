import { Swiper, SwiperSlide } from "swiper/react";
import HomeMobile from "../Home/HomeMobile.jsx";
import Projects from "../Projects/Projects.jsx";
import "swiper/css";
import "../HomeSwiper/HomeSwiper.scss";

export default function HomeSwiper() {
    return (
        <>
            <Swiper className="mySwiper">
                <SwiperSlide>{HomeMobile}</SwiperSlide>
                <SwiperSlide>{Projects}</SwiperSlide>
            </Swiper>
        </>
    );
}
