import React, { useState } from 'react';
import { createCustomer } from '../../services/api';

const CustomerForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createCustomer({ name, email });
            setMessage('Customer registered successfully!');
        } catch {
            setMessage('Error registering customer.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Customer</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default CustomerForm;
