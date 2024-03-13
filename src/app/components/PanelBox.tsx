import React from 'react'
import styles from '@/style/thematique.module.scss'
import { Poppins } from 'next/font/google'

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
}

function PanelBox(props:ipropsType) {
  return (
    <div className={`${styles.panelBoxMain} ${poppinsTini.variable} ${poppins.variable}`}>
        <div className={styles.nbr}>{props.number}</div>
        <div className={styles.text}>
            <div className={styles.panelTitle}>Panel {props.number}</div>
            {props.text}
        </div>
    </div>
  )
}

export default PanelBox