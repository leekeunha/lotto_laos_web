import Logo from '../../ui/Logo';

import RegisterMobileForm from './RegisterMobileForm';

export default function RegisterMobile() {
    return (
        <main className="min-h-screen flex flex-col gap-8">
            {/* <div className="flex justify-center">
                <Logo className="h-24" />
            </div> */}
            <RegisterMobileForm />
        </main>
    );
}
