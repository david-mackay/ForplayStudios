import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const FadeContainer = styled.div`
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const TransitionWrapper = ({ children }) => {
  const location = useLocation();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, [location]);

  return (
    <FadeContainer key={location.key} fadeIn={fadeIn}>
      {children}
    </FadeContainer>
  );
};

export default TransitionWrapper;
