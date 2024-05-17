import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from './ui/ProtectedRoute';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import Login from './pages/Login';
import LotteryInformation from './pages/LotteryInformation';
import Result from './pages/Result';
import GiftGame from './pages/GiftGame';
import Store from './pages/Store';
import AboutDlpe from './pages/AboutDlpe';
import Join from './pages/Join';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route
                        element={
                            // <ProtectedRoute>
                            <AppLayout />
                            // </ProtectedRoute>
                        }
                    >
                        <Route index element={<Navigate replace to="lottery-information" />} />
                        <Route path="lottery-information" element={<LotteryInformation />}></Route>
                        <Route path="result" element={<Result />} />
                        <Route path="gift-game" element={<GiftGame />} />
                        <Route path="store" element={<Store />} />
                        <Route path="about-dlpe" element={<AboutDlpe />} />
                        <Route path="login" element={<Login />}></Route>
                        <Route path="join" element={<Join />} />
                    </Route>

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
