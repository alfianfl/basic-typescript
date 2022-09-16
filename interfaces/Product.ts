interface Product{
    id:number,
    name:string,
    description:string,
    price?:number,
    display():void
} //keyword "?" agar props optional

var product1:Product = {
    id:123,
    name:"alfian",
    description:"alfian fadhil",
    price:12000000,
    display(){
        console.log("test");  
    }
}

var product2:Product = {
    id:124,
    name:"alfian2",
    description:"alfian fadhil2",
    display(){
        console.log("test");
    }
}