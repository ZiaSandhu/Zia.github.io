import React from 'react'
import Social from '../SocialIcons/Social'
import styles from './Header.module.css'
function Header() {
  const size = window.screen.width
  return (
    <>
      {/* <img src="./asset/header.png" className={styles.background} alt="" /> */}
      <div className={ size > 600 ? styles.wrapper : styles.mobile }>
        {/* <div className={styles.subWrapper}> */}
        <div className={styles.main}>
          <h1>Zia Ur Rehman</h1>
          <h3>Full Stack MERN Developer</h3>
          <p>Technology Enthusiast working as a web developer</p>
        </div>
        <div className={styles.social}>
          <Social isSmallScreen={size<=600} />
        </div>
      </div>
     
    </>
  );
}

export default Header