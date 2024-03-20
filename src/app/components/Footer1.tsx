'use client'
import React from 'react'
import styles from '@/style/footer.module.scss'
import activite from '@/datas/activites'
import { Poppins } from 'next/font/google'

const poppinsTini = Poppins({
    subsets:['latin'],
    weight:'200',
    variable:'--font-poppinsTini',
})
const poppins = Poppins({
    subsets:['latin'],
    weight:'500',
    variable: '--font-poppins'
})

function Footer1() {
  return (
    <div className={`${styles.footermain1} ${poppinsTini.variable} ${poppins.variable}`}>
        <div className={styles.box}>
            <div className={styles.footer1text}>Composantes</div>
            {activite.map((data,index)=>(
                <div className={styles.textDetail}>- {data.titre}</div>
            ))}
        </div>

        <div className={styles.box}>
            <div className={styles.footer1text}>Pavillons</div>
            <div className={styles.textDetail}>
                - pavillon des opérateurs de l’économie numérique ;<br />
                - pavillon des opérateurs et fournisseurs de l’internet ;<br />
                - pavillon des opérateurs des services et fournisseurs du digital ;
                - pavillon des  Ministères et Institutions publiques et parapubliques ;
                - pavillon des  start-ups ;
                - pavillon du «village numérique»  ;
            </div>
            <br/><div className={`${styles.footer1text} `}>Contactez nous</div>
                <div className={styles.textDetail}>
                - (+236) 74 65 69 91<br />
                - (+237) 677 65 80 51/ 699 78 11 48 / 677 55 77 27<br />
                - (+237) 699 98 12 25/ 677 55 77 25 / 697 10 97 96<br />
                - www.primaf.com<br />
                </div>
        </div>


        <div className={styles.box}>
            <div className={styles.footer1text}>Ecrivez nous</div>
            <form className={styles.formMain}>
                <input className={styles.textInput} type="text"  placeholder='votre nom'/>
                <textarea className={styles.message} placeholder='votre message'> 
                </textarea>
                <button className={styles.sendBotton}>Envoyer</button>
            </form>
        </div>
    </div>
  )
}

export default Footer1