// import React from 'react'
import styles from '../../styles/form.module.css'


function Comment({placeHolder,label}) {
    return (
        <div id={styles.commentContainer}>
            <label htmlFor="comment">
                <p>{label || 'comment'}</p>
                <textarea required placeholder={placeHolder} id={styles.textarea}></textarea>
            </label>
        </div>
    )
}

export default Comment
