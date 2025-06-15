import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api'; // Adjust as needed

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getPlans = () => api.get('/plans/');
export const getCustomers = () => api.get('/customers/');
export const createCustomer = (data: any) => api.post('/customers/', data);
export const getSubscriptions = () => api.get('/subscriptions/');
export const createSubscription = (data: any) =>
    api.post('/subscriptions/', data);
export const cancelSubscription = (id: number) =>
    api.post(`/subscriptions/${id}/cancel/`);
