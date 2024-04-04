"use client"
import React,{useState,useCallback} from 'react'
import Link from 'next/link'
import styles from '@/style/paneldetail.module.scss'
import styles4 from '@/style/footer.module.scss'
import { GoArrowLeft,GoArrowRight } from "react-icons/go";
import {Poppins } from 'next/font/google'
import data from '@/datas/panel'
import Image from 'next/image'
import {easeIn, motion} from 'framer-motion'
import dynamic from 'next/dynamic'
import { useSearchParams,useRouter,usePathname } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/Footer'
import { Suspense } from 'react'

// font using on this component
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

// animation variants 

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



// external component using searchParams

const Detail = ()=>{
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const id = searchParams.get("id");
    const [curentid,setCurentid] = useState(Number(id));
    const panelNumber = Number(curentid) +1;
    const panel = data[curentid].text;
    const subpanel = data[curentid].soustheme;
    const participans = data[curentid].participans;

  //calback function to put url in cache
  const createQueryString = useCallback
  (
    (name: string, value: string) => 
      {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
  
        return params.toString()
      },
      [searchParams]
  )

  // next button function
  const nextItems = ()=>
  {
    let nextId = parseInt(id ?? "0") + 1;
    router.push("/details" + "?" + createQueryString("id", nextId.toString()));
    setCurentid(curentid+1);

  }

  // previous button function
  const previousItems = ()=>
  {
    let prevId = parseInt(id ?? "0") - 1;
    router.push("/details" + "?" + createQueryString("id", prevId.toString()));
    setCurentid(curentid-1);

  }

  // subpanel const 
  const display = subpanel?.map((items,index)=>{
    return (
  
        <motion.div key={index} custom={index} variants={newvariants} initial="hidden" whileInView="visible">
          - {items}
        </motion.div>
    )
  });

  //author const 

  const aurateur =  participans?.map((item,i)=>{
    return(
      <motion.div custom={i} variants={aurateurVariants} initial="hidden" animate="show" className={styles.aurateurContainer}>
      <Image src={item.Pic} alt={item.alt} className={styles.picture}/>
      <div className={styles.nom}>{item.nom}</div>
      <div className={styles.poste}>{item.poste}</div>
    </motion.div>
    )
  })



  return(
    <>
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

    </>
  )
}





export default function Page() {
    return (
      <>
          <Navigation/>
          <Suspense>
            <Detail/>
          </Suspense>

          <div id={styles4.footer}>
            <Footer/>
          </div>
      </>
    )
  }

