/* eslint-env browser */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import first from '../../assets/img/icon/first.svg';
import second from '../../assets/img/icon/second.svg';
import third from '../../assets/img/icon/third.svg';
import fourth from '../../assets/img/icon/fourth.svg';
import {
  RightDiv, Button, Ul, SelectorDiv, DescriptionDiv,
  TitleDiv, OptionsDiv, MainDiv, Li, H2, InnerLiDiv,
  InnerTitleDiv, TitleDivProximoEvento, InnerRightDiv,
} from './style';

const imgArr = [first, second, third, fourth];

const divHeight = ['30rem', '45rem', '45rem', '45rem', '60rem'];

const greyP = { color: 'gray', marginBottom: '0.5rem' };

export default class ProximasFechas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '0',
    };
    this.setColor = this.setColor.bind(this);
  }

  componentDidMount() {
    const height = divHeight[0];
    document.getElementById(`description${0}`).style.height = height;
  }

  setColor(index) {
    if (!(index === '') && !(index.includes('description'))) {
      const { text } = this.props;
      text.proximasFechas.forEach((_, i) => {
        document.getElementById(`description${i}`).style.height = '0';
      });

      document.getElementById(`description${index || 0}`).style.height = divHeight[index];
      return index === '' ? '' : this.setState({ index });
    }
    return '';
  }

  render() {
    const { index } = this.state;
    const { text } = this.props;
    return (
      <MainDiv id="proximasFechas" className="translate">
        <OptionsDiv
          className="translate-child"
          onClick={e => this.setColor(e.target.id)}
          role="presentation"
          onKeyDown={this.handleKeyDown}
        >
          <TitleDivProximoEvento>
            <H2>{text.proximasFechasTitle}</H2>
            <p>{text.proximasFechas[0].date}</p>
          </TitleDivProximoEvento>
          <Ul>
            {text.proximasFechas.map((x, i) => (
              <Li key={x.title}>
                <InnerLiDiv id={i}>
                  <SelectorDiv {...this.state} color={x.color} i={i} key={x.title}>
                    <TitleDiv id={i}>
                      <img src={imgArr[i]} alt="1" style={{ marginRight: '2rem' }} />
                      <InnerTitleDiv {...this.state} color={x.color} i={i}>
                        <p id={i}>{x.title}</p>
                      </InnerTitleDiv>
                    </TitleDiv>
                    <DescriptionDiv id={`description${i}`} style={{ overflowY: 'scroll' }}>
                      {text.proximasFechas[index].descriptions.map(content => (
                        <div key={content.title} style={{ marginBottom: '2rem' }}>
                          <p style={greyP}>{content.grey}</p>
                          <h2 style={{ marginBottom: '2rem' }}>{content.title}</h2>
                          <p>{content.description}</p>
                          {content.hours && content.hours.map(hour => (
                            <ul key={hour}>
                              <li><p>{hour}</p></li>
                            </ul>
                          ))}
                        </div>
                      ))}
                      <Button type="button">
                        <a href="https://ironhack.typeform.com/to/K7cC3w" rel="noopener noreferrer" target="_blank">
Aplicar
                        </a>
                      </Button>
                    </DescriptionDiv>
                  </SelectorDiv>
                </InnerLiDiv>
              </Li>
            ))}
          </Ul>
        </OptionsDiv>
        <RightDiv text={text} index={index}>
          <InnerRightDiv className="translate-child">
            <div>
              {text.proximasFechas[index].descriptions.map(x => (
                <div key={x.title} style={{ marginBottom: '2rem' }}>
                  <p style={greyP}>{x.grey}</p>
                  <h2 style={{ marginBottom: '2rem' }}>{x.title}</h2>
                  <p>{x.description}</p>
                  {x.hours && x.hours.map(hour => (
                    <ul key={hour}>
                      <li><p>{hour}</p></li>
                    </ul>
                  ))}
                </div>
              ))}
              <Button type="button">
                <a href="https://ironhack.typeform.com/to/K7cC3w" rel="noopener noreferrer" target="_blank">
Aplicar
                </a>
              </Button>
            </div>
          </InnerRightDiv>
        </RightDiv>
      </MainDiv>
    );
  }
}

ProximasFechas.defaultProps = {
  text: { fourthText: ['Loading', 'Loading'] },
};

ProximasFechas.propTypes = {
  text: PropTypes.shape({
    fourthText: PropTypes.array,
  }),
};
