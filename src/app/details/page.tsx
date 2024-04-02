"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import styles from '@/style/paneldetail.module.scss'
import styles4 from '@/style/footer.module.scss'
import { GoArrowLeft,GoArrowRight } from "react-icons/go";
import {Poppins } from 'next/font/google'
import data from '@/datas/panel'
import Image from 'next/image'
import {easeIn, motion} from 'framer-motion'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'

const Navigation = dynamic(
	() => import('@/components/navigation'),
	{ ssr: false }
);

const Footer = dynamic(
	() => import('@/components/Footer'),
	{ ssr: false }
);





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


const variants = {
  start:{
    opacity:0,
    x:-100
  },
  end:{
    opacity:1,
    x:0,
    transition:{
      type:'spring',
      tiffness:120,
      duration:1,
      when:"beforeChildren"
    }
  },
}


const newvariants = {
  visible: (index:any) => ({
    opacity: 1,
    y:0,
    transition: {
      delay: index * 0.3,
      duration:1,
      type:'spring',
      tiffeness:150,
    }
  }),
  hidden: { opacity: 0,y:70 }
};


const aurateurVariants ={
  show: (i:any)=>({
    scale:1,
    transition:{
      type:'spring',
      stiffness:200,
      durations:4,
      delay:i*0.3,
      eaase:easeIn
      
    }
  }),
  hidden:{
    scale:0,
  }
}


export default function Page() {
  const searchParams = useSearchParams();
{/*  alert(searchParams.get("id"));
  const nbr1 = Number(searchParams.get("id"));
  const nbr2 = 1;
  const total=  nbr1 + nbr2
alert(nbr1+'+'+nbr2+"="+total);*/}
  
  const id = Number(searchParams.get("id"));
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
const display = subpanel?.map((items,index)=>{
  return (

      <motion.div key={index} custom={index} variants={newvariants} initial="hidden" whileInView="visible">- {items}</motion.div>

  )
});

const aurateur =  participans?.map((item,i)=>{
  return(
    <motion.div custom={i} variants={aurateurVariants} initial="hidden" animate="show" className={styles.aurateurContainer}>
    <Image src={item.Pic} alt={item.alt} className={styles.picture}/>
    <div className={styles.nom}>{item.nom}</div>
    <div className={styles.poste}>{item.poste}</div>
  </motion.div>
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
            <motion.div variants={variants} initial="start" animate="end" className={styles.title}>Panel {panelNumber}</motion.div>
            <div className={styles.detail}>{panel}</div>
            <motion.div variants={variants} initial="start" animate="end" className={styles.title}>Sous thème</motion.div>
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

