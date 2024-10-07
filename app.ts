// // // let a: number[] = [123, 32, 342];

// // // enum Roles {
// // //     ADMIN = "admin",
// // //     USER = "user"
// // // }

// // // console.log(Roles.USER, Roles.ADMIN);



// // // let b: unknown;
// // // b = 213;
// // // b = "ghf"

// // // if (typeof b === "string") {
// // //     b.toUpperCase();
// // // }

// // // interface User {
// // //     name: string;
// // // }

// // // function getUserData(obj: any) {
// // //     obj.name;
// // //     console.log(obj.name);  
// // // }

// // // getUserData({name: "Alex"});

// // // interface cbjOBJ{
// // //     name: string;
// // //     age: number
// // // }

// // // let cbj : cbjOBJ= {
// // //     name: "Jassa",
// // //     age: 24
// // // }


// // // type value = number | string | null;

// // // type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
// // // function abc(a: PositiveOddNumbersUnderTen): void {
// // //     console.log(a);
// // // }
// // // abc(1);


// // // type Point = {
// // //     x: number;
// // //     y: number;
// // //    };
    
// // //    // Exactly the same as the earlier example
// // //    function printCoord(pt: Point) {
// // //     console.log("The coordinate's x value is " + pt.x);
// // //     console.log("The coordinate's y value is " + pt.y);
// // //    }
    
// // //    printCoord({ x: 100, y: 100 });



// // // interface User{
// // //     naem: string,
// // //     age: number
// // // }

// // // interface Admin extends User{
// // //     role: string
// // // }
// // // type User1 = {
// // //     name: string,
// // //     age: number
// // // }

// // // type Admin1 = User1 & {
// // //     role: string
// // // }




// // // function getUsers(user: Admin1){
// // //     user.name,
// // //     user.role   
// // // }

// // // class Accv{
// // //     private readonly name : string= "JASSSA";
// // //     public age: string;
// // //     constructor( name: string,  age: string){
// // //         this.name = name,
// // //         this.age = age
// // //     }
// // //     //  changeName(){
// // //     //     this.name = "Ritiik"
// // //     // }
// // // }

// // // let b1 = new Accv("Alex", "24")

// // // // b1.changeName()
// // // console.log(b1)



// // // class Greeter {
// // //     readonly name: string = "world";
   
// // //     constructor(otherName?: string) {
// // //       if (otherName !== undefined) {
// // //         this.name = otherName;
// // //       }
// // //     }
   
// // //     err() {
// // //       this.name = "not ok";
// // // //   Cannot assign to 'name' because it is a read-only property.
// // //     }
// // //   }
// // //   const g = new Greeter("Helo");
// // //   g.name = "also not ok";
// // // console.log(g)


// // function abc(name: string, age: number, cb: (a : string) =>void){
// //     cb("3622/23/32");
// // }
// // abc("Alex", 24, (dob: string) =>{
// //     console.log(dob)
// // })


// // ///GENERICS

// function abcd<T>(a: T){

//     console.log(a)
// }
// abcd<string>("Jassa")


// interface User<T>{
//     name: string,
//     age: number,
//     key: T
// }

// function abdd(obj: User<string>){
//     console.log(obj.key.toUpperCase());
// }

