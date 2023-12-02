import React, { useState, useEffect } from 'react';
import Line from 'components/Line/Line';
import svg from '../../img/icons/spriteSvg.svg';

import {
  SwiperContainer,
  SwiperPhotoImg,
  SwiperPhotoDescription,
  DescriptionTop,
  DescriptionTitle,
  DescriptionBtn,
  Descriptionbottom,
  DescriptionBtnIcon,
} from './CaseItem.styled';

const CaseListItem = ({ alt, date, photo, title, company }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../../img/${photo}`)
      .then(image => {
        setImageSrc(image.default);
      })
      .catch(error => {
        console.error('Error loading the image:', error);
      });
  }, [photo]);

  return (
    <SwiperContainer>
      {imageSrc && <SwiperPhotoImg src={imageSrc} alt="Swiper Im" />}
      <SwiperPhotoDescription>
        <DescriptionTop>
          <DescriptionTitle>
            <p>{title}</p>
            <p>{company}</p>
          </DescriptionTitle>
          <DescriptionBtn>
            <DescriptionBtnIcon>
              <use href={`${svg}#icon-arrow-right-top`} />
            </DescriptionBtnIcon>
          </DescriptionBtn>
        </DescriptionTop>
        <Line />
        <Descriptionbottom>
          <p>{alt}</p>
          <p>{date}</p>
        </Descriptionbottom>
      </SwiperPhotoDescription>
    </SwiperContainer>
  );
};

export default CaseListItem;
