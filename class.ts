export class UserService{
 
    constructor(public name : string, public age: number ){}

    showAge(){
        console.log(this.age)
    }
}