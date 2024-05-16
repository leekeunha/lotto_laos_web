import NavItem from './NavItem';

export default function MainNav() {
    return (
        <nav>
            <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
                <NavItem label="Lottery information" to="/lottery-information" />
                <NavItem label="Result" to="/result" />
                <NavItem label="Gift Game" to="/gift-game" />
                <NavItem label="Store" to="store" />
                <NavItem label="About DLPE" to="about-dlpe" />
            </ul>
        </nav>
    );
}
