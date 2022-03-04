// import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../../styles/form.module.css'

function RadioList({list,name}) {
    const [randomKey,setRandomKey] = useState(null)
    const [randomID,setRandomID] = useState(null)
    useEffect(()=>{
        const id = Math.floor(Math.random()*1000000000)*Math.floor(Math.random()*1000000000);
        setRandomKey(()=>id.toString())
        setRandomID(()=>id.toString())
    },[])
    return (
        <div id={styles.radioList}>
            {list.map((item,index) =>{
             return (
                <label key={randomID+index} htmlFor={randomID+index}>
                    <input value={item} type="radio" name={randomKey} id={randomID+index} />
                    <span>{item}</span>
                </label>
             )})
        }  
        </div>
    )
}

export default RadioList
