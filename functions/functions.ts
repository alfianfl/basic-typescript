var hello = function (name:string):string{
    return "hello " + name
}

function addNumber(num1:number, num2:number):number{
    return num1 + num2
}

function display(id:number, name:string, role?:string){ // "?" agar fungsi bisa menerima parameter kosong
    console.log("id " + id);
    console.log("name " + name);
    if(role !== undefined){
        console.log("role " + role);
    }
}

//callback
function calculation(func:any):void{
    console.log("func", func(10,20)); 
}

//closure
function calculation2():any{
    function substract(num1:number, num2:number):number{
        return num1 + num2
    }

    return substract
}

function display2(id:number, name:string, role:string="normal"){ // "=" aset default value
    console.log("id " + id);
    console.log("name " + name);
    console.log("role " + role);
}

console.log(hello("alfian"));
console.log("sum is " + addNumber(10,20));
display(123, "alfian")
display2(1234, "fadhil")
calculation(addNumber)

const sub = calculation2();
console.log(sub(15,2));




