import React from 'react'
import styles from '@/style/activité.module.scss'
import { Poppins } from '@next/font/google'
import Image from 'next/image'
import Pic1 from '@/images/activite1.jpg'

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


function Activite() {
  return (
    <div>
        <div className={`${styles.titre1} ${poppins.variable} `}> Composantes</div>
        <div className={styles.boxMain}>

            <div className={`${styles.box}`}>
                <div className={styles.nbr}>1</div>
                <div className={styles.miniature}>
                    <Image
                        src={Pic1}
                        alt='activité cades'
                        className={styles.images}
                    />
                </div>
                <div className={`${styles.text} ${poppinsTini.variable}`}>
                    <p>
                    Il sera organisé un cocktail de bienvenue aux participants de l’événement à la veille de l’ouverture
                    (le 27 Mai 2024) à 19H30 à l’hôtel LEDZER PLAZA de Bangui, à l’effet de discuter avec les
                    participants majeurs sur les grands enjeux et attentes du Central Africa Digital Economy
                    Summit (CADES 2024) . Sous la forme d’un « Kick Off» avec dévoilement des visuels,
                    articulations culturelles et artistiques (danses, chorégraphie, humour, spectacles).
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Activite