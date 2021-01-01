/*

Logika :
1. Fungsi bernama getMoneyChange = Total kembalian dari suatu pembayaran.
2. Buat input untuk fungsi berupa uang yang dibayarkan dengan format `<uang> <jumlah lembaran> lembar`
3. stok uang kembalian berupa object literal
4. urutan nilai uang yang ditampilkan = terbesar ke terkecil
5. kalau stock uang kembalian tidak mencukupi = `Maaf uang kembalian tidak cukup`
6. fungsi moneyStock tidak berkurang 

*/

function getMoneyChange(money) {
    // your code here
    const stock = Object.entries(moneyStocks);
    let result = [];
    stock.reverse();

    var numStock = stock.map((stock) => {
        stock[0] = parseInt(stock[0]);
        return stock;
    });

    let maxMoney = 0;
    for (const [money, amount] of stock) {
        maxMoney += money * amount;
    }

    if (money > maxMoney) {
        return `Maaf uang kembalian tidak cukup`;
    }

    for (let i = 0; i < numStock.length; i++) {
        let key = numStock[i][0].toString();
        let count = 0;
        while (money >= numStock[i][0] && moneyStocks[key] > 0) {
            money -= numStock[i][0];
            moneyStocks[key]--;
            count++;
        }
        if (count > 0) {
            result.push(`${numStock[i][0]} ${count} lembar`);
        }
    }

    if (result.length > 0) {
        return result.join("\n");
    } else {
        return `Maaf uang kembalian tidak cukup`;
    }
}

const moneyStocks = {
    100000: 1,
    50000: 2,
    20000: 4,
    10000: 5,
    5000: 5,
    1000: 10,
    500: 5,
};

console.log(`=> getMoneyChange(75000)`);
console.log(getMoneyChange(75000));
// getMoneyChange(75000);
/*
  50000 1 lembar
  20000 1 lembar
  5000 1 lembar
*/

console.log(`\n=> getMoneyChange(190000)`);
console.log(getMoneyChange(190000));
// getMoneyChange(190000);
/*
  100000 1 lembar
  50000 1 lembar
  20000 2 lembar
*/

console.log(`\n=> getMoneyChange(190000)`);
console.log(getMoneyChange(190000));
// getMoneyChange(190000);
/*
  Maaf uang kembalian tidak cukup
*/

console.log(`\n=> getMoneyChange(100000)`);
console.log(getMoneyChange(100000));
// getMoneyChange(100000);
/*
  20000 1 lembar
  10000 5 lembar
  5000 4 lembar
  1000 10 lembar
*/

console.log(`\n=> getMoneyChange(400)`);
console.log(getMoneyChange(400));
// getMoneyChange(400);
/*
  Maaf uang kembalian tidak cukup
*/

console.log(`\n=>Sisa uang`);
console.log(moneyStocks);
/*
{ '500': 5,
  '1000': 0,
  '5000': 0,
  '10000': 0,
  '20000': 0,
  '50000': 0,
  '100000': 0 }
*/
