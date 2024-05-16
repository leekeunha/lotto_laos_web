import { Outlet } from 'react-router-dom';
import Header from './Header';
import Topbar from './Topbar';

// import Sidebar from './Sidebar';

function AppLayout() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
            <Topbar />
            <main className=" p-16 overflow-auto">
                <div className="max-w-screen-2xl mx-auto flex flex-col gap-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AppLayout;
