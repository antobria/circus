/* eslint-env browser */
import React from 'react';
import './Sidenav.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import circus from '../../../assets/img/circus.svg';
import { Item } from '../style';

const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0';
};

const buttonStyle = {
  fontSize: '5vh',
  backgroundColor: 'transparent',
  border: 'none',
};

const upperDiv = {
  display: 'flex',
  borderBottom: '1px solid gray',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const lenguages = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  marginTop: '0.5rem',
};

const Sidenav = ({ location, text, setLanguage }) => (
  <div id="mySidenav" className="sidenav">
    <div style={upperDiv}>
      <img src={circus} alt="" style={{ marginLeft: '2rem' }} />
      <div style={lenguages}>
        <Link to="/pt" onClick={() => setLanguage('pt')}>
          <p style={{ padding: '0 0.5rem', textDecoration: `${location.pathname === '/pt' ? 'underline' : ''}` }}>
  PT

          </p>
        </Link>
        <Link to="/es" onClick={() => setLanguage('es')}>
          <p style={{ padding: '0 0.5rem', textDecoration: `${location.pathname === '/es' ? 'underline' : ''}` }}>
  ES
          </p>
        </Link>
      </div>
      <button
        type="button"
        href="/"
        onClick={closeNav}
        style={buttonStyle}
      >
        &times;
      </button>
    </div>
    {text.navbar.map(x => (
      <Item key={x.text}>
        <AnchorLink
          href={x.href}
          offset={() => x.offsetM}
          onClick={() => closeNav()}
        >
          {x.text}
        </AnchorLink>

      </Item>
    ))}
  </div>
);


Sidenav.defaultProps = {
  location: {
    navbar1: 'Loading',
    navbar2: 'Loading',
    navbar3: 'Loading',
    navbar4: 'Loading',
  },
  setLanguage: PropTypes.func,
  text: {},
};

Sidenav.propTypes = {
  location: PropTypes.shape({}),
  setLanguage: PropTypes.func,
  text: PropTypes.shape({}),
};

export default Sidenav;
