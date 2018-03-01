var rows1=5;
var star1 ='';
for (var i=rows1; rows1>=1; rows1--) {
    star1+='* \n';
}
console.log(star1);

var rows2 = 5;
var star2 = '';
for (var j=0; j<rows2; j++) {
    for (var k=0; k<rows2; k++) {
        star2+='*';
    }
    star2+='\n'
}
console.log(star2);

var rows3 = '5';
var star3 = '';
for (var l=1; l<=rows3; l++) {
    for (var m=1; m<=l; m++) {
        star3+='*';
    }
    star3+='\n';
}
console.log(star3);
