import Head from "next/head";
import Navigation from '@/components/navigation';
import styles from "@/style/home.module.scss"
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



export default function Home() {
  return (
    <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation/>
      <Header/>
      <PresidentBlock/>
      <PresidentUA/>
      <div id={styles1.main}>
        <Titre1>Composantes</Titre1>
        {activite.map((data)=>(
          <Activite
          numero={data. numero}
          texte={data. texte}
          titre={data. titre}
          picture={data. picture}
          />
        ))}
        
      </div>
      <Signalitique/>
      <div id={styles2.thematique}>
        <Titre1>Thématiques</Titre1>
        <Thematique/>
      </div>
    </>
  );
}
