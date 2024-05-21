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
import ServiceCenter from './pages/ServiceCenter';
// import Join from './pages/Join';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';
import Notice from './pages/Notice';
import Faq from './pages/Faq';
import RegisterMobileOrEmail from './features/authentication/RegisterMobileOrEmail.tsx';
import Join from './pages/Join.tsx';
import RegisterEmail from './features/authentication/RegisterEmail.tsx';
import RegisterMobile from './features/authentication/RegisterMobile.tsx';
import Register from './features/authentication/Register.tsx';

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
                        {/* <Route path="join" element={<Join />} /> */}
                        <Route path="join" element={<Join />} />
                        <Route path="register/:method" element={<Register />} />
                        {/* <Route path="register-email" element={<RegisterEmail />} />
                        <Route path="register-mobile" element={<RegisterMobile />} /> */}
                        <Route path="service-center/faq" element={<Faq />} />
                        <Route path="service-center/notice" element={<Notice />} />
                        <Route
                            path="service-center/terms-of-service"
                            element={<TermsOfService />}
                        />
                        {/* <Route path="register-mobile-Email" element={<RegisterMobileOrEmail />} /> */}
                    </Route>

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
