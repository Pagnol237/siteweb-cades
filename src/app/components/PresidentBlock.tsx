'use client'
import React from 'react'
import styles from '@/style/PresidentBlock.module.scss'
import Image from 'next/image'
import Pic from '@/images/pr_rca.jpg'
import { Roboto,Poppins } from 'next/font/google'
import {easeIn, motion} from 'framer-motion'



const poppins = Poppins({
    subsets:['latin'],
    weight:'400',
    variable: '--font-poppins'
})

const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable: '--font-poppinsTini'
})


function PresidentBlock() {
  return (
    <div id={styles.main}>
        <motion.div initial={{opacity:0,x:"-30vw"}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.5}} className={styles.pictureContainer}>
            <Image
                src={Pic}
                alt='fostin archange touadera president de rca en 2024'
                className={styles.photo}
            />
        </motion.div>

        <motion.div initial={{opacity:0,x:"10vw"}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn,duration:0.5,delay:0.3}} className={`${styles.text} ${poppinsTini.variable}`}>
        <div className={`${styles.poste} ${poppins.variable}`}>DE S.E FAUSTIN ARCHANGE TOUADERA,</div>
        <div style={{fontSize:10}}>Président de la République Centrafricaine,<br />
            Président en exercice de la CEMAC
            </div><br />
        Président de la République Centrafricaine, Président en exercice de la CEMAC
        «...Je suis plus que convaincu que cet atelier va permettre d’introduire facilement dans tous les secteurs d’activités, des applications telles que la gouvernance électronique (e-gouv), l’administration électronique (e-administration), le commerce électronique (e-commerce), l’éducation en ligne (e-éducation), la santé (e-santé) ainsi que le dispositif structurel et le mécanisme de gestion harmonisée de l’ensemble de ces applications.<br />
        Ce changement qui va contribuer au développement social de notre pays, va aussi permettre d’avoir les bases du gouvernement numérique pour la prestation de services publics de confiance et inclusifs, une meilleure efficacité et de la transparence dans la gestion des ressources publiques et un flux important de trafics.<br />
        A ce stade de mon allocution, j’invite tous les participants à faire preuve de rigueur scientifique dans la définition du processus et l’élaboration du schéma de digitalisation afin de régler définitivement le problème de fragmentation du leadership qui ne fera que nous distraire, sinon nous dévier de l’axe stratégique de nos actions.
        Je vous invite en particulier à vous appuyer sur des exemples concrets qui ont fait leur preuve au niveau international, régional et sous-régional, sans perdre vue le réflexe de la contextualisation...»<br /><br />
        Extrait du discours de Son Excellence <b> M. Faustin Archange Touadera, Président de la République Centrafricaine</b> à l’occasion de la cérémonie officielle d’ouverture des travaux de l’atelier sur l’économie numérique et la transformation digitale des secteurs public et prive en République Centrafricaine lu le 25 août 2022 à Bangui.
            

        </motion.div>
    </div>
  )
}

export default PresidentBlock