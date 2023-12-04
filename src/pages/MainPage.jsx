import swiperData from '../utils/data/swiper.json';
import faqData from '../utils/data/faq.json';
import Main from 'components/Main/Main';
import { MainTitle } from './MainPage.styled';
import Header from 'components/Header/Header';
import About from 'components/About/About';
import Electriciti from 'components/Electricity/Electricity';
import Cases from 'components/Cases/Cases';
import Faq from 'components/Faq/Faq';
import ContactUs from 'components/ContactUs/ContactUs';
import Footer from 'components/Footer/Footer';
import { useEffect, useState } from 'react';

const MainPage = () => {

  const [activeMenu, setActiveMenu] = useState('main');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const visibleElementId = entry.target.id;
            setActiveMenu(visibleElementId);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    const componentsWithId = document.querySelectorAll('section');

    componentsWithId.forEach(component => {
      observer.observe(component);
    });

    return () => {
      componentsWithId.forEach(component => {
        observer.unobserve(component);
      });
    };
  }, []);

  return (
    <>
      <Header activeMenu={activeMenu} />
      <MainTitle>Ecosolution, green energy</MainTitle>
      <Main />
      <About />
      <Electriciti />
      <Cases articles={swiperData} />
      <Faq questions={faqData} />
      <ContactUs />
      <Footer />
    </>
  );
};

export default MainPage;
