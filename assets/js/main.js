import Contact from "./classes/Contact.js";
let contact1 = new Contact("karim", "megri", "karim@hot.fr", "0606060606", new Date(1983, 6, 30));
let contact2 = new Contact("alexandre", "lecoeur", "alexlex@free.fr", "0612121212", new Date(1982, 6, 30));
let contact3 = new Contact("pierre", "pierre", "pierro@pierro.fr", "0770050505", new Date(1981, 6, 30));
// console.log(contact1)
// console.log(contact2)
// console.log(contact3)
let contacts = [];
contacts.push(contact1, contact2, contact3);
console.log(contacts);
let divContact = document.getElementById('contacts');
let inputFN = document.querySelector("#fname");
let inputLN = document.querySelector('#lname');
let inputEmail = document.querySelector('#email');
let inputBirth = document.querySelector('#birth');
let inputTel = document.querySelector('#tel');
let btnSave = document.querySelector('#btnSave');
for (const contact of contacts) {
    // console.log( i++ +" " +contact.firstname,contact.lastname, (contact.birthdate))
    divContact.innerHTML += `${contact.id} ${contact.firstname} ${contact.lastname} ${contact.birthdate}<br><br>`;
}
function addContact() {
    let Firstn = inputFN.value;
    let Lastn = inputLN.value;
    let Email = inputEmail.value;
    let Birth = inputBirth.value;
    let Tel = inputTel.value;
    contacts.push(new Contact(Firstn, Lastn, Email, Tel, new Date(Birth.split("/").reverse().join("-"))));
    console.table(contacts);
}
btnSave.addEventListener('click', () => {
    // console.log("coucou")
    addContact();
});
