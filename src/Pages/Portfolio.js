import React, { useState, useEffect } from 'react';
import Card from '../Components/Cards/Card';
import cardInfo from "../Components/Cards/CardInfo";
import "./Portfolio.css"

const Portfolio = () => {

  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects(cardInfo);
  }, [])

  return (
    <div>
      <h2>My Portfolio</h2>
      {projects && projects.map(project => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          screenshot={project.screenshot}
          git_href={project.git_href}
          deployed_href={project.deployed_href}
        />
      ))}
    </div>
  )
}

export default Portfolio
