import HeaderMenu from './HeaderMenu';
import Logo from './Logo';

function Header() {
    return (
        <header className="bg-gray-50 py-3 px-20 border-b border-gray-200 flex justify-between items-center">
            <Logo />
            <HeaderMenu />
        </header>
    );
}

export default Header;
