import express from "express";
import Donation from "../models/Donation.mjs";

const router = express.Router();

// Home Page
router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about", (req, res) => {
  res.render("aboutus");
  });

  router.get("/gallery", (req, res) => {
    res.render("gallery");
    });

// Donation Page
router.get("/donate", (req, res) => {
  res.render("donate");
});

// Handle Donation Submission
router.post("/donate", async (req, res) => {
  try {
    const { name, email, amount } = req.body;
    await Donation.create({ name, email, amount });
    res.redirect("/success");
  } catch (error) {
    res.status(500).send("Error processing donation");
  }
});

// Success Page
router.get("/success", (req, res) => {
  res.render("success");
});

export default router;
