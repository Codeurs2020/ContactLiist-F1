const Contact = require("../models/contact");
const express = require("express");
const router = express.Router();

//@Api http:localhost:8000/api/contacts
//@desc Add new Contact
//@access public
router.post("/", (req, res) => {
  const newCantact = new Contact({ ...req.body });
  newCantact
    .save()
    .then((contact) => res.send(contact))
    .catch((err) => res.send(err));
});

//@Api http:localhost:8000/api/contacts
//@desc Get All Contacts
//@access public
router.get("/", (req, res) => {
  Contact.find()
    .then((contacts) => res.send(contacts))
    .catch((err) => res.send(err));
});

//@Api http:localhost:8000/api/contacts
//@desc Get Contact By Id
//@access public
router.get("/:_id", (req, res) => {
  let { _id } = req.params;
  Contact.find({ _id })
    .then((contact) => res.send(contact))
    .catch((err) => res.send(err));
});

//@Api http:localhost:8000/api/contacts
//@desc Delete Contact By Id
//@access public
router.delete("/:_id", (req, res) => {
  let { _id } = req.params;
  Contact.findByIdAndDelete({ _id })
    .then(() => res.send("Contact has been deleted"))
    .catch((err) => res.send(err));
});

//@Api http:localhost:8000/api/contacts
//@desc Update Contact By Id
//@access public
router.put("/:_id", (req, res) => {
  let { _id } = req.params;
  Contact.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
    .then(() => res.send("Contact has been updated"))
    .catch((err) => res.send(err));
});

module.exports = router;
