'use client'

import React from 'react'
import styles from '@/style/header.module.scss'
import { Roboto,Poppins } from 'next/font/google'
import CountDown from "@/components/CountDown";
import Image from 'next/image';
import CemacPic from '@/images/cemacflag.png'
import {easeInOut, motion, spring} from 'framer-motion'



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
        <motion.div initial={{opacity:0,x:"-1vw"}}  whileInView={{opacity:1,x:0}} transition={{ type:"spring",stiffness:120,duration:0.3}}  className={`${poppins.variable} ${styles.firsttext}`}>
            CENTRAL AFRICA DIGITAL<br />ECONOMY SUMMIT<br />
        </motion.div>

        <motion.div initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{type:"spring",stiffness:120,delay:0.3,}}  >
            <div className={`${poppinsTini.variable} ${styles.secondtext}`}>Bangui 2024 hôtel Ledger pladza du 10 au 13 Decembre 2024</div>
            <div className={`${poppins.variable} ${styles.theme}`}>
                "CONNECTING AFRICA, THI IS THE MOMENT"<br />
            </div>
        </motion.div>

        <CountDown/>
        <motion.div style={{width:"100%",display:"flex",alignItems:'center',justifyContent:"center"}} initial={{scale:0}} whileInView={{scale:1}} transition={{type:"spring", delay:0.7,stiffness:200}}>
        <Image
            src={CemacPic}
            alt='cemac flag'
            className={styles.cemacFlag}
        />
        </motion.div>

    </div>
  )
}

export default header