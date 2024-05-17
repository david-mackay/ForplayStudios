import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const AboutWrapper = styled.div`
  padding: 50px;
  background: #1c1c1c;
  color: #e0e0e0;
  max-height: 100vh;  // Ensure it takes the full height if content is less
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #ff6347;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const About = () => (
  <>
    <Header />
    <AboutWrapper>
      <Title>About Us</Title>
      <Content>
        {/* Add your about content here */}
      </Content>
    </AboutWrapper>
  </>
);

export default About;
