import axios from "axios";

//!--------- Stripe Payment --------!//
export const handleFreeSubscriptionAPI = async () => {
  const response = await axios.post(
    "http://localhost:8090/api/v1/stripe/free-plan",
    {},
    { withCredentials: true }
  );
  return response?.data;
};

//!--------- Stripe Payment Intent --------!//
export const createStripePaymentIntentAPI = async (payment) => {
  // console.log(payment);
  const response = await axios.post(
    "http://localhost:8090/api/v1/stripe/checkout",
    {
      amount: Number(payment?.amount),
      subscriptionPlan: payment?.plan,
    },
    { withCredentials: true }
  );
  return response?.data;
};

//!--------- Verify Payment --------!//
export const verifyPaymentAPI = async (PaymentId) => {
  // console.log(PaymentId);
  const response = await axios.post(
    `http://localhost:8090/api/v1/stripe/verify-payment/${PaymentId}`,
    {},
    { withCredentials: true }
  );
  return response?.data;
};
