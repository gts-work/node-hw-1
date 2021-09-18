const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contacts = require("./db/contacts.json");

const contactsPath = path.join(__dirname, "db/contacts.json");
console.log("contactsPath: ", contactsPath);

fs.readFile(contactsPath);

const updateContacts = async (contacts) => {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

// TODO: задокументировать каждую функцию
async function listContacts() {
    // const data = await fs.readFile(contactsPath);
    // const contacts = JSON.parse(data);
    // console.log("listContacts ~ contacts: ", contacts);
    return contacts;
}

async function getContactById(contactId) {
    const idx = await contacts.findIndex((item) => item.id === contactId);

    if (idx === -1) {
        return null;
    }

    return contacts[idx];
}

async function removeContact(contactId) {
    const idx = await contacts.findIndex((item) => item.id === contactId);

    if (idx === -1) {
        throw new Error(`Contact with id=${contactId} does not exists`);
    }

    contacts.splice(idx, 1);
    updateContacts(contacts);

    return true;
}

async function addContact(name, email, phone) {
    const newContact = { name, email, phone, id: v4() };
    contacts.push(newContact);
    updateContacts(contacts);

    return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
