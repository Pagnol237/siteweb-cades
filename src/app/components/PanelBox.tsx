'use client'
import React from 'react'
import styles from '@/style/thematique.module.scss'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import panelDetail from 'app/details/page'
import { GoArrowLeft,GoArrowRight } from "react-icons/go";
import {motion} from 'framer-motion'

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



interface ipropsType {
    number: number,
    text: string,
    id:number,
    soustheme:any,
}

function PanelBox(props:ipropsType) {
  return (
    <>
    <Link className={styles.linkText} href={{
        pathname:"/details",
        query:{
            id:props.id,
        }
    }}>
        <motion.div whileHover={{scale:1.07,originX:0}}  transition={{type:"spring",stiffness:500,}} className={`${styles.panelBoxMain} ${poppinsTini.variable} ${poppins.variable}`}>
            <div className={styles.nbr}>{props.number}</div>
            <div className={styles.text}>
                <div className={styles.panelTitle}>Panel {props.number}</div>
                {props.text}
                <div>
                <GoArrowRight size={20} color='#005483' />
                </div>
            </div>
        </motion.div>
    </Link>
    </>
  )
}

export default PanelBox