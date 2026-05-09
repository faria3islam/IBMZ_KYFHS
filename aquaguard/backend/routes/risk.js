import express from "express";
import { calculateRisk } from "../lib/riskEngine.js";

const router = express.Router();

router.get("/", (req, res) => {
	const location = String(req.query.location || "").trim();

	if (!location) {
		return res.status(400).json({
			error: "location is required",
			example: "/risk?location=Delhi, DL",
		});
	}

	const result = calculateRisk(location);
	return res.json(result);
});

export default router;
