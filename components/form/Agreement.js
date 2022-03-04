import Question from "./Question"
import Decider from "./Decider"
import List from "./List"
import AlertText from "./AlertText"


function Agreement({agreement,setAgreement}) {

    const agreementList1 = [
        'You will read the patient information leaflet supplied with your medication',
        'You will contact us and inform your GP of your medication if you experience any side effects of treatment, if you start a new medication or if your medical conditions change during treatment.',
        'The treatment is solely for your own use',
        'You give permission to access you NHS Summary Care Record in order to identify you correctly, check your medical history and provide the best possible care.',
        'You give permission to contact your GP to inform them of your treatment.',
        'You have answered all the above questions accurately and truthfully. You understand our prescribers take your answers in good faith and base their prescribing decisions accordingly, and that incorrect information can be hazardous to your health.'
    ]

    return (
        <>
            <Question text={'Do you agree with the following?'}/>
            <Decider setState={setAgreement}/>
            <List listItems={agreementList1}/>                
            {agreement===false && (
                <AlertText text={'We are unable to supply you with acid reflux medication for treating other conditions. Please consult your GP for the treatment of any other condition.'}/>
            )}
        </>
    )
}

export default Agreement
