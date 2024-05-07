import React from 'react';
import FormComponent from './FormComponent';
import styles from './styles.module.css';
import { RxCross2 } from "react-icons/rx";

const DialogBox = ({onClose}) => {

    return <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
            <RxCross2 className={styles.crossIcon} onClick={onClose}/>
            <h2>User Form</h2>
            <FormComponent/>

        </div>
    </div>

}

export default DialogBox;