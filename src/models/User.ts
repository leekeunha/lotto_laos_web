export default class User {
    private readonly _firstName?: string;
    private readonly _lastName?: string;
    private readonly _id: number;
    private readonly _email?: string;

    constructor(id: number, email?: string, firstName?: string, lastName?: string) {
        this._id = id;
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get id() {
        return this._id;
    }

    get email() {
        return this._email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
