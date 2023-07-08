import React from 'react'
import styles from './Project.module.css'

function Project(props) {

    const isSmallScreen = window.screen.width <=600
    const leftImage = props.id%2 === 0
    const rightImage = props.id%2 !== 0
    console.log(leftImage)
    let leftContent, rightContent;
    const imgDiv = (
        <img src={props.img} alt='project' width='100%' height='100%' />
    )
    const details = (
      <>
        <h3 className={styles.title}>{props.title}</h3>
        <a className={styles.button}  href={props.gitUrl}>See on Github</a>
      </>
    );
    if(leftImage){
        leftContent = imgDiv
        rightContent =  details
    }
    else{
      rightContent = imgDiv;
      leftContent = details;
    }

    const largeScreen = (
      <div className={styles.wrapper}>
        <div className={leftImage ? styles.imgDiv : styles.content}>
          {leftContent}
        </div>
        <div className={rightImage ? styles.imgDiv : styles.content}>
          {rightContent}
        </div>
      </div>
    );
    const smallScreen = (
      <div className={styles.mobileWrapper}>
        {imgDiv}
        <h4>{props.title}</h4>
      </div>
    )
  return (
    
    <>
    {
       !isSmallScreen ?
        largeScreen
        :
        smallScreen
      
    }
    </>
  )
    
}

export default Project