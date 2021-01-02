function convertWeight(summation, unitWeight) {
    //your code here
    let arr = summation.split("+");

    let arrBaru = [];

    let weight = ["ton", "kwintal", "-", "kg", "hg", "dag", "g", "dg", "cg", "mg"];

    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        arrBaru.push(arr[i].split(" "));
    }

    for (let j = 0; j < arrBaru.length; j++) {
        let target = weight.indexOf(unitWeight);
        let satuan = weight.indexOf(arrBaru[j][1]);
        let nilai = Number(arrBaru[j][0]);

        if (arrBaru[j][1] === "ons") {
            satuan = weight.indexOf("hg");
        }

        if (unitWeight === "ons") {
            target = weight.indexOf("hg");
        }

        if (satuan < target) {
            for (let k = satuan; k < target; k++) {
                nilai *= 10;
            }
        } else if (satuan > target) {
            for (let l = satuan; l > target; l--) {
                nilai /= 10;
            }
        }
        result += nilai;
    }
    return `${result} ${unitWeight}`;
}

console.log(convertWeight("1 ton +10 ons+2 kwintal", "kg")); //1201 kg

console.log(convertWeight("1 ton +10 ons+2 kwintal", "g")); //1201000 g

console.log(convertWeight("2 ton +500 kwintal+3 kg+350 ons", "kg")); //52038 kg

/*
keterangan :
1 ton = 10 kw = 1000 kg
1 kw = 100 kg
1 kg = 1000 g
1 kg = 10 ons  
1 ons = 1 hg
*/
