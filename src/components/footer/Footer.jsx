
import styles from './footer.module.css'
import React from 'react'
import Image from 'next/image'
const Footer = () => {



  return (
    <div className={styles.container}>

    <div>2023 Lamamia. All Rights Reserved.</div>
    <div className={styles.social}>
    <Image className={styles.iconSocial} src="/1.png" width={20} height={20} alt="Facebook"/>
    <Image  className={styles.iconSocial} src="/2.png" width={20} height={20} alt=""/>
    <Image  className={styles.iconSocial} src="/3.png" width={20} height={20} alt=""/>
    <Image  className={styles.iconSocial} src="/4.png" width={20} height={20} alt=""/>
    </div>
    </div>
  )
}

export default Footer