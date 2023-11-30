// import photo2 from '/img/swiper1.jpg'

const CaseListItem = ({ alt, date, photo, title }) => {

    console.log(photo);

    return (
      <>
        <img src={photo} alt="User avatar" />
        <img src='/img/swiper1.jpg' alt="Local" />
        {/* <img src={photo2} alt="User avatar" /> */}

        <p>title: {title}</p>
        <button>button arrow</button>
        <p>alt: {alt}</p>
        <p>date: {date}</p>
      </>
    );
};

export default CaseListItem;