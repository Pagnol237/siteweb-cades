import React from 'react'
import styles from '@/style/thematique.module.scss'
import PanelBox from '@/components/PanelBox'
import panel from '@/datas/panel'

function Thematique() {
  return (
    <div className={styles.boxContainer}>
        {panel.map((data)=>(
            <PanelBox
            number ={data.number}
            text ={data.text}
            />
        ))}
    </div>
  )
}

export default Thematique