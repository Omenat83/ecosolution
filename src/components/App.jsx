import { Helmet } from 'react-helmet';
import MainPage from 'pages/MainPage';
import { Wrap } from './App.styled';

const App = () => {
  return (
    <>
      <Helmet></Helmet>
      <Wrap>
        <MainPage />
      </Wrap>
    </>
  );
};

export default App;
