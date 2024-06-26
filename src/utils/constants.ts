// 모든 환경변수를 이 파일에 맵핑 => 응급시 서버에서 constants.ts 파일만 실시간으로 변경해서 fix 가능
// export const USER_API_CLIENT_URL = process.env.USER_API_CLIENT_URL;
export const USER_API_CLIENT_URL = import.meta.env.VITE_USER_API_CLIENT_URL;
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
export const MOBILE = 'mobile';
export const EMAIL = 'email';
export const SEARCH_STORE_TABLE_HEAD = ['Distributer', 'Tel', 'Location', 'Map'];
export const TABLE_HEAD = ['No', 'Title', 'DATE'];
export const PAGE_SIZE = 10;
