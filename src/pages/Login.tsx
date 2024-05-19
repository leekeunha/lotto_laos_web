import LoginForm from '../features/authentication/LoginForm';
import Logo from '../ui/Logo';

export default function Login() {
    return (
        <main className="min-h-screen flex flex-col gap-8">
            <div className="flex justify-center">
                {{props.firstName}}
                {{props.lastName}}
                <Logo className="h-24" />
            </div>
            {/* <div className="text-5xl font-semibold text-center leading-normal">
                Log in to your account
            </div> */}
            <LoginForm />
        </main>
    );


    function regiser(){
        let firstName = props.firstName;
        let lastName = props.lastname;

        let userService = new UserService();
        let user: User = userService.register(firstName, lastName);
        
        props.firstName = user.firstName;

        
    }
}
