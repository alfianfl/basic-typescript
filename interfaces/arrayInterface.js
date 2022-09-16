var studentNames = [1, 2, 3];
var studentScores = {};
studentScores["jhon"] = 100;
studentScores["boy"] = 90;
for (var item in studentScores) {
    console.log(item);
    console.log(studentScores[item]);
}
