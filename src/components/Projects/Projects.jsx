import React from 'react'
import styles from './Projects.module.css'
import Project from '../Project/Project'
import data from '../../Data/project.json'
function Projects() {
  const projects =  data.detail.map((item)=>(
    <Project
      key={item.id}
      id={item.id}
      img={item.imgUrl}
      gitUrl={item.githubUrl}
      title={item.title}
    />))
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Portfolio</h1>
      {projects}
    </div>
  );
}

export default Projects