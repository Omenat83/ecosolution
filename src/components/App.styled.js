import styled from 'styled-components';

export const Wrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 360px) {
    min-width: 320px;
  }

  @media screen and (min-width: 480px) {
    width: 440px;
  }

  @media screen and (min-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
    width: 708px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 20px;
    padding-right: 20px;
    width: 1240px;
  }
`;
