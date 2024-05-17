import NavItem from './NavItem';

export default function MainNav() {
    return (
        <nav>
            <ul className="mb-4 mt-4 flex flex-row items-center gap-8">
                <NavItem label="Lottery information" to="/lottery-information" />
                <NavItem label="Result" to="/result" />
                <NavItem label="Gift Game" to="/gift-game" />
                <NavItem label="Store" to="store" />
                <NavItem label="About DLPE" to="about-dlpe" />
                <NavItem label="Service center" to="service-center" />
            </ul>
        </nav>
    );
}
