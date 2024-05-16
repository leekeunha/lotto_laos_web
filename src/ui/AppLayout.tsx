import { Outlet } from 'react-router-dom';
import Header from './Header';
import Topbar from './Topbar';

// import Sidebar from './Sidebar';

function AppLayout() {
    return (
        <div className="grid grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
            <Header />
            <Topbar />
            <main className="bg-gray-50 p-16 overflow-auto">
                <div className="max-w-screen-2xl mx-auto flex flex-col gap-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AppLayout;
