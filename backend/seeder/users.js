const bcrypt = require("bcrypt");

const users = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },
  {
    firstName: "John",
    lastName: "Smith",
    email: "john@smith.com",
    password: bcrypt.hashSync("john@smith.com", 10),
  },
];

module.exports = users;
