const contactsOperation = require("./contacts");

console.log("Gri, Hello World!");

const id = 5;
const newContactData = {
    name: "Alex Bro",
    email: "alex-bro@mail.com",
    phone: "44-123-45-67",
};
const delId = "c08128ea-0edb-401e-b3e2-ab5bb0253b90";

// Test
(async () => {
    try {
        // // Get all
        // const contacts = await contactsOperation.listContacts();
        // console.log(`contacts: ${contacts}`);

        // // Get ById
        // const contactId = await contactsOperation.getContactById(id);

        // if (!contactId) {
        //     throw new Error(`Contact with id=${contactId} does not exists`);
        // }

        // console.log("contactId: ", contactId);

        // Add contact
        // const newContact = await contactsOperation.addContact(
        //     newContactData.name,
        //     newContactData.email,
        //     newContactData.phone
        // );
        // console.log("newContact: ", newContact);

        // Delete contact
        const delContact = await contactsOperation.removeContact(delId);

        if (!delContact) {
            throw new Error(`Contact with id=${delId} does not exists`);
        }

        const success = `Contact with id=${delId} is removed`;

        console.log("delContact: ", success);
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
    }
})();

// TEST GAME
// const readline = require("readline");
// const fs = require("fs").promises;
// const { program } = require("commander");
// require("colors");
// program.option(
//     "-f, --file [type]",
//     "file for saving game results",
//     "results.txt"
// );
// program.parse(process.argv);

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let count = 0;
// const logFile = program.opts().file;
// const mind = Math.floor(Math.random() * 10) + 1;

// const isValid = (value) => {
//     if (isNaN(value)) {
//         console.log("Введіть число!".red);
//         return false;
//     }
//     if (value < 1 || value > 10) {
//         console.log("Число повинно бути від 1 до 10".red);
//         return false;
//     }
//     return true;
// };

// const log = async (data) => {
//     try {
//         await fs.appendFile(logFile, `${data}\n`);
//         console.log(`Вдалося зберегти результат в файл ${logFile}`.green);
//     } catch (err) {
//         console.log(`Не вдалося зберегти результат в файл ${logFile}`.red);
//     }
// };

// const game = () => {
//     rl.question(
//         "Введіть число від 1 до 10, вшадайте задумане: ".yellow,
//         (value) => {
//             let a = +value;
//             if (!isValid(a)) {
//                 game();
//                 return;
//             }
//             count += 1;
//             if (a === mind) {
//                 console.log(
//                     "Вітаю, Ви відгадали число за %d кроків".green,
//                     count
//                 );
//                 log(
//                     `${new Date().toLocaleDateString()}: Вітаю, Ви відгадали число за ${count} кроків`
//                 ).finally(() => rl.close());
//                 return;
//             }
//             console.log(`Ви не вгадали число, ще спроба`.red);
//             game();
//         }
//     );
// };

// game();
