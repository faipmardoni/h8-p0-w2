//1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var i = 0;
while (i<20) {
    i+=2;
    console.log(i,'- I love coding');    
}

console.log('LOOPING KEDUA');
var j=20;
while (j>1) {
    console.log(j,'- I will become fullstack developper');
    j-=2;
}
console.log('\n');

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (var k=1; k<=20; k++) {
    console.log(k,' - I love coding');
}

console.log('LOOPING KEDUA');
for (var l=20; l>=1; l--) {
    console.log(l,' - I will become fullstack developper');
}

console.log('\n');

//3. Angka Ganjil dan Genap

for (var m=1; m<=100; m++) {
    if (m % 2 === 0) {
        console.log('\"GENAP\"');
    } else {
        console.log('\"GANJIL\"');
    }
}

for  (var n=1; n<=100; n=n+2) {
    if (n%3==0) {
        console.log('\"'+n,'KELIPATAN 3\"');
    } else {
        console.log('\"\"');
    }
}

for (var o=1; o<=100; o=o+5) {
    if(o%6==0) {
        console.log('\"'+o,'KELIPATAN 6\"');
    } else {
        console.log('\"\"');
    }
}

for (var p=1; p<=100; p=p+9) {
    if(p%10==0) {
        console.log('\"'+p,'KELIPATAN 10\"');
    } else {
        console.log('\"\"');
    }
}
