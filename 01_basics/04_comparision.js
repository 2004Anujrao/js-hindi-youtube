// console.log("2" > 1)
// console.log("02" > 1)


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*The reason is that an equality check == and comparisions ><>=<= work differently
comparisions convert null to number to a number, treating  it as 0.
that's why (3) null >= 0 is true and (1) null > 0  is false*/
