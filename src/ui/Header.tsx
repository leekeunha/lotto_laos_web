import HeaderMenu from './HeaderMenu';
import Logo from './Logo';

function Header() {
    return (
        <header className="py-3 px-20 border-b border-gray-200 flex justify-between items-center">
            <Logo className="h-12" />
            <HeaderMenu />
        </header>
    );
}

export default Header;
