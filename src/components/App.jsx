import { Helmet } from 'react-helmet';
import MainPage from 'pages/MainPage';
import { Wrap } from './App.styled';

const App = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
      </Helmet>
      <Wrap>
        <MainPage />
      </Wrap>
    </>
  );
};

export default App;
