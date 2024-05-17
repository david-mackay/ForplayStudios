import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from './Header';

const PortfolioWrapper = styled.div`
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #2a2a2a;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h2`
  margin-bottom: 10px;
  color: #ff6347;
`;

const ProjectDescription = styled.p`
  margin-bottom: 20px;
`;

const ProjectLink = styled(Link)`
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

const projects = [
  {
    title: 'Red Sorghum',
    description: 'An Asian noir restaurant in Long Island City.',
    link: '/gallery/red-sorghum',
    image: 'https://i.imgur.com/xM6Nojg.jpg',
  },
  {
    title: "Ye's Apothecary",
    description: 'An Asian inspired greenlit speakeasy in LES.',
    link: '/gallery/yes-apothecary',
    image: 'https://i.imgur.com/dAxJbUs.png',
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
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
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
