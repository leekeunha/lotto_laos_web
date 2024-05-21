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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DlpeIntroduction from './pages/DlpeIntroduction.tsx';
import SearchStore from './pages/SearchStore.tsx';
import HappyBall5m from './pages/HappyBall5m.tsx';
import HappyBall3m from './pages/HappyBall3m.tsx';
import GoldDigger from './pages/GoldDigger.tsx';
import ExchangeGift from './pages/ExchangeGift.tsx';
import GiftRanking from './pages/GiftRanking.tsx';
import JackpotNumbers from './pages/JackpotNumbers.tsx';
import PrizePayment from './pages/PrizePayment.tsx';
import DrawVideo from './pages/DrawVideo.tsx';
import WinnersInterview from './pages/WinnersInterview.tsx';
import UnclaimedWinnings from './pages/UnclaimedWinnings.tsx';
import Happy545Introduction from './pages/Happy545Introduction.tsx';
import HowToPlay from './pages/HowToPlay.tsx';

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
                        <Route path="service-center/faq" element={<Faq />} />
                        <Route path="service-center/notice" element={<Notice />} />
                        <Route path="about-dlpe/introduction" element={<DlpeIntroduction />} />
                        <Route path="store/search-store" element={<SearchStore />} />
                        <Route path="gift-game/happy-ball-5m" element={<HappyBall5m />} />
                        <Route path="gift-game/happy-ball-3m" element={<HappyBall3m />} />
                        <Route path="gift-game/gold-digger" element={<GoldDigger />} />
                        <Route path="gift-game/gift-ranking" element={<GiftRanking />} />
                        <Route path="gift-game/exchange-gift" element={<ExchangeGift />} />
                        <Route path="result/jackpot-numbers" element={<JackpotNumbers />} />
                        <Route path="result/prize-payment" element={<PrizePayment />} />
                        <Route path="result/draw-video" element={<DrawVideo />} />
                        <Route path="result/winners-interview" element={<WinnersInterview />} />
                        <Route path="result/unclaimed-winnings" element={<UnclaimedWinnings />} />
                        <Route
                            path="lottery-information/introduction"
                            element={<Happy545Introduction />}
                        />
                        <Route path="lottery-information/how-to-play" element={<HowToPlay />} />
                        <Route
                            path="service-center/terms-of-service"
                            element={<TermsOfService />}
                        />
                    </Route>

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
