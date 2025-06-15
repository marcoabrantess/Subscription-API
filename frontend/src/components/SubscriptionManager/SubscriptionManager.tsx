import React, { useEffect, useState } from 'react';
import { getSubscriptions, cancelSubscription } from '../../services/api';
import { Subscription } from '../../types';

const SubscriptionManager: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        getSubscriptions().then((res) => setSubscriptions(res.data));
    }, []);

    const handleCancel = async (id: number) => {
        try {
            await cancelSubscription(id);
            setMessage('Subscription cancelled!');
            setSubscriptions(subscriptions.filter((s) => s.id !== id));
        } catch {
            setMessage('Error cancelling subscription.');
        }
    };

    return (
        <div>
            <h2>My Subscriptions</h2>
            <ul>
                {subscriptions.map((subscription) => (
                    <li key={subscription.id}>
                        {subscription.plan.name} - Status: {subscription.status}
                        <button onClick={() => handleCancel(subscription.id)}>
                            Cancel
                        </button>
                    </li>
                ))}
            </ul>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SubscriptionManager;
