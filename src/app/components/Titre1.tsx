'use client'
import React from 'react'
import { Poppins } from 'next/font/google'
import styles from '@/style/activité.module.scss'

const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable: '--font-poppinsTini'
})

const poppins = Poppins({
    subsets:['latin'],
    weight:'500',
    variable: '--font-poppins'
})

function Titre1({children}:any) {
  return (
    <div className={`${poppinsTini.variable} ${poppins.variable}`}>
        <div className={styles.titre1}> 
            {children}
        </div>
    </div>
  )
}

export default Titre1