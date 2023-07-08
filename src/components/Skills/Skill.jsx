import React from 'react'
import styles from './Skill.module.css'
import data from '../../Data/skill.json'
function Skill() {
  const isSmallScreen = window.screen.width <=600

  const skills = data.skills.map((skill) => (
    <div className={styles.card} key={skill.id}>
      <img className={styles.img} src={skill.img} alt="" />
      <h2 className={styles.title}>{skill.title}</h2>
      <p className={styles.text}>{skill.desc}</p>
      <ul>
      {skill.languages.map((lang,index)=>(
        <li key={index}> {lang} </li>
      ))}
      </ul>
    </div>
    ))

  return (
    <div className={styles.wrapper}>
        <h1>Skills</h1>
        <div className={ !isSmallScreen ? styles.skills : styles.mobile}>
          {skills}
        </div>
    </div>
  )
}

export default Skill