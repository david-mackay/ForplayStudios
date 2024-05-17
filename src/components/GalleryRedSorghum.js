import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';  // Import the Header component

const GalleryWrapper = styled.div`
  padding: 30px 0;
  position: relative;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50vh, 1fr));
  grid-gap: 5px;
  margin: auto;
  border-radius: 5px;
  overflow: visible;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  height: 50vh;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    z-index: 3;
  }

  @media (max-width: 600px) {
    height: 50vw;
  }
`;

const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const Popup = styled.div`
  transition: all 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transform: ${(props) => (props.isOpen ? 'scale(1)' : 'scale(0.95)')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 1000;
  padding: 30px;
  box-sizing: border-box;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const GalleryRedSorghum = () => {
  const [popupImage, setPopupImage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (src) => {
    setPopupImage(src);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const images = [
    "https://i.imgur.com/xM6Nojg.jpg",
    "https://i.imgur.com/l69aXfs.png",
    "https://i.imgur.com/dAxJbUs.png",
    "https://i.imgur.com/yTTGXRM.png"
  ];

  return (
    <>
      <Header />  {/* Add Header component */}
      <GalleryWrapper>
        <GalleryGrid>
          {images.map((img, index) => (
            <ImgContainer key={index} onClick={() => openPopup(img)}>
              <ImgWrapper style={{ backgroundImage: `url(${img})` }} />
            </ImgContainer>
          ))}
        </GalleryGrid>
        <Popup isOpen={isPopupOpen} style={{ backgroundImage: `url(${popupImage})` }} onClick={closePopup} />
      </GalleryWrapper>
    </>
  );
};

export default GalleryRedSorghum;
