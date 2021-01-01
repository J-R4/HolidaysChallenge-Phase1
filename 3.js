function diamond(num) {
    let symbol = num * 2 - 1;
    let isi = "";
    let kotak = "";

    for (let i = 0; i < symbol; i++) {
        isi = "";
        for (let j = 0; j < symbol; j++) {
            if (
                num === i + j + 1 || // Kanan atas
                num === j - i + 1 || // kiri atas
                num === i - j + 1 || // kiri bawah
                num + symbol === i + j + 2 // kanan bawah
            ) {
                isi += "$";
            } else {
                isi += " ";
            }
        }
        kotak += isi;
        if (i !== symbol - 1) {
            kotak += "\n";
        }
    }
    return kotak;
}

console.log(diamond(3));
console.log(diamond(4));
console.log(diamond(6));
console.log(diamond(10));
