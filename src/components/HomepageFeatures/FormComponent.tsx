
import {useState} from "react";
import styles from './styles.module.css'
import { useHistory } from 'react-router-dom';
const FormComponent = () => {
    const history = useHistory();

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [optionError, setOptionError] = useState(false);


    const [field, setField] = useState({
        name: "",
        phone: "",
        email: "",
        option: "",
        organization: "",
        purpose: "",

    });
    console.log(field)

    const handleNameChange = (e) => {

        setField({...field, name: e.target.value})

        setNameError(field.name.trim() === '');
    }

    const handlePhoneChange = (e) => {
        setField({...field, phone: e.target.value})
    }

    const handleEmailChange = (e) => {
        setField({...field, email: e.target.value})
        setEmailError(e.target.value.trim() === '');
    }

    const handleOptionChange = (e) => {
        setField({...field, option: e.target.value})
        setOptionError(e.target.value.trim() === '');
    }

    const handleOrganizationChange = (e) => {
        setField({...field, organization: e.target.value})
    }

    const handlePurposeChange = (e) => {
        setField({...field, purpose: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!field.name || !field.email || !field.option) {
            alert('Fill all the required fields!')
            return;
        }

        if(!validateEmail(field.email)) {
            alert('Please enter a valid email.');
            return;

        }

        history.push("/docs/introduction")

        
        //handleform submit
    }

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        option: false,
    });

    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
    };

    return <div>
        <form action="submit" onSubmit={handleSubmit} className={styles.dialogbox}>
            <div  className={styles.formComponent}>
                <div className={styles.formField}>
                    <label className={styles.formLabel} required>Name</label>
                    <input className={styles.inputFields} type="text" value={field.name} onChange={handleNameChange} onBlur={() => handleBlur('name')}/>
                    {(touched.name || nameError) &&  (
                        <span className={styles.errorMessage}>name is required.</span>
                    )}
                </div>

                

                <div className={styles.formField}>
                    <label className={styles.formLabel}>Phone</label>
                    <input className={styles.inputFields} type="text" value={field.phone} onChange={handlePhoneChange}/>
                </div>

                <div className={styles.formField}>
                    <label className={styles.formLabel} required>Email</label>
                    <input className={styles.inputFields} type="text" value={field.email} onChange={handleEmailChange} onBlur={() => handleBlur('email')}/>
                    {(touched.email || emailError) && (
                        <span className={styles.errorMessage}>email is required.</span>
                    )}
                </div>

                <div className={styles.formField}>
                    <label className={styles.formLabel}>Where do you know about us?</label>
                    <select  className={styles.inputFields} value={field.option} onChange={handleOptionChange} onBlur={() => handleBlur('option')} required>
                        <option value="">Select an option</option>
                        <option value="facebook">Facebook</option>
                        <option value="youtube">Youtube</option>
                        <option value="linkedin">LinkedIn</option>
                        <option value="instagram">Instagram</option>
                        <option value="other">other</option>
                    </select>
                    {(touched.option || optionError) && (
                        <span className={styles.errorMessage}>select an option</span>
                    )}
                </div>

                <div className={styles.formField}>
                    <label className={styles.formLabel}>Current Organization</label>
                    <input  className={styles.inputFields} type="text" value={field.organization} onChange={handleOrganizationChange}/>
                </div>

                <div className={styles.formField}>
                    <label className={styles.formLabel}>Purpose</label>
                    <textarea  className={styles.inputFields} value={field.purpose} onChange={handlePurposeChange}></textarea>
                </div>


            </div>

            <button className={styles.submitButton} type="submit">Submit</button>
        </form>
    </div>

}

export default FormComponent;