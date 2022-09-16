//index number
interface studentName{
    [index:number]:number
}

var studentNames:studentName = [1,2,3]

//index string
interface studentScore{
    [index:string]:number
}

var studentScores:studentScore = {}

studentScores["jhon"] = 100
studentScores["boy"] = 90

for (var item in studentScores){
    console.log(item);
    console.log(studentScores[item]);

}
