import Main from 'components/Main/Main';

import { MainTitle } from './MainPage.styled';
import Header from 'components/Header/Header';
import About from 'components/About/About';

const MainPage = () => {
  return (
    <>
      <Header/>
      <MainTitle>Ecosolution, green energy</MainTitle>
      <Main />
      <About/>
    </>
  );
};

export default MainPage;
