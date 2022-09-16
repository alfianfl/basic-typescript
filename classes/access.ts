class Student{
    private _name:string;

    get getData():string{
        return this._name
    }

    set setData(name:string){
        this._name = name
    }
}


const student = new Student();

student.setData = "alfian"

console.log(student.getData);
