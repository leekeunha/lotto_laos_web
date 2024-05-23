import NoticeClient from '../httpClient/FakeNoticeClient';

export class NoticeService {
    private apiClient: NoticeClient;

    constructor(apiClient: NoticeClient) {
        this.apiClient = apiClient;
    }

    async search({ keyword, page }) {
        console.log('ServiceCenterService keyword:', keyword);
        console.log('ServiceCenterService page:', page);

        return this.apiClient.search({ keyword, page }).then((res) => {
            console.log('res', res);
            return res;
        });
    }

    // async join(email: string, password: string): Promise<User> {
    //     try {
    //         const response: UserApiResponse = await this.apiClient.join({
    //             email,
    //             password,
    //         });
    //         const user: User = new User(
    //             response.data.user.id,
    //             response.data.user.email ?? '',
    //             response.data.user.firstName ?? '',
    //             response.data.user.lastName ?? '',
    //         );
    //         return user;
    //     } catch (error) {
    //         throw new Error('');
    //     }
    // }

    // async login(email: string, password: string): Promise<string> {
    //     try {
    //         const response: LoginResponse = await this.apiClient.login({
    //             email,
    //             password,
    //         });

    //         return response.data.token;
    //     } catch (error) {
    //         throw new Error('');
    //     }
    // }

    // async logout() {
    //     try {
    //         return this.apiClient.logout();
    //     } catch (error) {
    //         throw new Error('');
    //     }
    // }
}
