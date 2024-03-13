'use client'

import React from 'react'
import styles from '@/style/header.module.scss'
import { Roboto,Poppins } from 'next/font/google'
import CountDown from "@/components/CountDown";



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

function header() {

    const dateTarget = new Date();
  return (
    <div className={styles.mainContainer}>
        <div className={`${poppins.variable} ${styles.firsttext}`}>
            CENTRAL AFRICA DIGITAL<br />ECONOMY SUMMIT<br />
        </div>
        <div className={`${poppinsTini.variable} ${styles.secondtext}`}>Bangui 2024 hôtel Ledger pladza </div>
        <CountDown/>
    </div>
  )
}

export default header