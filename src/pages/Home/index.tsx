import React from 'react';

import logo from '../../assets/logo.svg';

import { Title, Container, Content, Background } from './styles';
import { FiLogIn } from 'react-icons/fi';

const Home: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="Commerce"/>
      <form>
        <h1>Faça seu login</h1>
        <input placeholder="email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default Home;
