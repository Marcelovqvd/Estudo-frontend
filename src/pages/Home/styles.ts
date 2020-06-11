import styled from 'styled-components';
import backgroundImg from '../../assets/backgroundImg.svg';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin: 24px;
    }

    input {
      padding: 16px;
      width: 100%;
      background: #232129;
      color: #f5f5f5;
      border: 2px solid black;

      &::placeholder {
        color: #f5f5f5;
      }

      & + input {
        margin-top: 10px;
      }
    }

    button {
      background: #232129;
      height: 60px;
      border: 0;
      color: #f5f5f5;
      width: 100%;
      font-weight: bold;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#232129')}
      }
    }

    a {
      color: #232129;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#2129')}
      }
    }
  }

  > a {
    color: #232129;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#2129')}
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
