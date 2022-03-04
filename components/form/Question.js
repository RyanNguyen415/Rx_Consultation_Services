import styles from '../../styles/form.module.css'

function Question({text}) {
    return (
        <div id={styles.question}>
            <p>{text}</p>
        </div>
    )
}

export default Question
