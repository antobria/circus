import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/img/Fifth.svg';
import Descriptions from './utils/Descriptions';
import {
  MainDiv, ImgDiv, RightDiv, Img,
  DescriptionDiv, H1, InnerDescription,
  UpperDescriptonDiv, H2,
} from './style';

export default class QueAprenderas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
    this.changer = this.changer.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.timer();
  }

  timer() {
    const { text } = this.props;
    setInterval(() => {
      const { index } = this.state;
      this.setState({ index: index > text.fifth.length - 2 ? 0 : index + 1 });
    }, 5000);
  }

  changer(index) {
    this.setState({ index });
  }

  render() {
    const { index } = this.state;
    const { text } = this.props;
    return (
      <MainDiv id="queAprendaras">
        <ImgDiv>
          <Img src={image} alt="" />
        </ImgDiv>
        <UpperDescriptonDiv>
          <DescriptionDiv>
            <RightDiv>
              <Descriptions text={text} index={index} changer={this.changer} ctx={this} />
            </RightDiv>
            <InnerDescription>
              <H2>{text.titleFifth}</H2>
              <H1
                style={{ color: `${text.fifth[index].color}` }}
              >
                {text.fifth[index].title.slice(0, 2)}
              </H1>
              <H1
                style={{ color: `${text.fifth[index].color}` }}
              >
                {text.fifth[index].title.slice(2, text.fifth[index].title.length)}
              </H1>
              <p style={{ marginTop: '2rem' }}>{text.fifth[index].description}</p>
            </InnerDescription>
          </DescriptionDiv>
        </UpperDescriptonDiv>
      </MainDiv>
    );
  }
}

QueAprenderas.defaultProps = {
  text: 'Loading',
};

QueAprenderas.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
};
