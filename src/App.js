import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        gender: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        
        if (formData.firstName === "") newErrors.firstName = 'First Name is required';
        if (formData.lastName === "") newErrors.lastName = 'Last Name is required';
        if (formData.email === "") {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (formData.number === "") {
            newErrors.number = 'Phone number is required';
        } else if (!/^\d+$/.test(formData.number)) {
            newErrors.number = 'Phone number is invalid';
        }
        if (formData.gender === "") newErrors.gender = 'Gender is required';
        if (formData.message === "") newErrors.message = 'Message is required';

        return newErrors;
    };

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();
        console.log(Object.keys(newErrors));
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Submit form data
            console.log(formData);
            // Reset form data and errors
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                number: '',
                gender: '',
                message: ''
            });
            setErrors({});
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input
                        type='text'
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className='form-group'>
                    <label>Phone Number</label>
                    <input
                        type='number'
                        name='number'
                        value={formData.number}
                        onChange={handleChange}
                    />
                    {errors.number && <span className="error">{errors.number}</span>}
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <label htmlFor="male">
                        <input
                            id='male'
                            type='radio'
                            name='gender'
                            onChange={handleChange}
                            value="Male"
                            checked={formData.gender === 'Male'}
                        />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input
                            id='female'
                            type='radio'
                            name='gender'
                            onChange={handleChange}
                            value="Female"
                            checked={formData.gender === 'Female'}
                        />
                        Female
                    </label>
                    {errors.gender && <span className="error">{errors.gender}</span>}
                </div>
                <div className='form-group'>
                    <label>Message</label>
                    <textarea
                        name='message'
                        onChange={handleChange}
                        value={formData.message}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;
