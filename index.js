console.log("Hello, World!")

console.log("==========")
console.log("== Objects")
console.log("==========")

var person = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 22,
    getFullName: function () {
        return this.firstName + " " + this.lastName
    },
    parents: ["Darth", "Amadala"]
}
person.father = "Darth Vader"
console.log(" == Person:", person)
console.log(" == Person:", person['firstName'])
console.log(" == Person.firstName:", person.firstName)
console.log(" == Person.getFullName():", person.getFullName())

function Person(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

Person.prototype.getFullName = function (){
    return this.firstname+ " " + this.lastName
}

var p = new Person("Leia", "Organa", "22")
console.log ("== p:", p)

var p2 = new Person("Rey", "??", "21")
console.log ("== p2:", p2)


