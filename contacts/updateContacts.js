const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");
// console.log("contactsPath: ", contactsPath);

const updateContacts = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

module.exports = updateContacts;
