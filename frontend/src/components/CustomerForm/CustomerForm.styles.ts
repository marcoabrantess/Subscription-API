import styled from 'styled-components';

export const FormContainer = styled.div`
    max-width: 400px;
    margin: 32px auto;
    padding: 24px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 24px;
    color: #2d3748;
    font-size: 1.8rem;
    font-weight: 600;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

export const Input = styled.input`
    padding: 12px 16px;
    border: 1.5px solid #cbd5e1;
    border-radius: 8px;
    font-size: 1rem;
    transition:
        border 0.2s,
        box-shadow 0.2s;

    &:focus {
        border-color: #3182ce;
        outline: none;
        box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
    }

    &:disabled {
        background-color: #f7fafc;
        cursor: not-allowed;
        opacity: 0.6;
    }

    &::placeholder {
        color: #a0aec0;
    }
`;

export const SubmitButton = styled.button`
    background: #3182ce;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition:
        background 0.2s,
        transform 0.1s;

    &:hover:not(:disabled) {
        background: #2563eb;
        transform: translateY(-1px);
    }

    &:disabled {
        background: #a0aec0;
        cursor: not-allowed;
        transform: none;
    }
`;

export const Message = styled.p<{ error?: boolean }>`
    color: ${({ error }) => (error ? '#e53e3e' : '#38a169')};
    text-align: center;
    margin-top: 12px;
    font-weight: 500;
    padding: 8px;
    border-radius: 6px;
    background: ${({ error }) => (error ? '#fed7d7' : '#c6f6d5')};
`;
