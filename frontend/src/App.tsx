import React from 'react';
import PlanList from './components/PlanList/PlanList';
import CustomerForm from './components/CustomerForm/CustomerForm';
import SubscriptionManager from './components/SubscriptionManager/SubscriptionManager';

const App: React.FC = () => (
    <div>
        <h1>Fintech Subscriptions</h1>
        <PlanList />
        <CustomerForm />
        <SubscriptionManager />
    </div>
);

export default App;
