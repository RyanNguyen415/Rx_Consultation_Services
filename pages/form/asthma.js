import Decider from "../../components/form/Decider"
import Header from "../../components/form/Header"
import Question from '../../components/form/Question'
import List from '../../components/form/List'
import styles from '../../styles/form.module.css'
import Comment from '../../components/form/Comment'
import Line from "../../components/form/Line"
import AlertText from "../../components/form/AlertText"
import { useState,useContext } from "react"
import {ContextApi} from "../../components/context"
import SubmitBtn from "../../components/form/SubmitBtn"
import Agreement from "../../components/form/Agreement"

function Asthma() {

    const formName = 'asthma'
    const {consultation,setConsultation} = useContext(ContextApi)

    //states
    const [symptom1,setSymptom1]= useState(null);
    const [symptom2,setSymptom2]= useState(null);


    const [health1,setHealth1]= useState(null);
    const [health2,setHealth2]= useState(null);
    const [health3,setHealth3]= useState(null);
    const [health4,setHealth4]= useState(null);
    const [health5,setHealth5]= useState(null);
    const [health6,setHealth6]= useState(null);
    
    const [medication1,setMedication1]= useState(null);
    const [medication2,setMedication2]= useState(null);

    const [agreement1,setAgreement1] = useState(null)
    const [agreement2,setAgreement2] = useState(null)    

    const isAgreedList = [agreement1,agreement2]

    
    
    const healthList1 = [
        'Overactive thyroid gland',
        'History of heart problems such as an irregular or fast heartbeat or angina',
        'High blood pressure',
        "Any serious medical condition which may require immediate hospitalisation"
    ]
    const medicationList1 = [
        'medicines for an irregular or fast heartbeat',
        'medicines for your asthma (apart from your existing inhaler ) such as oral asthma tablets',
        'xanthine derivatives (such as theophylline) or steroids to treat asthma',
        'water tablets (diuretics), sometimes used to treat high blood pressure or a heart condition'
    ]
    const agreementList1 = [
        'You will read the patient information leaflet supplied with your medication',
        'You will contact us and inform your GP of your medication if you experience any side effects of treatment, if you start a new medication or if your medical conditions change during treatment.',
        'The treatment is solely for your own use',
        'If you are suffering from acute breathlessness, wheeze or chest tightness, contact 999 for help.',
        'This is not an emergency service for asthma and is not intended to replace regular reviews and monitoring with your GP.',
        'You give permission to access you NHS Summary Care Record in order to identify you correctly, check your medical history and provide the best possible care.',
        'You give permission to contact your GP to inform them of your treatment.',
        'You have answered all the above questions accurately and truthfully. You understand our prescribers take your answers in good faith and base their prescribing decisions accordingly, and that incorrect information can be hazardous to your health.'
    ]
    function randomName(){
        return Math.floor(Math.random()*12345679*77).toString()
    }
    return (
        <div id={styles.formContainer}>
            <form>
                <Header text={'YOUR SYMPTOMS'}/>
                <Question text={'Have you called an ambulance or had emergency treatment for breathing problems in the last year?'}/>
                <Decider setState={setSymptom1} inputName={randomName()}/>
                {symptom1 && (
                    <Comment placeHolder={`What emergency did you have?
    What was the outcome?`} label={'Please provide more details *'}/>

                )}

                <Question text={'Do you use your inhaler more than four times a day?'}/>
                <Decider setState={setSymptom2} inputName={randomName()}/>
                {symptom2 && (
                    <Comment placeHolder={`How many times do you use your inhaler per day? 
                    How often do you use it for more than 4 times a day?
                    Why do you feel you need to use your inhaler more than 4 times a day?`} label={'Please provide more details *'}/>

                )}
                <Line/>


                {/* health section */}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'Has your Asthma been reviewed by a doctor or nurse within the last 12 months?'}/>
                <Decider setState={setHealth1} inputName={randomName()}/>
                {health1 && (
                    <Comment label={'Please provide more details *'}/>
                )}

                <Question text={'Have you been prescribed Ventolin (salbutamol) in the last 12 months?'}/>
                <Decider setState={setHealth2} inputName={randomName()}/>
                {health2 && (
                    <Comment label={'Please provide more details *'}/>
                )}
               
                <Question text={'Is your asthma well controlled? If you are not sure, take the asthma control test here.'}/>
                <Decider setState={setHealth3} inputName={randomName()}/>
                {health3 && (
                    <Comment label={'Please provide more details *'}/>
                )}
           
                <Question text={'Do you have an allergy (hypersensitivity) to Ventolin (salbutamol) or have you had a reaction with an asthma inhaler previously?ALLERGY A'}/>
                <Decider setState={setHealth4} inputName={randomName()}/>
                {health4===false && (
                    <Comment label={'Please provide more details *'}/>
                )}
           
                <Question text={'Are you breastfeeding or pregnant or planning to become pregnant in the next 6 months?'}/>
                <Decider setState={setHealth5} inputName={randomName()}/>
                {health5===false && (
                <Comment label={'Please provide more details *'}/>
                )}

                <Question text={'Have you been diagnosed with any of the following?'}/>
                <Decider setState={setHealth6} inputName={randomName()}/>
                <List listItems={healthList1}/>
                {health6 && (
                    <Comment label={'Please provide more details *'}/>
                )}


                {/* Medication section */}
                <Header text={'YOUR MEDICATION'}/>
                <Question text={'Are you currently taking any medication (including over the counter, prescription or recreational drugs)?'}/>
                <Decider setState={setMedication1} inputName={randomName()}/>
                {medication1 && (
                    <>
                    <Question text={'Are you taking any of the following medications?'}/>
                    <Decider setState={setMedication2} inputName={randomName()}/>
                    <List listItems={medicationList1}/>
                    {medication2 && (
                        <Comment label={'Please provide more details *'}/>
                    )}
                    </>    
                )}


                
                {/* agreement section */}
                <Header text={'AGREEMENT'}/>
                <Question text={'Do you understand that you must seek medical attention if your asthma does not improve within 1 hour of using your inhaler?'}/>
                <Decider setState={setAgreement1} inputName={randomName()}/>
                {agreement1===false && (
                    <AlertText text={'Please contact our customer service for more information. We cannot continue if you do not understand this.'}/>
                )}

                <Agreement agreement={agreement2} setAgreement={setAgreement2}/>
                {isAgreedList.every((item)=>item===true) && (
                    <SubmitBtn consultationState={consultation} setConsultationState={setConsultation} formName={formName}/>                                
                )}
                
            </form> 
            <button>Submit Form</button>       
        </div>
    )
}

export default Asthma
