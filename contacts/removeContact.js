const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

async function removeContact(contactId) {
    const contacts = await listContacts();
    const idx = await contacts.findIndex((item) => {
        return item.id === Number(contactId);
    });

    if (idx === -1) {
        return null;
    }

    contacts.splice(idx, 1);
    updateContacts(contacts);

    return true;
}

module.exports = removeContact;
