'use client'
import React from 'react'
import styles from '@/style/signalitique.module.scss'
import { Roboto,Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets:['latin'],
    weight:'500',
    variable: '--font-poppins'
})

const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable: '--font-poppinsTini'
})

function Signalitique() {
  return (
    <div className={`${styles.main} ${poppins.variable} ${poppinsTini.variable}`}>
        <div className={styles.boxContainer}>
            <div className={styles.bloc}>
                <div className={styles.chiffre}>40</div>
                <div className={styles.text}>stands b to b</div>
            </div>
            <div className={styles.bloc}>
                <div className={styles.chiffre}>10 000</div>
                <div className={styles.text}>visiteurs attendus</div>
            </div>
            <div className={styles.bloc}>
                <div className={styles.chiffre}>2000</div>
                <div className={styles.text}>visiteurs estimés par jour</div>
            </div>
        </div>
    </div>
  )
}

export default Signalitique