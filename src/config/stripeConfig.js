import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
'pk_test_51RYnBo4Z11hsdtmiUO0BF2db2kVvl0F6985qTX4SWZ00x71owL1fxOWdz1ciH62TS3pKEoAQJGWPdgwEAebvG1gR00OZhnCBiw'
);

export default stripePromise;