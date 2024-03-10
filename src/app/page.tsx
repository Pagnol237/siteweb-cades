import Head from "next/head";
import Navigation from '@/components/navigation';
import styles from "@/style/home.module.scss"
import Header from '@/components/Header'


export default function Home() {
  return (
    <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation/>
      <Header/>
    </>
  );
}
