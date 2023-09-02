import React from 'react'
import styles from '../styles/About.module.css'

const about = () => {
    return (
        <>
            <h2>About Page</h2>
            <button className="btn btn-primary">Primary</button>
            <h2 className={styles.highlight}>Styles Highlight</h2>
        </>
    )
}

export default about