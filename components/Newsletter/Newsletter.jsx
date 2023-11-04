import React from 'react'
import styles from './newsletter.module.css'

const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <h1 className={`${styles.header} text-display`}>Newsletter</h1>
            <p className={`${styles.body} text-body-large`}>Occasionally we like non-paper post too. Sign up below and we’ll send a discount code to your inbox.</p>
            <form className={styles.form}>
                <input id="newsletter-input" className={styles.form_input} type="email" />
                <button className={styles.form_button} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Newsletter