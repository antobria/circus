import styled from 'styled-components';

export const RightDiv = styled.div`
  width: 100%;
  background-color: #FFF6C1;
  z-index: 1;
  position: relative;
  @media(max-width:768px){
    display: none !important;
  }
`;

export const Button = styled.button`
  background-color: #2D293C;
  color: white;
  padding: 1rem 10rem;
  border-radius: 20px;
  margin-top: 5rem;
  width: 100%;
  font-size: 2rem;
`;

export const Ul = styled.ul`
  width: 100%;
  margin-left: 50%;
  @media(max-width:768px){
    margin-left: 0% !important;
    width: 100%;
  }
`;

export const LeftDiv = styled.div`
  width: 100%;
  @media(max-width: 768px){
    width: 50%;
  }
`;

export const SelectorDiv = styled.div`
  flex-direction: column;
  width: 100%;
  ${'' /* @media(max-width: 768px){
    background-color: white !important;
  } */}
`;

export const DescriptionDiv = styled.div`
  text-align: center;
  display: none;
  @media(max-width: 768px){
    transition: 0.2s;
    height: 0;
    display: block;
    overflow: hidden;
  }
`;
