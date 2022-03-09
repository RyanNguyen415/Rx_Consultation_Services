import Decider from "../../components/form/Decider"
import Header from "../../components/form/Header"
import Question from '../../components/form/Question'
import List from '../../components/form/List'
import styles from '../../styles/form.module.css'
import Comment from '../../components/form/Comment'
import Line from "../../components/form/Line"
import AlertText from "../../components/form/AlertText"
import { useState, useContext} from "react"
import {ContextApi} from "../../components/context"
import Agreement from "../../components/form/Agreement"

import SubmitBtn from "../../components/form/SubmitBtn"

function PeriodDelay() {

    const [inValid,setInValid]=useState(false)
    const formName = 'periodDelay'
    const {consultation,setConsultation} = useContext(ContextApi)


    const healthList1 = [
        'irregular vaginal bleeding of unknown cause',
        'diabetes',
        'depression',
        'epilepsy, migraine, asthma, kidney or heart problems',
        'myocardial infarction (heart attack)',
        'High blood pressure',
        'Angina',
        'Any liver disease or disturbance of liver function',
        'jaundice or herpes during pregnancy',
        'severe itching',
        'Dubin-Johnson Syndrome (chronic jaundice (yellowing of the skin or eyes)) or Rotor Syndrome (jaundice in childhood)',
        'an inherited disorder of the red blood pigment haemoglobin (porphyria)',
        'cancer of the breast or genital tract',
        'any serious medical condition which may require immediate hospitalisation'
    ]

    const medicationList1 =[
        'Medicines to treat epilepsy (e.g. phenytoin, carbamazepine)',
        'Antibiotic medicines to treat an infection (e.g. tetracyclines, rifampicin, co-trimoxazole)',
        'Antiviral medicines to treat HIV (e.g. ritonavir, nelfinavir)',
        'Anticancer medicines',
        "Herbal preparations containing St John's Wort (Hypericum perforatum)",
        "Aminoglutethimide, sometimes used in Cushing's syndrome",
        'Ciclosporin (for suppressing the immune system)',
        'Non-steroidal inflammatory drugs (NSAIDs) for treating pain and inflammation',
        'Medicines for high blood pressure',
        'Rifamycin',
        'Warfarin',
        'Sex hormones',
        'A statin for high cholesterol',
        'griseofulvin'
    ]

    const [about1,setAbout1]=useState(null);
    
    const [health1,setHealth1]=useState(null);
    const [health2,setHealth2]=useState(null);
    const [health3,setHealth3]=useState(null);
    const [health4,setHealth4]=useState(null);
    
    const [medication1,setMedication1]=useState(null);
    const [medication2,setMedication2]=useState(null);
    const [medication3,setMedication3]=useState(null);
    
    const [agreement1,setAgreement1]=useState(null);
    const [agreement2,setAgreement2]=useState(null);
    

    const isAgreedList = [!agreement1,agreement2]


    return (
        <div id={styles.formContainer}>
            <form onSubmit={()=>false}>
                <Header text={'ABOUT YOU'}/>
                <Question text={'Are you a female'}/>
                <Decider inValidState={setInValid} setState={setAbout1}/>
                {about1===false && (
                    <AlertText text={'Norethisterone is only for female patients.'}/>
                )}
                <Line/>

                {/* health section*/}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'Are you breastfeeding or pregnant or possibly pregnant?'}/>
                <Decider inValidState={setInValid} setState={setHealth1}/>
                {health1 && (
                    <Comment label={'Please provide more details *'}/>
                )}

                <Question text={'ADo you have an allergy (hypersensitivity) to norethisterone?'}/>
                <Decider inValidState={setInValid} setState={setHealth2}/>
                {health2 && (
                    <Comment label={'Please provide more details *'}/>
                )}
                <Question text={'Do you or your family members have a history of deep vein thrombosis (DVT)?'}/>
                <Decider inValidState={setInValid} setState={setHealth3}/>
                {health3 && (
                    <Comment label={'Please provide more details *'}/>
                )}
                <Question text={'Have you been diagnosed with any of the following?'}/>
                <Decider inValidState={setInValid} setState={setHealth4}/>
                <List listItems={healthList1}/>
                {health4 && (
                    <Comment label={'Please provide more details *'}/>
                )}
                <Line/>

                {/* medication section */}
                <Header text={'YOUR MEDICATION'}/>
                <Question text={'Are you taking any type of hormonal contraceptives (e.g. oral or injections)?'}/>
                <Decider inValidState={setInValid} setState={setMedication1}/>
                {medication1 && (
                    <Comment label={'Please provide more details *'}/>
                    )}
            
                <Question text={'Are you currently taking any medication (including over the counter, prescription or recreational drugs)?'}/>
                <Decider inValidState={setInValid} setState={setMedication2}/>
                {medication2 && (
                    <>
                        <Question text={'Are you taking any of the following medications?'}/>
                        <Decider inValidState={setInValid} setState={setMedication3}/>
                        <List listItems={medicationList1}/>
                        {medication3 && (
                            <Comment label={'Please provide more details *'}/>
                            )}
                    </>    
                )}
                <Line/>


            
                {/*AGREEMENT SECTION  */}
                <Header text={'AGREEMENT'}/>
                <Question text={'Are you taking any type of hormonal contraceptives (e.g. oral or injections)?'}/>
                <Decider inValidState={setInValid} setState={setAgreement1}/>
                {agreement1===false && (
                    <AlertText text={'We can only supply Norethisterone for period delay. If you would like to take this medication for any other reason, you must make an appointment to see your doctor as the treatment recommended may be different.'}/>
                )}

                <Agreement agreement={agreement2} setAgreement={setAgreement2}/>
                {isAgreedList.every((item)=>item===true) && (
                    <SubmitBtn consultationState={consultation} setConsultationState={setConsultation} formName={formName}/>                                
                )}
                
            </form>
            
        </div>
    )
}

export default PeriodDelay
