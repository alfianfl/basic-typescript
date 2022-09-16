// var student:any = {
//     name: 'alfian',
//     score:100
// }
var student = [{ name: "alfian", score: 100 }, { name: "fadhil", score: 100 }];
for (var item in student) {
    console.log(student[item].name);
}
var _a = student[1], nama = _a.name, score = _a.score;
// disctructurin object
console.log("nama: ", nama, " score: ", score);
