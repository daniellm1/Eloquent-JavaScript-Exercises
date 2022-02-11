size = 8;

for (let i = 0; i < size; i++) {
    chessboard = "";
    chessboard += "\n";
    for (let k = 1; k < size; k++) {
        if ((i + k) % 2 == 0) {
            chessboard += "#";
        } else {
            chessboard += " ";
        }
    }
}


console.log(chessboard);