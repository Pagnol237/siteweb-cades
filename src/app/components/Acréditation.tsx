import React,{useState,useEffect} from 'react'
import { Poppins } from 'next/font/google'
import styles from '@/style/acreditation.module.scss'
import { IoCloseOutline } from "react-icons/io5";



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

interface IpropsType{
    onClose:()=>void;
}


function Acréditation(props:IpropsType) {
    const [categorie,setCategorie]= useState('');
    const [name,setName]= useState('');
    const [validation,setValidation]= useState(false);

    const handelSumit =(e:any)=>{
        setValidation(true);
    }


  return (
        <div className={`${poppins.variable} ${poppinsTini.variable} ${styles.main}`}>
            <div className={styles.title}>Inscription</div>
            <form className={styles.formcontainer}>
                <input type='text' placeholder='votre nom' onChange={(e)=>setName(e.target.value)} className={styles.inputField} required />
                <input type='text' placeholder='votre prenom' className={styles.inputField} required  />
                <input type='text' placeholder='telephone' className={styles.inputField} required  />
                <input type='email' placeholder='email' className={styles.inputField} required  />
                <select className={styles.inputField} onChange={(e)=>setCategorie(e.target.value)}>
                    <option className={styles.optionField} value="">type d'enregistrement</option>
                    <option value="Medias">Medias</option>
                    <option value="Visiteur">Visiteur</option>
                    <option value="Anonceur">Anonceur</option>
                </select>
                {categorie === 'Medias' ?
                <input type='text' placeholder='nom du media' className={styles.inputField} required  />:
                '' }
                <button type='submit' onClick={handelSumit} className={styles.send}>Envoyer</button>
            </form>
            <div className={styles.closeBouton} onClick={props.onClose} >
                <IoCloseOutline size={25} color='white' />
            </div>
        </div>
  )
}

export default Acréditation