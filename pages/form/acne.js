import Decider from "../../components/form/Decider"
import Header from "../../components/form/Header"
import Question from '../../components/form/Question'
import List from '../../components/form/List'
import styles from '../../styles/form.module.css'
import Comment from '../../components/form/Comment'
import Line from "../../components/form/Line"
import AlertText from "../../components/form/AlertText"
import { useState, useContext } from "react"
import {ContextApi} from "../../components/context"
import SubmitBtn from "../../components/form/SubmitBtn"
import Agreement from "../../components/form/Agreement"

function Acne() {

    const formName = 'acne'
    const {consultation,setConsultation} = useContext(ContextApi)
   
    const [aboutYou1,setAboutYou1]= useState(null);
    
    const [health1,setHealth1]= useState(null);
    const [health2,setHealth2]= useState(null);
    const [health3,setHealth3]= useState(null);
    const [health4,setHealth4]= useState(null);
    const [health5,setHealth5]= useState(null);
    
    const [medication1,setMedication1]= useState(null);
    const [medication2,setMedication2]= useState(null);
    
    
    const [agreement1,setAgreement1]= useState(null);
    const [agreement2,setAgreement2]= useState(null);
    const [agreement3,setAgreement3]= useState(null);
    const [agreement4,setAgreement4]= useState(null);
    const [agreement5,setAgreement5]= useState(null);
    const [agreement6,setAgreement6]= useState(null);
    const [agreement7,setAgreement7]= useState(null);
    const [agreement8,setAgreement8]= useState(null);
    const [agreement9,setAgreement9]= useState(null);
    
    const isAgreedList = [agreement1,agreement2,agreement3,agreement4,agreement5,agreement6,agreement7,agreement8,agreement9]

    const healthList1 = [
        'Clindamycin',
        'Lincomycin',
        'Benzoyl peroxide'
    ]
    const healthList2 = [
        'I take neostigmine or pyridostigmine (used for conditions such as Myasthenia Gravis)',
        'I am likely to have an operation whilst I am on Duac',
        'I was hoping to get Oral Typhoid vaccine whilst on Duac'
    ]
    const healthList3 = [
        'a rare hereditary disease affecting haemoglobin'
    ]
    const medicationList1 = [
        'Clindamycin',
        'Linomycin',
        'Benzoyl peroxide',
        'Tetracycline antibiotics (such as Oxytetracycline)',
        'Lymecycline or Minocycline)',
        'Other antibiotics such as Erythromycin',
        'Tretinoin, isotretinoin and tazarotene'
    ]

    // const isAgreedList = [agreement1,agreement2,agreement3]
    

    function randomName(){
        return Math.floor(Math.random()*12345679*77).toString()
    }
    return (
        <div id={styles.formContainer}>
            <form>
                {/* about you section */}
                <Header text={'ABOUT YOU'}/>
                <Question text={'Have you previously been diagnosed with mild to moderate acne by a medical doctor?'}/>
                <Decider setState={setAboutYou1}/>
                {aboutYou1===false && (
                    <Comment label={'Please provide more information*'}/>
                )}


                {/* health section */}
                <Header text={'YOUR HEALTH'}/>
                <Question text={'Are you allergic to any of the following?'}/>
                <Decider setState={setHealth1}/>
                <List listItems={healthList1}/>
                {health1 && (
                    <Comment label={'Please provide more information*'}/>
                )}

                <Question text={'Do any of the following apply to you:'}/>
                <Decider setState={setHealth2}/>
                <List listItems={healthList2}/>
                {health2 && (
                    <>
                        <Comment label={'Please provide more information*'}/>
                        <AlertText textColor={'orange'} text={'You must understand that the use of Duac can alter the effectiveness of the drugs mentioned in the situations above. It can also interact with drugs that are used by anaesthetists, in case of an operation. The effect is likely to be minimal but it is strongly advised that you inform your specialist or anaesthetists about using Duac. Additionally, antibiotics can inactivate the Oral Typhoid Vaccine, so you should not get this vaccine done while you are taking Duac.'}/>
                    </>                   
                )}

                <Question text={'Are you pregnant, planning on becoming pregnant, or breastfeeding?'}/>
                <Decider setState={setHealth3}/>
                {health3 && (
                    <Comment label={'Please provide more information*'}/>
                )}

                <Question text={'Do you have acute porphyria?'}/>
                <Decider setState={setHealth4}/>
                <List listItems={healthList3}/>
                {health4 && (
                    <Comment label={'Please provide more information*'}/>
                )}

                <Question text={'Do you currently have sunburn?'}/>
                <Decider setState={setHealth5}/>
                {health5 && (
                    <AlertText text={'You must wait for your sunburn to completely resolve before starting your treatment.'}/>
                )}



                {/*medication section*/}
                <Header text={'YOUR MEDICATION'}/>
                <Question text={'Are you allergic to any of the following?'}/>
                <Decider setState={setMedication1}/>
                {medication1 && (
                    <>
                        <Question text={'Are you allergic to any of the following?'}/>
                        <Decider setState={setMedication2}/>
                        <List listItems={medicationList1}/>
                        {medication2 && (
                            <Comment label={'Please provide more information*'}/>
                        )}
                    </>
                )}

                


                {/* AGREEMENT SECTION */}
                <Header text={'AGREEMENT'}/>
                <Question text={'Do you understand that it can take 4-8 weeks of treatment before beneficial effects are seen?'}/>
                <Decider setState={setAgreement1}/>
                {agreement1===false && (
                    <AlertText text={'It often takes 8 weeks or more for this treatment to work. For more information, please contact our customer service.'}/>
                )}           

                <Question text={'Do you understand that treatment with Duac should not exceed 12 weeks?'}/>
                <Decider setState={setAgreement2} />           
                {agreement2===false && (
                    <AlertText text={'You should not exceed the treatment with Duac Once Daily Gel for more than 12 weeks of continuous use.'}/>
                )} 
                
                <Question text={'Do you understand that you should use Duac at most once a day, after washing your face with a mild cleanser and fully drying?'}/>
                <Decider setState={setAgreement3}/>           
                {agreement3===false && (
                    <AlertText text={'Duac Once Daily Gel is best applied after washing your face with a mild cleanser and water.'}/>
                )} 


                <Question text={'Do you understand if your acne gets worse or starts to cause scarring, you must see your GP?'}/>
                <Decider setState={setAgreement4} />           
                {agreement4===false && (
                    <AlertText text={'You must see your GP if your acne gets worse.'}/>
                )} 

                <Question text={'Do you understand that if severe erythema (severe redness), dryness, itching or burning of the affected area occurs, Duac gel should be discontinued?'}/>
                <Decider setState={setAgreement5} />           
                {agreement5===false && (
                    <AlertText text={'Using Duac can cause skin irritation. If this occurs, you should either decrease your use to alternate days until your skin is better or stop completely and wait for your skin to recover. After your skin has recovered, you can try applying Duac on alternate days or see your GP to discuss your options.'}/>
                )} 

                <Question text={'Do you understand that this medication can make your skin more sensitive to sunlight (photosensitivity)? You should avoid sunlight and sunlamps while using this gel and take care to use sunscreen and cover in protective clothing if sunlight exposure is necessary.'}/>
                <Decider setState={setAgreement6}/>           
                {agreement6===false && (
                    <AlertText text={'It is advised to avoid exposure to sunlamps and direct sunlight during the treatment since this medicine can make your skin more light sensitive. Please contact our customer service for more information.'}/>
                )} 

                <Question text={'Do you understand that if your get prolonged or significant diarrhoea, that treatment should be stopped immediately?'}/>
                <Decider setState={setAgreement7}/>           
                {agreement7===false && (
                    <AlertText text={'Prolonged or significant diarrhoea might be an indication for antibiotic-associated colitis, therefore treatment should be stopped.'}/>
                )} 

                <Question text={'Do you understand that this medicine must not come in contact with eyes, mouth, mucus membranes, or eczematous/ broken/ sunburned skin, and that if it does by accident you should seek medical advice?'}/>
                <Decider setState={setAgreement8}/>           
                {agreement8===false && (
                    <AlertText text={'This medication can cause irritation to the eyes or mucous membranes (e.g. lips and gums), and if it comes into contact with either you should seek medical advice.'}/>
                )} 

                <Agreement agreement={agreement9} setAgreement={setAgreement9}/>
                {isAgreedList.every((item)=>item===true) && (
                    <SubmitBtn consultationState={consultation} setConsultationState={setConsultation} formName={formName}/>                                
                )}
               
            </form>
           
        </div>
    )
}

export default Acne
