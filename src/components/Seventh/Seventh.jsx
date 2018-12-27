import React, { Component } from 'react';
import first from '../../assets/img/icon/first.svg';

export default class Seventh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '1',
    };
    this.setColor = this.setColor.bind(this);
  }

  setColor(index) {
    this.setState({ index });
  }

  render() {
    const { index } = this.state;
    return (
      <div
        className="translate"
        style={{ display: 'flex', height: '40rem' }}
      >
        <div className="translate-child center" style={{ width: '100%' }}>
          <h2 style={{ marginBottom: '3rem' }}>Próximas fechas</h2>
          <ul style={{ width: '100%', marginLeft: '50%' }}>
            <li
              tabIndex="0"
              role="button"
              onKeyDown={this.handleKeyDown}
              onClick={e => this.setColor(e.target.id)}
              style={{
                backgroundColor: `${index === '1' ? '#FFF6C1' : ''}`,
              }}
            >
              <div id="1" style={{ display: 'flex' }}>
                <img src={first} alt="1" />
                <div style={{ flexDirection: 'column' }}>
                  <p>15-16 Diciembre - 10 hrs.</p>
                  <p>WeCode</p>
                </div>
              </div>
            </li>
            <li
              tabIndex="0"
              role="button"
              onKeyDown={this.handleKeyDown}
              onClick={e => this.setColor(e.target.id)}
              style={{
                backgroundColor: `${index === '2' ? '#FFF6C1' : ''}`,
              }}
            >
              <div id="2" style={{ display: 'flex' }}>
                <img src={first} alt="2" />
                <div style={{ flexDirection: 'column' }}>
                  <p>15-16 Diciembre - 10 hrs.</p>
                  <p>WeCode</p>
                </div>
              </div>
            </li>
            <li
              tabIndex="0"
              role="button"
              onKeyDown={this.handleKeyDown}
              onClick={e => this.setColor(e.target.id)}
              style={{
                backgroundColor: `${index === '3' ? '#FFF6C1' : ''}`,
              }}
            >
              <div id="3" style={{ display: 'flex' }}>
                <img src={first} alt="3" />
                <div style={{ flexDirection: 'column' }}>
                  <p>15-16 Diciembre - 10 hrs.</p>
                  <p>WeCode</p>
                </div>
              </div>
            </li>
            <li
              tabIndex="0"
              role="button"
              onKeyDown={this.handleKeyDown}
              onClick={e => this.setColor(e.target.id)}
              style={{
                backgroundColor: `${index === '4' ? '#FFF6C1' : ''}`,
              }}
            >
              <div id="4" style={{ display: 'flex' }}>
                <img src={first} alt="4" />
                <div style={{ flexDirection: 'column' }}>
                  <p>15-16 Diciembre - 10 hrs.</p>
                  <p>WeCode</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="center"
          style={{
            width: '100%',
            backgroundColor: '#FFF6C1',
            zIndex: '1',
            position: 'relative',
          }}
        >
          <div className="translate-child">
            <div style={{ margin: '2rem 4rem' }}>
              <p style={{ color: 'gray' }}>15-16 Diciembre - 10 hrs.</p>
              <h2>Dia 1- Playtomic</h2>
              <p>
  Workshop impartido por Playtomic donde nos contaran como trabajan sus
              equipos de diseño, desarollo para evolucionar su startup
              </p>
              <button
                type="button"
                style={{
                  backgroundColor: '#2D293C',
                  color: 'white',
                  padding: '1rem 10rem',
                  borderRadius: '20px',
                }}
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
