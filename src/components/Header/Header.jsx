import React from 'react'
import Social from '../SocialIcons/Social'
import styles from './Header.module.css'
function Header() {
  return (
    <>
      <div className={styles.wrapper}>
        {/* <div className={styles.subWrapper}> */}
        <div className={styles.main}>
          <h1>Zia Ur Rehman</h1>
          <h3>Full Stack MERN Developer</h3>
          <p>Technology Enthusiast working as a web developer</p>
        </div>
        <div className={styles.social}>
          <Social />
        </div>
        {/* </div> */}
      </div>
      <div className={styles.divider}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}

export default Header