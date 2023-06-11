import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import UseData from '../../../../Hooks/UseData';

const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [record]=UseData();
    const total= record.reduce((sum,item)=>sum+item.price,0);
    const price=parseFloat(total.toFixed(2))
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mt-10 mb-10 text-blue-700">Payment</h1>
           <Elements stripe={stripePromise} >
            <CheckoutForm price={price}></CheckoutForm>
           </Elements>
        </div>
    );
};

export default Payment;