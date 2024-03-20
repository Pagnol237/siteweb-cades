'use client'
import React from 'react'
import styles from '@/style/navigation.module.scss'
import Logo from '@/images/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import {Roboto,Poppins} from 'next/font/google'

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

  return (
    <div className={styles.navMain}>
      <div className={styles.logoContainer}>
          <Image
            src={Logo}
            alt='logo cades bangui 2024'
            className={styles.navLogo}
          />
      </div>
        <div className={styles.linkContainer}>
          <div className={`${poppins.variable} ${poppinsbold.variable}`}>
            <Link href='/' className={`${styles.lien} ${styles.activeLink}`}>Accueil</Link>
            <Link href='/' className={styles.lien}>Activités</Link>
            <Link href='/' className={styles.lien}>thématiques</Link>
            <Link href='/' className={styles.lien}>Sponsoring</Link>
            <Link href='/' className={styles.lien} onClick={props.onChow}>Accréditation</Link>
            <Link href='/' className={styles.lien}>Contacts</Link>
          </div>
        </div>
    </div>
  )
}

export default Navigation