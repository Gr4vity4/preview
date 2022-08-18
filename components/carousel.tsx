// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper";
import { useState, useEffect } from "react";

const Carousel = (props: { items: any; classes?: string }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (items.length === 0 && props.items !== undefined) {
      setItems(JSON.parse(props.items));
    } else {
      console.log(items);
    }
  }, [props.items, items]);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: any) {
      return `<span class="${className}">&nbsp</span>`;
    },
  };

  return (
    <div className="relative">
      <Swiper effect={"fade"} pagination={pagination} navigation={true} autoplay={true} modules={[EffectFade, Pagination, Navigation, Autoplay]} className="mySwiper">
        {items.map((item: { url: string }, index: any) => {
          return (
            <SwiperSlide key={`swiper-slide-${index}`} className="bg-gray-custom w-full">
              <picture className={props.classes || ""}>
                <img src={item.url} alt="carousel" className="object-contain" />
              </picture>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
