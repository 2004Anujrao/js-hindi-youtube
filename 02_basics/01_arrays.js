//array

const myArray = [5,1,2,3,4,5]

const myHeros = ["itachi","sasuke"]
console.log(myArray[0]);
console.log(myHeros)

//Array methods

// myArray.push(83)
// myArray.pop()
// myArray.push(8)

// myArray.unshift(11)
// myArray.shift()

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(3))


// const newArray =myArray.join()

// console.log(myArray)
// console.log(newArray)
// console.log(typeof newArray)


//slice , splice

console.log("A", myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);

console.log("B",myArray);

const myn2 = myArray.splice(1,3)
console.log("C" , myArray);
console.log(myn2)
