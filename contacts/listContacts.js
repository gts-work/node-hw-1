const contacts = require("../db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
    // const data = await fs.readFile(contactsPath);
    // const contacts = JSON.parse(data);
    // console.log("listContacts ~ contacts: ", contacts);
    return contacts;
}

module.exports = listContacts;
