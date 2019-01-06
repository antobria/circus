import React from 'react';
import PropTypes from 'prop-types';
import red from '../../assets/img/red.svg';
import { MainDiv, ImgDiv, DescriptionDiv } from './style';


const SabiasQue = ({ text }) => (
  <MainDiv>
    <ImgDiv
      className="center"
      style={{ backgroundColor: '#fdc6cb', width: '100%' }}
    >
      <img src={red} alt="red" />
    </ImgDiv>
    <div style={{
      width: '100%',
    }}
    >
      <DescriptionDiv>
        <h2 style={{ marginBottom: '2rem' }}>{text.sabiasQueTitle}</h2>
        <p style={{ marginBottom: '2rem' }}>{text.sabiasQueDescription}</p>
        <h2 style={{ marginBottom: '4rem' }}>{text.esParaTiTitle}</h2>
        <p>{text.esParaTIDescription}</p>
      </DescriptionDiv>
    </div>
  </MainDiv>
);

SabiasQue.defaultProps = {
  text: 'Loading',
};

SabiasQue.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};

export default SabiasQue;
