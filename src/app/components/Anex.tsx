import React from 'react'
import styles from '@/style/anex.module.scss'
import { Poppins } from 'next/font/google'
import Pic1 from '@/images/cover1.jpg'
import Pic2 from '@/images/cover2.jpg'
import Link from 'next/link'
import Image from 'next/image'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Pic3 from '@/images/Stand1.png'
import Pic4 from '@/images/Stand2.png'




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

function Anex() {
  return (
    <div className={`${styles.anexMain} ${poppins.variable} ${poppinsTini.variable}`}>
        <div className={styles.box1}>
            <div>
            <a href='../../../public/TDR.pdf'>
                <Image src={Pic1} alt='TDR cades 2024' className={styles.coverpicture}/>
            </a>
            </div>
            <div>
            <a href='../../asset/docs/TDR.pdf'>
                <Image src={Pic2} alt='dossier marketing cades 2024' className={styles.coverpicture}/>
            </a>
            </div>
        </div>

        <div className={styles.box2}>
            <Carousel>

                <div>
                    <div className={styles.standSize}> Stand 25 m<sup>2</sup></div>
                    <div className={styles.standprise}>2 000 000 fcfa</div>
                    <Image src={Pic3} alt='zzz' className={styles.standImage}/>
                </div>
                <div>
                    <div className={styles.standSize}> Stand 9 m<sup>2</sup></div>
                    <div className={styles.standprise}>1 000 000 fcfa</div>
                    <Image src={Pic4} alt='zzz' className={styles.standImage}/>
                </div>

            </Carousel>
        </div>

    </div>
  )
}

export default Anex