// singleton  
// object.create
//object literals


const mySym = Symbol("key1")
const JsUser = {
    name: "Anuj",
    "full name" : "Anuj rao",
    age: 20,
    [mySym] : "mykey1",
    location: "jaipur",
    email: "Anuj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])// its the right method

// console.log(JsUser.full name); its the wrong method it returns erroe in code 

// console.log(JsUser[mySym])

// JsUser.email = "anuj@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "anuj.microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user")
}

console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());

