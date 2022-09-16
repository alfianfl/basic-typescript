interface Iflight{
    flightNo:number
    from:string
    to:string
    display():void
}

// implements dengan interface
class Flight implements Iflight{
    flightNo:number
    from:string
    to:string

    constructor(flightNo:number,from:string,to:string){
        this.flightNo = flightNo
        this.from = from
        this.to = to
    }

    display(){
        console.log(this.flightNo + " " + this.from + " " + this.to);
    }
}

const plane = new Flight(123, "Bandung", "Surabaya")
plane.display()