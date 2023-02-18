const bcrypt = require("bcrypt");
const ObjectId = require("mongodb").ObjectId;

const users = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },
  {
    _id: ObjectId("63f07b0a1ba75caf06cd6fa6"),
    firstName: "John",
    lastName: "Smith",
    email: "john@smith.com",
    password: bcrypt.hashSync("john@smith.com", 10),
  },
];

module.exports = users;
