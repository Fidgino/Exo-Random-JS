let arr = ['Merlin', 3, 8, 4, 2, 3, 9, 'Jules', 'Thomas', 9, 3, 'ergegeg', 'ratio'];
function vaChercher(word) {
    let res = [];
    let val = arr.indexOf(word);
    while (val != -1) {
        res.push(val);
        val = arr.indexOf(word, val + 1);
    }
    if (arr.includes(word) && res.length > 1) {
        console.log('Vrai + pas unique');
    }
}
vaChercher(3);