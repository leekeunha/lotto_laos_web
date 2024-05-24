import { Outlet } from 'react-router-dom';
import Header from './Header';
import Topbar from './Topbar';
import Footer from './Footer';

function AppLayout() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <hr className="border-gray-400" />
            <Topbar />
            <hr className="border-blue-400" />
            <main className="overflow-auto">
                <div className="flex flex-col gap-8 items-center">
                    <Outlet />
                </div>
            </main>
            <hr className="border-blue-400 my-10" />
            <Footer />
        </div>
    );
}

export default AppLayout;
