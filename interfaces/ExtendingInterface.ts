interface Interior{
    seat:number,
    auto:boolean
}

interface Exterior{
    numbOfDoor:number,
    color:String
}

interface Car extends Exterior, Interior{
    make:string,
    model:string,
    year:number
}

var car1:Car = {
    make:"toyota",
    model:"suv",
    year:2021,
    seat:4,
    auto:true,
    numbOfDoor:4,
    color:"red"
}