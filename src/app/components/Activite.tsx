import React from 'react'
import styles from '@/style/activité.module.scss'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Pic1 from '@/images/activite1.jpg'




const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable: '--font-poppinsTini'
})

const poppins = Poppins({
    subsets:['latin'],
    weight:'500',
    variable: '--font-poppins'
})

interface IpropsType {
    numero: number,
    texte:string,
    titre:string,
    picture:any,
}


function Activite(props:IpropsType) {
  return (
    <div className={`${poppinsTini.variable} ${poppins.variable}`}>
        <div className={styles.boxMain}>

            <div className={styles.box}>
                <div className={styles.nbr}>{props.numero}</div>
                <div className={styles.miniature}>
                    <Image
                        src={props.picture}
                        alt='activité cades'
                        className={styles.images}
                    />
                </div>
                <div className={styles.text}>
                    <div className={styles.activityTitle}>{props.titre}</div>
                    {props.texte}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Activite