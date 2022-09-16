class BMW{
    make:string
    model:string
    year:number

    constructor(make:string,model:string, year:number){
        this.make = make
        this.model = model
        this.year = year
    }
    
    commonEngineFunc(){
        console.log("Common func");
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("Stop");
    }


}

class ThreeSeries extends BMW{
    cruisedControlEnabled:boolean

    constructor(make:string,model:string,year:number,cruisedControlEnabled:boolean){
        super(make,model,year)
        this.cruisedControlEnabled=cruisedControlEnabled
    }
}

class FiveSeries extends BMW{
    parkirAssistantEnabled:boolean

    constructor(make:string,model:string,year:number,parkirAssistantEnabled:boolean){
        super(make,model,year)
        this.parkirAssistantEnabled=parkirAssistantEnabled
    }
}

var threeSeries = new ThreeSeries("indonesia", "X1", 2022, true)
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
console.log(threeSeries.cruisedControlEnabled);
threeSeries.commonEngineFunc()
threeSeries.start()
threeSeries.stop()


var fiveSeries = new FiveSeries("indonesia", "X5", 2022, true)

// console.log(fiveSeries.make);
// console.log(fiveSeries.model);
// console.log(fiveSeries.year);
// console.log(fiveSeries.parkirAssistantEnabled);
