export default class Contact {
  private static _count: number = 0
  private _id: number;
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _tel: string;
  private _birthdate: Date;

  

  constructor(firstname: string, lastname: string, email: string , tel:string, birthdate:Date ) {
    this._id = ++Contact._count
    this._firstname = firstname
    this._lastname = lastname
    this._email= email
    this._tel= tel
    this._birthdate= birthdate
  
  }

  get id() {
    return this._id
  }

  set id(value: number) {
      this._id = value
    }
  

  get firstname() {
    return this._firstname
  }

  set firstname(value: string) {
      this._firstname = value
    }
  
  get lastname() {
    return this._lastname
  }

  set laststname(value: string) {
      this._lastname = value
    }
  
  get email() {
    return this._email
  }

  set email(value: string) {
      this._email = value
    }
  
  get tel() {
    return this._tel
  }

  set tel(value: string) {
      this._tel = value
    }
  
  get birthdate() {
    return this._birthdate
  }

  set birthdate(value: Date) {
      this._birthdate = value
    }
  
}