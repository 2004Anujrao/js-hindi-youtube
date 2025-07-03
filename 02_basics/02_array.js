const anime_heros = ["Itachi" , "Madara" , "Hashirama"]
const anime_movie = ["Naruto" , "Sasuke" , "Sikamaru"]

// anime_heros.push(anime_movie)
// console.log(anime_heros);
// console.log(anime_heros[3][1]);
// console.log(anime_movie[1])
// const allAnimeHeros = anime_heros.concat(anime_movie)
// console.log(allAnimeHeros);

const all_New_Heros = [...anime_heros,...anime_movie]
// console.log(all_New_Heros)
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// let real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)




console.log(Array.isArray("Anuj")) 
console.log(Array.from("anuj"));
console.log(Array.from({name: "Anuj"})); // it will return [] an empity array.

let score1 = 100 
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3));


