const { v4 } = require("uuid");

const getRandomInt = require("./randomId");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = { name, email, phone, id: getRandomInt() };
    contacts.push(newContact);
    await updateContacts(contacts);

    return newContact;
}

module.exports = addContact;
