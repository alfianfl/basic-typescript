var factorial = function (x:number, y:number,...numbs:Array<number>){ // ...rest params (numbs) digunakan sebagai parameter terkahir
 var result =1

 for(let i = 0; i<numbs.length;i++){
    result *= numbs[i]
 }

 return result

}

console.log(factorial(1,2,7,5));
