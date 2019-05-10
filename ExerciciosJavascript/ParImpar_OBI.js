0 0 0
1 0 1
0 1 1
1 1 0

var P, D_1, D_2;
P = parseInt(prompt());
D_1 = parseInt(prompt());
D_2 = parseInt(prompt());
if (P == 0 && (D_1+D_2)%2 == 0) {
    alert('0');
} else if (P == 1 && (D_1+D_2)%2 == 0) {
    alert('1');
} else if (P == 0 && (D_1+D_2)%2 == 1) {
    alert('1');
} else if (P == 1 && (D_1+D_2)%2 == 1) {
    alert('0');
}

/*
var p, d_1, d_2, temp;
p = parseInt(prompt("p"));
d_1 = parseInt(prompt("d1"));
d_2 = parseInt(prompt("d2"));

if (p===0 && (d_1+d_2)%2===0) {
    alert("0");
} else if (p===0 && (d_1+d_2)%2===1) {
    alert("1");
} 
if (p==1 && (d_1+d_2)%2===0) {
    alert("1");
} else if (p==1 && (d_1+d_2)%2===1) {
    alert("0");
}
console.log(p);
console.log(d_1);
console.log(d_2);
console.log(d_1+d_2);
*/
