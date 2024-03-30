'use client'
import React from 'react'
import styles from '@/style/navigation.module.scss'
import styles1 from '@/style/activité.module.scss'
import styles2 from '@/style/thematique.module.scss'
import styles3 from '@/style/sponsoring.module.scss'
import styles4 from '@/style/header.module.scss'
import styles5 from '@/style/footer.module.scss'
import Logo from '@/images/logo.jpg'
import Image from 'next/image'
import { Link } from 'react-scroll'
import {Roboto,Poppins} from 'next/font/google'
import { HiMiniBars3,HiMiniXMark } from "react-icons/hi2";
import { useState } from 'react'
import {motion} from 'framer-motion'

const poppins = Poppins({
  subsets:['latin'],
  weight:'200',
  variable: '--font-poppins'
})

const poppinsbold = Poppins({
  subsets:['latin'],
  weight:'400',
  variable: '--font-poppinsbold'
})

function Navigation(props:any) {

      
  const [isopen,setIsopen]=useState(false);
  const togglemenu =()=>{
      setIsopen(!isopen)
  }

  const varaint ={
    open:{opacity:1,x:0},
  close:{opacity:0,x:-100}
  }

  return (
    <div className={styles.navMain}>
      <div className={styles.logoContainer}>
          <Image
            src={Logo}
            alt='logo cades bangui 2024'
            className={styles.navLogo}
          />
      </div>
      <div  className={styles.bars}>
            {isopen === false?
            <HiMiniBars3 size={25} color='white'  onClick={togglemenu}/>:
            <HiMiniXMark size={25} color='white'  onClick={togglemenu}/>
            }
            
        </div>

        <div className={`${isopen?styles.on:styles.off}`}>
          <motion.div className={`${styles.linkContainer} ${poppins.variable} ${poppinsbold.variable}`} >
              <Link onClick={togglemenu}  to={`${styles4.header_main}`} className={`${styles.lien} ${styles.activeLink}`} spy={true} smooth={true} offset={-60} duration={500}>Accueil</Link>
              <Link onClick={togglemenu}  to={`${styles1.activite_main}`} className={styles.lien} spy={true} smooth={true} offset={-60} duration={500}>Activités</Link>
              <Link onClick={togglemenu}  to={`${styles2.thematique}`} className={styles.lien} spy={true} smooth={true} offset={-60} duration={500}>thématiques</Link>
              <Link onClick={togglemenu}  to={`${styles3.sponsoring}`} className={styles.lien} spy={true} smooth={true} offset={-60} duration={500}>Sponsoring</Link>
              <Link to={`${styles1.banner_main}`} className={styles.lien} onClick={props.onChow}>Inscription</Link>
              <Link onClick={togglemenu}  to={`${styles5.footer}`} className={styles.lien} spy={true} smooth={true} offset={-60} duration={500}>Contacts</Link>
          </motion.div>
        </div>

    </div>
  )
}

export default Navigation