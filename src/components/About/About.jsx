import svg from '../../img/icons/spriteSvg.svg';
import Line from 'components/Line/Line';
import {
  AboutGridPhoto,
  AboutGrid,
  AboutGridItem,
  AboutContainer,
  AboutTitle,
  AboutText,
  AboutItemIcon,
  AboutItemTitle,
  AboutItemTop,
  AboutItemText,
} from './About.styled';

const About = () => {
  return (
    <>
      <AboutContainer id="about">
        <AboutTitle>Main values of our company</AboutTitle>
        <AboutText>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </AboutText>
      </AboutContainer>
      <AboutGrid>
        <AboutGridItem>
          <AboutItemTop>
            <AboutItemIcon>
              <use href={`${svg}#icon-maximize-circle`} />
            </AboutItemIcon>
            <AboutItemTitle>Openness</AboutItemTitle>
          </AboutItemTop>
          <Line />
          <AboutItemText>
            to the world, people, new ideas and projects
          </AboutItemText>
        </AboutGridItem>
        <AboutGridItem>
          <AboutItemTop>
            <AboutItemIcon>
              <use href={`${svg}#icon-global-edit`} />
            </AboutItemIcon>
            <AboutItemTitle>Responsibility</AboutItemTitle>
          </AboutItemTop>
          <Line />
          <AboutItemText>
            we are aware that the results of our work have an impact on our
            lives and the lives of future generations
          </AboutItemText>
        </AboutGridItem>
        <AboutGridPhoto></AboutGridPhoto>
        <AboutGridPhoto></AboutGridPhoto>
        <AboutGridItem>
          <AboutItemTop>
            <AboutItemIcon>
              <use href={`${svg}#icon-cpu-charge`} />
            </AboutItemIcon>
            <AboutItemTitle>Innovation</AboutItemTitle>
          </AboutItemTop>
          <Line />
          <AboutItemText>
            we use the latest technology to implement non-standard solutions{' '}
          </AboutItemText>
        </AboutGridItem>
        <AboutGridItem>
          <AboutItemTop>
            <AboutItemIcon>
              <use href={`${svg}#icon-ranking`} />
            </AboutItemIcon>
            <AboutItemTitle>Quality</AboutItemTitle>
          </AboutItemTop>
          <Line />
          <AboutItemText>
            we do not strive to be the first among others, but we want to be the
            best in our business
          </AboutItemText>
        </AboutGridItem>
      </AboutGrid>
    </>
  );
};

export default About;
