import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';

function Header() {
    return (
        <header className="py-3 px-20 flex justify-between items-center">
            <Link to="/">
                <Logo className="h-12" />
            </Link>

            <HeaderMenu />
        </header>
    );
}

export default Header;
