import React, { useEffect, useState } from 'react';
import * as S from './PlanList.styles';
import { getPlans } from '../../services/api';
import { SubscriptionPlan } from '../../types';

const PlanList: React.FC = () => {
    const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPlans()
            .then((res) => setPlans(res.data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <S.Container>
            <S.Title>Subscription Plans</S.Title>
            {loading ? (
                <S.Loading>Loading plans...</S.Loading>
            ) : (
                <S.PlanListUl>
                    {plans.map((plan) => (
                        <S.PlanCard key={plan.id}>
                            <S.PlanName>{plan.name}</S.PlanName>
                            <S.PlanPrice>
                                <b>${plan.price}</b> / {plan.billing_interval}
                            </S.PlanPrice>
                            <S.PlanDesc>{plan.description}</S.PlanDesc>
                        </S.PlanCard>
                    ))}
                </S.PlanListUl>
            )}
        </S.Container>
    );
};

export default PlanList;
