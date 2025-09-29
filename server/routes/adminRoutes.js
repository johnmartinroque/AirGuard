const express = require("express");
const router = express.Router();
const { getAdminStatus } = require("../controllers/adminController");

router.get("/status", getAdminStatus);

module.exports = router;
