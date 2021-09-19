const { program } = require("commander");
require("colors");

const contactsOperation = require("./contacts");

program
    .option("-a, --action <type>", "action type")
    .option("-i, --id <type>", "contact id")
    .option("-n, --name <type>", "contact name")
    .option("-e, --email <type>", "contact email")
    .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);

const options = program.opts();

(async () => {
    const { action, id, name, email, phone } = options;

    switch (action) {
        case "list":
            const contacts = await contactsOperation.listContacts();
            console.log("All Contacts: ".green, contacts);
            break;
        case "get":
            if (!id) {
                console.log("Be sure to include id".red);
                break;
            }
            const contactId = await contactsOperation.getContactById(id);

            if (!contactId) {
                console.log(`Contact with id=${id} does not exists`.red);
                break;
            }

            console.log("Get Contact: ".green, contactId);
            break;
        case "add":
            if (!name || !email || !phone) {
                console.log("Be sure to include name, email and phone".red);
                break;
            }

            const newContact = await contactsOperation.addContact(
                name,
                email,
                phone
            );
            console.log("New Contact: ", newContact);
            break;
        case "remove":
            if (!id) {
                console.log("Be sure to include id".red);
                break;
            }

            const delContact = await contactsOperation.removeContact(id);

            if (!delContact) {
                console.log(`Contact with id=${id} does not exists`);
                break;
            }
            const success = `Contact with id=${id} is removed`;
            console.log("delContact: ", success);
            break;
        default:
            console.log("неизвестная команда");
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
