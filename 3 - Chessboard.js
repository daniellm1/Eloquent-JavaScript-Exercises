const size = 8;
let chessboard = ""

for (let i = 0; i < size; i++) {
    for (let k = 0; k < size; k++) {
        if ((i + k) % 2 == 0) {
            chessboard += "#";
        } else {
            chessboard += " ";
        }
    }
    chessboard += "\n";
}

console.log(chessboard);