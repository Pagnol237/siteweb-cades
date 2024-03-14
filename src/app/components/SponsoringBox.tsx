import React from 'react'
import styles from '@/style/sponsoring.module.scss'
import data from '@/datas/sponsoring'
import {Poppins } from 'next/font/google'



const poppins = Poppins({
    subsets:['latin'],
    weight:'200',
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
                    <div className={styles.prix}>{items.prix}</div>
                    
                </div>
                {items.description.map((lebel)=>(
                    <div>
                      {lebel}
                    </div>
                ))}
                
            </div>
            
        ))}
    </div> 
  )
}

export default SponsoringBox