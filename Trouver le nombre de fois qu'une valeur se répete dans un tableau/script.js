let arr = [1, 2, 1, 1, 2, 5, 4, 9, 7, 8, 7, 9, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,];
let res = [];
let val = arr.indexOf(5);
while(val != -1){
    res.push(val);
    val = arr.indexOf(5, val + 1);
}
console.log(`l'élément est présent ${res.length} fois`);