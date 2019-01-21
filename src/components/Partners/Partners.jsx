import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ironHack from '../../assets/img/logos/ironHack.svg';
import campusMadrid from '../../assets/img/logos/campusMadrid.svg';
import cabify from '../../assets/img/logos/cabify.svg';
import opinator from '../../assets/img/logos/opinator.svg';
import deliveroo from '../../assets/img/logos/deliverooLogo.png';
import {
  Svg, ImgDiv, MainDiv, H2, Img, InnerDiv, ImgContainer, Button,
} from './style';

export default class Partners extends Component {
  constructor() {
    super();
    this.state = {
      photos: [ironHack, campusMadrid, cabify, opinator, deliveroo],
      animate: false,
    };
  }

  moveToEnd() {
    const { photos } = this.state;
    this.setState({ animate: true });
    setTimeout(() => {
      photos.push(photos.shift());
      this.setState({ photos, animate: false });
    }, 1000);
  }

  moveToHead() {
    const { photos } = this.state;
    this.setState({ animate: true });
    setTimeout(() => {
      photos.unshift(photos.pop());
      this.setState({ photos });
    }, 1000);
  }

  render() {
    const { photos, animate } = this.state;
    const animationClasses = (animate ? 'slide' : '');
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
    };
    return (
      <MainDiv
        className="transition center shadow"
      >
        <InnerDiv className="center">
          <H2>Partners que apoyan Circus.</H2>
          <ImgDiv>
            <Button type="button" onClick={() => this.moveToEnd()}>
              <Svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 1L1 32.5L25 65.5" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </Button>
            <ImgContainer>
              {photos.map((image, i) => (i < 5 ? <Img className={`${animationClasses}`} key={image} src={image} alt="" /> : ''))}
            </ImgContainer>
            <Button type="button" onClick={() => this.moveToHead()}>
              <Svg width="26" height="67" viewBox="0 0 26 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.49219L25 32.9922L1 65.9922" stroke="#2D293C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </Button>
          </ImgDiv>
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </InnerDiv>
      </MainDiv>
    );
  }
}

Partners.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
};

Partners.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
};
