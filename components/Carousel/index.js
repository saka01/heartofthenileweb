import React, { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Item } from "./item";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export const Carousel = ({ data }) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Item img={item.image} text={item.text} customer={item.customer} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
