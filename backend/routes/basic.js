import express from "express";
import { basic } from "../controllers/basic.js";

const router = express.Router();

router.get("/", basic);

export default router;