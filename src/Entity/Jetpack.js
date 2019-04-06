module.exports = class {
    constructor() {
        this._id = null;
        this._name = null;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    toJson() {
        return {
            id : this.id,
            name: this.name
        }
    }
};