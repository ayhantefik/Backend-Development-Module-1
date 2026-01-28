// Union Types

//  (1)
// type IDType = number | string;

// const showID = (id: IDType) => {
//     console.log("Your ID is:", id);
// }

// showID(2);
// showID("3");

/* ############################################################# */

//  (2)
// type Fruit = "apple" | "banana" | "orange";

// const eatFruit = (f: Fruit) => {
//     console.log("You are an", f);
// }

// eatFruit("apple");
// eatFruit("orange");

/* ############################################################# */

//  (3)
// type Result = true | false;

// const printResult = (r: Result) => {
//     r ? console.log("Pass") : console.log("Fail");
// }

// printResult(true);
// printResult(false);

/* ############################################################# */

// Interfaces and Type Aliases

//  (1)
// interface Book{
//     title: string;
//     pages: number;
// }

// const describeBook = (b: Book) => {
//     console.log(`The book "${b.title}" has ${b.pages} pages.`);
// }

// describeBook({title: "The Old Man and the Sea", pages: 127});

//  (2)

// interface Teacher{
//     name: string;
//     subject: string;
// }
// interface Employee{
//     id: number;
//     email: string;
// }

// type SchoolTeacher = Teacher & Employee;

// const printTeacherInfo = (t: SchoolTeacher) => {
//     console.log(`Id: ${t.id}, Name: ${t.name}, Subject: ${t.subject}, Email: ${t.email}`);
// }

// printTeacherInfo({
//     id: 1,
//     name: "Michiel",
//     subject: "Backend Development",
//     email: "michiel.vandergragt@sundsgarden.se"
// });

//  (3)

// interface Car{
//     brand: string;
//     year: number;
// }

// const printCar = (car: Car) => {
//     console.log(`Brand: ${car.brand},Year: ${car.year}`);
// }

// printCar({brand: "Volvo XC90", year: 2024});

// Enums

//  (1)

// enum Color {
//     Red = "Red",
//     Green = "Green",
//     Blue= "Blue"
// };

// const showColor = (color: Color) => {
//     console.log("You chose", color);
// }

// showColor(Color.Blue);

//  (2)

// enum PizzaSize {
//     Small = "Small",
//     Medium = "Medium",
//     Large = "Large"
// }

// const orderPizza = (pizzaSize: PizzaSize) => {
//     console.log(`Your ordered a ${pizzaSize} pizza.`);
// }

// orderPizza(PizzaSize.Medium);

//  (3)

// enum Role {
//     Admin,
//     User,
//     Guest
// }

// const printRole = (role: Role) => {
//     role == Role.Admin && console.log("You have full access");
//     role == Role.User && console.log("You have limited access");
//     role == Role.Guest && console.log("You have guest access");
// }

// printRole(Role.User);

// Generics

//  (1)

// const wrapInArray = <T>(input: T): T[] => {
//     return [input]
// }

// console.log(wrapInArray("TypeScript"));

//  (2)

// const firstItem = <T>(array: T[]): T | undefined => {
//     return array[0];
// }

// console.log(firstItem([1, 2, 3]));
// console.log(firstItem(["a", "b", "c"]));

//  (3)

const swap = <T>(item1: T, item2: T): T[] => {
    return [item2, item1];
}

console.log(swap("hello", "world"));