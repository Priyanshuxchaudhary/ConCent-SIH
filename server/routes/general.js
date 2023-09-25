import express from "express";
import { getUser, getDashboardStats, getCustomers,addCustomer } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);
router.get("/customers", getCustomers);
router.post("/customers", addCustomer);

export default router;
