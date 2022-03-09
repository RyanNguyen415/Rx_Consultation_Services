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
import SubmitBtn from "../../components/form/SubmitBtn"
import Agreement from "../../components/form/Agreement"


function WeightLoss() {

    const formName = 'weightLoss'
    const {consultation,setConsultation} = useContext(ContextApi)

    //states
    const [health1,setHealth1]=useState(null)
    const [health2,setHealth2]=useState(null)
    const [health3,setHealth3]=useState(null)
    const [health4,setHealth4]=useState(null)
    const [health5,setHealth5]=useState(null)
    
    const [medication1,setMedication1]=useState(null)
    const [medication2,setMedication2]=useState(null)
    const [medication3,setMedication3]=useState(null)
    const [medication4,setMedication4]=useState(null)
    
    const [agreement1,setAgreement1]=useState(null)
    const [agreement2,setAgreement2]=useState(null)
    const [agreement3,setAgreement3]=useState(null)
    const [agreement4,setAgreement4]=useState(null)
    const [agreement5,setAgreement5]=useState(null)
    


    const isAgreedList = [agreement1,agreement2,agreement3,agreement4,agreement5]

    const medicationList1 = [
        'Other Anti-Obesity Drugs',
        'HIV Medication',
        'Fat Soluble Vitamins',
        'Oral anticoagulant drugs used to thin the blood such as Warfarin',
        'Ciclosporin, used after organ transplants, for severe rheumatoid arthritis and some severe skin conditions',
        'a thyroid medicine (levothyroxine)',
        'Iodine salts',
        'Amiodarone, used for heart rhythm problems.',
        'Acarbose (an anti-diabetic drug used to treat type 2 diabetes mellitus)',
        'Anti-convulsant/anti-epileptic drugs'
    ]
    const healthList1 = [
        'Problems absorbing food (chronic malabsorption syndrome) diagnosed by a doctor',
        'Liver problems',
        'Kidney problems',
        'Thyroid problems',
        'Cholestasis (condition where the flow of bile from the liver is blocked)',
        'any serious medical condition which may require immediate hospitalisation'
    ]

    return (
        <div id={styles.formContainer}>
            <form>
                {/* health section */}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'Do you suffer from diabetes, heart disease, high blood pressure or high cholesterol?'}/>
                <Decider setState={setHealth1}/>
                {health1 && (
                    <Comment placeHolder={'What conditions do you have?\nHow long have you had these conditions?\nWhat treatments are you currently on for these conditions?'} label={'Please provide more details about your condition *'}/>
                )}
            
                <Question text={'Have you ever suffered from an eating disorder such as Anorexia Nervosa or Bulimia?'}/>
                <Decider setState={setHealth2}/>
                {health2 && (
                    <Comment placeHolder={'What conditions do you have?\nHow long have you had these conditions?\nWhat treatments are you currently on for these conditions?'} label={'Please provide more details about your condition *'}/>
                )}
            
                <Question text={'Are you pregnant or breastfeeding or intending to become pregnant or start breastfeeding whilst taking medication?'}/>
                <Decider setState={setHealth3}/>
                {health3 && (
                    <Comment label={'Please provide more details about your condition *'}/>
                )}
            
                <Question text={'Are you allergic to orlistat?'}/>
                <Decider setState={setHealth4}/>
                {health4 && (
                    <Comment label={'Please provide more details about your condition *'}/>
                )}
            
                <Question text={'Have you been diagnosed with any of the following?'}/>
                <Decider setState={setHealth5}/>
                <List listItems={healthList1}/>
                {health5 && (
                    <Comment label={'Please provide more details about your condition *'}/>
                )}
            
            
                {/* medication section*/}
                <Header text={'YOUR MEDICATION'}/>
                <Question text={'Are you using an oral contraceptive?'}/>
                <Decider setState={setMedication1}/>
                {medication1 && (
                    <Comment label={'Please provide more details about your condition *'}/>
                )}
            
                <Question text={'Are you taking any medicine for high cholesterol, diabetes or high blood pressure?'}/>
                <Decider setState={setMedication2}/>
                {medication2 && (
                    <Comment label={'Please provide more details about your condition *'}/>
                )}
            
                <Question text={'Are you currently taking any medication (including over the counter, prescription or recreational drugs)?'}/>
                <Decider setState={setMedication3}/>
                {medication3 && (
                    <>
                        <Question text={'Are you taking any of the following medications?'}/>
                        <Decider setState={setMedication4}/>
                        <List listItems={medicationList1}/>
                        {medication4 && (
                            <Comment label={'Please provide more details about your condition *'}/>
                        )}
                    </>
                )}


                {/* agreenment section */}
                <Header text={'AGREEMENT'}/>
                <Question text={'Do you understand that treatment cannot be continued if you gain weight 3 months after starting the treatment?'}/>
                <Decider setState={setAgreement1}/>
                {agreement1===false && (
                    <AlertText text={'We are unable to supply you with orlistat if you do not understand this. Call customer support for assistance.'}/>
                )}

                <Question text={'Do you understand that the treatment must be stopped once your BMI goes below 28?'}/>
                <Decider setState={setAgreement2}/>
                {agreement2===false && (
                    <AlertText text={'We are unable to supply you with orlistat if you do not understand this. Call customer support for assistance.'}/>

                )}

                <Question text={'Do you understand the treatment should be taken with a nutritionally balanced, calorie controlled diet that contains approximately 30% of the calories from fat? It is recommended that your diet is rich in fruit and vegetables.'}/>
                <Decider setState={setAgreement3}/>
                {agreement3===false && (
                    <AlertText text={'We are unable to supply you with orlistat if you do not understand this. Call customer support for assistance.'}/>

                )}

                <Question text={'Do you understand that you should take a multivitamin that contains vitamins D, E, and K and beta-carotene? It should be taken once a day at least 2 hours before or after taking Xenical(orlistat) such as at bedtime.'}/>
                <Decider setState={setAgreement4}/>
                {agreement4===false && (
                    <AlertText text={'We are unable to supply you with orlistat if you do not understand this. Call customer support for assistance.'}/>

                )}

                <Agreement agreement={agreement5} setAgreement={setAgreement5}/>
                {isAgreedList.every((item)=>item===true) && (
                    <SubmitBtn consultationState={consultation} setConsultationState={setConsultation} formName={formName}/>                                
                )}
              
            </form>
            
        </div>
    )
}

export default WeightLoss
