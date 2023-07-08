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
        url="https://instagram.com/zia_jutt_15?igshid=MzNlNGNkZWQ4Mg=="
        network="instagram"
        bgColor='transparent'
        fgColor='#E1306C'
      />
      {/* //intstagram */}
      <SocialIcon
        className={styles.icon}
        url="https://github.com/ZiaSandhu"
        network="github"
        bgColor='transparent'
        fgColor='#171515'
      />
      {/* //github */}
      <SocialIcon
        className={styles.icon}
        url="https://www.youtube.com/channel/UCvJJrxLXdJjKuDNv9Ha-FLw"
        network="youtube"
        bgColor='transparent'
        fgColor='#ff0000'
      />
    </div>
  );
}

export default Social