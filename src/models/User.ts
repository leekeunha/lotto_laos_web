class User{
    private firstName: string;
    private lastName: string;
    private id: Number;

    constructor(id:number, firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;        
    }

    getFullName(){
        return this this.firstName + " " + this.lastName;
    }
}
