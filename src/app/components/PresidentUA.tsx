'use client'
import React from 'react'
import styles from '@/style/PresidentBlock.module.scss'
import Image from 'next/image'
import Pic from '@/images/pr_UA.jpg'
import { Roboto,Poppins } from 'next/font/google'


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

function PresidentUA() {
  return (
    <div id={styles.mainUa}>


        <div className={`${styles.text} ${poppinsTini.variable}`}>
        Message du Président de la Commission de l’Union Africaine S.E Moussa Faki
        Mahamat<br /><br />
        <b>L’Afrique devra défendre ses intérêts à travers
        l’élaboration des positions communes</b><br /><br />
        « …Bien que l’intégration en question soit celle de l’Afrique, elle ne peut se
        construire sans la prise en compte des mutations géopolitiques et économiques
        en cours dans le monde. L’ Afrique subit les conséquences de la gouvernance
        mondiale, notamment les effets des crises financières et des changements
        climatiques qui handicapent son processus d’intégration et de développement.<br /><br />
        Face à cette situation, l’Afrique devra défendre ses intérêts à travers l’élaboration
        des positions communes, notamment dans les domaines du changement
        climatique, du commerce, de la migration, du financement du développement,
        du numérique et dans la résolution des conflits… »
            <div className={`${styles.poste} ${poppins.variable}`}>S.E. Moussa Faki Mahamat,</div>
        </div>

        <div className={styles.pictureContainer}>
            <Image
                src={Pic}
                alt='fostin archange touadera president de rca en 2024'
                className={styles.photo}
            />
        </div>
    </div>
  )
}

export default PresidentUA