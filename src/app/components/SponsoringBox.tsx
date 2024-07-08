'use client'
import React from 'react'
import styles from '@/style/sponsoring.module.scss'
import data from '@/datas/sponsoring'
import {Poppins } from 'next/font/google'
import {easeIn, motion, spring} from 'framer-motion'

const variants = {
  view:(i:any)=>({
    opacity:1,
    y:0,
    transition:{
      delay:i*0.3,
      type: spring,
      stiffness:300,
      easeIn:easeIn,
      duration:0.5
    }
  }),
  hidden:{
    opacity:0,
    y:30
  }

}



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
        {data.map((items,i)=>(
            <motion.div custom={i} variants={variants} initial="hidden" whileInView="view" className={`${styles.sponsoringBoxmain} ${poppins.variable} ${poppinsTini.variable}`}>
                <div className={styles.header}>
                    <div className={styles.prix}>{items.titre}</div>
                    <div className={styles.titre}>{items.prix}</div>
                    
                </div>
                {items.description.map((lebel)=>(
                    <div className={`${styles.liste} ${poppinsTini.variable}`}>
                      {lebel}
                    </div>
                ))}
         {/*       <div  className={styles.butonContainer}>
                    <div className={styles.buton}>détails</div>
                </div>*/}
            </motion.div>
            
        ))}
    </div> 
  )
}

export default SponsoringBox