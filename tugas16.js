var numb = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10];

function min(x) {
    var min = Math.min.apply(Math, x);
    return min;
}

function max(x) {
    var max = Math.max.apply(Math, x);
    return max;
}   

function cetak(x) {
    console.log("Urutan angka   : " + x.toString());
    console.log("Nilai minimal  : " + min(x));
    console.log("Nilai maksimal : " + max(x));
}

cetak(numb);