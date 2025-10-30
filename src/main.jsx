import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./AuthContext/AuthContext";

//Stripe Configuration
const stripePromise = loadStripe(
  "pk_test_51S8zNiL8EHvxCONIhNAQbmgu2dwxUFPCm28Cu6RWO7k2LR78VfSY4B7yEkC1GK00lf0cFf7FkJMEl3ZbKjtEwI3u00p6FLgaBI"
);
const options = {
  mode: "payment",
  currency: "usd",
  amount: 2020
};

//Creating a Query Client
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Elements stripe={stripePromise} options={options}>
          <App />
        </Elements>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
