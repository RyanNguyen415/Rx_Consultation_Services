import styles from '../../styles/form.module.css'

function List({listItems}) {
    return (
        <div>
            <ul id={styles.ul}>
                {listItems.map(item => (
                    <li key={Math.floor(Math.random()*1000000*35672)}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default List
