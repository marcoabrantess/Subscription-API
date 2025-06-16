import React, { useState } from 'react';
import * as S from './CustomerForm.styles';
import { createCustomer } from '../../services/api';

const CustomerForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError(false);
        try {
            await createCustomer({ name, email });
            setMessage('Customer registered successfully!');
            setName('');
            setEmail('');
        } catch {
            setMessage('Error registering customer.');
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <S.FormContainer>
            <S.Title>Register Customer</S.Title>
            <S.StyledForm onSubmit={handleSubmit}>
                <S.Input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                />
                <S.Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />
                <S.SubmitButton type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Register'}
                </S.SubmitButton>
                {message && <S.Message error={error}>{message}</S.Message>}
            </S.StyledForm>
        </S.FormContainer>
    );
};

export default CustomerForm;
