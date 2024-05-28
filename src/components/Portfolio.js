import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';

const PortfolioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // Center the content horizontally
  padding: 50px 20px;
  background: #1c1c1c;
  color: #e0e0e0;
  min-height: 100vh;  // Ensure it takes the full height if content is less
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #ff6347;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
  color: #e0e0e0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;  // Ensure the grid takes full width
  max-width: 1200px;  // Optional: limit the maximum width of the grid
  justify-content: center;  // Center the grid content
`;

const ProjectCard = styled.div`
  background: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 100%;  // Ensure the card takes full width of the grid item
  max-width: 400px;  // Optional: limit the maximum width of the card
  display: flex;
  flex-direction: column;
  justify-content: space-between;  // Ensure the content is spaced within the card
  height: 500px;  // Adjust the height of the card

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 70%;  // Make the image take up 70% of the card
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
  height: 30%;  // Make the content take up 30% of the card
  display: flex;
  flex-direction: column;
  justify-content: space-between;  // Ensure the content is spaced within the card
`;

const ProjectTitle = styled.h2`
  margin-bottom: 10px;
  color: #ff6347;
`;

const ProjectDescription = styled.p`
  margin-bottom: 10px;
  flex-grow: 1;  // Allow the description to take the available space
`;

const ProjectLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background: #ff6347;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  align-self: flex-end;  // Align the button to the bottom of the content

  &:hover {
    background: #ff4500;
  }
`;

const projects = [
  {
    title: 'Red Sorghum',
    description: 'An Asian noir restaurant in Long Island City.',
    link: '/gallery/red-sorghum',
    image: 'redsorghum/image5.jpg',
  },
  {
    title: "Ye's Apothecary",
    description: 'An Asian inspired greenlit speakeasy in LES.',
    link: '/gallery/yes-apothecary',
    image: 'https://i.imgur.com/xM6Nojg.jpg',
  },
  {
    title: 'Blue Willow',
    description: 'A tranquil blue-themed cafe in Midtown.',
    link: '/gallery/blue-willow',
    image: 'https://ucea55be3cd0c2e57ff2e5faab29.previews.dropboxusercontent.com/p/thumb/ACSTuFkKBs6ZfnlHkeTqfjLMgea6EPB8Blr9OFXBK6dJd8DBDtrpf-pGO72yYoAEDIEAtWwfeJ5SxKfz-FwI6bVm_IZg_kPLuC8dczKvU0jWHPOhpN1WwzIfk0-Bd7iebyYiZfrnPdVbH_sFu4kAYDf4IyG-0s3KVILV5-KhBGjh-dYt81IEYIu6JERrBsnNsYJyxtcnspQb6377MRXkvqp7GXhmY86ar7jZHIxuVKo4O2kOxyINYnnrTL_5CrsTvZ-QRrwvLW8uYPlD0jx_kF7xF4vDWniTbNVtPQj2O8CEBbqZ5nFWLn94Ow8Q5d1_LPyBidb2AwVtxo60B6XELxXW9uYGV3B2QSx1hjH-aZ6I8Q/p.jpeg',
  }
];

const Portfolio = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Header />
      <PortfolioWrapper>
        <Title>Our Portfolio</Title>
        <Description>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</Description>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImageWrapper>
                <ProjectImage src={project.image} alt={project.title} />
              </ProjectImageWrapper>
              <ProjectContent>
                <div>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </div>
                <ProjectLink to={project.link}>View Gallery</ProjectLink>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </PortfolioWrapper>
    </>
  );
};

export default Portfolio;
