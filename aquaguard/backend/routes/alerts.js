import express from "express";
import { alerts } from "../data/mockStore.js";

const router = express.Router();

router.get("/", (req, res) => {
	const location = String(req.query.location || "").trim().toLowerCase();

	const results = alerts.filter((item) => {
		if (!item.active) return false;
		if (!location) return true;
		return item.location.toLowerCase().includes(location);
	});

	return res.json({ count: results.length, alerts: results });
});

export default router;
