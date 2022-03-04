import styles from '../../styles/form.module.css'

function Header({text}) {
    return (
        <div id={styles.header}>
            <h1>{text}</h1>
        </div>
    )
}

export default Header
