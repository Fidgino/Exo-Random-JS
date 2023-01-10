let arr = ['Merlin', 3, 8, 4, 2, 3, 'Jules', 'Thomas', 9, 3, 'ergegeg'];




// let i = 0
// let tkt = []
// while(i !== -1){
//     let e = arr.indexOf(3, i + 1);
//     if (e === -1) break
//     tkt.push(e)
//     i = e;
// }

// console.log(tkt);

// 0- tableau vide pour stocker les résultats
let res = [];
// 1- définir la position de départ au 1er trouvé
let val = arr.indexOf(3);
// 2- tant que l'élément est trouvé (pas trouvé -> -1)
while(val != -1){
    	// 2.1- on ajoute la position trouvée dans le tableau des résultats
    res.push(val);
	// 2.2- redéfinir la position de départ de la recherche à venir avec la position suivant celle trouvée
    val = arr.indexOf(3, val + 1);
}
// 3- on retourne le tableau des résultats
console.log(res);
