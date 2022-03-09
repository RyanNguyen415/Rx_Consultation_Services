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
import SubmitBtn from "../../components/form/SubmitBtn"
import Agreement from "../../components/form/Agreement"

function HairLoss() {
    const medicationList = [
        'Finasteride, Propecia or Proscar for a condition other than hair loss'
    ]
    const agreementList1 = [
        'You experience any changes in breast tissue such as pain, lumps or discharge from a nipple',
        'You experience any pain, impotence, problems with ejaculation or loss of libido'
    ]


    const formName = 'hairLoss'
    const {consultation,setConsultation} = useContext(ContextApi)

    // states
    const [aboutYou1,setAboutYou1] = useState(null);
    
    const [symptom1,setSymptom1] = useState(null);
    const [symptom2,setSymptom2] = useState(null);
    const [symptom3,setSymptom3] = useState(null);
    const [symptom4,setSymptom4] = useState(null);
    const [symptom5,setSymptom5] = useState(null);
    const [symptom6,setSymptom6] = useState(null);
    
    const [health1,setHealth1] = useState(null);
    const [health2,setHealth2] = useState(null);
    
    const [medication1,setMedication1] = useState(null);
    const [medication2,setMedication2] = useState(null);
    
    const [agreement1,setAgreement1] = useState(null);
    const [agreement2,setAgreement2] = useState(null);
    const [agreement3,setAgreement3] = useState(null);
    const [agreement4,setAgreement4] = useState(null);
    const [agreement5,setAgreement5] = useState(null);
    const [agreement6,setAgreement6] = useState(null);

    const isAgreedList = [agreement1,agreement2,agreement3,agreement4,agreement5,agreement6]

    return (
        <div id={styles.formContainer}>
            <form>
                <Header text={'ABOUT YOU'}/>
                <Question text={'Are you male between the ages of 18-65?'}/>
                <Decider setState={setAboutYou1}/>
                {aboutYou1===false && (
                    <Comment label={'Please provide more details *'}/>
                )}
                <Line/>


                {/* symptoms section */}
                <Header text={'YOUR SYMPTOMS'}/>
                <Question text={'Are you currently suffering from hair loss?'}/>
                <Decider setState={setSymptom1}/>
                {symptom1===false && (
                    <Comment label={'Please provide more details *'}/>
                )}
                
                <Question text={'Do you have hair loss in patches, or have an itchy or sore scalp?'}/>
                <Decider setState={setSymptom2}/>
                {symptom2 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Do you have hair loss in patches, or have an itchy or sore scalp?'}/>
                <Decider setState={setSymptom3}/>
                {symptom3 && (
                    <AlertText text={'This treatment may still be supplied. Be advised that there is no clinical evidence supporting using Propecia for treatment of hair loss only in the temple area.'}/>
                )}
                {/* <Comment label={'Please provide more details *'}/> */}
            
                <Question text={'Are you experiencing any inflammation on your scalp?'}/>
                <Decider setState={setSymptom4}/>
                {symptom4 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Do you have sudden unexplained hair loss or complete hair loss?'}/>
                <Decider setState={setSymptom5} />
                {symptom5 && (
                    <Comment label={'Please provide more details *'}/>
                )}
            
                <Question text={'Could your hair loss be due to any medication or illness (e.g. chemotherapy or dietary)?'}/>
                <Decider setState={setSymptom6}/>
                {symptom6 && (
                    <Comment label={'Please provide more details *'}/>
                )}
                <Line/>
            

                {/* health section */}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'Are you allergic (hypersensitive) to Propecia (finasteride)?'}/>
                <Decider setState={setHealth1}/>
                {health1 && (
                    <Comment label={'Please provide more details *'}/>
                )}
                
                <Question text={'Have you ever been diagnosed with a prostate disease or male breast cancer?'}/>
                <Decider setState={setHealth2}/>
                {health2 && (
                    <>
                    <List listItems={medicationList}/>
                    <Comment label={'Please provide more details *'}/>
                    </>
                )}
                <Line/>

            
                {/*  medication section*/}
                <Header text={'ABOUT MEDICATION'}/>
                <Question text={'Are you currently taking any medication (including over the counter, prescription or recreational drugs)?'}/>
                <Decider setState={setMedication1}/>
                {medication1 && (
                    <>
                        <Question text={'Are you taking any of the following medications?'}/>
                        <Decider setState={setMedication2}/>
                        <List listItems={medicationList}/>
                        {medication2 && (
                            <Comment label={'Please provide more details *'}/>
                        ) }
                    </>
                )}
                <Line/>
            
            
            
                {/* agreement section */}
                <Header text={'AGREEMENT'}/>
                <Question text={'Do you understand that if your partner is (or could be) pregnant, they should not handle crushed or broken tablets of finasteride and that you should always wear a condom for sex?'}/>
                <Decider setState={setAgreement1}/>
                {agreement1===false && (
                    <AlertText text={'Propecia can be absorbed through the skin and is excreted in semen. Please confirm that you understand.'}/>
                )}
                  
                <Question text={'Do you understand that Propecia/Finasteride may take up to 6 months before symptoms start to improve?'}/>
                <Decider setState={setAgreement2}/>
                {agreement2===false && (
                    <AlertText text={'Please confirm that you understand.'}/>
                )}
                  
                <Question text={'Some trials have suggested finasteride use may very slightly increase the risk of developing male breast cancer and prostate cancer. Do you agree to speak immediately to your doctor if:'}/>
                <Decider setState={setAgreement3}/>
                <List listItems={agreementList1}/>
                {agreement3 && (
                    <AlertText text={'Please read the product leaflet carefully before deciding to take finasteride'}/>
                )}
                  
                <Question text={'Are you aware that Propecia may cause erectile dysfunction and you should speak to your GP if this happens?'}/>
                <Decider setState={setAgreement4}/>
                {agreement4===false && (
                    <AlertText text={'Please confirm that you understand.'}/>
                )}
                  
                <Question text={'Do you understand you must stop taking Propecia/Finasteride immediately if you develop depression and should contact a healthcare professional?'}/>
                <Decider setState={setAgreement5}/>
                {agreement5===false && (
                    <AlertText text={'Please confirm that you understand.'}/>
                )}

                <Agreement agreement={agreement6} setAgreement={setAgreement6}/>
                {isAgreedList.every((item)=>item===true) && (
                    <SubmitBtn consultationState={consultation} setConsultationState={setConsultation} formName={formName}/>                                
                )}
                
            </form>
         
        </div>
    )
}

export default HairLoss
