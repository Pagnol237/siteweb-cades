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
import Link from "next/link";




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
          <Activite
          key={index}
          numero={data.numero}
          texte={data.texte}
          titre={data.titre}
          picture={data.picture}
          />
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

      <div id={styles4.footer}>
          <Footer/>
      </div>
    </>
  );
}
