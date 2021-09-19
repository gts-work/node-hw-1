const listContacts = require("./listContacts");

async function getContactById(contactId) {
    const contacts = await listContacts();
    const idx = await contacts.findIndex(
        (item) => item.id === Number(contactId)
    );

    if (idx === -1) {
        return null;
    }

    return contacts[idx];
}

module.exports = getContactById;
