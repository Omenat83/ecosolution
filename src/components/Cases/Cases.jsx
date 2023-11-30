import React from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

// import svg from '../../img/icons/spriteSvg.svg';
// import Line from 'components/Line/Line';
import CaseListItem from 'components/CaseItem/CaseItem';

const Cases = ({ articles }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
  console.log('articles', articles);

  return (
    <>
      <div>
        <h2>Successful cases of our company</h2>
        <p>01/05</p>
        <button type="button">prev</button>
        <button type="button">next</button>
      </div>
          <div>{articles.map(article => {
              return (
                <CaseListItem
                  key={article.id}
                  alt={article.alt}
                  date={article.date}
                  photo={article.photo}
                  title={article.title}
                ></CaseListItem>
              );
      })}</div>
    </>
  );
};

export default Cases;
