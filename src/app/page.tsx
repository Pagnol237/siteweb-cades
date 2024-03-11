import Head from "next/head";
import Navigation from '@/components/navigation';
import styles from "@/style/home.module.scss"
import Header from '@/components/Header'
import PresidentBlock from "@/components/PresidentBlock";
import PresidentUA from '@/components/PresidentUA'
import styles1 from '@/style/activité.module.scss'
import Activite from '@/components/Activite';



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
        <Activite/>
      </div>
    </>
  );
}
