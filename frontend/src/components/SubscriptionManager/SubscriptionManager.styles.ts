import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    margin: 32px auto;
    padding: 24px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 32px;
    color: #2d3748;
    font-size: 2rem;
    font-weight: 600;
`;

export const SubList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const SubCard = styled.li`
    background: #f7fafc;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    padding: 20px 28px;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition:
        transform 0.2s,
        box-shadow 0.2s;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`;

export const SubInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubPlan = styled.span`
    font-weight: 600;
    color: #3182ce;
    font-size: 1.1rem;
`;

export const SubStatus = styled.span<{ status: string }>`
    color: ${({ status }) =>
        status === 'active'
            ? '#38a169'
            : status === 'canceled'
              ? '#e53e3e'
              : '#718096'};
    font-weight: 500;
    margin-top: 4px;
    text-transform: capitalize;
`;

export const CancelButton = styled.button`
    background: #e53e3e;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 8px 18px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
    font-weight: 500;

    &:hover {
        background: #c53030;
    }

    &:disabled {
        background: #a0aec0;
        cursor: not-allowed;
    }
`;

export const Message = styled.p<{ error?: boolean }>`
    color: ${({ error }) => (error ? '#e53e3e' : '#38a169')};
    text-align: center;
    margin-top: 18px;
    font-weight: 500;
`;

export const Loading = styled.div`
    text-align: center;
    color: #3182ce;
    margin: 32px 0;
    font-size: 1.1rem;
`;
