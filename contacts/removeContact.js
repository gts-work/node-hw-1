const updateContacts = require("./updateContacts");
const listContacts = require("./listContacts");

async function removeContact(contactId) {
    const contacts = await listContacts();
    const idx = await contacts.findIndex(
        (item) => item.id === Number(contactId)
    );
    // console.log("removeContact ~ idx: ", idx);

    if (idx === -1) {
        return null;
    }

    contacts.splice(idx, 1);
    updateContacts(contacts);

    return true;
}

module.exports = removeContact;
