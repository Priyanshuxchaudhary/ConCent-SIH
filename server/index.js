import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

// data imports
import Admin from "./models/Admin.js";
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataAdmin,
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

// // Voice Chat server
// const { AccessToken } = require('twilio').jwt;
// const { VideoGrant } = AccessToken;

// app.post('/create-room', (req, res) => {
//   const roomName = req.body.roomName || 'Call From ConCent'; // Replace with your desired room name

//   const accountSid = 'AC121a839659d6a74556225617567b2685';
//   const apiKey = 'SK378d97bdad733d6848337e07e28fac55';
//   const apiSecret = 'XgFWwXAuiUbMWfCakIZHbihYlNks9ZeO';

//   const token = new AccessToken(accountSid, apiKey, apiSecret);
//   token.identity = 'user-identity'; // Replace with a unique user identity

//   const videoGrant = new VideoGrant();
//   token.addGrant(videoGrant);

//   token.toJwt();
//   res.json({ accessToken: token.toJwt(), roomName });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: 'http://concent.vercel.app', // Replace with your client's domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);
    // Admin.insertMany(dataAdmin);

  })
  .catch((error) => console.log(`${error} did not connect`));