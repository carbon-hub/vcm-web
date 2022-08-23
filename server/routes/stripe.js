import express from "express";
import Stripe from "stripe";

const router = express.Router();

router.post("/payment", async (req, res) => {

    const stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY_MY);
    await stripeClient.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (stripeError, stripeRes) => {
        if(stripeError) {
            res.status(500).json(stripeError);
        } else {
            res.status(200).json(stripeRes);
        }
    })
});

export default router;

