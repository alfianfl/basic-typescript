// var student:any = {
//     name: 'alfian',
//     score:100
// }

var student:Array<any> = [{name:"alfian", score:100},{name:"fadhil", score:100}]
for(var item in student){
    console.log(student[item].name);  
}


var {name:nama, score} = student[1];

// disctructurin object
console.log("nama: ", nama, " score: ", score);

