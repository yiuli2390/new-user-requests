import React, { useState } from 'react';
import axios from 'axios';
import '../css/Form.css';

const JSON_DB_URL = 'http://localhost:3001/requests';

export const RequestForm = (props) => {
    
    const initialFormData = {
        firstName: '',
        lastName: '',
        jobTitle: '',
        lineManager: '',
        startDate: '',
        businessArea: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setFormErrors({});
    };

    const validateForm = () => {
        let isValid = true;
        const errors = {};
    
        // Check for empty fields
        for (const field in formData) {
            if (formData[field].trim() === '') {
                errors[field] = '* Field cannot be empty';
                isValid = false;
            }
        }
    
        setFormErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newRequest = {
                ...formData,
                completed: false
            };
        
            axios
            .post(JSON_DB_URL, newRequest)
            .then(() => {
                setFormData(initialFormData);
                setFormErrors({});
                console.log('User request stored successfully');
            })
            .catch((error) => {
                console.error('Failed to store user request:', error);
            });
        };
    }

    return (
        //Create form
        <form className="form-container" onSubmit={handleSubmit} >
            <div className="user-request-form">
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                </label>
                <label>
                    Job Title:
                    <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                    />
                    {formErrors.jobTitle && <span className="error">{formErrors.jobTitle}</span>}
                </label>
                <label>
                    Line Manager:
                    <input
                        type="text"
                        name="lineManager"
                        value={formData.lineManager}
                        onChange={handleChange}
                    />
                    {formErrors.lineManager && <span className="error">{formErrors.lineManager}</span>}
                </label>
                <label>
                    Start Date:
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                    {formErrors.firsstartDatetName && <span className="error">{formErrors.startDate}</span>}
                </label>
                <label>
                    Business Area:
                    <select
                        name="businessArea"
                        value={formData.businessArea}
                        onChange={handleChange}
                    >
                        <option value="">Select</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="HR">HR</option>
                        <option value="Housing">Housing</option>
                        <option value="Care">Care</option>
                    </select>
                    {formErrors.businessArea === "Select" && <span className="error">{formErrors.businessArea}</span>}
                </label>

                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={handleReset}>Reset</button>
                </div>
            </div>
        </form>
    );
}

export default RequestForm