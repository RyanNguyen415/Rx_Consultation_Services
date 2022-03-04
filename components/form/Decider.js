// import React from 'react'
import { useEffect, useState } from 'react';
import styles from '../../styles/form.module.css'

function Decider({setState,inValidState}) {


    const [name,setName] = useState(null);
    useEffect(()=>{
        setName(()=>Math.floor(Math.random()*12345679*77).toString())
    },[])


    function inValidHandler(){
        console.log('inValidHandler')
        inValidState(true)
    }
    return (
        <div id={styles.decider} >
            <label onClick={()=>setState(true)} id={styles.yesLabel} htmlFor={name+'yes'}>
                <input onInvalid={inValidHandler} required name={name} type="radio" id={name+'yes'} value='yes'/>
                <span>YES</span>
            </label>
            <label onClick={()=>setState(false)} id={styles.noLabel} htmlFor={name+'no'}>
                <input required name={name} type="radio" id={name+'no'} value='no'/>
                <span>NO</span>
            </label>
        </div>
    )
}

export default Decider
