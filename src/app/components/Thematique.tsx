'use client'
import React from 'react'
import styles from '@/style/thematique.module.scss'
import PanelBox from '@/components/PanelBox'
import panel from '@/datas/panel'
import Modal from '@/components/Modal'
import { useState } from "react";
import Modal2 from '@/components/Modal2'
import {easeIn, motion, spring} from 'framer-motion'

const variants = {
  view:(index:any)=>({
    scale:1,
    transition:{
      delay:index*0.2,
      type: spring,
      stiffness:300,
      easeIn:easeIn,
      duration:0.3
    }
  }),
  hidden:{
    scale:0,
  }

}

function Thematique(props:any) {

  return (
    <div className={styles.boxContainer}>
        {panel.map((data,index)=>(
          <motion.div custom={index} variants={variants} initial="hidden" whileInView="view" key={index}>
            <PanelBox
            number ={data.number}
            text ={data.text}
            id={index}
            soustheme={data.soustheme}
            />
            </motion.div>
        ))}
    </div>
  )
}

export default Thematique