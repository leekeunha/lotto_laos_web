export type JoinParams = {
    email: string;
    password: string;
};

export type LoginParams = {
    email: string;
    password: string;
};

export interface Notice {
    no: string;
    title: string;
    date: string;
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface NoticeResponse {
    kind: string;
    etag: string;
    items: Notice[];
    pageInfo: PageInfo;
    nextPageToken?: string;
}
