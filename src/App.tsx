import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import Login from './pages/Login';
import LotteryInformation from './pages/LotteryInformation';
import Result from './pages/Result';
import GiftGame from './pages/GiftGame';
import Store from './pages/Store';
import AboutDlpe from './pages/AboutDlpe';
import ServiceCenter from './pages/ServiceCenter';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';
import Notice from './pages/Notice';
import Faq from './pages/Faq';
import Join from './pages/Join.tsx';
import Register from './features/authentication/Register.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Introduction from './pages/Introduction.tsx';
import Contact from './pages/Contact.tsx';
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
                            //TODO: 로그인 기능 들어가고 나서 주석 해제
                            // <ProtectedRoute>
                            <AppLayout />
                            // </ProtectedRoute>
                        }
                    >
                        <Route index element={<Navigate replace to="home" />}></Route>
                        <Route path="home" element={<Home />}></Route>
                        <Route path="lottery-information" element={<LotteryInformation />}></Route>
                        <Route path="result" element={<Result />} />
                        <Route path="gift-game" element={<GiftGame />} />
                        <Route path="store" element={<Store />} />
                        <Route path="about-dlpe" element={<AboutDlpe />} />
                        <Route path="service-center" element={<ServiceCenter />} />
                        <Route path="login" element={<Login />}></Route>
                        <Route path="join" element={<Join />} />
                        <Route path="register/:method" element={<Register />} />
                        <Route path="service-center/faq" element={<Faq />} />
                        <Route path="service-center/notice" element={<Notice />} />
                        <Route path="about-dlpe/introduction" element={<Introduction />} />
                        <Route path="about-dlpe/contact" element={<Contact />} />
                        <Route
                            path="service-center/terms-of-service"
                            element={<TermsOfService />}
                        />
                    </Route>

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
