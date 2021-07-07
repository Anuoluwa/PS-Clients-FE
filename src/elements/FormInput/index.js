import React, { useState } from 'react';
import styles from './index.module.scss';


export const FormInput = ({ handleChange, className, icon, type, placeholder, ...otherProps}) => {
    return(
        <div className={styles.form_group}>
            <div className={styles.input_label}>
                <input 
                    className={`${styles.input} ${className}`} 
                    onChange={handleChange} 
                    type={type} 
                    placeholder={placeholder}
                    {...otherProps} />
            </div>
            {   
                icon &&
                <div className={styles.input_icon}>
                    <img src={icon} alt="icon"/>
                </div>
            }
        </div>
    )
}

export const FormTextArea = ({className, rows, handleChange, ...otherProps}) => {
    return(
        <div className={styles._}>
            <textarea 
                className={`${styles.textarea} ${className}`} 
                rows={rows}
                onChange={handleChange}
                {...otherProps}
            >
            </textarea>
        </div>
    )
}

