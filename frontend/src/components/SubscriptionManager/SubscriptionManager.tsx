import React, { useEffect, useState } from 'react';
import * as S from './SubscriptionManager.styles';
import { getSubscriptions, cancelSubscription } from '../../services/api';
import { Subscription } from '../../types';

const SubscriptionManager: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSubscriptions()
            .then((res) => setSubscriptions(res.data))
            .finally(() => setLoading(false));
    }, []);

    const handleCancel = async (id: number) => {
        try {
            await cancelSubscription(id);
            setMessage('Subscription cancelled successfully!');
            setError(false);
            setSubscriptions(subscriptions.filter((s) => s.id !== id));
        } catch {
            setMessage('Error cancelling subscription.');
            setError(true);
        }
    };

    return (
        <S.Container>
            <S.Title>My Subscriptions</S.Title>
            {loading ? (
                <S.Loading>Loading subscriptions...</S.Loading>
            ) : (
                <S.SubList>
                    {subscriptions.length === 0 ? (
                        <S.Message>No subscriptions found.</S.Message>
                    ) : (
                        subscriptions.map((subscription) => (
                            <S.SubCard key={subscription.id}>
                                <S.SubInfo>
                                    <S.SubPlan>
                                        {subscription.plan.name}
                                    </S.SubPlan>
                                    <S.SubStatus status={subscription.status}>
                                        Status: {subscription.status}
                                    </S.SubStatus>
                                </S.SubInfo>
                                {subscription.status === 'active' && (
                                    <S.CancelButton
                                        onClick={() =>
                                            handleCancel(subscription.id)
                                        }
                                    >
                                        Cancel
                                    </S.CancelButton>
                                )}
                            </S.SubCard>
                        ))
                    )}
                </S.SubList>
            )}
            {message && <S.Message error={error}>{message}</S.Message>}
        </S.Container>
    );
};

export default SubscriptionManager;
