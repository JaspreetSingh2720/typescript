"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showAge() {
        console.log(this.age);
    }
}
exports.UserService = UserService;
