'use client'
import React,{useState,useEffect} from 'react'
import styles from '@/style/countdown.module.scss'
import { clearInterval } from 'timers';
import {Poppins} from '@next/font/google';




const COUNTDOWN_TARGET = new Date("2024-05-28T23:59:59");

const getTimeLeft =  () => {
    const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();
    const Jours = Math.floor(totalTimeLeft /(1000 * 60 *60 *24));
    const Heures = Math.floor((totalTimeLeft / (1000 * 60 * 60))% 24);
    const Minutes = Math.floor((totalTimeLeft/ (1000 * 60))%60);
    const Secondes = Math.floor((totalTimeLeft/ 1000) % 60);
    return{Jours,Heures,Minutes,Secondes}
};


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






function CountDown() {
    const [timeleft,setTimeleft]=useState(()=> getTimeLeft());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeleft(getTimeLeft());
        },1000);
       
    },[]);

  return (
    <div className={`${styles.countdownMain} ${poppins.variable}`}>
        {Object.entries(timeleft).map((data,label)=>{
            const number = data[0];
            const name = data[1];
            return(
            <div className={styles.box} key={label}>
                <div className={styles.number}>{name}</div>
                <div className={`${styles.text} ${poppinsTini.variable}`}>{number}</div>
            </div>

            )
        })}
  
       

    </div>
  )
}

export default CountDown