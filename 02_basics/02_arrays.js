   // 2nd video on arrays 

   const marvel_heroes = ["SpiderMan", "Iron man", "Hulk", "Thor"]
   const dc_heroes = ["Batsman", "Superman", "Flash", "Aquaman"]

//    console.log(marvel_heroes);
//    console.log(marvel_heroes[3][2]);

const all_heros = marvel_heroes.concat(dc_heroes)
// console.log((all_heros));

const all_new_heros = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heros);


const another_array = [1,2,3, [4,5,6],7,[4,5,[8,9],7,8]]
// console.log(another_array);
// console.log(another_array.flat(Infinity));

// console.log(Array.isArray("Sami"));
console.log(Array.from("Sami"));

// console.log(Array.from({name: "Sami"}));   // interensting case. ( if there is no answer arrays shows like [] <= this )

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




// important things ave been discussed. many have to be discussed. but for learning react its enough if can remember whatever have been discussed




