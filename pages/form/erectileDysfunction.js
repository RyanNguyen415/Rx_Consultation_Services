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
import RadioList from "../../components/form/RadioList"
import SubmitBtn from "../../components/form/SubmitBtn"
import Agreement from "../../components/form/Agreement"

function ErectileDysfunction() {

    const formName = 'erectileDysfunction'
    const {consultation,setConsultation} = useContext(ContextApi)

    const [about1,setAbout1] = useState(null)
    const [about2,setAbout2] = useState(null)
    
    const [symptom1,setSymptom1] = useState(null)
    
    const [health1,setHealth1] = useState(null)
    const [health2,setHealth2] = useState(null)
    const [health3,setHealth3] = useState(null)
    const [health4,setHealth4] = useState(null)
    const [health5,setHealth5] = useState(null)
    const [health6,setHealth6] = useState(null)
    
    const [medication1,setMedication1] = useState(null)
    const [medication2,setMedication2] = useState(null)
    const [medication3,setMedication3] = useState(null)
    const [medication4,setMedication4] = useState(null)
    
    const [agreement1,setAgreement1] = useState(null)

    const isAgreedList = [agreement1]
    const healthRadioList1 = [
        'Low (90/60mmHg or lower)',
        'Normal (between 90/60mmHg and 120/80mmHg)',
        'Low (140/90mmHg or higher)'
    ]
    const medicationList1 = [
        'Often taken for chest pain/angina',
        'Can be administered as a spray, tablet or patch.',
        'Include glyceryl trinitrate, isosorbide mononitrate or isosorbide dinitrate'
    ]



    return (
        <div id={styles.formContainer}>
            <form>
                <Header text={'ABOUT ME'}/>
                <Question text={'Are you a male between the ages of 18-75?'}/>
                <Decider setState={setAbout1}/>
                {about1===false && ( 
                    <Comment placeHolder={'What is your biological sex \nWhat is your age?'} label={'Please provide more details *'}/>
                )}
                
                
                <Question text={'Do you smoke or drink?'}/>
                <Decider setState={setAbout2}/>
                {about2 && (
                    <AlertText textColor='yellow' text={'You are eligible for treatment, however, be aware alcoholic drinks and/or smoking can make erection difficulties worse. You can consult your GP for information on giving up smoking.'}/>
                )}



                {/* symptoms section */}
                <Header text={'YOUR SYMPTOMS'}/>
                <Question text={'Do you have any problems getting an erection, or keeping one as long as you want to?'}/>
                <Decider setState={setSymptom1}/>
                {symptom1===false && (
                    <Comment label={'Can you tell us why you’d like to use erectile dysfunction medication? *'}/>
                )}



                {/* health section */}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'What is your blood pressure?'}/>
                <RadioList list={healthRadioList1}/>

                <Question text={'Have you been advised to avoid heavy exercise by your GP or other healthcare professionals?'}/>
                <Decider setState={setHealth1}/>
                {health1 && (
                    <Comment placeHolder={'Why have you been advised to avoid exercise? \nFor how long?\nBy whom?'} label={'Please provide more details *'}/>
                )}

                <Question text={'Do you often get breathless or have chest pain when you do light exercise, like walking up stairs?breathless or chest pain a'}/>
                <Decider setState={setHealth2}/>
                {health2 && (
                    <>
                        <Comment label={'Please provide more details *'}/>

                        <Question text={'Have you seen a doctor about it?'}/>
                        <Decider setState={setHealth3}/>
                        {health3 && (
                            <Comment label={'When did you see a doctor and were you told why this was happening? *'}/>
                        )}
                        {health3===false && (
                            <Comment label={'Please describe what happens *'}/>
                        )}
                    </>
                )}

                <Question text={'In the last 6 months, have you been told by a doctor to avoid physical or sexual activity?'}/>
                <Decider setState={setHealth4}/>
                {health4 && (
                    <Comment label={'Why did the doctor tell you to avoid these activities? *'}/>
                )}
                
                <Question text={'Do you suffer from depression that you have not seen your GP about?'}/>
                <Decider setState={setHealth5}/>
                {health5 && (
                    <Comment placeHolder={'What are your symptoms?\nWhy have you not seen your GP about your depression?'} label={'Please provide more details *'}/>
                )}



                {/* medication section */}
                <Header text={'ABOUT ME'}/>
                <Question text={'Have you used any erectile dysfunction medication before?'}/>
                <Decider setState={setMedication1}/>
                {medication1 && (
                    <>
                        <Question text={'Did you have any side effects?'}/>
                        <Decider setState={setMedication2}/>
                        {medication2 && (
                            <>
                                <Comment label={'What were the side effects'}/>
                                <Comment label={'What was the medication and the dose you were on when you had them? *'}/>
                            </>
                        )}
                    </>
                )}


                <Question text={'Do you have any allergy to Viagra (sildenafil), Levitra (vardenafil), Spedra (avanafil) or Cialis (tadalafil) or have you experienced any adverse reaction to any erectile dysfunction medication previously?'}/>
                <Decider setState={setMedication3}/>
                {medication3 && (
                    <>
                        <Comment label={'Which medicines or substances are you allergic to? *'}/>
                        <Comment label={'What was the adverse reaction? *'}/>
                    </>    
                )}

                <Question text={"Are you taking any medicines known as nitrates (often taken for chest pain/angina) or nitric oxide donors ('poppers')?"}/>
                <Decider setState={setMedication4}/>
                <List listItems={medicationList1}/>
                {medication4 && (
                    <>
                        <Comment label={'Please provide more details about your medication *'}/>
                        <AlertText textColor={'yellow'} text={"We do not advise any recreational drug use with PDE 5 inhibitors, but especially nitric oxide donors such as 'poppers' which may lead to a dangerous fall in your blood pressure."}/>
                    </>
                )}


                {/* agrrement section */}
                <Header text={'AGREEMENT'}/>
                <Agreement agreement={agreement1} setAgreement={setAgreement1}/>               
                {isAgreedList.every((item)=>item===true) && (
                    <SubmitBtn consultationState={consultation} setConsultationState={setConsultation} formName={formName}/>                                
                )}
           
            </form>
            
        </div>
    )
}

export default ErectileDysfunction
