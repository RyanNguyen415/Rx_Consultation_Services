import styles from '../../styles/form.module.css'

function Selector({options}) {
    return (
        <div>
            <select id={styles.selector}>
                {options.map(option => (
                    <option key={Math.floor(Math.random()*1000000*35672)} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default Selector
