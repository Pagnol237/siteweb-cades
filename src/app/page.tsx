'use client'
import Head from "next/head";
import Navigation from '@/components/navigation';
import Header from '@/components/Header'
import PresidentBlock from "@/components/PresidentBlock";
import PresidentUA from '@/components/PresidentUA'
import styles1 from '@/style/activité.module.scss'
import Activite from '@/components/Activite';
import activite from '@/datas/activites'
import Titre1 from '@/components/Titre1'
import Signalitique from '@/components/Signalitique'
import styles2 from '@/style/thematique.module.scss'
import Thematique from '@/components/Thematique'
import Sponsoring from '@/components/Sponsoring'
import styles3 from '@/style/sponsoring.module.scss'
import styles4 from '@/style/footer.module.scss'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import Acréditation from "@/components/Acréditation";
import { useState } from "react";
import styles5 from '@/style/header.module.scss'
import styles6 from '@/style/navigation.module.scss';
import styles7 from '@/style/anex.module.scss';
import Link from "next/link";
import Anex from '@/components/Anex'
import {easeIn, motion, spring} from 'framer-motion'

const variants = {
  view:(index:any)=>({
    opacity:1,
    x:0,
    transition:{
      delay:index*0.19,
      type: spring,
      stiffness:300,
      easeIn:easeIn,
    }
  }),
  hidden:{
    opacity:0,
    x:-10
  }

}




export default function Home() {



  const [onActive,setOnActive] = useState(0);
  const [isopen,setIsopen]=useState(false);
  const openModal = ()=>{
        setOnActive(1);
  }
  const closeModal = ()=>{
    setOnActive(0);
    setIsopen(!isopen);

}
  console.log(onActive);
  return (
    <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation 
      onChow={openModal}
      />
      <Modal nbr={onActive}>
        <Acréditation onClose={closeModal} />
      </Modal>
      <div className={styles5.header_main}>
        <Header/>
      </div>
      <PresidentBlock/>
      <PresidentUA/>
      <div id={styles1.activite_main}>
        <Titre1>Composantes</Titre1>
        {activite.map((data,index)=>(
          <motion.div custom={index} variants={variants} initial="hidden" whileInView="view">
          <Activite
          key={index}
          numero={data.numero}
          texte={data.texte}
          titre={data.titre}
          picture={data.picture}
          />
          </motion.div>
        ))}
        
      </div>
      <Signalitique/>
      <div id={styles2.thematique}>
        <Titre1>Thématiques</Titre1>
        <Thematique/>
      </div>

      <div id={styles3.sponsoring}>
        <Titre1>Sponsoring</Titre1>
        <Sponsoring/>
      </div>

        <Anex/>


      <div id={styles4.footer}>
          <Footer/>
      </div>
    </>
  );
}
