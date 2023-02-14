import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Melike Keskin",
    review:
      "adamin dibi tam bir yazilim duayeni degilmi lan kendimim bilemedim amacanimida veremedim onun bunu denemedim",
  },
  {
    avatar: AVTR2,
    name: "Alperen yagcu",
    review:
      "adamin dibi tam bir yazilim duayeni degilmi lan kendimim bilemedim amacanimida veremedim onun bunu denemedim",
  },
  {
    avatar: AVTR3,
    name: "muco aric",
    review:
      "adamin dibi tam bir yazilim duayeni degilmi lan kendimim bilemedim amacanimida veremedim onun bunu denemedim",
  },
  {
    avatar: AVTR4,
    name: "omer gencoglu",
    review:
      "adamin dibi tam bir yazilim duayeni degilmi lan kendimim bilemedim amacanimida veremedim onun bunu denemedim",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>References</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="kafalar"></img>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
