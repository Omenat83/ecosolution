import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import svg from '../../img/icons/spriteSvg.svg';
import CaseListItem from 'components/CaseItem/CaseItem';
import {
  CaseContainer,
  CasesTitle,
  CasesCount,
  TotalNumber,
  CaseTopContainer,
  CaseBtn,
  CaseBtnContainer,
  CaseBtnIcon,
  CeseNav,
} from './Cases.styled';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Cases = ({ articles }) => {
  const swiperRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(1);

  const settings = {
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    spaceBetween: 24,
    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 2,
        spaceBetween: 48,
      },
    },
    loop: true,
    initialSlide: 0,
    navigation: {
      nextEl: '.swiper-next-btn',
      prevEl: '.swiper-prev-btn',
    },
    speed: 500,
  };

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setSlideNumber(swiperRef.current.swiper.realIndex + 1);
    }
  };

  return (
    <CaseContainer>
      <CaseTopContainer>
        <CasesTitle>Successful cases of our company</CasesTitle>

        <CeseNav>
          <CasesCount>
            <p>{`${slideNumber.toString().padStart(2, 0)}`}</p>
            <TotalNumber>/05</TotalNumber>
          </CasesCount>
          <CaseBtnContainer>
            <CaseBtn type="button" className={`swiper-prev-btn`}>
              <CaseBtnIcon>
                <use href={`${svg}#icon-arrow-left`} />
              </CaseBtnIcon>
            </CaseBtn>
            <CaseBtn type="button" className={`swiper-next-btn`}>
              <CaseBtnIcon>
                <use href={`${svg}#icon-arrow-right`} />
              </CaseBtnIcon>
            </CaseBtn>
          </CaseBtnContainer>
        </CeseNav>
      </CaseTopContainer>

      <Swiper ref={swiperRef} onSlideChange={handleSlideChange} {...settings}>
        <div>
          {articles.map(article => {
            return (
              <SwiperSlide key={article.id}>
                <CaseListItem
                  key={article.id}
                  alt={article.alt}
                  date={article.date}
                  photo={article.photo}
                  title={article.title}
                  company={article.company}
                ></CaseListItem>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </CaseContainer>
  );
};

export default Cases;
