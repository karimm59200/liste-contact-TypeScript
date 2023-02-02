export default class Contact {
    constructor(firstname, lastname, email, tel, birthdate) {
        this._id = ++Contact._count;
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._tel = tel;
        this._birthdate = birthdate;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        this._firstname = value;
    }
    get lastname() {
        return this._lastname;
    }
    set laststname(value) {
        this._lastname = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get tel() {
        return this._tel;
    }
    set tel(value) {
        this._tel = value;
    }
    get birthdate() {
        return this._birthdate;
    }
    set birthdate(value) {
        this._birthdate = value;
    }
}
Contact._count = 0;
