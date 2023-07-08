import React from 'react'
import styles from './Social.module.css'
import { SocialIcon } from 'react-social-icons';
function Social({isSmallScreen}) {
  return (
    <div className={!isSmallScreen ? styles.wrapper : styles.mobile}>
      {/* linkedIn */}
      <SocialIcon
        className={styles.icon}
        url="https://www.linkedin.com/in/zia-ur-rehman-sandhu"
        bgColor='transparent'
        fgColor='#0A66C2'
      />
      {/* //youtube */}
      <SocialIcon
        className={styles.icon}
        url="https://www.linkedin.com/in/zia-ur-rehman-sandhu"
        network="instagram"
        bgColor='transparent'
        fgColor='#E1306C'
      />
      {/* //intstagram */}
      <SocialIcon
        className={styles.icon}
        url="https://www.linkedin.com/in/zia-ur-rehman-sandhu"
        network="github"
        bgColor='transparent'
        fgColor='#171515'
      />
      {/* //github */}
      <SocialIcon
        className={styles.icon}
        url="https://www.linkedin.com/in/zia-ur-rehman-sandhu"
        network="youtube"
        bgColor='transparent'
        fgColor='#ff0000'
      />
    </div>
  );
}

export default Social