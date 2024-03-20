'use client'
import React from 'react'
import styles from '@/style/modal.module.scss'


interface IpropsType{
  nbr:number;
  children:any,
}

function Modal(props:IpropsType) {
  return (
      <div className={props.nbr ===1 ? styles.main : styles.close}>
          {props.children}
      </div>

  )
}

export default Modal