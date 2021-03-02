const env = require("dotenv").config({ path: "./.env" });

const express = require("express");
const bodyParser = require("body-parser");
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const app = express();
var mongoose = require('mongoose');

// use cors
const cors = require("cors");
app.use(cors());
const { resolve } = require("path");

// YOUR KEY HERE
const stripe = require('stripe')("")

// YOUR CUSTOM LINK HERE
mongoose.connect('');

app.use((req, res, next) => {
  bodyParser.json()(req, res, next);
});

app.get("/", (req, res) => {
  res.send("Hello from server");
});

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var purchaseSchema = new Schema({
    username: String,
    data: String
});


var Purchase = mongoose.model('purchase', purchaseSchema);

// dbg2 - this will be called from client when called 'checkout'
app.post("/create-payment-intent", async (req, res) => {
  console.log('create-payment-intent');

  console.log(req.body);
  const body = req.body;


  console.log('create-payment-intent.2');
  if (body) {
    console.log('create-payment-intent.3');
    let AMOUNT_DEFAULT = 230;
    let { cart, total_amount, username } = body // JSON.parse(body)
    cart = cart === undefined ? AMOUNT_DEFAULT : cart;
    total_amount = total_amount === undefined ? AMOUNT_DEFAULT : total_amount;
    console.log(cart);
    console.log(total_amount);
    console.log(username);
    try {
      console.log('create-payment-intent.4');
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total_amount,
        currency: 'usd',
      })
      console.log('create-payment-intent.5');
      console.log(paymentIntent.status);
      console.log(paymentIntent.client_secret);
      const purchase = new Purchase(
        {
          username: username ? username : 'unknown', 
          data: JSON.stringify({cart: cart, total_amount: total_amount})
         }
      );
      purchase.save(function (err) {
        console.log('create-payment-intent.5a');
        console.log(err);
        res.send ( {
          statusCode: 200,
          body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
        } )
      })
    } catch (error) {
      console.log('create-payment-intent.8');
      console.log(error);
      res.send ({
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      })
    }
  }

});


app.listen(8080, () => console.log(`Node server listening on port ${8080}!`));
