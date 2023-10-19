let chess = [];
for (let i = 0; i < 8; i++){
    let row = [];
    for (let j = 0; j < 8; j++){
        row.push(j + 1);
    }
    chess.push(row);
}
chess[3][4] = 10;

console.log(chess);