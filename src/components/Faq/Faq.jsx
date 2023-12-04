import React, { useState } from 'react';
import svg from '../../img/icons/spriteSvg.svg';
import Line from 'components/Line/Line';
import {
  FaqContainer,
  FaqBtnIcon,
  FaqBtn,
  FaqQuestionContainerItem,
  FaqQuestion,
  FaqAnswear,
  FaqAnswearContainer,
  FaqTitle,
  FaqHelp,
  FaqHelpContainer,
  FaqQuestionContainer,
  FaqHelpBtnIcon,
  FaqHelpBtn,
  FaqHelpBtnText,
} from './Faq.styled';

const Faq = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFaqBtn = index => {
    console.log(index);
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FaqContainer id="faq">
      <FaqTitle>Frequently Asked Questions</FaqTitle>
      <FaqQuestionContainer>
        {questions.map((faq, index) => {
          return (
            <div key={faq.id}>
              <Line />
              <FaqQuestionContainerItem>
                <FaqBtn type="button" onClick={() => handleFaqBtn(index)}>
                  {activeIndex === index ? (
                    <FaqBtnIcon>
                      <use
                        href={`${svg}#icon-minus`}
                        style={{ stroke: 'var(--text-main)' }}
                      />
                    </FaqBtnIcon>
                  ) : (
                    <FaqBtnIcon>
                      <use
                        href={`${svg}#icon-plus`}
                        style={{ stroke: 'var(--accent-main)' }}
                      />
                    </FaqBtnIcon>
                  )}
                </FaqBtn>
                <FaqQuestion>{faq.question}</FaqQuestion>
              </FaqQuestionContainerItem>
              {activeIndex === index && (
                <FaqAnswearContainer>
                  <FaqAnswear>{faq.answear}</FaqAnswear>
                </FaqAnswearContainer>
              )}
            </div>
          );
        })}
      </FaqQuestionContainer>
      <FaqHelpContainer>
        <FaqHelp>Didn't find the answer to your question?</FaqHelp>
        <FaqHelpBtn href="#contact us">
          <FaqHelpBtnText>Contact us</FaqHelpBtnText>
          <FaqHelpBtnIcon>
            <use href={`${svg}#icon-circle`} />
          </FaqHelpBtnIcon>
        </FaqHelpBtn>
      </FaqHelpContainer>
    </FaqContainer>
  );
};

export default Faq;
