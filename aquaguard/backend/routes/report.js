import express from "express";
import { addReport } from "../data/mockStore.js";

const router = express.Router();

router.post("/", (req, res) => {
	const location = String(req.body?.location || "").trim();
	const issueType = String(req.body?.issueType || "").trim();
	const description = String(req.body?.description || "").trim();
	const submittedBy = String(req.body?.submittedBy || "").trim();
	const severity = String(req.body?.severity || "").trim();

	if (!location || !issueType || !description) {
		return res.status(400).json({
			error: "location, issueType, and description are required",
			requiredFields: ["location", "issueType", "description"],
		});
	}

	const report = addReport({
		location,
		issueType,
		description,
		submittedBy,
		severity,
	});

	return res.status(201).json({ message: "Report submitted", report });
});

export default router;
