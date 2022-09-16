interface Add{
    (x:number, y:number):void
}

interface Sub{
    (x:number, y:number):number
}

//declare dulu
var add:Add;
var sub:Sub;

add = (x:number,y:number):void => {
    console.log(x,y);
}

sub = (x:number,y:number):number => {
    return x+y
}