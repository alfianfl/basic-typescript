class Passenger{
    firstName:string
    lastName:string
    flyNo:number

    constructor(firstName:string, lastName:string, flyNo:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.flyNo = flyNo;
    }

    display(){
        console.log(passenger1.firstName + " " + passenger1.lastName + " " + passenger1.flyNo);
    }
}

var passenger1 = new Passenger("alfian", "fadhila", 123)

passenger1.display()

for(let item in passenger1){
    if(passenger1[item] instanceof Function){
        continue;
    } else{
        console.log(item);
        console.log(passenger1[item]);
    }
}


