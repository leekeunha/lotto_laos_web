import @/models/User;

class UserService{

    private userClient: UserClient;
    
    constructor(){
        this.userClient = new this.UserClient();
    }

    register(firstName:string, lastName: string, email: string):User
    {
        try{
            await response = this.userClient.regiser(firstNam, lastName,email);
        }catch(Exception error){
            // do whatever you need
            throw new error;
        }
        
        user =  new User(response.data.user.id, response.data.user.firstName, response.data.user.lastName);
        return user;
    }

}