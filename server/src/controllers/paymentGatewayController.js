const express = require('express');
// const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': '####your-client-id######',
    'client_secret': '####your-client-secret#####'
  });

const app = express();

// app.set('view engine', 'ejs');
// app.use(express.static('views'));


// ADD PAYMENT
const addPayment = async (req, res) => {
  try {
    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:3003/success",
        cancel_url: "http://localhost:3003/cancel",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "service name",
                sku: "001",
                price: "50000.00",
                currency: "INR",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "INR",
            total: "50000.00",
          },
          description: "service description",
        },
      ],
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            res.status(200).redirect(payment.links[i].href);
          }
        }
      }
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET PAYMENT
const getPayment = async (req, res) => {
  try {
    const payerId = req.params.PayerID;
    const paymentId = req.params.paymentId;

    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: "INR",
            total: "675.00",
          },
        },
      ],
    };

    paypal.payment.execute(
      paymentId,
      execute_payment_json,
      function (error, payment) {
        if (error) {
        //   console.log(error.response);
          throw error;
        } else {
        //   console.log(JSON.stringify(payment));
          res.status(200).send({ status: true, message: "Success" });
        }
      }
    );
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addPayment, getPayment };