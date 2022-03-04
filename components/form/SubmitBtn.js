import { useRouter } from "next/router"
import styles from '../../styles/form.module.css'


function SubmitBtn({consultationState,setConsultationState, formName}) {
    const route = useRouter();


    function submitHandler(e){
        e.preventDefault()
        if(consultationState){
            consultationState[formName]=true
            setConsultationState(consultationState)
        }else{
            const newObj = {}
            newObj[formName]=true
            setConsultationState(()=>newObj)
        }
        route.back()
    }
    return (
        <div id={styles.submitBtn}>
            <button onClick={(e)=>{submitHandler(e)}}>Submit
            </button>            
        </div>
    )
}

export default SubmitBtn
