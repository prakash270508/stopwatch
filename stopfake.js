let data1 = [1, 2, 3];
let data2 = [4, 5, 6];
let data3 = [];
// let d1 = 0;
// let d2 = 0;
// let d3 = 0;

for (let i = 0; i < data1.length; i++) {
    data3[i] = data1[i]
}
for (let i = 0; i < data2.length; i++) {
    data3[data1.length + i] = data2[i]

}
data3.reverse()
data3.toString()
console.log(data3)
