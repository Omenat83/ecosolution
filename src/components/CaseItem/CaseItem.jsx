import React, { useState, useEffect } from 'react';

const CaseListItem = ({ alt, date, photo, title }) => {
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
      <>
        {imageSrc && <img src={imageSrc} alt="Swiper Im" />}

        <p>title: {title}</p>
        <button>button arrow</button>
        <p>alt: {alt}</p>
        <p>date: {date}</p>
      </>
    );
};

export default CaseListItem;