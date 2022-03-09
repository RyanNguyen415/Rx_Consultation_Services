import Decider from "../../components/form/Decider"
import Header from "../../components/form/Header"
import Question from '../../components/form/Question'
import List from '../../components/form/List'
import styles from '../../styles/form.module.css'
import Comment from '../../components/form/Comment'
import Line from "../../components/form/Line"
import AlertText from "../../components/form/AlertText"
import { useState,useContext} from "react"
import {ContextApi} from "../../components/context"
import Agreement from "../../components/form/Agreement"

import SubmitBtn from "../../components/form/SubmitBtn"

function Migraine() {

    const formName = 'migraine'
    const {consultation,setConsultation} = useContext(ContextApi)


    //state of checking if form is invalid
    const [inValid,setInValid]=useState(false)

    const [about1,setAbout1]=useState(null);
    
    const [health1,setHealth1]=useState(null);
    const [health2,setHealth2]=useState(null);
    const [health3,setHealth3]=useState(null);
    const [health4,setHealth4]=useState(null);
    const [health5,setHealth5]=useState(null);
    
    const [symptom1,setSymptom1]=useState(null);
    const [symptom2,setSymptom2]=useState(null);
    const [symptom3,setSymptom3]=useState(null);
    const [symptom4,setSymptom4]=useState(null);
    
    const [medication1,setMedication1]=useState(null);
    const [medication2,setMedication2]=useState(null);
    
    const [agreement1,setAgreement1]=useState(null);

    const isAgreedList = [agreement1]

    

    const symptomList1 = [
        'unilateral motor weakness',
        'double vision',
        'clumsiness or uncoordinated movements',
        'tinnitus (ringing in the ears',
        'reduced level of consciousness',
        'seizure-like movements (fits)',
        'a recent rash with a headache',
        'headache confined to the back of the head',
        'recent marked deterioration in migraine (duration, severity or frequency of attacks)'
    ]
    const healthList1 = [
        'Heart disease or heart problems such as narrowing of the arteries (ischaemic heart disease) or chest pains (angina), or have already had a heart attack',
        'Stroke or a mini-stroke (also called a transient ischaemic attack or TIA)',
        'High blood pressure',
        'Coronary Vasospasm (including Prinzmetal’s angina)',
        'Wolff-Parkinson-White Syndrome (a type of abnormal heartbeat)',
        'Peripheral Vascular Disease',
        'Previous Gastrointestinal or Splenic infarction',
        'Ischaemic Colitis',
        'Epilepsy or history of seizures',
        'Liver problems',
        'Kidney problems',
        'Allergy or sensitivity to antibiotics called sulphonamides (e.g. trimethoprim)',
        'Any serious medical condition which may require immediate hospitalisatio'
    ]

    const medicationList1 = [
        'The migraine medications Ergotamine or Methysergide',
        'Any other ‘triptan’ migraine medication taken within last 24 hours (e.g. naratriptan, rizatriptan, zolmitriptan, almotriptan or eletriptan (NOTE: we advise different types of ‘triptans’ should not be taken within 24 hours of one another)',
        'MAOIs (monoamine oxidase inhibitors) or if you have taken an MAOI in the last 2 weeks (e.g. Moclobemide, Phenelzine, Isocarboxazid, and Tranylcypromine)',
        'SSRIs usually used to treat depression (Selective Serotonin Reuptake Inhibitors – e.g. Citalopram, Escitalopram, Fluoxetine, Fluvoxamine, Paroxetine, Sertraline, and Priligy)',
        'SNRIs used to treat depression (Serotonin Noradrenaline Reuptake Inhibitors e.g. Duloxetine, Dapoxetine, Venlafaxine, and Mirtazapine)',
        'Reboxetine, Tryptophan or Flupentixol',
        'Any current antibiotics (antibiotic course needs to be completed at least 72 hours before taking a triptan)',
        'The combined oral contraceptive pill (not the progesterone only mini pill)'
    ]
    return (
        <div id={styles.formContainer}>
            <form onSubmit={()=>false}>
                {/* about you section*/}
                <Header text={'ABOUT YOU'}/>
                <Question  text={'Are you aged between 18-65?'}/>
                <Decider inValidState={setInValid} setState={setAbout1}/>
                {about1===false && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                
                {/* SYMPTOMS SECTION */}
                <Header text={'YOUR SYMPTOMNS'}/>
                <Question text={'Do you experience migraines for more than 10 days a month?'}/>
                <Decider inValidState={setInValid} setState={setSymptom1}/>
                {symptom1 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Do your migraines last less than 4 hours without treatment or last longer than 24 hours?'}/>
                <Decider inValidState={setInValid} setState={setSymptom2}/>
                {symptom2 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Do your migraines follow a broadly similar pattern each time?'}/>
                <Decider inValidState={setInValid} setState={setSymptom3}/>
                {symptom3===false && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Are you experiencing any of the following along with your migraine?'}/>
                <Decider inValidState={setInValid} setState={setSymptom4}/>
                <List listItems={symptomList1}/>
                {symptom4 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
            
                {/* health section*/}
                <Header text={'YOUR HEALTH'}/>
                <Question text={"Have you previously been diagnosed with migraines by your GP and have you experienced relief when taking medication containing 'triptans' such as Imigran (Sumatriptan), Rizatriptan (Maxalt), Zomig (Zolmitriptan)?"}/>
                <Decider inValidState={setInValid} setState={setHealth1}/>
                {health1===false && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={"When you have taken a ‘triptan’ medication in the past, within the first few hours of taking it have you experienced sensations such as heaviness, pressure or tightness in the body (especially chest or throat), or have you experienced palpitations, flushing, dizziness, rash, a feeling of weakness, worsening nausea and vomiting or a temporary rise in your blood pressure?"}/>
                <Decider inValidState={setInValid} setState={setHealth2}/>
                {health2 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Are you breastfeeding or pregnant or possibly pregnant?'}/>
                <Decider inValidState={setInValid} setState={setHealth3}/>
                {health3 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Do you have an allergy (hypersensitivity) to Imigran/Sumatriptan, Maxalt/rizatriptan, Zomig/zolmitriptan?'}/>
                <Decider inValidState={setInValid} setState={setHealth4}/>
                {health4 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Have you been diagnosed with any of the following?'}/>
                <Decider inValidState={setInValid} setState={setHealth5}/>
                <List listItems={healthList1}/>
                {health5 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
            
                {/*medication section  */}
                <Header text={'YOUR MEDICATION'}/>
                <Question text={"Are you currently taking any medication (including over the counter, prescription or recreational drugs)?"}/>
                <Decider inValidState={setInValid} setState={setMedication1}/>
                {medication1 && (
                    <>
                        <Question text={"Are you taking any of the following medications?"}/>
                        <Decider inValidState={setInValid} setState={setMedication2}/>
                        <List listItems={medicationList1}/>
                        {medication2 && (
                            <Comment label={'Please provide more details *'}/>
                        )}
                    </>    
                )}
            


                {/* agreement section */}
                <Header text={'AGREEMENT'}/>
                <Agreement agreement={agreement1} setAgreement={setAgreement1}/>
                {isAgreedList.every((item)=>item===true) && (
                    <SubmitBtn consultationState={consultation} setConsultationState={setConsultation} formName={formName}/>                                
                )}
              
            </form>
                            
        </div>
    )
}

export default Migraine
