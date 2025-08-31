'use client'
import React from 'react'
import styles from '@/style/footer.module.scss'
import { Poppins } from 'next/font/google'
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import Link from 'next/link';

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

function Footer2() {
  return (
    <div  className={`${styles.footermain2} ${poppinsTini.variable} ${poppins.variable}`}>
        <div className={styles.iconContainer}>
            <div className={styles.icon}>
                <Link href={'/'}><AiFillFacebook size={30} color='white' /></Link>
            </div>

            <div className={styles.icon}>
                <Link href={'/'}><FaSquareYoutube size={30} color='white' /></Link>
            </div>

            <div className={styles.icon}>
                <Link href={'/'}><FaSquareXTwitter size={30} color='white' /></Link>
            </div>
        </div>
        <div>
        <MdCopyright size={15} /> developper par Franck Pagnol Nounjo Djomini
        </div>
    </div>
  )
}

export default Footer2
