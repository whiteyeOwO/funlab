import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DrinkCarousel = () => {
  const slides = [
    {
      bg: "images/index/hotDrink/no1-background.png",
      mainImg: "images/menu/juice/珍愛百香綠.webp",
      title: "放飲之選，百香無可取代！",  // 加入對應的標題
      rank: "No.1"
    },
    {
      bg: "images/index/hotDrink/no2-background.png",
      mainImg: "images/drink/plantmilk/plantmilk4.webp",
      title: "榜單佳作 不容錯過！",
      rank: "No.2"
    },
    {
      bg: "images/index/hotDrink/no3-background.png",
      mainImg: "images/drink/milktea/milktea5.webp",
      title: "紅玉微醇 柔順鮮奶茶",
      rank: "No.3"
    },
    {
      bg: "images/index/hotDrink/no4-background.png",
      mainImg: "images/drink/toppings/toppings4.webp",
      title: "經典搭配珍珠歐蕾",
      rank: "No.4",
    },
    {
      bg: "images/index/hotDrink/no5-background.png",
      mainImg: "images/drink/juice/juice6.webp",
      title: "蜜凍珍珠奶喝出幸福感！",
      rank: "No.5"
    },
  ];

  const defaultBg = slides?.[0]?.bg || '';
  const [activeBg, setActiveBg] = useState(defaultBg);
  const [isActive, setIsActive] = useState(false);
  const [isHoverPrev, setIsHoverPrev] = useState(false);
  const [isHoverNext, setIsHoverNext] = useState(false);
  const [isHoverMove, setIsHoverMove] = useState(false);

  useEffect(() => {
    if (slides?.length > 0 && slides[0]?.bg) {
      setActiveBg(slides[0].bg);
      setIsActive(true);
    }
  }, []);

  const handleSlideChange = (swiper) => {
    if (!swiper) return;

    setIsActive(false);
    setTimeout(() => {
      const activeIndex = swiper.realIndex;
      if (activeIndex >= 0 &&
        activeIndex < slides?.length &&
        slides[activeIndex]?.bg) {
        setActiveBg(slides[activeIndex].bg);
        setIsActive(true);
      }
    }, 650);
  };

  if (!slides?.length) {
    return null;
  }

  return (
    <section className="drinkCarousel">
      <figure className={`num-bg ${isActive ? 'num-bg--active' : ''}`}>
        <img
          id="active-bg"
          src={activeBg}
          alt=""
          loading="lazy"
          width="600"
          height="600"
        />
      </figure>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} data-bg={slide.bg}>
            <div className="other-nav__img" style={{ left: index === 0 ? '18%' : '18%' }}>
              <img src={slide.mainImg} />
            </div>
            <div className="other-nav_rank">
              <p>{slide.title}</p>
              <h2>{slide.rank}</h2>
            </div>
            <div
              className="other-nav_btn"
              onMouseEnter={() => setIsHoverMove(true)}
              onMouseLeave={() => setIsHoverMove(false)}
            >
                <Link to="/menu">
                <img
                  src={isHoverMove
                    ? "./images/icon/icon-arrowMorewhover.svg"
                    : "./images/icon/icon-arrowMorew.svg"
                  }
                  alt="更多"
                />
              </Link>
            </div>
            <div className={`other-nav_num num-${index + 1}`}>
              <p>{index + 1}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-controls">
        <div
          className="control-wrapper swiper-button-prev"
          onMouseEnter={() => setIsHoverPrev(true)}
          onMouseLeave={() => setIsHoverPrev(false)}
        >
          <img
            src={isHoverPrev
              ? "./images/icon/icon-arrowPrehover.svg"
              : "./images/icon/icon-arrowPre.svg"
            }
            alt="上一頁"
          />
          <span className="control-text">PREV</span>
        </div>
        <div
          className="control-wrapper swiper-button-next"
          onMouseEnter={() => setIsHoverNext(true)}
          onMouseLeave={() => setIsHoverNext(false)}
        >
          <img
            src={isHoverNext
              ? "./images/icon/icon-arrowNexthover.svg"
              : "./images/icon/icon-arrowNext.svg"
            }
            alt="下一頁"
          />
          <span className="control-text">NEXT</span>
        </div>
      </div>
    </section>
  );
};

export default DrinkCarousel;