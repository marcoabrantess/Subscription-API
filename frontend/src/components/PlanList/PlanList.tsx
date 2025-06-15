import React, { useEffect, useState } from 'react';
import { getPlans } from '../../services/api';
import { SubscriptionPlan } from '../../types';

const PlanList: React.FC = () => {
    const [plans, setPlans] = useState<SubscriptionPlan[]>([]);

    useEffect(() => {
        getPlans().then((res) => setPlans(res.data));
    }, []);

    return (
        <div>
            <h2>Subscription Plans</h2>
            <ul>
                {plans.map((plan) => (
                    <li key={plan.id}>
                        <strong>{plan.name}</strong> - ${plan.price} /{' '}
                        {plan.billing_interval}
                        <p>{plan.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlanList;
