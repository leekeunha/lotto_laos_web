import { useParams } from 'react-router-dom';
import Logo from '../../ui/Logo';
import RegisterEmailForm from './RegisterEmailForm';
import RegisterMobileForm from './RegisterMobileForm';
import { EMAIL, MOBILE } from '../../utils/constants';

export default function Register() {
    const { method: selectedMethod } = useParams();
    return (
        <main className="min-h-screen flex flex-col gap-8">
            <div className="flex justify-center">
                <Logo className="h-24" />
            </div>
            {selectedMethod === MOBILE && <RegisterMobileForm />}
            {selectedMethod === EMAIL && <RegisterEmailForm />}
        </main>
    );
}
