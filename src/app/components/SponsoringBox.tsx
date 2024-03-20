'use client'
import React from 'react'
import styles from '@/style/sponsoring.module.scss'
import data from '@/datas/sponsoring'
import {Poppins } from 'next/font/google'



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

function SponsoringBox() {
  return (
    <div className={styles.sponsoringMain}>
        {data.map((items)=>(
            <div className={`${styles.sponsoringBoxmain} ${poppins.variable} ${poppinsTini.variable}`}>
                <div className={styles.header}>
                  <div className={styles.cercle}></div>
                  <div className={styles.cercle2}></div>
                    <div className={styles.prix}>{items.prix} Fcfa</div>
                    <div className={styles.titre}>{items.titre}</div>
                    
                </div>
                {items.description.map((lebel)=>(
                    <div className={`${styles.liste} ${poppinsTini.variable}`}>
                      {lebel}
                    </div>
                ))}
                <div  className={styles.butonContainer}>
                    <div className={styles.buton}>détails</div>
                </div>
            </div>
            
        ))}
    </div> 
  )
}

export default SponsoringBox