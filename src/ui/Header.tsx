import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';

function Header() {
    return (
        <header className="py-3 flex justify-between px-52">
            <Link to="/">
                <Logo className="h-12" />
            </Link>

            <div className="flex justify-end items-center">
                <HeaderMenu />
                <img className="ml-5 h-10" src="/images/lao_lottery.png" alt="Logo" />
            </div>
        </header>
    );
}

export default Header;
