export interface SubscriptionPlan {
    id: number;
    name: string;
    price: string;
    description: string;
    billing_interval: string;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    stripe_customer_id: string;
}

export interface Subscription {
    id: number;
    plan: SubscriptionPlan;
    customer: Customer;
    status: string;
    stripe_subscription_id: string;
}
