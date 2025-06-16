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

export const PlanListUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    padding: 0;
    list-style: none;
`;

export const PlanCard = styled.li`
    background: #f7fafc;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    padding: 24px 32px;
    min-width: 220px;
    max-width: 300px;
    flex: 1 1 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition:
        transform 0.2s,
        box-shadow 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }
`;

export const PlanName = styled.strong`
    font-size: 1.3rem;
    color: #3182ce;
    margin-bottom: 8px;
`;

export const PlanPrice = styled.span`
    font-size: 1.1rem;
    margin: 8px 0;
    color: #2d3748;
`;

export const PlanDesc = styled.p`
    color: #4a5568;
    font-size: 0.98rem;
    margin-top: 8px;
    text-align: center;
    line-height: 1.5;
`;

export const Loading = styled.div`
    text-align: center;
    color: #3182ce;
    margin: 32px 0;
    font-size: 1.1rem;
`;
