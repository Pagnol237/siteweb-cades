'use client'
import React from 'react'
import styles from '@/style/thematique.module.scss'
import PanelBox from '@/components/PanelBox'
import panel from '@/datas/panel'
import Modal from '@/components/Modal'
import { useState } from "react";
import Modal2 from '@/components/Modal2'

function Thematique() {
  const [onActive,setOnActive] = useState(0);
  const openModal = ()=>{
        setOnActive(1);
  }
  const closeModal = ()=>{
    setOnActive(0);
}

  return (
    <div className={styles.boxContainer}>
        {panel.map((data)=>(
          <div onClick={openModal}>
            <PanelBox
            number ={data.number}
            text ={data.text}
            />
            </div>
        ))}
        <Modal2>
            open
        </Modal2>
    </div>
  )
}

export default Thematique