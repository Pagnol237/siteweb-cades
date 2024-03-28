"use client"
import React,{useState} from 'react'
import Navigation from '@/components/navigation'
import Link from 'next/link'
import styles from '@/style/paneldetail.module.scss'
import Footer from '@/components/Footer'
import styles4 from '@/style/footer.module.scss'
import { GoArrowLeft,GoArrowRight } from "react-icons/go";
import {Poppins } from 'next/font/google'
import data from '@/datas/panel'
import Image from 'next/image'



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




function panelDetail({searchParams}:any) {
  const id:number = parseFloat(searchParams.id);
  const [curentid,setCurentid] = useState(id);
  const curentPanel = data[curentid];
  const panel = data[curentid].text;
  const subpanel = data[curentid].soustheme;
  const participans = data[curentid].participans;
  const index = data[curentid].number;
  const panelNumber:number = curentid +1;

const nextItems = ()=>{
  setCurentid(curentid+1);
}
const previousItems = ()=>{
  setCurentid(curentid-1);
}
const display = subpanel?.map((items)=>{
  return (
      <div>- {items}</div>
  )
});

const aurateur =  participans?.map((item)=>{
  return(
    <div className={styles.aurateurContainer}>
    <Image src={item.Pic} alt={item.alt} className={styles.picture}/>
    <div className={styles.nom}>{item.nom}</div>
    <div className={styles.poste}>{item.poste}</div>
  </div>
  )
})

  return (
    <>
      <Navigation/>
      <div className={`${styles.main} ${poppins.variable} ${poppinsTini.variable}`}>
        <Link href="/">
          <div className={styles.retour}>
          <GoArrowLeft size={18} color='white' />  retour
          </div>
        </Link>
        <div className={styles.boxMain}>
         { /* start box 1*/}
          <div className={`${styles.box} $${poppins.variable}`}>
            <div className={styles.title}>Panel {panelNumber}</div>
            <div className={styles.detail}>{panel}</div>
            <div className={styles.title}>Sous thème</div>
            <div className={styles.detail}>{display }</div>
          </div>
          { /* end box 1*/}

          { /* start box 2*/}
          <div className={styles.boxPic}>
            {aurateur}
          </div>
          { /* end box 2*/}

        </div>
      </div>
      <div className={`${poppinsTini.variable} ${styles.buttonContainer}`}>
        {panelNumber == 8 && panelNumber >= 1 ?
            <div onClick={previousItems}><GoArrowLeft size={18} color='white' />précédent</div>:
            panelNumber == 1 &&  panelNumber < 8 ?
            <div onClick={nextItems}>suivant<GoArrowRight size={18} color='white' /></div>:
            <>
            <div onClick={previousItems}><GoArrowLeft size={18} color='white' />précédent</div>
            <div onClick={nextItems}>suivant<GoArrowRight size={18} color='white' /></div>
            </>
        }

      </div>

      
      <div id={styles4.footer}>
          <Footer/>
      </div>
    </>
  )
}

export default panelDetail