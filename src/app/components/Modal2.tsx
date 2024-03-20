'use client'
import React from 'react'
import styles from '@/style/modal.module.scss'

function Modal2(props:any) {
  return (
    <div style={{width:'100%',backgroundColor:'red',position:'fixed',zIndex:'300'}}>
         {props.children}
    </div>
  )
}

export default Modal2