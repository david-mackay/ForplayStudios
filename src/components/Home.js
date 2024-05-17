import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const HomeWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url('/background-img.jpg') no-repeat center center/cover;
  overflow: hidden; // Prevent scrolling
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  text-align: center;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #ff6347;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background: #ff6347;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background: #ff4500;
  }
`;

const Home = () => (
  <>
    <Header />
    <HomeWrapper>
      <Overlay />
      <Content>
        <Title>CREATIVE</Title>
        <Subtitle>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</Subtitle>
        <Button href="/contact">CONTACT US</Button>
      </Content>
    </HomeWrapper>
  </>
);

export default Home;
